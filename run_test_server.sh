#!/bin/bash
set -e

echo "正在准备 Python 虚拟环境..."
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi

source venv/bin/activate
pip install websockets -q
echo "✅ 环境准备完毕，启动测试服务器..."

python test_server.py
