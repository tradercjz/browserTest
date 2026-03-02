const getVal = (id) => document.getElementById(id).value;
const log = (msg) => {
    const el = document.getElementById('log');
    el.innerHTML += `<div>> ${msg}</div>`;
    el.scrollTop = el.scrollHeight;
};

// Manifest V3 禁止 inline onclick，必须通过事件绑定
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-attach').addEventListener('click', connectCurrentTab);
    document.getElementById('btn-click').addEventListener('click', () => {
        sendAction('CLICK', { x: parseInt(getVal('clickX')), y: parseInt(getVal('clickY')) });
    });
    document.getElementById('btn-scroll-up').addEventListener('click', () => {
        sendAction('SCROLL', { deltaY: -500 });
    });
    document.getElementById('btn-scroll-down').addEventListener('click', () => {
        sendAction('SCROLL', { deltaY: 500 });
    });
    document.getElementById('btn-screenshot').addEventListener('click', captureScreen);
});

async function connectCurrentTab() {
    // 获取用户最后聚焦的浏览器窗口中的活动标签页（避免把侧边栏本身当成窗口）
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (!tab) {
        log("❌ 获取当前标签页失败: 未找到活动页");
        return;
    }

    // 浏览器系统页面无法被接管
    if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) {
        log(`❌ 无法接管系统页面: ${tab.url}。请打开一个普通的网页 (如 github.com) 再重试。`);
        return;
    }

    log(`正在接管: ${tab.title || tab.url}`);

    // 通知 background 挂载 Debugger 到这个 tab
    chrome.runtime.sendMessage({ action: 'ATTACH_CURRENT_TAB', tabId: tab.id }, (response) => {
        if (chrome.runtime.lastError) {
            log(`❌ 通信失败: ${chrome.runtime.lastError.message}`);
            return;
        }
        if (response.status === 'error') {
            // CDP 可能会报 Already attached 这种错
            log(`⚠️ 挂载反馈: ${response.message}`);
            if (response.message.includes('attach')) {
                updateStatus(true);
            }
        } else {
            log(`✅ 成功接管当前标签页!`);
            updateStatus(true);
        }
    });
}

function updateStatus(isConnected) {
    const badge = document.getElementById('statusBadge');
    if (isConnected) {
        badge.textContent = '✅ 已接管页面';
        badge.classList.add('connected');
    } else {
        badge.textContent = '等待连接...';
        badge.classList.remove('connected');
    }
}

function sendAction(action, data = {}) {
    const payload = { action, ...data };
    log(`下发指令: ${action}`);

    chrome.runtime.sendMessage(payload, (response) => {
        if (chrome.runtime.lastError) {
            log(`❌ 通信失败: ${chrome.runtime.lastError.message}`);
            return;
        }
        if (!response) return;

        if (response.status === 'error') {
            log(`⚠️ 报错: ${response.message}`);
        } else {
            log(`✅ OK`);
            if (action === 'SCREENSHOT') showScreenshot(response.data);
        }
    });
}

function captureScreen() {
    sendAction('SCREENSHOT');
}

function showScreenshot(base64Data) {
    const img = document.createElement('img');
    img.src = "data:image/jpeg;base64," + base64Data;
    const container = document.getElementById('screenshot-preview');
    container.innerHTML = '';
    container.appendChild(img);
}
