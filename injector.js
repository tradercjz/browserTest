// injector.js — DolphinMind Browser Extension content script
(function() {
    const extId = chrome.runtime.id;
    const extVersion = chrome.runtime.getManifest().version;

    // 1. Notify page via postMessage (works regardless of CSP; content script world is isolated)
    // Send immediately + repeat a few times to handle React hydration race
    const msg = { type: 'DOLPHINMIND_EXTENSION_READY', installed: true, extensionId: extId, version: extVersion };
    window.postMessage(msg, '*');
    let count = 0;
    const iv = setInterval(() => {
        window.postMessage(msg, '*');
        if (++count >= 5) clearInterval(iv);
    }, 500);

    console.log(`🔌 DolphinMind Extension v${extVersion} detected (${extId})`);

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