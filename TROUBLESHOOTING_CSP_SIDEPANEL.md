# Chrome 插件侧边栏 (Side Panel) 与 CSP 踩坑指南

本指南记录了在开发“AI Agent Debugger Host (Pro)”插件过程中，关于侧边栏功能无法触发、没有任何报错时的核心原理及修复方法，供后续迭代时避坑。

## 场景回看：为什么按钮点击没反应？也没有报错？

当我们在原生 Chrome 插件环境中（无论是侧边栏 `sidepanel.html` 还是弹窗 `popup.html`）写入看似完全正常的 HTML 按钮和事件交互时，可能会发现：
- 鼠标点击按钮**完全没有反应**。
- 按下按钮后**没有任何日志输出**。
- 按下 F12 控制台里**没有看到红色的语法错误**（如果你不是对着侧边栏邮件“检查”，全局控制台里看不到拦截信息）。

这就是 Chrome Extension Manifest V3 中**最严苛的 CSP (Content Security Policy) 的静默拦截防御机制**导致的。

---

## 避坑核心原理 (Manifest V3 强制规范)

### ❌ 陷阱 1：内联脚本属性 (Inline Attributes) 绝对禁止
在普通的网页开发中，我们习惯这样写：
```html
<button onclick="doSomething()">点击我</button>
```
**原因：**
Manifest V3 彻底禁用了内联执行能力，因为这极易成为 XSS (跨站脚本攻击) 的温床。Chrome 的底层安全机制会直接将被打上 `onclick` 的元素判定为危险对象，**将该 onclick 属性直接剔除或忽略执行**。

### ❌ 陷阱 2：内联脚本块 (Inline Script Blocks) 绝对禁止
当开发者退而求其次，认为只要不用 `onclick`，在 HTML 里开一个 `<script>` 代码块然后绑定事件总行了吧？
```html
<body>
    <button id="btn">点击我</button>
    <script>
        document.getElementById('btn').addEventListener('click', doSomething);
    </script>
</body>
```
**原因：**
这依然**被判断为安全违规**！Chrome 不允许在插件相关的 HTML (无论是 popup, sidepanel 还是 option 页面) 内部硬编码任何 `<script>...</script>` 内容体。当渲染器解析到这个内联 block 时，里面的 JS 引擎会被浏览器强制切断，导致里面的所有的初始化事件代码都随之作废。

---

## ✅ 标准的解决实现思路 (分离式架构)

想要在 Chrome 插件原生页面里加载脚本，**唯一的合法途径是彻底将视图层 (HTML) 与逻辑层 (JS) 分离**：

1. **所有的前端 UI 留存在 HTML 中，不允许出现任何 `onclick`**：
```html
<!-- sidepanel.html -->
<div class="card">
    <button id="btn-attach">🔗 接管当前所在网页</button>
</div>

<!-- 仅允许通过 src 的形式通过沙箱安全验证外链 JS 文件 -->
<script src="sidepanel.js"></script>
```

2. **新建一个专属的外部 JS 脚本独立管理生命周期**：
```javascript
// sidepanel.js
// 必须等待 DOMContentLoaded 以免获取不到按钮 id
document.addEventListener('DOMContentLoaded', () => {
    
    // 监听绑定
    document.getElementById('btn-attach').addEventListener('click', connectCurrentTab);
    
});

async function connectCurrentTab() {
    // 处理自己的逻辑..
}
```

---

## 📌 其他容易忽略的 Chrome API 开发陷阱

除了 CSP 外，操作侧边栏获取当前聚焦对象的坑也需要记录：

### 标签页焦点上下文 (`currentWindow` 陷阱)
当我们想从 `sidepanel.js` 获取用户眼前的那个真实的浏览器窗口标签页时：

- **错误写法**：`chrome.tabs.query({ active: true, currentWindow: true })`
  在 Chrome 内核理解中，“侧边栏”就是一个小小的 `currentWindow`，所以它实际上查询的是“侧边栏窗口里的标签页”，结果必然为空，导致 `tab` 永远返回 `undefined`。
- **正确写法**：`chrome.tabs.query({ active: true, lastFocusedWindow: true })`
  通过 `lastFocusedWindow`，可以直接让 Chrome 向上一级，去获取用户刚才离开并点击你侧边栏的那个巨大且真实的“宿主浏览器窗口 (Host Window)”。

### 系统特殊协议页强隔离
试图在以下地址使用 `chrome.debugger.attach` 将**强行抛出通信报错**并可能导致后台脚本假死：
- `chrome://extensions`、`chrome://settings` 等。
- `edge://...`、`about:blank` 以及 Chrome 网上应用店。
**修复动作**：务必在调用 CDP 之前，用 `tab.url.startsWith('chrome://')` 提前拦截它并抛出人话友好的日志错误提示。
