// injector.js — DolphinMind Browser Extension content script
(function() {
    // 1. Set global marker so the web app can detect the extension
    const detail = { installed: true, extensionId: chrome.runtime.id, version: chrome.runtime.getManifest().version };
    window.__dolphinmind_extension = detail;
    // Also dispatch a custom event for apps that listen dynamically
    window.dispatchEvent(new CustomEvent('dolphinmind-extension-ready', { detail }));

    console.log(`🔌 DolphinMind Extension v${detail.version} detected (${detail.extensionId})`);

    // 2. Legacy: inject into #extId input if present
    function tryInject() {
        const inputField = document.getElementById('extId');
        if (inputField) {
            inputField.value = chrome.runtime.id;
            inputField.dispatchEvent(new Event('input'));
            inputField.style.backgroundColor = "#d4edda";
            inputField.style.color = "#155724";
            inputField.placeholder = "ID 已自动注入";
            return true;
        }
        return false;
    }

    if (!tryInject()) {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (tryInject() || attempts >= 5) {
                clearInterval(interval);
            }
        }, 500);
    }
})();