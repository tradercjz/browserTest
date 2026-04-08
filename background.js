// background.js

let controlledTabs = new Map(); // tabId -> { title, url }
let currentGroupId = null;
const GROUP_TITLE = "DolphinMind Workspace";
const GROUP_COLOR = "blue";
const API_URL = 'http://localhost:8007';

async function getAuthToken() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['authToken'], (result) => resolve(result.authToken || null));
  });
}

async function setAuthState(token, user) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ authToken: token || null, authUser: user || null }, resolve);
  });
}

function parseSiteAuthPayload(rawAuth) {
  try {
    const parsed = typeof rawAuth === 'string' ? JSON.parse(rawAuth) : rawAuth;
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }

    const token = parsed.token || parsed.accessToken || parsed.access_token || parsed.data?.token || null;
    const user = parsed.user || parsed.data?.user || parsed.profile || null;
    if (!token) {
      return null;
    }

    return { token, user };
  } catch (err) {
    console.warn(`[Background] Failed to parse site auth payload:`, err.message);
    return null;
  }
}

async function bindClientToBackendUser(clientId) {
  const token = await getAuthToken();
  if (!token || !clientId) {
    return false;
  }

  try {
    const response = await fetch(`${API_URL}/api/v1/user/sandbox/bind-client`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ client_id: clientId }),
    });

    if (!response.ok) {
      console.warn(`[Background] bind-client failed: HTTP ${response.status}`);
      return false;
    }

    const data = await response.json();
    console.log(`[Background] bind-client success: clientId=${data.client_id}, user_id=${data.user_id}`);
    return true;
  } catch (err) {
    console.warn(`[Background] bind-client request failed:`, err.message);
    return false;
  }
}

// --- 辅助函数：清除页面上的 AI 遮罩和横幅 ---
async function removeOverlay(tabId) {
  if (!tabId) return;
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const overlay = document.getElementById("dolphinmind-ai-overlay");
        const banner = document.getElementById("dolphinmind-ai-banner");
        const styles = document.getElementById("dolphinmind-styles");
        if (overlay) overlay.remove();
        if (banner) banner.remove();
        if (styles) styles.remove();
      }
    });
  } catch (err) {
    // 忽略 tab 已关闭的情况
  }
}

// --- 辅助函数：确保标签页在指定的标签组内 ---
async function ensureInGroup(tabId) {
  try {
    if (currentGroupId) {
      // 检查组是否还存在
      try {
        await chrome.tabGroups.get(currentGroupId);
      } catch (e) {
        currentGroupId = null;
      }
    }

    if (!currentGroupId) {
      currentGroupId = await chrome.tabs.group({ tabIds: tabId });
      await chrome.tabGroups.update(currentGroupId, { title: GROUP_TITLE, color: GROUP_COLOR });
    } else {
      await chrome.tabs.group({ groupId: currentGroupId, tabIds: tabId });
    }
  } catch (err) {
    console.error("Failed to manage tab group:", err);
  }
}

// --- 辅助函数：通知后端最新的接管状态 ---
function notifyBackend(status, tabId = null, title = "", url = "") {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: "NOTIFICATION",
      action: status, // "ATTACHED" or "DETACHED"
      tabId: tabId,
      title: title,
      url: url,
      timestamp: Date.now()
    }));
  }
}

// --- 辅助函数：接管新的页签 ---
async function attachTab(tabId) {
  if (controlledTabs.has(tabId)) return;

  try {
    await chrome.debugger.attach({ tabId: tabId }, "1.3");
    await chrome.debugger.sendCommand({ tabId: tabId }, "Page.enable");
    await ensureInGroup(tabId);

    const tab = await chrome.tabs.get(tabId);
    controlledTabs.set(tabId, { title: tab.title, url: tab.url });
    console.log(`✅ Tab ${tabId} added to controlledTabs registry.`);
    notifyBackend("ATTACHED", tabId, tab.title, tab.url);

    // 注入遮罩 UI
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["overlay.js"]
    }).catch(err => console.error(`Failed to inject overlay into ${tabId}:`, err));

  } catch (err) {
    console.error(`Failed to attach to tab ${tabId}:`, err);
    throw err;
  }
}

