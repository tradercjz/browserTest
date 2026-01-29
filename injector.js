// injector.js
(function() {
    console.log("🔌 插件注入脚本已启动...");

    function tryInject() {
        const inputField = document.getElementById('extId');
        
        if (inputField) {
            // 填入 ID
            inputField.value = chrome.runtime.id;
            // 触发事件让网页知道值变了
            inputField.dispatchEvent(new Event('input'));
            
            // 样式反馈
            inputField.style.backgroundColor = "#d4edda";
            inputField.style.color = "#155724";
            inputField.placeholder = "ID 已自动注入";
            
            console.log(`✅ ID 已注入: ${chrome.runtime.id}`);
            return true;
        }
        return false;
    }

    // 尝试 1：立即执行
    if (!tryInject()) {
        // 尝试 2：如果失败，设置一个定时器每 500ms 试一次，最多试 5 次
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            console.log(`正在寻找输入框 (第 ${attempts} 次)...`);
            if (tryInject() || attempts >= 5) {
                clearInterval(interval);
            }
        }, 500);
    }
})();