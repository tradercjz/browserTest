// overlay.js

(function () {
    const OVERLAY_ID = "infinisynapse-ai-overlay";
    const BANNER_ID = "infinisynapse-ai-banner";

    // Prevent multiple injections
    if (document.getElementById(OVERLAY_ID)) return;

    // 1. Create the blue overlay
    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 150, 255, 0.15)", // Light blue transparent
        pointerEvents: "none", // VERY IMPORTANT: Let clicks pass through
        zIndex: "2147483646", // Just under max z-index
        transition: "box-shadow 0.3s ease",
        boxShadow: "inset 0 0 40px rgba(0, 150, 255, 0.5)",
        border: "2px solid rgba(0, 150, 255, 0.8)",
        boxSizing: "border-box"
    });

    // 2. Create the banner
    const banner = document.createElement("div");
    banner.id = BANNER_ID;
    Object.assign(banner.style, {
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        color: "#333",
        padding: "10px 20px",
        borderRadius: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: "2147483647", // Max z-index
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontSize: "14px",
        fontWeight: "500",
        border: "1px solid #ddd"
    });

    // Dot indicator
    const dot = document.createElement("div");
    Object.assign(dot.style, {
        width: "10px",
        height: "10px",
        backgroundColor: "#ff4d4f",
        borderRadius: "50%",
        animation: "infinisynapse-pulse 1.5s infinite"
    });

    // Animation for the dot
    if (!document.getElementById("infinisynapse-styles")) {
        const style = document.createElement("style");
        style.id = "infinisynapse-styles";
        style.textContent = `
      @keyframes infinisynapse-pulse {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 77, 79, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 77, 79, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 77, 79, 0); }
      }
    `;
        document.head.appendChild(style);
    }

    // Text
    const text = document.createElement("span");
    text.innerText = "DolphinMind is browsing...";

    // Take over button
    const button = document.createElement("button");
    button.innerText = "Take over";
    Object.assign(button.style, {
        backgroundColor: "#111",
        color: "white",
        border: "none",
        padding: "6px 14px",
        borderRadius: "16px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "bold",
        transition: "background-color 0.2s"
    });

    button.addEventListener("mouseover", () => button.style.backgroundColor = "#333");
    button.addEventListener("mouseout", () => button.style.backgroundColor = "#111");

    // Handle take over click
    button.addEventListener("click", () => {
        // Send message to background script to detach debugger
        chrome.runtime.sendMessage({ action: "TAKE_OVER" });
    });

    banner.appendChild(dot);
    banner.appendChild(text);
    banner.appendChild(button);

    // Add to DOM
    document.documentElement.appendChild(overlay);
    document.documentElement.appendChild(banner);

})();