// --- 辅助函数：释放页签 ---
async function detachTab(tabId) {
  if (!tabId) return;

  // 无论是否在 controlledTabs 中，都尝试通知后端并清理 Map（防止由于类型不匹配导致的遗留）
  const idToRemove = typeof tabId === 'string' ? parseInt(tabId) : tabId;

  console.log(`🔌 Attempting to detach tab: ${idToRemove}`);

  if (controlledTabs.has(idToRemove)) {
    controlledTabs.delete(idToRemove);
    notifyBackend("DETACHED", idToRemove);
  }

  try {
    // 异步执行清理 UI，不阻塞后续 detach
    removeOverlay(idToRemove).catch(e => console.error("removeOverlay failed", e));

    // 执行真正的断开操作
    await chrome.debugger.detach({ tabId: idToRemove });
    console.log(`✅ Successfully detached from ${idToRemove}`);
  } catch (e) {
    // 忽略找不到、已关闭、或者本来就没挂载的情况
    console.log(`⚠️ Detach info for ${idToRemove}: ${e.message}`);
  }
}

// --- 辅助函数：自动切换焦点 (用于单目标指令兼容) ---
function getPrimaryTabId() {
  if (controlledTabs.size === 0) return null;
  // 返回最近添加的那个（Map 保持插入顺序）或者当前处于 active 的受控页
  return Array.from(controlledTabs.keys()).pop();
}

// 接收外部网页的消息 (如 controller.html)
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  handleRequest(request)
    .then(data => sendResponse({ status: "success", data }))
    .catch(err => sendResponse({ status: "error", message: err.message }));
  return true;
});

// --- Unified Message Listener ---
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'SYNC_CLIENT_ID' && message.clientId) {
    (async () => {
      const currentId = await getClientId();
      if (currentId !== message.clientId) {
        chrome.storage.local.set({ clientId: message.clientId }, () => {
          if (ws) { try { ws.close(); } catch {} ws = null; }
          connectBackend();
          sendResponse({ status: "success", clientId: message.clientId, reconnecting: true });
        });
      } else {
        sendResponse({ status: "success", clientId: currentId, reconnecting: false });
      }
    })();
    return true;
  }

  if (message.action === 'SYNC_SITE_AUTH') {
    (async () => {
      const auth = parseSiteAuthPayload(message.rawAuth);
      if (!auth) {
        console.warn(`[Background] SYNC_SITE_AUTH: missing valid token in site auth payload`);
        sendResponse({ status: 'error', message: 'invalid auth payload' });
        return;
      }

      await setAuthState(auth.token, auth.user);
      console.log(`[Background] SYNC_SITE_AUTH: auth synced from site, hasUser=${Boolean(auth.user)}`);

      const clientId = await getClientId();
      await bindClientToBackendUser(clientId);
      sendResponse({ status: 'success', synced: true, hasUser: Boolean(auth.user) });
    })().catch((err) => {
      console.warn(`[Background] SYNC_SITE_AUTH failed:`, err.message);
      sendResponse({ status: 'error', message: err.message });
    });
    return true;
  }

  if (message.action === 'SYNC_SANDBOX_CONFIG') {
    (async () => {
      const { host, port, user, pass } = message;
      console.log(`[Background] SYNC_SANDBOX_CONFIG: ${host}:${port}`);
      const ddbConfig = { host, port: parseInt(port), user, pass };
      await new Promise(resolve => {
        chrome.storage.local.set({ ddbConfig }, resolve);
      });
      const st = globalThis.__ddb ? globalThis.__ddb.status() : null;
      if (!st || !st.connected) {
        try {
          await globalThis.__ddb.connect(host, parseInt(port), user, pass);
          if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: "NOTIFICATION", action: "DDB_STATUS", connected: true, host, port: parseInt(port) }));
          }
          sendResponse({ status: "success", connected: true });
        } catch (err) {
          sendResponse({ status: "error", message: err.message });
        }
      } else {
        sendResponse({ status: "success", alreadyConnected: true });
      }
    })();
    return true;
  }

  // 2. Default: Route to handleRequest
  handleRequest(message)
    .then(data => sendResponse({ status: "success", data }))
    .catch(err => sendResponse({ status: "error", message: err.message }));
  return true;
});

