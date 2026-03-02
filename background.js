// background.js

let currentTargetTabId = null;

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

async function handleRequest(request) {
  if (request.action === "OPEN_AND_ATTACH") {
    return await openAndAttach(request.url);
  }

  if (request.action === "ATTACH_CURRENT_TAB") {
    return await attachCurrent(request.tabId);
  }

  // 检查是否已连接
  if (!currentTargetTabId) {
    throw new Error("请先连接目标网页 (执行 Step 1)");
  }

  const target = { tabId: currentTargetTabId };

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

async function openAndAttach(url) {
  const tab = await chrome.tabs.create({ url: url, active: true });
  currentTargetTabId = tab.id;
  await chrome.debugger.attach({ tabId: tab.id }, "1.3");
  await chrome.debugger.sendCommand({ tabId: tab.id }, "Page.enable");
  return tab.id;
}

async function attachCurrent(tabId) {
  currentTargetTabId = tabId;
  await chrome.debugger.attach({ tabId: tabId }, "1.3");
  await chrome.debugger.sendCommand({ tabId: tabId }, "Page.enable");
  return tabId;
}

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

// 打字功能 (使用 insertText 最稳定)
async function performType(target, text) {
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

// 监听断开
chrome.debugger.onDetach.addListener((source) => {
  if (source.tabId === currentTargetTabId) currentTargetTabId = null;
});

// --- WebSocket 与后端 Agent 通信 ---
let ws = null;
let reconnectTimer = null;

function connectBackend() {
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
    return;
  }

  // 尝试连接本地 Python Agent 测试服务
  ws = new WebSocket("ws://127.0.0.1:8765");

  ws.onopen = () => {
    console.log("✅ 已连接到 Agent 后端测试服务器");
    if (reconnectTimer) {
      clearInterval(reconnectTimer);
      reconnectTimer = null;
    }
  };

  ws.onmessage = async (event) => {
    // 解析后端的指令
    const req = JSON.parse(event.data);

    try {
      // 复用原本就写好的 handleRequest 大循环调度
      const data = await handleRequest(req);
      // 向后端返回成功的结果
      ws.send(JSON.stringify({ id: req.id, status: "success", data: data }));
    } catch (err) {
      // 向后端报告错误
      ws.send(JSON.stringify({ id: req.id, status: "error", message: err.message }));
    }
  };

  ws.onerror = (err) => {
    console.log("⚠️ WebSocket 出错，无法连接后端服务");
  };

  ws.onclose = () => {
    console.log("❌ WebSocket 断开，自动重连中...");
    ws = null;
    if (!reconnectTimer) {
      reconnectTimer = setInterval(connectBackend, 3000);
    }
  };
}

// 允许点击插件图标时打开侧边栏
if (chrome.sidePanel) {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
}

// 插件加载时立即发起连接
connectBackend();