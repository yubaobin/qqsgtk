# PaddleOCR 图片识别 API 设计文档

## Intent & Why

用户需要一个图片文字识别（OCR）系统，包含：
- **Backend**：Python 后端工程，基于 PaddleOCR 提供中文 OCR HTTP API
- **Frontend**：Vue 前端工程，提供图片上传与识别结果展示的 Web 界面

两个工程独立部署，前端通过 HTTP 调用后端 API。

## Goals

- Backend：FastAPI 提供 `POST /ocr` 接口，接收图片返回识别文本
- Frontend：Vue 3 Web 界面，支持图片上传、预览、展示识别结果
- 以中文识别为主（PaddleOCR 中文模型）
- 标准项目结构，便于长期维护

## Non-Goals

- 不做可视化标注图片输出（当前只返回纯文本）
- 不做用户认证/鉴权
- 不做多语言混合识别

## Anti-Goals

- 不依赖云服务 OCR API，全部本地推理
- 前后端不耦合为单体应用

## Constraints

- Backend：Python 3.9+，paddlepaddle、paddleocr、Pillow、fastapi、uvicorn
- Frontend：Vue 3 + TypeScript + Vite，Composition API + `<script setup>`
- 跨域：Backend 配置 CORS 允许 Frontend 访问
- 模型在服务启动时加载一次，常驻内存

## Approaches

### 整体架构

```
qqsgtk/
├── backend/          # Python FastAPI OCR 服务
├── frontend/         # Vue 3 前端应用
└── docs/             # 设计文档
```

### Backend 方案

```
backend/
├── pyproject.toml
├── README.md
├── .gitignore
├── app/
│   ├── __init__.py
│   ├── main.py             # FastAPI 入口 + CORS + 路由
│   ├── ocr_engine.py       # PaddleOCR 引擎封装
│   └── schemas.py          # 请求/响应模型
└── tests/
    └── __init__.py
```

**API 设计：**

```
POST /ocr
  Content-Type: multipart/form-data
  Body: file=<图片文件>

Response 200:
{
  "text": "全部文本（换行拼接）",
  "lines": ["第一行", "第二行"]
}

GET /health
Response 200: { "status": "ok" }
```

- PaddleOCR 初始化：`PaddleOCR(use_angle_cls=True, lang="ch")`
- 全局单例，启动时加载
- 用 Pillow 将上传字节流转 PIL Image 交给 PaddleOCR

### Frontend 方案

```
frontend/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── README.md
├── .gitignore
└── src/
    ├── main.ts
    ├── App.vue              # 根组件
    ├── components/
    │   ├── ImageUploader.vue   # 图片上传+预览组件
    │   └── ResultDisplay.vue   # 识别结果展示组件
    ├── composables/
    │   └── useOCR.ts           # OCR API 调用逻辑封装
    └── types/
        └── ocr.ts              # OCR 响应类型定义
```

**技术选型：**
- Vue 3 + TypeScript + `<script setup>`
- Vite 构建
- 原生 fetch 调用 API（无需额外 HTTP 库，保持轻量）
- 组件职责清晰：Uploader 负责上传，ResultDisplay 负责展示

**交互流程：**
1. 用户拖拽或选择图片 → ImageUploader 预览
2. 点击"识别" → useOCR 调用 `POST /ocr`
3. 返回结果 → ResultDisplay 展示文本（支持复制）

## How（已决定的部分）

- 前后端分离，独立运行
- Backend 端口 8000，Frontend 开发端口 5173
- Backend 配置 CORS 允许 `localhost:5173`
- Frontend 通过环境变量 `VITE_API_BASE_URL` 配置 API 地址（默认 `http://localhost:8000`）

## Left to the Builder

- 具体错误处理细节（不支持的图片格式、损坏文件）
- 日志级别与格式
- Frontend UI 样式细节（简洁实用即可）