// --- DolphinDB: use official JS API via bundled ESM module ---
import './dist/ddb-bundle.js';

async function handleRequest(request) {
  // These are handled by dedicated onMessage listeners, skip here
  if (request.action === 'SYNC_CLIENT_ID' || request.action === 'SYNC_SANDBOX_CONFIG' || request.action === 'SYNC_SITE_AUTH') return { skipped: true };

  if (request.action !== 'GET_STATUS' && request.action !== 'PING' && request.action !== 'PONG') {
    console.log(`[Background] handleRequest: action=${request.action}`, request.tabId ? `tabId=${request.tabId}` : '');
  }

  // --- DolphinDB actions (via official JS API) ---
  if (request.action === "DDB_CONNECT") {
    const { host, port, user, pass } = request;
    try {
      await globalThis.__ddb.connect(host, parseInt(port), user, pass);
      // Notify backend that sandbox is connected
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "NOTIFICATION", action: "DDB_STATUS", connected: true, host, port: parseInt(port) }));
        console.log(`[Background] DDB_CONNECT: sent DDB_STATUS notification (connected=true, ${host}:${port})`);
      } else {
        console.warn(`[Background] DDB_CONNECT: WebSocket not open, cannot notify backend`);
      }
      return { connected: true, message: 'Connected via WebSocket' };
    } catch (err) {
      throw new Error('连接失败: ' + err.message);
    }
  }

  if (request.action === "DDB_EXECUTE") {
    console.log(`[Background] DDB_EXECUTE: script_len=${request.script?.length}, id=${request.id}`);
    console.log(`[Background] DDB_EXECUTE script preview:`, request.script?.substring(0, 200));

    const MAX_RETRIES = 2;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const rawResult = await globalThis.__ddb.execute(request.script);
        // DdbObj → structured JSON for rich rendering
        let result;

        // Helper: safely convert a value to string (handles BigInt, typed arrays, etc.)
        function safeStr(v) {
          if (v === null || v === undefined) return '';
          if (typeof v === 'bigint') return v.toString();
          return String(v);
        }

        // Helper: convert array-like (TypedArray, Array, BigInt64Array) to string array
        function toStringArray(arr, maxLen = 1000) {
          if (!arr) return [];
          const len = Math.min(arr.length || 0, maxLen);
          const out = [];
          for (let i = 0; i < len; i++) {
            out.push(safeStr(arr[i]));
          }
          return out;
        }

        if (rawResult === null || rawResult === undefined) {
          result = { _type: 'void', value: '(void)' };
        } else if (typeof rawResult === 'object' && rawResult.form !== undefined) {
          // DdbObj: check form to determine type
          // form: 0=scalar, 1=vector, 2=pair, 3=matrix, 4=set, 5=dict, 6=table
          const form = rawResult.form;
          if (form === 6 && rawResult.value) {
            // Table: rawResult.value is array of DdbObj columns
            try {
              const columns = rawResult.value;
              const colNames = [];
              for (let c = 0; c < columns.length; c++) {
                colNames.push(columns[c].name || `col${c}`);
              }
              // Get row count from first column's value length
              const firstColVal = columns[0]?.value;
              const rowCount = firstColVal ? (firstColVal.length || 0) : 0;
              const maxRows = Math.min(rowCount, 1000);
              const rows = [];
              for (let r = 0; r < maxRows; r++) {
                const row = {};
                for (let c = 0; c < columns.length; c++) {
                  row[colNames[c]] = safeStr(columns[c].value?.[r]);
                }
                rows.push(row);
              }
              result = { _type: 'table', columns: colNames, rows, totalRows: rowCount };
            } catch (e) {
              console.error('[Background] Table parsing failed:', e);
              result = { _type: 'text', value: safeStr(rawResult) };
            }
          } else if ((form === 1 || form === 4) && rawResult.value) {
            // Vector (form=1) or Set (form=4)
            const totalLength = rawResult.value.length || 0;
            const arr = toStringArray(rawResult.value, 1000);
            result = { _type: 'vector', value: arr, totalLength };
          } else if (form === 2 && rawResult.value) {
            // Pair
            const arr = toStringArray(rawResult.value, 2);
            result = { _type: 'vector', value: arr, totalLength: 2 };
          } else if (form === 5 && rawResult.value) {
            // Dict: value is [keys_vector, values_vector]
            try {
              const keys = rawResult.value[0]?.value;
              const vals = rawResult.value[1]?.value;
              if (keys && vals) {
                const columns = ['key', 'value'];
                const totalRows = keys.length || 0;
                const maxRows = Math.min(totalRows, 1000);
                const rows = [];
                for (let r = 0; r < maxRows; r++) {
                  rows.push({ key: safeStr(keys[r]), value: safeStr(vals[r]) });
                }
                result = { _type: 'table', columns, rows, totalRows };
              } else {
                result = { _type: 'text', value: safeStr(rawResult.value) };
              }
            } catch (e) {
              result = { _type: 'text', value: safeStr(rawResult.value) };
            }
          } else if (form === 3 && rawResult.value) {
            // Matrix: render as table with row/col indices
            try {
              const data = rawResult.value;
              const mRows = rawResult.rows || 0;
              const mCols = rawResult.columns || 0;
              const columns = [];
              for (let c = 0; c < mCols; c++) columns.push(`C${c}`);
              const rows = [];
              const maxRows = Math.min(mRows, 500);
              for (let r = 0; r < maxRows; r++) {
                const row = {};
                for (let c = 0; c < mCols; c++) {
                  row[`C${c}`] = safeStr(data[c * mRows + r]);
                }
                rows.push(row);
              }
              result = { _type: 'table', columns, rows, totalRows: mRows };
            } catch (e) {
              result = { _type: 'text', value: safeStr(rawResult.value) };
            }
          } else if (form === 0) {
            // Scalar
            const v = rawResult.value;
            // DdbType.void = 0
            if (rawResult.type === 0 || v === undefined || v === null) {
              result = { _type: 'void', value: '(void)' };
            } else {
              result = { _type: 'scalar', value: safeStr(v) };
            }
          } else {
            // Other forms: stringify safely
            result = { _type: 'text', value: safeStr(rawResult.value !== undefined ? rawResult.value : rawResult) };
          }
        } else if (typeof rawResult === 'string') {
          // Already formatted string (legacy fallback)
          result = { _type: 'text', value: rawResult };
        } else if (typeof rawResult === 'object' && rawResult.value !== undefined) {
          result = { _type: 'text', value: safeStr(rawResult.value) };
        } else {
          result = { _type: 'text', value: safeStr(rawResult) };
        }
        // Final safety: ensure result is JSON-serializable (handles BigInt in nested objects)
        try {
          JSON.stringify(result);
        } catch (_) {
          result = { _type: 'text', value: safeStr(result) };
        }
        console.log(`[Background] DDB_EXECUTE success (attempt ${attempt}): _type=${result._type}, preview=`, JSON.stringify(result)?.substring(0, 300));
        return { result };
      } catch (err) {
        const errorMsg = String(err.message || err);
        console.error(`[Background] DDB_EXECUTE failed (attempt ${attempt}/${MAX_RETRIES}):`, errorMsg);
        
        // --- 重点修复：如果是语法错误，说明代码有问题，不需要重连或重试 ---
        if (errorMsg.includes('Syntax Error') || errorMsg.includes('Can\'t recognize')) {
           console.log(`[Background] DDB_EXECUTE: Detected syntax error, skipping retries.`);
           throw err;
        }

        // If connection lost and we have retries left, try to auto-reconnect
        if (attempt < MAX_RETRIES && globalThis.__ddb) {
          console.log(`[Background] DDB_EXECUTE: attempting auto-reconnect...`);
          try {
            await globalThis.__ddb.autoRestore();
            const st = globalThis.__ddb.status();
            if (st && st.connected) {
              console.log(`[Background] DDB_EXECUTE: reconnected, retrying...`);
              // Notify backend of restored status
              if (ws && ws.readyState === WebSocket.OPEN) {
                const cfg = st.config || {};
                ws.send(JSON.stringify({
                  type: "NOTIFICATION", action: "DDB_STATUS",
                  connected: true, host: cfg.host || '', port: cfg.port || 0,
                }));
              }
              continue; // retry the execute
            }
          } catch (reconnErr) {
            console.error(`[Background] DDB_EXECUTE: auto-reconnect failed:`, reconnErr.message);
          }
        }
        throw err;
      }
    }
  }

  if (request.action === "DDB_CALL") {
    try {
      const rawResult = await globalThis.__ddb.call(request.funcName, request.args || []);
      let result;
      
      function safeStr(v) {
        if (v === null || v === undefined) return '';
        if (typeof v === 'bigint') return v.toString();
        return String(v);
      }

      function toStringArray(arr, maxLen = 1000) {
        if (!arr) return [];
        const len = Math.min(arr.length || 0, maxLen);
        const out = [];
        for (let i = 0; i < len; i++) {
          out.push(safeStr(arr[i]));
        }
        return out;
      }
      
      if (rawResult && typeof rawResult === 'object' && rawResult.form !== undefined) {
        const form = rawResult.form;
        if (form === 6 && rawResult.value) {
          const columns = rawResult.value;
          const colNames = [];
          for (let c = 0; c < columns.length; c++) colNames.push(columns[c].name || `col${c}`);
          const rowCount = columns[0]?.value?.length || 0;
          const rows = [];
          for (let r = 0; r < rowCount; r++) {
            const row = {};
            for (let c = 0; c < columns.length; c++) row[colNames[c]] = safeStr(columns[c].value?.[r]);
            rows.push(row);
          }
          result = { _type: 'table', columns: colNames, rows, totalRows: rowCount };
        } else if ((form === 1 || form === 4) && rawResult.value) {
          const totalLength = rawResult.value.length || 0;
          result = { _type: 'vector', value: toStringArray(rawResult.value, 1000), totalLength };
        } else if (form === 5 && rawResult.value) {
          try {
            const keys = rawResult.value[0]?.value;
            const vals = rawResult.value[1]?.value;
            if (keys && vals) {
              const totalRows = keys.length || 0;
              const rows = [];
              for (let r = 0; r < Math.min(totalRows, 1000); r++) rows.push({ key: safeStr(keys[r]), value: safeStr(vals[r]) });
              result = { _type: 'table', columns: ['key', 'value'], rows, totalRows };
            } else {
              result = { _type: 'text', value: safeStr(rawResult.value) };
            }
          } catch (e) {
            result = { _type: 'text', value: safeStr(rawResult.value) };
          }
        } else if (form === 0) {
          const v = rawResult.value;
          if (rawResult.type === 0 || v === undefined || v === null) {
            result = { _type: 'void', value: '(void)' };
          } else {
            result = { _type: 'scalar', value: safeStr(v) };
          }
        } else {
          result = rawResult;
        }
      } else {
        result = rawResult;
      }
      return { result };
    } catch (err) {
      throw err;
    }
  }

  if (request.action === "DDB_DISCONNECT") {
    const result = globalThis.__ddb.disconnect();
    // Notify backend that sandbox is disconnected
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "NOTIFICATION", action: "DDB_STATUS", connected: false, host: "", port: 0 }));
    }
    return result;
  }

  if (request.action === "DDB_STATUS") {
    return globalThis.__ddb.status();
  }

  if (request.action === "OPEN_AND_ATTACH") {
    const tab = await chrome.tabs.create({ url: request.url, active: true });
    await attachTab(tab.id);
    return tab.id;
  }

  if (request.action === "ATTACH_CURRENT_TAB") {
    const targetId = request.tabId || (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id;
    await attachTab(targetId);
    return targetId;
  }

  if (request.action === "TAKE_OVER") {
    console.log("📥 Received TAKE_OVER request", request);
    // 如果指定了 tabId 则只释放该页，否则释放所有
    if (request.tabId) {
      const targetId = parseInt(request.tabId);
      console.log(`🔌 Detaching specific tab: ${targetId}`);
      await detachTab(targetId);
    } else {
      console.log(`🔌 Detaching ALL controlled tabs. Count: ${controlledTabs.size}`);
      const ids = Array.from(controlledTabs.keys());
      for (const id of ids) {
        await detachTab(id);
      }

      // 额外安全检查：如果 Map 为空但用户想“结束”，可能存在僵尸连接
      if (ids.length === 0) {
        console.log("⚠️ No tabs in Map, but attempting to detach current active tab for safety.");
        const [activeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        if (activeTab) await detachTab(activeTab.id);
      }
    }
    return "detached";
  }

  if (request.action === "GET_STATUS") {
    // 确保 tabId 是数字
    const queryTabId = request.tabId ? parseInt(request.tabId) : null;
    const isControlled = queryTabId ? controlledTabs.has(queryTabId) : false;

    return {
      controlledTabs: Array.from(controlledTabs.entries()),
      isControlled: isControlled
    };
  }

  // 决定目标 Tab
  const targetTabId = request.tabId ? parseInt(request.tabId) : getPrimaryTabId();

  if (!targetTabId || !controlledTabs.has(targetTabId)) {
    throw new Error("找不到目标页签或该页签未受控");
  }

  const target = { tabId: targetTabId };

  switch (request.action) {
    case "CLICK":
      return await performClick(target, request.x, request.y);

    case "SCROLL":
      return await performScroll(target, request.deltaY);

    case "TYPE":
      return await performType(target, request.text);

    case "SCREENSHOT":
      return await performScreenshot(target);

    case "EXECUTE_SCRIPT":
      return await performExecute(target, request.script);

    default:
      throw new Error("未知指令: " + request.action);
  }
}

// --- 功能实现区 ---

// No-op to remove old implementation

async function performClick(target, x, y) {
  const opts = { x: Math.floor(x), y: Math.floor(y), button: "left", clickCount: 1 };
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", { type: "mousePressed", ...opts });
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", { type: "mouseReleased", ...opts });
}

// 滚动功能
async function performScroll(target, deltaY) {
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
    type: "mouseWheel",
    x: 300, y: 300, // 将坐标放在视口中央偏上，防止 (0,0) 获取不到滚动目标
    deltaX: 0,
    deltaY: deltaY // 正值向下滚，负值向上滚
  });
}

