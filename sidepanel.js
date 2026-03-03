const getVal = (id) => document.getElementById(id).value;
const log = (msg) => {
    const el = document.getElementById('log');
    el.innerHTML += `<div>> ${msg}</div>`;
    el.scrollTop = el.scrollHeight;
};

// Manifest V3 禁止 inline onclick，必须通过事件绑定
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-attach').addEventListener('click', connectCurrentTab);
    document.getElementById('btn-takeover').addEventListener('click', () => {
        sendAction('TAKE_OVER');
    });
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

    // Chat UI Listeners
    document.getElementById('btn-send').addEventListener('click', () => sendMessage());
    document.getElementById('chat-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    document.getElementById('btn-reset-conv').addEventListener('click', resetConversation);


    // Initialize Conversation
    initConversation();
});

// --- Chat state ---
let conversationId = null;
let isThinking = false;

function initConversation() {
    conversationId = localStorage.getItem('agent_conversation_id');
    if (!conversationId) {
        resetConversation();
    } else {
        document.getElementById('conv-id').textContent = conversationId.substring(0, 8);
        log(`📂 已加载历史会话: ${conversationId}`);
    }
}

function resetConversation() {
    conversationId = 'web-' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem('agent_conversation_id', conversationId);
    document.getElementById('chat-history').innerHTML = '<p style="color: #999; text-align: center; margin-top: 50px;">开启了新会话，请输入指令...</p>';
    document.getElementById('conv-id').textContent = conversationId.substring(0, 8);
    log(`🆕 已开启新会话: ${conversationId}`);
}


async function sendMessage(overrideText = null, isSilent = false) {
    const inputEl = document.getElementById('chat-input');
    const text = overrideText || inputEl.value.trim();
    if (!text || isThinking) return;

    // 1. UI Feedback
    if (!overrideText) inputEl.value = '';
    isThinking = true;
    document.getElementById('btn-send').disabled = true;

    if (!isSilent) {
        appendChatMessage('user', text);
    }

    // 2. Prepare for Agent Stream
    const agentMsgEl = appendChatMessage('agent', '...');
    const chatHistoryEl = document.getElementById('chat-history');

    try {
        const formData = new FormData();
        formData.append('question', text);
        formData.append('conversation_id', conversationId);
        formData.append('mode', 'ACT');
        formData.append('injected_context', JSON.stringify({ source: 'web' }));

        const response = await fetch('http://localhost:8007/api/v1/agent/chat', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        agentMsgEl.innerHTML = ''; // 清除加载状态

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop(); // 保留不完整的行

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const dataStr = line.substring(6).trim();
                    if (dataStr === '[DONE]') continue;

                    try {
                        const payload = JSON.parse(dataStr);
                        handleStreamPayload(agentMsgEl, payload);
                        chatHistoryEl.scrollTop = chatHistoryEl.scrollHeight;
                    } catch (e) {
                        console.error("JSON parse error:", e, dataStr);
                    }
                }
            }
        }
    } catch (err) {
        log(`❌ Chat 异常: ${err.message}`);
        agentMsgEl.innerHTML += `<div style="color: red;">⚠️ 错误: ${err.message}</div>`;
    } finally {
        isThinking = false;
        document.getElementById('btn-send').disabled = false;
    }
}

function handleStreamPayload(container, payload) {
    // payload 是 TaskStatus 对象
    if (payload.type === 'task_status') {
        const history = document.getElementById('chat-history');

        if (payload.subtype === 'react_thought_slice') {
            // 流式思考片段
            let thoughtEl = container.querySelector('.msg-thought');
            if (!thoughtEl) {
                thoughtEl = document.createElement('div');
                thoughtEl.className = 'msg-thought';
                container.appendChild(thoughtEl);
            }
            thoughtEl.textContent += payload.chunk;
        } else if (payload.subtype === 'react_thought') {
            // 完整思考过程 (覆盖掉 slice 的积累，确保展示最准确的 thought)
            let thoughtEl = container.querySelector('.msg-thought');
            if (!thoughtEl) {
                thoughtEl = document.createElement('div');
                thoughtEl.className = 'msg-thought';
                container.appendChild(thoughtEl);
            }
            thoughtEl.textContent = payload.thought;
        } else if (payload.subtype === 'react_action') {
            // 工具调用
            const actionEl = document.createElement('div');
            actionEl.className = 'msg-action';
            actionEl.textContent = `🛠️ 执行: ${payload.tool_name}(...)`;
            container.appendChild(actionEl);
        } else if (payload.subtype === 'react_observation') {
            // 观察结果 (可选：展示在 Action 后面)
            const obsEl = document.createElement('div');
            obsEl.className = 'msg-observation';
            obsEl.style = "font-size: 11px; color: #555; background: #eee; padding: 4px; border-radius: 4px; margin-bottom: 5px;";
            obsEl.textContent = `🔍 结果: ${payload.observation.substring(0, 100)}${payload.observation.length > 100 ? '...' : ''}`;
            container.appendChild(obsEl);
        } else if (payload.subtype === 'end') {
            // 任务结束
            const finalEl = document.createElement('div');
            finalEl.className = 'final-text';
            finalEl.style = "margin-top: 10px; border-top: 1px solid #ddd; padding-top: 5px; font-weight: 500;";
            finalEl.innerHTML = `<strong>✅ 回答:</strong><br/>${payload.final_message.replace(/\n/g, '<br/>')}`;
            container.appendChild(finalEl);
        } else if (payload.subtype === 'error') {
            container.innerHTML += `<div style="color: red; font-weight: bold;">❌ 报错: ${payload.error_details || payload.message}</div>`;
        }
    }
}

