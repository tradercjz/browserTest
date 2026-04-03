// injector.js — DolphinMind Browser Extension content script
(function() {
    const extId = chrome.runtime.id;
    const extVersion = chrome.runtime.getManifest().version;

    // 1. Set a DOM attribute on <html> — DOM is shared between content script and page
    document.documentElement.setAttribute('data-dolphinmind-ext', extVersion);
    document.documentElement.setAttribute('data-dolphinmind-ext-id', extId);

    console.log(`🔌 DolphinMind Extension v${extVersion} detected (${extId})`);

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

    // 3. Bridge: allow webpage to execute DDB scripts via CustomEvent
    window.addEventListener('dolphinmind-execute', (e) => {
        const { requestId, script } = e.detail || {};
        if (!script || !requestId) return;
        chrome.runtime.sendMessage({ action: 'DDB_EXECUTE', script }, (resp) => {
            const error = chrome.runtime.lastError;
            window.dispatchEvent(new CustomEvent('dolphinmind-execute-result', {
                detail: {
                    requestId,
                    success: !error && resp && !resp.error,
                    data: resp?.result !== undefined ? String(resp.result) : (resp?.data ? String(resp.data) : ''),
                    error: error?.message || resp?.error || resp?.message || '',
                }
            }));
        });
    });

    // 4. Legacy: inject into #extId input if present
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