// 打字功能 (增强版：支持 Monaco Editor)
async function performType(target, text) {
  const tabId = target.tabId;

  // 1. 尝试检测是否是 Monaco Editor 并在 Main World 执行注入
  try {
    const isMonaco = await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: (text) => {
        // 这里的逻辑在页面上下文运行
        const activeEl = document.activeElement;
        const editorEl = activeEl.closest('.monaco-editor');
        if (editorEl && window.monaco) {
          // 方案 A: 通过 Monaco 全局对象找到实例并设置值
          const editors = window.monaco.editor.getEditors();
          for (const ed of editors) {
            if (ed.getDomNode().contains(activeEl)) {
              ed.setValue(text);
              return true;
            }
          }
        }
        return false;
      },
      args: [text],
      world: 'MAIN' // 核心：访问页面的 window.monaco 对象
    });

    if (isMonaco[0].result) {
      console.log("⌨️ Monaco set value via API success.");
      return;
    }
  } catch (err) {
    console.log("⚠️ Monaco API injection failed or not found, falling back to CDP typing.");
  }

  // 2. 传统方案：CDP insertText
  await chrome.debugger.sendCommand(target, "Input.insertText", {
    text: text
  });
}

// 截图功能
async function performScreenshot(target) {
  const result = await chrome.debugger.sendCommand(target, "Page.captureScreenshot", {
    format: "jpeg",
    quality: 60 // 压缩质量，传输更快
  });
  return result.data; // 返回 Base64 字符串
}

