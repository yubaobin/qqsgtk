# OCR 图片识别系统

基于 PaddleOCR 的图片文字识别系统，前后端分离架构。

## 项目结构

- `backend/` — Python FastAPI 后端，PaddleOCR 中文识别
- `frontend/` — Vue 3 前端，图片上传与结果展示
- `start.sh` — 一键启动脚本（本地开发）
- `docker-compose.yml` — Docker 一键启动

## 快速开始

### 方式一：启动脚本（本地开发）

```bash
./start.sh
```

首次运行会自动创建虚拟环境并安装依赖。启动后：

- 前端页面: http://localhost:5173
- 后端 API: http://localhost:8000
- API 文档: http://localhost:8000/docs

其他命令：

```bash
./start.sh stop     # 停止所有服务
./start.sh status   # 查看服务状态
```

### 方式二：手动启动

#### 后端

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

#### 前端

```bash
cd frontend
npm install
npm run dev
```

打开 http://localhost:5173 即可使用。

开发环境下，前端通过 Vite 代理将 `/api/` 请求转发到后端 `http://localhost:8000`。

### 方式三：Docker Compose

```bash
docker compose up -d --build
```

启动后：

- 前端页面: http://localhost
- 后端 API: http://localhost:8000
- API 文档: http://localhost:8000/docs

停止：

```bash
docker compose down
```

> PaddleOCR 模型会在首次启动时自动下载，通过 Docker volume `paddle-models` 持久化缓存。

## API

| Method | Path | Description |
|--------|------|-------------|
| POST | /ocr | 上传图片，返回识别文本 |
| GET | /health | 健康检查 |

## 配置

前端通过环境变量 `VITE_API_BASE_URL` 自定义后端地址（默认 `/api`，使用 Vite 代理或 nginx 代理）。如需直连后端，在 `frontend/.env` 中设置：

```
VITE_API_BASE_URL=http://localhost:8000
```
