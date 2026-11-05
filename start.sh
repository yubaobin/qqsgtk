#!/usr/bin/env bash
# 一键启动前后端服务（默认使用 Docker Compose）
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"
PID_DIR="$ROOT_DIR/.pids"
BACKEND_PID_FILE="$PID_DIR/backend.pid"
FRONTEND_PID_FILE="$PID_DIR/frontend.pid"

mkdir -p "$PID_DIR"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 日志函数（必须在最前面定义，避免与 macOS log 命令冲突）
info()  { echo -e "${GREEN}[start.sh]${NC} $1"; }
warn()  { echo -e "${YELLOW}[start.sh]${NC} $1"; }
error() { echo -e "${RED}[start.sh]${NC} $1"; }

# 检查 Docker 是否可用
has_docker() {
    command -v docker &>/dev/null && command -v docker-compose &>/dev/null
}

check_frontend_deps() {
    if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
        info "安装 frontend 依赖..."
        (cd "$FRONTEND_DIR" && npm install)
    fi
}

# Docker Compose 启动（默认方式）
docker_deploy() {
    info "使用 Docker Compose 启动服务..."
    cd "$ROOT_DIR"
    
    # 检查 Docker
    if ! has_docker; then
        error "Docker 或 docker-compose 未安装"
        error "请先安装 Docker Desktop: https://www.docker.com/products/docker-desktop"
        exit 1
    fi
    
    # 构建并启动
    docker compose build
    docker compose up -d
    
    info ""
    info "✅ Docker 容器已启动："
    info "   前端页面：http://localhost:8001"
    info "   API 文档：http://localhost:8001/api/docs"
    info "   健康检查：http://localhost:8001/api/health"
    info ""
    info "查看日志：docker compose logs -f"
    info "停止服务：./start.sh docker-stop"
}

docker_stop() {
    cd "$ROOT_DIR"
    docker compose down
    info "Docker 容器已停止"
}

docker_restart() {
    cd "$ROOT_DIR"
    docker compose restart
    info "Docker 容器已重启"
}

docker_status() {
    echo "=== Docker 容器状态 ==="
    docker compose ps
}

# 本地模式：直接启动前后端（无 Docker）
start_backend_local() {
    # 选择 Python 解释器
    if [ -f "$BACKEND_DIR/.venv/bin/python" ]; then
        PYTHON="$BACKEND_DIR/.venv/bin/python"
        info "使用虚拟环境 Python: $PYTHON"
    else
        PYTHON="/opt/miniconda3/bin/python"
        info "使用 conda Python: $PYTHON (请确保已安装 numpy<2.0)"
    fi
    
    # 先停止可能存在的旧进程
    pkill -f "uvicorn app.main:app" 2>/dev/null || true
    sleep 1
    rm -f "$BACKEND_PID_FILE"
    
    info "启动 backend (端口 8000)..."
    cd "$BACKEND_DIR"
    $PYTHON -m uvicorn app.main:app --host 0.0.0.0 --port 8000 &
    echo $! > "$BACKEND_PID_FILE"
    cd "$ROOT_DIR"
    sleep 2
    info "backend 已启动 (PID: $(cat "$BACKEND_PID_FILE"))"
}

start_frontend_local() {
    pkill -f "vite" 2>/dev/null || true
    sleep 1
    rm -f "$FRONTEND_PID_FILE"
    
    check_frontend_deps
    
    info "启动 frontend (端口 5173)..."
    cd "$FRONTEND_DIR"
    npm run dev &
    echo $! > "$FRONTEND_PID_FILE"
    cd "$ROOT_DIR"
    sleep 2
    info "frontend 已启动 (PID: $(cat "$FRONTEND_PID_FILE"))"
}

stop_service() {
    local name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid
        pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            info "停止 $name (PID: $pid)"
        fi
        rm -f "$pid_file"
    fi
    
    # 通过进程名停止（确保清理手动启动的进程）
    if [ "$name" = "backend" ]; then
        pkill -f "uvicorn app.main:app" 2>/dev/null && info "已停止所有 $name 进程" || true
    elif [ "$name" = "frontend" ]; then
        pkill -f "vite" 2>/dev/null && info "已停止所有 $name 进程" || true
    fi
}

