import asyncio
import json
import uuid
import websockets

async def handler(websocket):
    print(f"🔌 [{websocket.remote_address}] 浏览器插件已连接！")
    
    async def send_cmd(action, **kwargs):
        msg_id = str(uuid.uuid4())
        payload = {"id": msg_id, "action": action}
        payload.update(kwargs)
        
        print(f"\n[Agent] 发送指令 => {action}")
        # print(f"参数: {kwargs}")
        await websocket.send(json.dumps(payload))
        
        while True:
            response_str = await websocket.recv()
            response = json.loads(response_str)
            
            # 匹配返回的指令 ID
            if response.get("id") == msg_id:
                status = response.get("status")
                if status == "success":
                    data = response.get("data")
                    if action == "SCREENSHOT" and data:
                        print(f"[插件] ✅ 成功返回: [截图 Base64 数据, 长度 {len(data)}]")
                        import base64
                        with open("screenshot.jpg", "wb") as f:
                            f.write(base64.b64decode(data))
                        print("📸 截图已成功保存到当前目录下的 screenshot.jpg，快打开看看吧！")
                    else:
                        print(f"[插件] ✅ 成功返回: {data}")
                else:
                    print(f"[插件] ❌ 执行报错: {response.get('message')}")
                return response

    try:
        # ======= 测试剧本 =======
        print("\n🚀 开始执行测试剧本...")

        # 1. 打开网页并挂载 CDP
        await send_cmd("OPEN_AND_ATTACH", url="https://bbc.com")
        await asyncio.sleep(2) # 等待页面加载
        
        # 2. 用 JS 获取一下页面的标题
        await send_cmd("EXECUTE_SCRIPT", script="document.title")
        await asyncio.sleep(1)
        
        # 3. 页面滚动一下 (加大滚轮距离能明显看到效果)
        await send_cmd("SCROLL", deltaY=800)
        await asyncio.sleep(1)
        
        # 4. 获取一张截图
        await send_cmd("SCREENSHOT")

        print("\n🎉 测试流程执行完毕。保持连接中...")
        await websocket.wait_closed()
        
    except websockets.exceptions.ConnectionClosed:
        print("❌ 浏览器端断开了连接")

async def main():
    host = "127.0.0.1"
    port = 8765
    print(f"🤖 Agent 后端测试服务器启动于 ws://{host}:{port}")
    print("等待浏览器插件连接 (如果插件已经加载，它会自动重连)...\n")
    
    async with websockets.serve(handler, host, port):
        await asyncio.Future()  # 阻塞，永久运行

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n手动关闭了服务器")
