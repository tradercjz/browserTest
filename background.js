// background.js

let currentTargetTabId = null;

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  // 统一的错误处理包装
  handleRequest(request)
    .then(data => sendResponse({ status: "success", data }))
    .catch(err => sendResponse({ status: "error", message: err.message }));
    
  return true; // 保持消息通道开启
});

async function handleRequest(request) {
  if (request.action === "OPEN_AND_ATTACH") {
    return await openAndAttach(request.url);
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

async function performClick(target, x, y) {
  const opts = { x: Math.floor(x), y: Math.floor(y), button: "left", clickCount: 1 };
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", { type: "mousePressed", ...opts });
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", { type: "mouseReleased", ...opts });
}

// 滚动功能
async function performScroll(target, deltaY) {
  await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
    type: "mouseWheel",
    x: 0, y: 0,
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