function appendChatMessage(role, text) {
    const history = document.getElementById('chat-history');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg msg-${role}`;
    msgDiv.innerHTML = text.replace(/\n/g, '<br/>');
    history.appendChild(msgDiv);
    history.scrollTop = history.scrollHeight;
    return msgDiv;
}

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
        badge.textContent = '✅ 已接管此页面';
        badge.classList.add('connected');
    } else {
        badge.textContent = '未连接 / 正在查看其它页面';
        badge.classList.remove('connected');
    }
}

// 定时刷新状态，支持多页签列表展示
setInterval(async () => {
    try {
        const [activeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        if (!activeTab) return;

        chrome.runtime.sendMessage({ action: 'GET_STATUS', tabId: activeTab.id }, (response) => {
            if (chrome.runtime.lastError || !response || response.status === 'error') {
                updateStatus(false);
                renderTabList([]);
                return;
            }
            // 更新顶部徽章 (当前活动页状态)
            updateStatus(response.data.isControlled);
            // 更新下方列表 (所有受控页)
            renderTabList(response.data.controlledTabs);
        });
    } catch (e) {
        updateStatus(false);
    }
}, 1000);

// 使用事件委托处理列表点击
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tab-list');
    container.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName !== 'BUTTON') return;

        const tabId = parseInt(target.getAttribute('data-tab-id'));
        if (target.classList.contains('btn-focus')) {
            chrome.tabs.update(tabId, { active: true });
        } else if (target.classList.contains('btn-detach')) {
            if (confirm(`确定要停止对页签 ${tabId} 的控制吗？`)) {
                log(`📡 发送释放指令: ${tabId}`);
                chrome.runtime.sendMessage({ action: 'TAKE_OVER', tabId: tabId }, (res) => {
                    if (chrome.runtime.lastError) {
                        log(`❌ 发送失败: ${chrome.runtime.lastError.message}`);
                    } else {
                        log(`✅ 背景反馈: ${res.status}`);
                    }
                });
            }
        }
    });
});

function renderTabList(tabsArray) {
    const container = document.getElementById('tab-list');
    if (!tabsArray || tabsArray.length === 0) {
        container.innerHTML = '<p style="color: #999; text-align: center;">暂无受控页签</p>';
        return;
    }

    let html = '';
    tabsArray.forEach(([id, info]) => {
        const title = info.title || "无标题";
        const urlShort = (info.url || "");
        html += `
            <div style="border: 1px solid #eee; border-radius: 4px; padding: 8px; margin-bottom: 8px; background: white; word-break: break-all;">
                <div style="font-weight: bold; margin-bottom: 2px; line-height: 1.4; color: #333;">${title}</div>
                <div style="font-size: 10px; color: #888; margin-bottom: 8px; font-family: monospace;">${urlShort}</div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-focus" style="padding: 4px 8px; font-size: 11px; background: #6c757d; border-radius: 3px; color: white; border: none; cursor: pointer;" data-tab-id="${id}">跳转</button>
                    <button class="btn-detach" style="padding: 4px 8px; font-size: 11px; background: #dc3545; border-radius: 3px; color: white; border: none; cursor: pointer;" data-tab-id="${id}">释放</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
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

    const textContainer = document.getElementById('extracted-text');
    if (textContainer) {
        textContainer.style.display = 'block';
        textContainer.innerHTML = '正在使用大模型提取文字...';

        fetch('http://localhost:8007/api/v1/agent/extract_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image_base64: base64Data })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    textContainer.innerHTML = '<strong>📝 提取文字结果:</strong><br/><br/>' + data.extracted_text.replace(/\n/g, '<br/>');
                } else {
                    textContainer.innerHTML = '<span style="color:red">❌ 提取失败: ' + (data.detail || JSON.stringify(data)) + '</span>';
                }
            })
            .catch(err => {
                console.error('OCR fetch error:', err);
                textContainer.innerHTML = '<span style="color:red">⚠️ 请求后端提取接口时发生网络异常: ' + err.message + '</span>';
            });
    }
}