// 执行 JS 脚本
async function performExecute(target, script) {
  const result = await chrome.debugger.sendCommand(target, "Runtime.evaluate", {
    expression: script,
    returnByValue: true // 如果结果是对象，直接返回 JSON
  });

  if (result.exceptionDetails) {
    throw new Error("JS 执行出错: " + result.exceptionDetails.text);
  }
  return result.result.value;
}

// 监听断开 (处理由于浏览器或 UI 手动导致的断开)
chrome.debugger.onDetach.addListener((source) => {
  const tabId = source.tabId;
  console.log(`🔔 Debugger detached event for tab: ${tabId}`);
  removeOverlay(tabId);
  if (controlledTabs.has(tabId)) {
    controlledTabs.delete(tabId);
    notifyBackend("DETACHED", tabId);
  }
});

// 监听新标签页创建 (自动跟随)
chrome.tabs.onCreated.addListener(async (tab) => {
  // 如果新标签页是由任意受控标签页开启的
  if (tab.openerTabId && controlledTabs.has(tab.openerTabId)) {
    console.log(`🚀 检测到从受控页新开启的标签页 (ID: ${tab.id})，正在自动跟随...`);
    await attachTab(tab.id);
  }
});

// 监听页面加载完成，重新注入遮罩
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (controlledTabs.has(tabId) && changeInfo.status === 'complete') {
    // 重新注入蓝色的遮罩 UI
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["overlay.js"]
    }).catch(err => console.error("Failed to re-inject overlay:", err));
  }
});

