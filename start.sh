#!/usr/bin/env bash
# 一键启动前后端服务
# 用法: ./start.sh        — 启动前后端（前台运行，Ctrl+C 停止）
#       ./start.sh stop   — 停止所有服务
#       ./start.sh status — 查看服务状态

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"
PID_DIR="$ROOT_DIR/.pids"
BACKEND_PID_FILE="$PID_DIR/backend.pid"
FRONTEND_PID_FILE="$PID_DIR/frontend.pid"

mkdir -p "$PID_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()   { echo -e "${GREEN}[start.sh]${NC} $1"; }
warn()  { echo -e "${YELLOW}[start.sh]${NC} $1"; }
error() { echo -e "${RED}[start.sh]${NC} $1"; }

# 检查命令是否存在
check_cmd() {
    if ! command -v "$1" &>/dev/null; then
        error "未找到命令: $1，请先安装"
        exit 1
    fi
}

# 检查 backend 虚拟环境
check_backend_env() {
    if [ ! -d "$BACKEND_DIR/.venv" ]; then
        log "创建 backend 虚拟环境..."
        python3 -m venv "$BACKEND_DIR/.venv"
        log "安装 backend 依赖（首次可能需要几分钟）..."
        "$BACKEND_DIR/.venv/bin/pip" install -e "$BACKEND_DIR[dev]"
    fi
}

# 检查 frontend 依赖
check_frontend_deps() {
    if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
        log "安装 frontend 依赖..."
        (cd "$FRONTEND_DIR" && npm install)
    fi
}

start_backend() {
    if [ -f "$BACKEND_PID_FILE" ] && kill -0 "$(cat "$BACKEND_PID_FILE")" 2>/dev/null; then
        warn "backend 已在运行 (PID: $(cat "$BACKEND_PID_FILE"))"
        return 0
    fi

    check_cmd python3
    check_backend_env

    log "启动 backend (端口 8000)..."
    cd "$BACKEND_DIR"
    .venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000 &
    echo $! > "$BACKEND_PID_FILE"
    cd "$ROOT_DIR"
    log "backend 已启动 (PID: $(cat "$BACKEND_PID_FILE"))"
}

start_frontend() {
    if [ -f "$FRONTEND_PID_FILE" ] && kill -0 "$(cat "$FRONTEND_PID_FILE")" 2>/dev/null; then
        warn "frontend 已在运行 (PID: $(cat "$FRONTEND_PID_FILE"))"
        return 0
    fi

    check_cmd npm
    check_frontend_deps

    log "启动 frontend (端口 5173)..."
    cd "$FRONTEND_DIR"
    npm run dev &
    echo $! > "$FRONTEND_PID_FILE"
    cd "$ROOT_DIR"
    log "frontend 已启动 (PID: $(cat "$FRONTEND_PID_FILE"))"
}

stop_service() {
    local name="$1"
    local pid_file="$2"

    if [ -f "$pid_file" ]; then
        local pid
        pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "停止 $name (PID: $pid)"
        else
            warn "$name 进程不存在 (PID: $pid)"
        fi
        rm -f "$pid_file"
    else
        warn "$name 未运行"
    fi
}

show_status() {
    echo "=== 服务状态 ==="
    for name in backend frontend; do
        local pid_file="$PID_DIR/$name.pid"
        if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" 2>/dev/null; then
            log "$name: 运行中 (PID: $(cat "$pid_file"))"
        else
            warn "$name: 未运行"
        fi
    done
}

cleanup() {
    log "正在停止所有服务..."
    stop_service "backend" "$BACKEND_PID_FILE"
    stop_service "frontend" "$FRONTEND_PID_FILE"
    exit 0
}

case "${1:-start}" in
    start)
        trap cleanup INT TERM
        start_backend
        start_frontend
        log ""
        log "✅ 服务已启动："
        log "   后端 API:  http://localhost:8000"
        log "   前端页面:  http://localhost:5173"
        log "   API 文档:  http://localhost:8000/docs"
        log ""
        log "按 Ctrl+C 停止所有服务"
        wait
        ;;
    stop)
        stop_service "backend" "$BACKEND_PID_FILE"
        stop_service "frontend" "$FRONTEND_PID_FILE"
        log "所有服务已停止"
        ;;
    status)
        show_status
        ;;
    *)
        echo "用法: $0 {start|stop|status}"
        exit 1
        ;;
esac
