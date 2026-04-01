// injector.js — DolphinMind Browser Extension content script
(function() {
    // 1. Set global marker so the web app can detect the extension
    const detail = { installed: true, extensionId: chrome.runtime.id, version: chrome.runtime.getManifest().version };
    window.__dolphinmind_extension = detail;
    // Also dispatch a custom event for apps that listen dynamically
    window.dispatchEvent(new CustomEvent('dolphinmind-extension-ready', { detail }));

    console.log(`🔌 DolphinMind Extension v${detail.version} detected (${detail.extensionId})`);

    // 2. Sync clientId + sandbox config from webpage localStorage → background script
    function syncClientId() {
        const pageClientId = localStorage.getItem('dolphindb_sandbox_client_id');
        if (pageClientId) {
            console.log(`🔌 [Injector] Found page clientId: ${pageClientId}, syncing to background...`);
            chrome.runtime.sendMessage({ action: 'SYNC_CLIENT_ID', clientId: pageClientId }, (resp) => {
                if (chrome.runtime.lastError) {
                    console.warn(`🔌 [Injector] Sync clientId failed:`, chrome.runtime.lastError.message);
                } else {
                    console.log(`🔌 [Injector] clientId synced:`, resp);
                }
            });
        }
    }

    function syncSandboxConfig() {
        try {
            const raw = localStorage.getItem('dolphindb_sandbox_config');
            if (!raw) return;
            const cfg = JSON.parse(raw);
            if (cfg && cfg.host && cfg.port && cfg.enabled) {
                console.log(`🔌 [Injector] Found sandbox config: ${cfg.host}:${cfg.port}, syncing to background...`);
                chrome.runtime.sendMessage({
                    action: 'SYNC_SANDBOX_CONFIG',
                    host: cfg.host,
                    port: parseInt(cfg.port),
                    user: cfg.username || '',
                    pass: cfg.password || '',
                }, (resp) => {
                    if (chrome.runtime.lastError) {
                        console.warn(`🔌 [Injector] Sync sandbox config failed:`, chrome.runtime.lastError.message);
                    } else {
                        console.log(`🔌 [Injector] sandbox config synced:`, resp);
                    }
                });
            }
        } catch (e) {
            console.warn(`🔌 [Injector] Failed to parse sandbox config:`, e);
        }
    }

    // Try immediately and also after a short delay (page may set it lazily)
    syncClientId();
    syncSandboxConfig();
    setTimeout(() => { syncClientId(); syncSandboxConfig(); }, 2000);

    // Listen for the page setting clientId/config dynamically
    window.addEventListener('storage', (e) => {
        if (e.key === 'dolphindb_sandbox_client_id' && e.newValue) {
            console.log(`🔌 [Injector] clientId changed in localStorage: ${e.newValue}`);
            chrome.runtime.sendMessage({ action: 'SYNC_CLIENT_ID', clientId: e.newValue });
        }
        if (e.key === 'dolphindb_sandbox_config' && e.newValue) {
            console.log(`🔌 [Injector] sandbox config changed in localStorage`);
            syncSandboxConfig();
        }
    });

    // 3. Legacy: inject into #extId input if present
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