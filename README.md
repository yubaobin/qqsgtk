# OCR 图片识别系统

基于 PaddleOCR 的图片文字识别系统，前后端分离架构。

## 项目结构

- `backend/` — Python FastAPI 后端，PaddleOCR 中文识别
- `frontend/` — Vue 3 前端，图片上传与结果展示

## 快速开始

### 后端

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

### 前端

```bash
cd frontend
npm install
npm run dev
```

打开 http://localhost:5173 即可使用。

## API

| Method | Path | Description |
|--------|------|-------------|
| POST | /ocr | 上传图片，返回识别文本 |
| GET | /health | 健康检查 |
