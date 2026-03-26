const API_URL = 'http://localhost:8007';

// --- Auth helpers ---
async function getToken() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['authToken'], (result) => resolve(result.authToken || null));
    });
}

async function setToken(token) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ authToken: token }, resolve);
    });
}

async function clearToken() {
    return new Promise((resolve) => {
        chrome.storage.local.remove(['authToken', 'authUser'], resolve);
    });
}

async function getAuthUser() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['authUser'], (result) => resolve(result.authUser || null));
    });
}

async function setAuthUser(user) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ authUser: user }, resolve);
    });
}

// Fetch wrapper that injects Authorization header and handles 401
async function authFetch(url, options = {}) {
    const token = await getToken();
    const headers = { ...(options.headers || {}) };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, { ...options, headers });
    if (response.status === 401) {
        await clearToken();
        showLoginPanel();
        throw new Error('未登录或登录已过期，请重新登录');
    }
    return response;
}

function showLoginPanel() {
    document.getElementById('login-panel').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
}

function showMainPanel(user) {
    document.getElementById('login-panel').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    if (user) {
        const nickname = user.nickname || user.username || user.nationalNumber || '已登录';
        document.getElementById('user-info').textContent = `👤 ${nickname}`;
        document.getElementById('user-bar').style.display = 'flex';
    }
}

const getVal = (id) => document.getElementById(id).value;
const log = (msg) => {
    const el = document.getElementById('log');
    el.innerHTML += `<div>> ${msg}</div>`;
    el.scrollTop = el.scrollHeight;
};

// Manifest V3 禁止 inline onclick，必须通过事件绑定
document.addEventListener('DOMContentLoaded', async () => {
    // --- Auth: check stored token on startup ---
    const token = await getToken();
    if (token) {
        const user = await getAuthUser();
        showMainPanel(user);
        initConversation();
    } else {
        showLoginPanel();
    }

    // --- Login form ---
    document.getElementById('btn-login').addEventListener('click', handleLogin);
    document.getElementById('login-password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    // --- Logout ---
    document.getElementById('btn-logout').addEventListener('click', async () => {
        await clearToken();
        document.getElementById('user-bar').style.display = 'none';
        showLoginPanel();
        log('已退出登录');
    });

    document.getElementById('btn-attach').addEventListener('click', connectCurrentTab);
    document.getElementById('btn-takeover').addEventListener('click', () => {
        sendAction('TAKE_OVER');
    });

    // Chat UI Listeners
    document.getElementById('btn-send').addEventListener('click', () => sendMessage());
    document.getElementById('btn-stop').addEventListener('click', () => {
        if (currentAbortController) {
            currentAbortController.abort();
        }
    });

    document.getElementById('chat-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    document.getElementById('btn-reset-conv').addEventListener('click', resetConversation);

    // Tab switching
    document.getElementById('tab-chat-btn').addEventListener('click', () => switchTab('chat'));
    document.getElementById('tab-tasks-btn').addEventListener('click', () => switchTab('tasks'));
    document.getElementById('tab-ddb-btn').addEventListener('click', () => switchTab('ddb'));

    // DolphinDB panel listeners
    document.getElementById('btn-ddb-connect').addEventListener('click', ddbConnect);
    document.getElementById('btn-ddb-disconnect').addEventListener('click', ddbDisconnect);
    document.getElementById('btn-ddb-run').addEventListener('click', ddbRunScript);
    document.getElementById('ddb-script').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            ddbRunScript();
        }
    });

    // Load persisted DolphinDB config and check status
    ddbLoadConfig();

    // Tasks panel listeners
    document.getElementById('btn-refresh-tasks').addEventListener('click', loadTasks);

    // Task list collapse toggle
    let taskListCollapsed = false;
    document.getElementById('task-list-collapse-btn').addEventListener('click', () => {
        taskListCollapsed = !taskListCollapsed;
        const listEl = document.getElementById('task-list');
        const countEl = document.getElementById('task-list-count');
        const btn = document.getElementById('task-list-collapse-btn');
        if (taskListCollapsed) {
            listEl.style.display = 'none';
            btn.textContent = '\u25b8';
            countEl.style.display = 'inline';
        } else {
            listEl.style.display = 'block';
            btn.textContent = '\u25be';
            countEl.style.display = 'none';
        }
    });
    document.getElementById('btn-task-interact').addEventListener('click', () => {
        const msg = document.getElementById('task-interact-input').value.trim();
        if (msg && currentTaskId) {
            interactTask(currentTaskId, msg);
            document.getElementById('task-interact-input').value = '';
        }
    });
    document.getElementById('task-interact-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const msg = document.getElementById('task-interact-input').value.trim();
            if (msg && currentTaskId) {
                interactTask(currentTaskId, msg);
                document.getElementById('task-interact-input').value = '';
            }
        }
    });
    document.getElementById('btn-task-cancel').addEventListener('click', () => {
        if (currentTaskId) cancelTask(currentTaskId);
    });
});

