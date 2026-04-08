(() => {
    const SOURCE = 'dolphinmind-page-bridge';
    const KEYS = ['dolphindb_site_auth', 'dolphindb_sandbox_client_id', 'dolphindb_sandbox_config'];

    function emit(key, value) {
        window.postMessage({
            source: SOURCE,
            type: 'LOCAL_STORAGE_SYNC',
            key,
            value,
        }, '*');
    }

    function emitAll() {
        for (const key of KEYS) {
            emit(key, window.localStorage.getItem(key));
        }
    }

    const originalSetItem = window.localStorage.setItem.bind(window.localStorage);
    window.localStorage.setItem = function(key, value) {
        originalSetItem(key, value);
        if (KEYS.includes(key)) emit(key, value);
    };

    const originalRemoveItem = window.localStorage.removeItem.bind(window.localStorage);
    window.localStorage.removeItem = function(key) {
        originalRemoveItem(key);
        if (KEYS.includes(key)) emit(key, null);
    };

    emitAll();
    setTimeout(emitAll, 1000);
    setTimeout(emitAll, 3000);
})();
