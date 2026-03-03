// selection_handler.js
(function () {
    let shadowRoot = null;
    let floatingPopup = null;
    let selectedText = "";
    let fullCode = "";
    let lastSelectionRect = null;

    console.log("🖱️ Selection Handler initialized (v1.8 - Instant Prompt)");

    // 1. 创建 Shadow DOM 容器
    function ensureShadowRoot() {
        if (shadowRoot) return shadowRoot;
        const host = document.createElement('div');
        host.id = 'ai-edit-host';
        host.style.position = 'fixed';
        host.style.top = '0';
        host.style.left = '0';
        host.style.width = '0';
        host.style.height = '0';
        host.style.zIndex = '2147483647';
        document.body.appendChild(host);
        shadowRoot = host.attachShadow({ mode: 'open' });
        return shadowRoot;
    }

    // 2. 监听全量代码回传 (来自 monaco_bridge.js)
    window.addEventListener('monaco-response-full-code', (e) => {
        fullCode = e.detail.fullCode;
    });

    // 3. 监听 Monaco 选区变化 - 直接触发弹窗
    window.addEventListener('monaco-selection-changed', (e) => {
        const detail = e.detail;
        if (!detail) {
            // 注意：不要立刻隐藏，否则用户无法在弹窗中输入。
            // 只有当弹窗并未显示时才忽略。
            return;
        }

        selectedText = detail.text;
        window.dispatchEvent(new CustomEvent('monaco-request-full-code'));

        const x = detail.x || (detail.rect ? detail.rect.right : 0);
        const y = detail.y || (detail.rect ? detail.rect.bottom : 0);

        if (x && y) {
            lastSelectionRect = detail.rect || { left: x, top: y, right: x, bottom: y, height: 20 };
            // Monaco 选中后直接显示弹窗
            showPopup(x, y);
        }
    });

    // 处理原生选区
    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection();
        const text = selection.toString().trim();
        if (selection.anchorNode && selection.anchorNode.parentElement.closest('.monaco-editor')) return;

        if (text) {
            selectedText = text;
            const range = selection.getRangeAt(0);
            const rects = range.getClientRects();
            const rect = rects[rects.length - 1];
            if (rect) {
                lastSelectionRect = rect;
                showPopup(rect.right, rect.top);
            }
        }
    });

    // 全局点击隐藏逻辑
    document.addEventListener('mousedown', (e) => {
        const host = document.getElementById('ai-edit-host');
        if (host && !e.composedPath().includes(host)) {
            // 点击外部且没有新选区时，逻辑上我们延迟检查，如果此时弹窗已打开则不自动关闭
            // 除非是用户显式点击了编辑器的其他地方（Monaco 会发新的事件）
            // 我们通过 Escape 或 取消按钮来控制关闭
        }
    });

    function showPopup(x, y) {
        const root = ensureShadowRoot();
        if (!floatingPopup) {
            floatingPopup = document.createElement('div');
            Object.assign(floatingPopup.style, {
                position: 'fixed',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                width: '320px',
                fontFamily: 'sans-serif',
                display: 'none',
                pointerEvents: 'auto'
            });

            floatingPopup.innerHTML = `
                <style>
                    .popup-title { font-weight: bold; margin-bottom: 12px; font-size: 14px; color: #1a1a1a; display: flex; align-items: center; gap: 8px; }
                    .context-box { font-size: 11px; color: #666; margin-bottom: 8px; background: #f5f5f5; padding: 6px; border-radius: 4px; border: 1px solid #eee; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                    textarea { width: 100%; height: 80px; padding: 10px; border: 1px solid #007bff; border-radius: 6px; font-size: 13px; margin-bottom: 12px; box-sizing: border-box; resize: none; outline: none; }
                    .btn-group { display: flex; gap: 10px; justify-content: flex-end; }
                    .btn-cancel { padding: 6px 14px; font-size: 13px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer; color: #555; }
                    .btn-submit { padding: 6px 14px; font-size: 13px; border: none; border-radius: 6px; background: #007bff; color: white; cursor: pointer; font-weight: bold; }
                </style>
                <div class="popup-title">🪄 AI 代码助手</div>
                <div id="ctx" class="context-box"></div>
                <textarea id="ipt" placeholder="输入修改要求，Enter 提交..."></textarea>
                <div class="btn-group">
                    <button id="can" class="btn-cancel">取消</button>
                    <button id="sub" class="btn-submit">提交修改</button>
                </div>
            `;
            root.appendChild(floatingPopup);

            floatingPopup.querySelector('#can').onclick = hideUI;
            floatingPopup.querySelector('#sub').onclick = submitRequest;
            floatingPopup.querySelector('#ipt').onkeydown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    submitRequest();
                }
                if (e.key === 'Escape') hideUI();
            };
            // 阻止由于点击弹窗内部导致的选区消失触发逻辑
            floatingPopup.addEventListener('mousedown', (e) => e.stopPropagation());
        }

        // 如果已经显示了，不要反复重置内容，除非选区变了
        const isVisible = floatingPopup.style.display === 'block';
        if (!isVisible) {
            floatingPopup.style.display = 'block';
            floatingPopup.querySelector('#ipt').value = '';
        }

        floatingPopup.querySelector('#ctx').textContent = `已选中: "${selectedText.substring(0, 50)}..."`;

        // 动态定位
        let pTop = y + 15;
        let pLeft = x;

        if (pLeft + 320 > window.innerWidth) pLeft = window.innerWidth - 340;
        if (pTop + 200 > window.innerHeight) pTop = y - 210;

        floatingPopup.style.left = Math.max(10, pLeft) + 'px';
        floatingPopup.style.top = Math.max(10, pTop) + 'px';

        setTimeout(() => floatingPopup.querySelector('#ipt').focus(), 50);
    }

    function submitRequest() {
        const input = shadowRoot.querySelector('#ipt').value.trim();
        if (!input) return;

        chrome.runtime.sendMessage({
            action: 'TRIGGER_AI_EDIT',
            selected_code: selectedText,
            full_code: fullCode,
            instruction: input,
            url: window.location.href,
            title: document.title
        });

        hideUI();
    }

    function hideUI() {
        if (floatingPopup) floatingPopup.style.display = 'none';
        selectedText = "";
    }
})();