async function handleLogin() {
    const countryCode = document.getElementById('login-country-code').value.trim() || '86';
    const nationalNumber = document.getElementById('login-phone').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    const btnLogin = document.getElementById('btn-login');

    errorEl.textContent = '';
    if (!nationalNumber || !password) {
        errorEl.textContent = '请填写手机号和密码';
        return;
    }

    btnLogin.disabled = true;
    btnLogin.textContent = '登录中...';

    try {
        const response = await fetch(`${API_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ countryCode, nationalNumber, password })
        });

        const result = await response.json();

        if (result.code === 0 && result.data && result.data.token) {
            await setToken(result.data.token);
            const user = result.data.user || {};
            await setAuthUser(user);
            document.getElementById('login-password').value = '';
            showMainPanel(user);
            initConversation();
            log(`✅ 登录成功`);
        } else {
            errorEl.textContent = result.message || '登录失败，请检查账号密码';
        }
    } catch (err) {
        errorEl.textContent = `网络错误: ${err.message}`;
    } finally {
        btnLogin.disabled = false;
        btnLogin.textContent = '登录';
    }
}

// --- Chat state ---
let conversationId = null;
let isThinking = false;
let currentAbortController = null;

// --- Tasks state ---
let currentTaskId = null;
let taskEventAbortController = null;

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

// --- Tab switching ---
function switchTab(tab) {
    const chatPanel = document.getElementById('chat-panel');
    const tasksPanel = document.getElementById('tasks-panel');
    const ddbPanel = document.getElementById('ddb-panel');
    const chatBtn = document.getElementById('tab-chat-btn');
    const tasksBtn = document.getElementById('tab-tasks-btn');
    const ddbBtn = document.getElementById('tab-ddb-btn');

    chatPanel.style.display = 'none';
    tasksPanel.style.display = 'none';
    ddbPanel.style.display = 'none';
    chatBtn.classList.remove('active');
    tasksBtn.classList.remove('active');
    ddbBtn.classList.remove('active');

    if (tab === 'chat') {
        chatPanel.style.display = 'block';
        chatBtn.classList.add('active');
    } else if (tab === 'tasks') {
        tasksPanel.style.display = 'block';
        tasksBtn.classList.add('active');
        loadTasks();
    } else if (tab === 'ddb') {
        ddbPanel.style.display = 'block';
        ddbBtn.classList.add('active');
        ddbCheckStatus();
    }
}

// --- Tasks functions ---

async function loadTasks() {
    const listEl = document.getElementById('task-list');
    listEl.innerHTML = '<p style="color: #999; text-align: center; font-size: 12px;">加载中...</p>';

    try {
        const response = await authFetch(`${API_URL}/api/v1/tasks`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        // data may be an array or { tasks: [...] }
        const tasks = Array.isArray(data) ? data : (data.tasks || []);

        const countEl = document.getElementById('task-list-count');
        if (tasks.length === 0) {
            listEl.innerHTML = '<p style="color: #999; text-align: center; font-size: 12px;">暂无后台任务</p>';
            countEl.textContent = '0';
            return;
        }

        listEl.innerHTML = '';
        tasks.forEach(task => {
            const card = createTaskCard(task);
            listEl.appendChild(card);
        });
        countEl.textContent = tasks.length;
    } catch (err) {
        listEl.innerHTML = `<p style="color: red; font-size: 12px;">加载失败: ${err.message}</p>`;
        log(`❌ 加载任务列表失败: ${err.message}`);
    }
}

function createTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    if (task.id === currentTaskId) card.classList.add('selected');

    const status = (task.status || 'pending').toLowerCase();
    const badgeClass = `badge-${status}`;
    const statusText = task.status || 'PENDING';

    const created = task.created_at ? new Date(task.created_at).toLocaleTimeString() : '';
    const typeLabel = task.task_type || task.type || task.id || '任务';

    card.innerHTML = `
        <div class="task-card-header">
            <span class="task-type">${typeLabel}</span>
            <span class="task-time">${created}</span>
        </div>
        <span class="task-badge ${badgeClass}">${statusText}</span>
    `;

    card.addEventListener('click', () => viewTask(task.id));
    return card;
}

function getTaskStatusBadgeClass(status) {
    const s = (status || '').toLowerCase();
    const map = {
        running: 'badge-running',
        completed: 'badge-completed',
        failed: 'badge-failed',
        waiting_input: 'badge-waiting_input',
        cancelled: 'badge-cancelled',
        canceled: 'badge-cancelled',
        pending: 'badge-pending',
    };
    return map[s] || 'badge-pending';
}

async function viewTask(taskId) {
    // Abort previous event stream if any
    if (taskEventAbortController) {
        taskEventAbortController.abort();
        taskEventAbortController = null;
    }

    currentTaskId = taskId;

    // Highlight selected card
    document.querySelectorAll('.task-card').forEach(c => {
        c.classList.toggle('selected', c.querySelector('.task-type') && c.dataset.taskId === taskId);
    });

    // Show detail area
    const detailArea = document.getElementById('task-detail-area');
    detailArea.style.display = 'block';

    document.getElementById('task-detail-title').textContent = `任务: ${taskId.substring(0, 16)}...`;

    const streamEl = document.getElementById('task-event-stream');
    streamEl.innerHTML = '';

    log(`📡 订阅任务事件: ${taskId}`);

    // Subscribe to SSE via fetch (to support potential auth headers in the future)
    taskEventAbortController = new AbortController();

    try {
        const response = await authFetch(`${API_URL}/api/v1/tasks/${taskId}/events`, {
            signal: taskEventAbortController.signal
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop();

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const dataStr = line.substring(6).trim();
                    if (dataStr === '[DONE]') {
                        log(`✅ 任务事件流结束: ${taskId}`);
                        continue;
                    }

                    try {
                        const payload = JSON.parse(dataStr);
                        handleStreamPayload(streamEl, payload);
                        streamEl.scrollTop = streamEl.scrollHeight;
                    } catch (e) {
                        console.error('Task event JSON parse error:', e, dataStr);
                    }
                }
            }
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            log(`❌ 任务事件流异常: ${err.message}`);
            const errEl = document.createElement('div');
            errEl.style = 'color: red; font-size: 12px;';
            errEl.textContent = `事件流错误: ${err.message}`;
            streamEl.appendChild(errEl);
        }
    }
}

async function cancelTask(taskId) {
    if (!confirm(`确定要取消任务 ${taskId.substring(0, 12)}... 吗？`)) return;

    try {
        const response = await authFetch(`${API_URL}/api/v1/tasks/${taskId}/cancel`, {
            method: 'POST'
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        log(`✅ 任务已取消: ${taskId}`);
        loadTasks();
    } catch (err) {
        log(`❌ 取消任务失败: ${err.message}`);
    }
}

async function interactTask(taskId, message) {
    try {
        const response = await authFetch(`${API_URL}/api/v1/tasks/${taskId}/interact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        log(`📨 指令已发送至任务: ${taskId}`);
    } catch (err) {
        log(`❌ 发送指令失败: ${err.message}`);
    }
}

// --- Chat ---

async function sendMessage(overrideText = null, isSilent = false) {
    const inputEl = document.getElementById('chat-input');
    const text = overrideText || inputEl.value.trim();
    if (!text || isThinking) return;

    const isBackground = document.getElementById('bgToggle').checked;
    const isExplore = document.getElementById('exploreToggle') ? document.getElementById('exploreToggle').checked : false;

    // 1. UI Feedback
    if (!overrideText) inputEl.value = '';
    isThinking = true;
    currentAbortController = new AbortController();
    document.getElementById('btn-send').style.display = 'none';
    document.getElementById('btn-stop').style.display = 'block';

    if (!isSilent) {
        appendChatMessage('user', text);
    }

    if (isExplore) {
        // --- 探索模式 (调用 /api/v1/agent/explore) ---
        try {
            const formData = new FormData();
            formData.append('question', text);

            const storageResult = await new Promise(resolve => chrome.storage.local.get(['clientId'], resolve));
            const clientId = storageResult.clientId;
            formData.append('client_id', clientId);

            // 尝试获取当前页面的 URL 作为初始探索点
            const [activeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
            if (activeTab && activeTab.url && !activeTab.url.startsWith('chrome://') && !activeTab.url.startsWith('edge://')) {
                formData.append('initial_url', activeTab.url);
            }

            const response = await authFetch(`${API_URL}/api/v1/agent/explore`, {
                method: 'POST',
                body: formData,
                signal: currentAbortController.signal
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            const taskId = data.task_id;

            if (taskId) {
                log(`🚀 探索任务已创建: ${taskId}`);
                appendChatMessage('agent', `探索任务已创建，任务ID: ${taskId.substring(0, 16)}...`);
                // 切换到任务面板并加载事件
                switchTab('tasks');
                await loadTasks();
                viewTask(taskId);
            } else {
                log(`⚠️ 探索任务响应无 task_id`);
                appendChatMessage('agent', `探索任务已提交，请在"后台任务"面板查看进度。`);
                switchTab('tasks');
                loadTasks();
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                log(`⏹️ 探索任务提交已取消`);
            } else {
                log(`❌ 探索任务提交失败: ${err.message}`);
            }
        } finally {
            isThinking = false;
            currentAbortController = null;
            document.getElementById('btn-send').style.display = 'block';
            document.getElementById('btn-stop').style.display = 'none';
        }
        return;
    }

    if (isBackground) {
        // Background mode: POST and get task_id back, then switch to Tasks tab
        try {
            const formData = new FormData();
            formData.append('question', text);
            formData.append('conversation_id', conversationId);
            formData.append('mode', 'ACT');
            formData.append('background', 'true');

            const storageResult = await new Promise(resolve => chrome.storage.local.get(['clientId'], resolve));
            const clientId = storageResult.clientId;
            formData.append('injected_context', JSON.stringify({ source: 'web', clientId: clientId }));

            const response = await authFetch(`${API_URL}/api/v1/agent/chat`, {
                method: 'POST',
                body: formData,
                signal: currentAbortController.signal
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            const taskId = data.task_id;

            if (taskId) {
                log(`🚀 后台任务已创建: ${taskId}`);
                appendChatMessage('agent', `后台任务已创建，任务ID: ${taskId.substring(0, 16)}...`);
                // Switch to Tasks tab and open the new task
                switchTab('tasks');
                await loadTasks();
                viewTask(taskId);
            } else {
                log(`⚠️ 后台任务响应无 task_id`);
                appendChatMessage('agent', `后台任务已提交，请在"后台任务"面板查看进度。`);
                switchTab('tasks');
                loadTasks();
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                log(`⏹️ 后台任务提交已取消`);
            } else {
                log(`❌ 后台任务提交失败: ${err.message}`);
            }
        } finally {
            isThinking = false;
            currentAbortController = null;
            document.getElementById('btn-send').style.display = 'block';
            document.getElementById('btn-stop').style.display = 'none';
        }
        return;
    }

    // 2. Prepare for Agent Stream (normal mode)
    const agentMsgEl = appendChatMessage('agent', '...');
    const chatHistoryEl = document.getElementById('chat-history');

    try {
        const formData = new FormData();
        formData.append('question', text);
        formData.append('conversation_id', conversationId);
        formData.append('mode', 'ACT');

        // Retrieve clientId to identify this browser profile to the backend
        const storageResult = await new Promise(resolve => chrome.storage.local.get(['clientId'], resolve));
        const clientId = storageResult.clientId;

        formData.append('injected_context', JSON.stringify({ source: 'web', clientId: clientId }));

        const response = await authFetch(`${API_URL}/api/v1/agent/chat`, {
            method: 'POST',
            body: formData,
            signal: currentAbortController.signal
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
        if (err.name === 'AbortError') {
            log(`⏹️ Chat 已手动停止`);
            agentMsgEl.innerHTML += `<div style="color: #856404; font-style: italic; margin-top: 5px;">[对话已暂停，您可以继续输入指令]</div>`;
        } else {
            log(`❌ Chat 异常: ${err.message}`);
            agentMsgEl.innerHTML += `<div style="color: red;">⚠️ 错误: ${err.message}</div>`;
        }
    } finally {
        isThinking = false;
        currentAbortController = null;
        document.getElementById('btn-send').style.display = 'block';
        document.getElementById('btn-stop').style.display = 'none';
    }
}

function handleStreamPayload(container, payload) {
    // payload 是 TaskStatus 对象
    if (payload.type === 'task_status') {
        const history = document.getElementById('chat-history');

        if (payload.subtype === 'react_thought_slice') {
            // 流式思考片段：复用当前轮次的思考块（data-current-thought 标记），无则新建
            let thoughtEl = container.querySelector('[data-current-thought]');
            if (!thoughtEl) {
                thoughtEl = document.createElement('div');
                thoughtEl.className = 'msg-thought';
                thoughtEl.setAttribute('data-current-thought', '1');
                container.appendChild(thoughtEl);
            }
            thoughtEl.textContent += payload.chunk;
        } else if (payload.subtype === 'react_thought') {
            // 完整思考：同上，覆盖 slice 积累的内容
            let thoughtEl = container.querySelector('[data-current-thought]');
            if (!thoughtEl) {
                thoughtEl = document.createElement('div');
                thoughtEl.className = 'msg-thought';
                thoughtEl.setAttribute('data-current-thought', '1');
                container.appendChild(thoughtEl);
            }
            thoughtEl.textContent = payload.thought;
        } else if (payload.subtype === 'react_action') {
            // 工具调用：清除思考标记，下一轮 thought 会在底部新建
            container.querySelectorAll('[data-current-thought]').forEach(el => el.removeAttribute('data-current-thought'));
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
        }
    });
}

// --- DolphinDB functions ---

function ddbUpdateUI(connected, config) {
    const dot = document.getElementById('ddb-status-dot');
    const text = document.getElementById('ddb-status-text');
    if (connected) {
        dot.classList.add('ddb-connected');
        text.textContent = `已连接 ${config ? config.host + ':' + config.port : ''}`;
        text.style.color = '#155724';
    } else {
        dot.classList.remove('ddb-connected');
        text.textContent = '未连接';
        text.style.color = '#666';
    }
}

async function ddbLoadConfig() {
    chrome.storage.local.get(['ddbConfig'], (result) => {
        if (result.ddbConfig) {
            const { host, port, user } = result.ddbConfig;
            document.getElementById('ddb-host').value = host || '127.0.0.1';
            document.getElementById('ddb-port').value = port || '8848';
            document.getElementById('ddb-user').value = user || 'admin';
            // Don't restore password into the field for security; user re-enters or we keep it in storage
        }
    });
    ddbCheckStatus();
}

function ddbCheckStatus() {
    chrome.runtime.sendMessage({ action: 'DDB_STATUS' }, (response) => {
        if (chrome.runtime.lastError || !response || response.status === 'error') {
            ddbUpdateUI(false);
            return;
        }
        ddbUpdateUI(response.data.connected, response.data.config);
    });
}

function ddbConnect() {
    const host = document.getElementById('ddb-host').value.trim();
    const port = document.getElementById('ddb-port').value.trim();
    const user = document.getElementById('ddb-user').value.trim();
    const pass = document.getElementById('ddb-pass').value;

    if (!host || !port) {
        log('DolphinDB: 请填写服务器地址和端口');
        return;
    }

    const btn = document.getElementById('btn-ddb-connect');
    btn.disabled = true;
    btn.textContent = '连接中...';

    chrome.runtime.sendMessage({ action: 'DDB_CONNECT', host, port, user, pass }, (response) => {
        btn.disabled = false;
        btn.textContent = '连接';

        if (chrome.runtime.lastError) {
            log(`DolphinDB 连接失败: ${chrome.runtime.lastError.message}`);
            ddbUpdateUI(false);
            return;
        }
        if (response.status === 'error') {
            log(`DolphinDB 连接失败: ${response.message}`);
            ddbUpdateUI(false);
        } else {
            log(`DolphinDB 连接成功`);
            ddbUpdateUI(true, { host, port });
        }
    });
}

function ddbDisconnect() {
    chrome.runtime.sendMessage({ action: 'DDB_DISCONNECT' }, (response) => {
        if (chrome.runtime.lastError) {
            log(`DolphinDB 断开失败: ${chrome.runtime.lastError.message}`);
            return;
        }
        log('DolphinDB 已断开');
        ddbUpdateUI(false);
    });
}

function ddbRunScript() {
    const script = document.getElementById('ddb-script').value.trim();
    if (!script) return;

    const resultEl = document.getElementById('ddb-result');
    resultEl.textContent = '执行中...';

    chrome.runtime.sendMessage({ action: 'DDB_EXECUTE', script }, (response) => {
        if (chrome.runtime.lastError) {
            resultEl.textContent = `错误: ${chrome.runtime.lastError.message}`;
            return;
        }
        if (response.status === 'error') {
            resultEl.textContent = `错误: ${response.message}`;
        } else {
            resultEl.textContent = response.data.result;
        }
    });
}
