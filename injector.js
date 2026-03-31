// injector.js — DolphinMind Browser Extension content script
(function() {
    const extId = chrome.runtime.id;
    const extVersion = chrome.runtime.getManifest().version;

    // 1. Set a DOM attribute on <html> — DOM is shared between content script and page
    document.documentElement.setAttribute('data-dolphinmind-ext', extVersion);
    document.documentElement.setAttribute('data-dolphinmind-ext-id', extId);

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