show_status() {
    echo "=== 服务状态 ==="
    for name in backend frontend; do
        local pid_file="$PID_DIR/$name.pid"
        if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" 2>/dev/null; then
            info "$name: 运行中 (PID: $(cat "$pid_file"))"
        else
            warn "$name: 未运行"
        fi
    done
}

cleanup_local() {
    info "正在停止所有服务..."
    stop_service "backend" "$BACKEND_PID_FILE"
    stop_service "frontend" "$FRONTEND_PID_FILE"
    exit 0
}

# 主逻辑：默认使用 Docker Compose，--local 参数使用本地模式
MODE="${START_MODE:-docker}"
if [[ "${1:-}" == "--local" ]] || [[ "$MODE" == "local" ]]; then
    MODE="local"
fi

case "${1:-start}" in
    start)
        if [ "$MODE" = "docker" ]; then
            if has_docker; then
                docker_deploy
            else
                warn "Docker 不可用，切换到本地模式..."
                MODE="local"
                trap cleanup_local INT TERM
                start_backend_local
                start_frontend_local
                info ""
                info "✅ 服务已启动（本地模式）："
                info "   后端 API:  http://localhost:8000"
                info "   前端页面：http://localhost:5173"
                info "   API 文档：http://localhost:8000/docs"
                info ""
                info "按 Ctrl+C 停止所有服务"
                wait
            fi
        else
            trap cleanup_local INT TERM
            start_backend_local
            start_frontend_local
            info ""
            info "✅ 服务已启动（本地模式）："
            info "   后端 API:  http://localhost:8000"
            info "   前端页面：http://localhost:5173"
            info "   API 文档：http://localhost:8000/docs"
            info ""
            info "按 Ctrl+C 停止所有服务"
            wait
        fi
        ;;
    stop)
        if [ "$MODE" = "docker" ] && has_docker; then
            docker_stop
        else
            stop_service "backend" "$BACKEND_PID_FILE"
            stop_service "frontend" "$FRONTEND_PID_FILE"
            info "所有服务已停止"
        fi
        ;;
    restart)
        if [ "$MODE" = "docker" ] && has_docker; then
            docker_restart
        else
            info "正在重启服务..."
            stop_service "backend" "$BACKEND_PID_FILE"
            stop_service "frontend" "$FRONTEND_PID_FILE"
            sleep 2
            start_backend_local
            start_frontend_local
            info ""
            info "✅ 服务已重启（本地模式）："
            info "   后端 API:  http://localhost:8000"
            info "   前端页面：http://localhost:5173"
            info ""
            info "按 Ctrl+C 停止所有服务"
            wait
        fi
        ;;
    status)
        if [ "$MODE" = "docker" ] && has_docker; then
            docker_status
        else
            show_status
        fi
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
    local)
        MODE="local"
        trap cleanup_local INT TERM
        start_backend_local
        start_frontend_local
        info ""
        info "✅ 服务已启动（本地模式）："
        info "   后端 API:  http://localhost:8000"
        info "   前端页面：http://localhost:5173"
        info "   API 文档：http://localhost:8000/docs"
        info ""
        info "按 Ctrl+C 停止所有服务"
        wait
        ;;
    *)
        echo "用法：$0 {start|stop|restart|status|docker|docker-stop|docker-restart|docker-status|local}"
        echo ""
        echo "选项:"
        echo "  start          启动服务（默认使用 Docker Compose，无 Docker 时回退到本地模式）"
        echo "  stop           停止服务"
        echo "  restart        重启服务"
        echo "  status         查看服务状态"
        echo "  docker         使用 Docker Compose 启动"
        echo "  docker-stop    停止 Docker 容器"
        echo "  docker-restart 重启 Docker 容器"
        echo "  docker-status  查看 Docker 容器状态"
        echo "  local          使用本地模式启动（直接运行 Python/Node）"
        echo ""
        echo "环境变量:"
        echo "  START_MODE=docker|local  设置默认启动模式"
        exit 1
        ;;
esac
