#!/usr/bin/env bash
# 一键启动前后端服务
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"
PID_DIR="$ROOT_DIR/.pids"
BACKEND_PID_FILE="$PID_DIR/backend.pid"
FRONTEND_PID_FILE="$PID_DIR/frontend.pid"

mkdir -p "$PID_DIR"

# 使用 conda Python（paddleocr 安装在此环境中）
PYTHON="/opt/miniconda3/bin/python"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()   { echo -e "${GREEN}[start.sh]${NC} $1"; }
warn()  { echo -e "${YELLOW}[start.sh]${NC} $1"; }
error() { echo -e "${RED}[start.sh]${NC} $1"; }

check_frontend_deps() {
    if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
        log "安装 frontend 依赖..."
        (cd "$FRONTEND_DIR" && npm install)
    fi
}

start_backend() {
    # 先停止可能存在的旧进程
    pkill -f "uvicorn app.main:app" 2>/dev/null || true
    sleep 1
    rm -f "$BACKEND_PID_FILE"
    
    log "启动 backend (端口 8000)..."
    cd "$BACKEND_DIR"
    $PYTHON -m uvicorn app.main:app --host 0.0.0.0 --port 8000 &
    echo $! > "$BACKEND_PID_FILE"
    cd "$ROOT_DIR"
    sleep 2
    log "backend 已启动 (PID: $(cat "$BACKEND_PID_FILE"))"
}

start_frontend() {
    pkill -f "vite" 2>/dev/null || true
    sleep 1
    rm -f "$FRONTEND_PID_FILE"
    
    check_frontend_deps
    
    log "启动 frontend (端口 5173)..."
    cd "$FRONTEND_DIR"
    npm run dev &
    echo $! > "$FRONTEND_PID_FILE"
    cd "$ROOT_DIR"
    sleep 2
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
        fi
        rm -f "$pid_file"
    fi
    
    # 通过进程名停止（确保清理手动启动的进程）
    if [ "$name" = "backend" ]; then
        pkill -f "uvicorn app.main:app" 2>/dev/null && log "已停止所有 $name 进程" || true
    elif [ "$name" = "frontend" ]; then
        pkill -f "vite" 2>/dev/null && log "已停止所有 $name 进程" || true
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

docker_deploy() {
    log "开始构建并启动 Docker 容器..."
    cd "$ROOT_DIR"
    docker-compose build
    docker-compose up -d
    log ""
    log "✅ Docker 容器已启动："
    log "   前端页面：http://localhost:8001"
    log "   API 文档：http://localhost:8001/api/docs"
    log "   健康检查：http://localhost:8001/api/health"
}

docker_stop() {
    cd "$ROOT_DIR"
    docker-compose down
    log "Docker 容器已停止"
}

docker_restart() {
    cd "$ROOT_DIR"
    docker-compose restart
    log "Docker 容器已重启"
}

docker_status() {
    echo "=== Docker 容器状态 ==="
    docker-compose ps
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
        log "   前端页面：http://localhost:5173"
        log "   API 文档：http://localhost:8000/docs"
        log ""
        log "按 Ctrl+C 停止所有服务"
        wait
        ;;
    stop)
        stop_service "backend" "$BACKEND_PID_FILE"
        stop_service "frontend" "$FRONTEND_PID_FILE"
        log "所有服务已停止"
        ;;
    restart)
        log "正在重启服务..."
        stop_service "backend" "$BACKEND_PID_FILE"
        stop_service "frontend" "$FRONTEND_PID_FILE"
        sleep 2
        start_backend
        start_frontend
        log ""
        log "✅ 服务已重启："
        log "   后端 API:  http://localhost:8000"
        log "   前端页面：http://localhost:5173"
        log ""
        log "按 Ctrl+C 停止所有服务"
        wait
        ;;
    status)
        show_status
        ;;
    docker)
        docker_deploy
        ;;
    docker-stop)
        docker_stop
        ;;
    docker-restart)
        docker_restart
        ;;
    docker-status)
        docker_status
        ;;
    *)
        echo "用法：$0 {start|stop|restart|status|docker|docker-stop|docker-restart|docker-status}"
        exit 1
        ;;
esac
