// monaco_bridge.js
// Runs in the MAIN world to access monaco editor API directly
(function () {
    console.log("🌉 Monaco Bridge initialized in MAIN world");

    window.addEventListener('monaco-request-full-code', () => {
        try {
            if (window.monaco) {
                const editors = window.monaco.editor.getEditors();
                // Find active editor or the one with focus
                const activeEd = editors.find(ed => ed.hasTextFocus()) || editors[0];
                if (activeEd) {
                    window.dispatchEvent(new CustomEvent('monaco-response-full-code', {
                        detail: { fullCode: activeEd.getValue() }
                    }));
                }
            } else {
                console.warn("Bridge: window.monaco not found");
            }
        } catch (e) {
            console.warn("Bridge: Failed to capture full code", e);
        }
    });
})();
