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

    // 3. Bridge: allow webpage to execute DDB scripts via postMessage
    window.addEventListener('message', (e) => {
        if (e.source !== window || !e.data) return;

        // --- Action: Execute Script ---
        if (e.data.type === 'dolphinmind-execute') {
            const { requestId, script } = e.data;
            if (!script || !requestId) return;
            console.log(`[Injector] DDB_EXECUTE bridge: requestId=${requestId}, script_len=${script.length}`);
            chrome.runtime.sendMessage({ action: 'DDB_EXECUTE', script }, (resp) => {
                const runtimeError = chrome.runtime.lastError;
                const isStatusSuccess = resp && resp.status === 'success';
                
                console.log(`[Injector] DDB_EXECUTE result: runtimeError=${runtimeError?.message}, isStatusSuccess=${isStatusSuccess}, resp=`, resp);
                
                window.postMessage({
                    type: 'dolphinmind-execute-result',
                    requestId,
                    success: !runtimeError && isStatusSuccess,
                    // If status is success, result is in resp.data.result
                    data: (resp?.data && resp.data.result !== undefined) ? String(resp.data.result) : '',
                    // Error is in runtimeError, or resp.message if status is error
                    error: runtimeError?.message || (resp?.status === 'error' ? resp.message : ''),
                }, '*');
            });
        }

        // --- Action: Manual Reconnect ---
        if (e.data.type === 'dolphinmind-connect') {
            console.log(`[Injector] DDB_CONNECT requested from page...`);
            syncSandboxConfig(); // This triggers background connection logic
        }
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