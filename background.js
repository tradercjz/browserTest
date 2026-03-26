// background.js

let controlledTabs = new Map(); // tabId -> { title, url }
let currentGroupId = null;
const GROUP_TITLE = "DolphinMind Workspace";
const GROUP_COLOR = "blue";

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

// 接收内部 UI 的消息 (如 sidepanel.html)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handleRequest(request)
    .then(data => sendResponse({ status: "success", data }))
    .catch(err => sendResponse({ status: "error", message: err.message }));
  return true;
});

// --- DolphinDB: use official JS API via bundled ESM module ---
import './dist/ddb-bundle.js';

async function handleRequest(request) {

  // --- DolphinDB actions (via official JS API) ---
  if (request.action === "DDB_CONNECT") {
    const { host, port, user, pass } = request;
    try {
      const result = await globalThis.__ddb.connect(host, parseInt(port), user, pass);
      return { connected: true, message: 'Connected via WebSocket' };
    } catch (err) {
      throw new Error('连接失败: ' + err.message);
    }
  }

  if (request.action === "DDB_EXECUTE") {
    const result = await globalThis.__ddb.execute(request.script);
    return { result };
  }

  if (request.action === "DDB_DISCONNECT") {
    return globalThis.__ddb.disconnect();
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
  };

  ws.onmessage = async (event) => {
    const req = JSON.parse(event.data);
    try {
      if (req.action === "PING" || req.action === "PONG") return; // 忽略心跳包

      const data = await handleRequest(req);
      ws.send(JSON.stringify({ id: req.id, status: "success", data: data }));
    } catch (err) {
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
  globalThis.__ddb.autoRestore().catch((err) => {
    console.log('⚠️ DolphinDB auto-restore skipped:', err.message);
  });
}