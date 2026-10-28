# 题库录入功能设计

## 意图

在现有 OCR 答题搜索系统上，新增手动录入题库的功能。录入的 Q&A 存到 SQLite 数据库，与 `question.json` 分开管理。查询时先查 `question.json`，没匹配到再查数据库。

## 数据流

```
用户搜索 → answer_engine.find_answers()
               ├─ 1. 查 question.json（只读，现有逻辑不变）
               └─ 2. 查 SQLite 数据库（新增，补充结果）

用户录入 → POST /questions → SQLite 数据库
用户编辑 → PUT /questions/:id
用户删除 → DELETE /questions/:id
用户查看列表 → GET /questions
```

## 数据库设计

**SQLite 文件**：`backend/data/questions.db`（Docker 中挂载 volume 持久化）

```sql
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    indexes TEXT NOT NULL,   -- 拼音首字母，必填
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

字段和 `question.json` 保持一致（question/answer/indexes），id 自增。

## 后端 API

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/questions` | 列出数据库中的题目（分页） |
| POST | `/questions` | 新增题目 |
| PUT | `/questions/{id}` | 编辑题目 |
| DELETE | `/questions/{id}` | 删除题目 |

搜索接口 `/answer` 不变，内部逻辑改为：先查 `question.json`，结果不足 10 条时再查数据库补充。

## 前端页面

从单页面改为两个页面，用简单的 hash 路由切换：

- **搜索页**（`#/`）：现有功能不变
- **录入页**（`#/admin`）：题目列表 + 新增/编辑表单 + 删除

## 文件改动

### 后端
- `backend/app/db.py`（新增）：SQLite 连接管理 + CRUD 操作
- `backend/app/answer_engine.py`（修改）：`find_answers` 查完 json 后补充查数据库
- `backend/app/main.py`（修改）：新增 4 个 CRUD API
- `backend/app/schemas.py`（修改）：新增请求/响应模型
- `backend/pyproject.toml`：无需改（sqlite3 是 Python 内置）

### 前端
- `frontend/src/main.ts`：改为简单的 hash 路由
- `frontend/src/App.vue`：改为路由容器 + 导航
- `frontend/src/pages/SearchPage.vue`（新增）：现有搜索逻辑迁移过来
- `frontend/src/pages/AdminPage.vue`（新增）：录入管理页面
- `frontend/src/composables/useQuestions.ts`（新增）：题目 CRUD 调用
- `frontend/src/utils/request.ts`：已有，复用

### Docker
- `docker-compose.yml`：新增 volume 挂载 `./backend/data` 持久化 SQLite
- `Dockerfile`：创建 `/app/backend/data` 目录

## 录入查重

录入时输入问题文本后，实时调用 `/answer` 接口查询是否已存在（匹配逻辑和搜索答案完全一致：先查 question.json，再查数据库）。前端展示已有匹配结果，提示用户避免重复录入。

## 非目标

- 不做用户认证/登录
- 不做 question.json 的导入导出
- 不做批量录入