// --- WebSocket 与后端 Agent 通信 ---
let ws = null;
let keepAliveTimer = null;

// 使用 Chrome Alarm 替代会休眠的 setTimeout/setInterval 来保证长效重连
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'websocket-reconnect-alarm') {
    if (!ws || (ws.readyState !== WebSocket.OPEN && ws.readyState !== WebSocket.CONNECTING)) {
      console.log('⏰ Alarm 触发：尝试重新连接后端...');
      connectBackend();
    }
  }
});

async function getClientId() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['clientId'], (result) => {
      if (result.clientId) {
        resolve(result.clientId);
      } else {
        const newId = crypto.randomUUID();
        chrome.storage.local.set({ clientId: newId }, () => resolve(newId));
      }
    });
  });
}

async function connectBackend() {
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
    return;
  }

  const clientId = await getClientId();
  await bindClientToBackendUser(clientId);
  // 尝试连接本地 Python Agent 测试服务，带上clientId区分前端实例
  ws = new WebSocket(`ws://127.0.0.1:8765/?clientId=${clientId}`);

  ws.onopen = () => {
    console.log("✅ 已连接到 Agent 后端服务器");

    // 连接成功后，清除尝试重连的 Alarm
    chrome.alarms.clear('websocket-reconnect-alarm');

    // 增加心跳保活机制，防止 Chrome Service Worker 因为 30 秒静默被挂起导致断连
    if (keepAliveTimer) clearInterval(keepAliveTimer);
    keepAliveTimer = setInterval(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ id: "ping", action: "PING" }));
      }
    }, 20000); // 20秒发送一次乒乓

    // 如果当前已经是接管状态，同步给后端
    if (controlledTabs.size > 0) {
      for (const [tabId, info] of controlledTabs.entries()) {
        notifyBackend("ATTACHED", tabId, info.title, info.url);
      }
    }

    // 同步 DDB 连接状态给后端（重连后后端 ddb_status 是空的）
    if (globalThis.__ddb) {
      try {
        const ddbSt = globalThis.__ddb.status();
        if (ddbSt && ddbSt.connected) {
          const cfg = ddbSt.config || {};
          console.log(`[Background] Re-syncing DDB status on connect:`, ddbSt);
          ws.send(JSON.stringify({
            type: "NOTIFICATION",
            action: "DDB_STATUS",
            connected: true,
            host: cfg.host || '',
            port: cfg.port || 0,
          }));
        }
      } catch (e) {
        console.warn(`[Background] Failed to sync DDB status on connect:`, e.message);
      }
    }
  };

  ws.onmessage = async (event) => {
    const req = JSON.parse(event.data);
    try {
      if (req.action === "PING" || req.action === "PONG") return; // 忽略心跳包

      console.log(`[Background] 收到后端指令: id=${req.id} action=${req.action}`);
      const data = await handleRequest(req);
      ws.send(JSON.stringify({ id: req.id, status: "success", data: data }));
      console.log(`[Background] 指令成功: id=${req.id} action=${req.action}`);
    } catch (err) {
      console.error(`[Background] 指令失败: id=${req.id} action=${req.action}`, err.message);
      ws.send(JSON.stringify({ id: req.id, status: "error", message: err.message }));
    }
  };

  ws.onerror = (err) => {
    console.log("⚠️ WebSocket 出错，无法连接后端服务");
  };

  ws.onclose = () => {
    console.log("❌ WebSocket 断开，自动重连机制激活中...");
    ws = null;
    if (keepAliveTimer) {
      clearInterval(keepAliveTimer);
      keepAliveTimer = null;
    }
    // 立即启动一个定期检查的 Alarm (MV3 允许开发模式使用较小的 periodInMinutes，默认为1)
    chrome.alarms.create('websocket-reconnect-alarm', { periodInMinutes: 0.1 });
    // 同时保留短周期重连（对于 Service Worker 还没休眠的时候）
    setTimeout(connectBackend, 3000);
  };
}

// 允许点击插件图标时打开侧边栏
if (chrome.sidePanel) {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
}

// 插件加载时（每次 Service Worker 唤醒时）立即发起连接
connectBackend();

// Restore DolphinDB connection on service worker startup (via official JS API)
if (globalThis.__ddb) {
  globalThis.__ddb.autoRestore().then(() => {
    // After auto-restore, notify backend of DDB status if connected
    const st = globalThis.__ddb.status();
    if (st && st.connected) {
      const cfg = st.config || {};
      console.log(`[Background] DDB auto-restore succeeded, notifying backend: ${cfg.host}:${cfg.port}`);
      // Wait a bit for WebSocket to be ready, then notify
      const notifyInterval = setInterval(() => {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({
            type: "NOTIFICATION",
            action: "DDB_STATUS",
            connected: true,
            host: cfg.host || '',
            port: cfg.port || 0,
          }));
          clearInterval(notifyInterval);
        }
      }, 500);
      // Give up after 10 seconds
      setTimeout(() => clearInterval(notifyInterval), 10000);
    }
  }).catch((err) => {
    console.log('⚠️ DolphinDB auto-restore skipped:', err.message);
  });
}