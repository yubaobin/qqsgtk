# OCR 图片识别 & 答案查找系统

基于 PaddleOCR 的图片文字识别和问题答案匹配系统。

## 功能特性

- **图片 OCR 识别**：支持 PNG/JPG/JPEG 格式，粘贴或直接上传
- **智能标点过滤**：自动将中英文标点替换为空格，不影响匹配
- **模糊匹配答案**：支持精确、归一化、包含、相似度（LCS）四级匹配
- **多结果返回**：一次返回最多 10 条匹配答案
- **实时搜索**：输入框内容变化 300ms 后自动查询

## 快速开始

### 方式一：Docker 部署（推荐）

```bash
# 构建并启动容器
./start.sh docker

# 查看容器状态
./start.sh docker-status

# 查看日志
docker-compose logs -f

# 重启容器
./start.sh docker-restart

# 停止容器
./start.sh docker-stop
```

访问方式（支持多种）：
- **本地访问**：http://localhost
- **局域网 IP**：http://192.168.x.x（你的电脑局域网 IP）
- **域名访问**：http://your-domain.com（需配置 DNS 指向服务器 IP）
- **带路径前缀**：http://localhost/qqsgtk（见下方"自定义路径前缀"）
- **后端 API**：http://localhost:8000
- **API 文档**：http://localhost:8000/docs

### 自定义路径前缀

默认情况下，应用部署在根路径 `/`。如需部署在子路径（如 `/qqsgtk`）：

```bash
# 方法 1：修改 .env 文件（推荐）
echo "VITE_BASE_PATH=/qqsgtk" > .env
./start.sh docker

# 方法 2：临时覆盖环境变量
VITE_BASE_PATH=/qqsgtk ./start.sh docker
```

部署后访问：
- 前端页面：http://localhost/qqsgtk
- API 自动代理：http://localhost/qqsgtk/api/answer → http://localhost:8000/answer

**恢复默认（根路径）：**
```bash
echo "VITE_BASE_PATH=/" > .env
./start.sh docker
```

### 方式二：本地开发模式

```bash
# 启动服务（前后端）
./start.sh

# 重启服务
./start.sh restart

# 停止服务
./start.sh stop

# 查看状态
./start.sh status
```

访问：
- 前端页面：http://localhost:5173
- 后端 API：http://localhost:8000
- API 文档：http://localhost:8000/docs

## 项目结构

```
.
├── backend/                 # FastAPI 后端
│   ├── app/
│   │   ├── main.py         # API 路由
│   │   ├── ocr_engine.py   # PaddleOCR 引擎
│   │   ├── answer_engine.py # 答案匹配引擎
│   │   └── schemas.py      # Pydantic 模型
│   ├── tests/              # 单元测试
│   ├── Dockerfile
│   └── pyproject.toml
├── frontend/               # Vue 3 + Element Plus 前端
│   ├── src/
│   │   ├── App.vue        # 主页面
│   │   ├── composables/   # useOCR, useAnswer
│   │   └── types/         # TypeScript 类型
│   ├── Dockerfile
│   └── nginx.conf
├── docker-compose.yml      # Docker 编排
├── start.sh                # 一键启动脚本
└── question.json           # 题库 (4955 条 Q&A)
```

## API 接口

### POST /ocr

上传图片识别文字

```bash
curl -X POST http://localhost:8000/ocr \
  -F "file=@image.png"
```

响应：
```json
{
  "text": "三国演义是谁的著作",
  "lines": ["三国演义是谁的著作"]
}
```

### POST /answer

根据问题文本模糊匹配答案

```bash
curl -X POST http://localhost:8000/answer \
  -H "Content-Type: application/json" \
  -d '{"question": "三国演义是谁的著作"}'
```

响应：
```json
{
  "results": [
    {"question": "三国演义是谁的著作", "answer": "罗贯中"},
    {"question": "《三国演义》共有多少回", "answer": "一百二十回"}
  ]
}
```

### GET /health

健康检查

```bash
curl http://localhost:8000/health
```

响应：
```json
{"status": "ok"}
```

## 匹配策略

`/answer` 接口使用四级模糊匹配（按优先级）：

1. **精确匹配**：原始文本完全相等
2. **归一化匹配**：忽略标点、大小写后相等
3. **包含匹配**：双向子串包含
4. **相似度匹配**：最长公共子串 (LCS) 占比 ≥ 50%

结果去重后返回最多 10 条。

## 技术栈

| 组件 | 技术 |
|------|------|
| 后端 | Python 3.10, FastAPI, PaddleOCR, PaddlePaddle |
| 前端 | Vue 3, TypeScript, Element Plus, Vite |
| 部署 | Docker, Docker Compose, Nginx |
| 测试 | pytest, vitest |

## 开发

### 后端

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --reload
```

运行测试：
```bash
pytest
```

### 前端

```bash
cd frontend
npm install
npm run dev
```

构建：
```bash
npm run build
```

## 注意事项

1. **PaddleOCR 模型下载**：首次运行会自动下载模型到 `~/.paddleocr/whl/`
2. **端口占用**：确保 8000（后端）、80/5173（前端）未被占用
3. **Docker 内存**：建议至少分配 2GB 内存给 Docker
4. **题道路径**：`question.json` 需位于项目根目录

## License

MIT
