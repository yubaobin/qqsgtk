---
name: yx:create-menu
description: 交互式或批量创建前端菜单配置，支持从 views 目录和设计文档自动生成
category: Workflow
tags:
  - menu
  - database
---

<!-- managed-by: khala-spec -->

交互式或批量创建前端菜单配置 — 编排模式选择、数据收集和用户交互，通过 `khala-spec-create-menu` skill 执行数据库写入。

---

## 触发条件

- 用户请求创建/注册菜单（如"创建菜单"、"注册前端页面到菜单"、"新增菜单"）
- 用户执行 `/yx:create-menu`

## 模式选择

启动时通过 **AskUserQuestion** 选择模式：

| 模式 | 说明 |
|------|------|
| **交互式** | 逐个手动创建菜单 |
| **批量 — 从 views 目录** | 扫描前端 views 目录，自动生成目录+菜单结构 |
| **批量 — 从设计文档** | 从设计文档中提取页面模块，自动生成菜单 |

---

## 公共前置步骤

无论选择哪种模式，先完成以下两步：

### 步骤 1：连接数据库

调用 `db-helper` skill 连接数据库：

```bash
khala-spec db connect --json
```

按 db-helper skill 的流程选择数据库环境。连接成功后记住 `--profile` 参数，后续步骤复用。

### 步骤 2：查询基础数据

并行查询以下数据：

```bash
# 现有菜单树（目录+菜单）
khala-spec db query "SELECT id, parent_id, name, code, type, sort FROM khala_sys_menu WHERE deleted = b'0' AND type IN (0, 1) ORDER BY parent_id, sort" --profile <profile> --json

# 角色列表
khala-spec db query "SELECT id, name, code FROM khala_sys_role WHERE deleted = b'0'" --profile <profile> --json

# 租户列表
khala-spec db query "SELECT id, name FROM khala_sys_tenant WHERE deleted = b'0'" --profile <profile> --json

# 应用列表
khala-spec db query "SELECT id, name, code FROM khala_sys_app WHERE deleted = b'0'" --profile <profile> --json
```

记住查询结果，供后续步骤使用。

---

## 交互式模式

### 步骤 3：交互式收集菜单信息

使用 **AskUserQuestion** 逐步收集以下信息：

#### 3.1 选择父菜单

从步骤 2 查询到的菜单树中列出可选的父菜单（type=0 的目录节点），让用户选择。

如果用户要创建的是顶层目录（无父菜单），提供"作为顶层目录"选项。

#### 3.2 菜单类型

| 选项 | type 值 | 说明 |
|------|---------|------|
| 目录 | 0 | 仅作为分组容器，无 component |
| 菜单 | 1 | 对应一个前端页面 |
| iframe | 3 | 内嵌外部页面 |

#### 3.3 菜单详细信息

**必填字段**：

| 字段 | 说明 | 示例 |
|------|------|------|
| 菜单名称 (name) | 前端显示的标题 | "审批管理" |
| 菜单编码 (code) | 唯一标识，建议大驼峰或短横线 | "ApprovalManagement" |
| 路由路径 (url) | 前端路由地址，以 `/` 开头 | "/approval-management" |

**菜单类型=1 时额外必填**：

| 字段 | 说明 | 示例 |
|------|------|------|
| 组件路径 (path) | Vue 组件路径，相对于项目根 | "views/approval-management/index.vue" |

**可选字段**：

| 字段 | 说明 | 默认值 |
|------|------|--------|
| 图标 (css) | 菜单图标 | NULL |
| 排序 (sort) | 显示顺序 | 自动递增 |
| 是否隐藏 (hidden) | 是否在菜单中隐藏 | 0（显示） |

#### 3.4 选择关联角色和租户

从步骤 2 查询到的角色列表中，用 **AskUserQuestion** (multiSelect) 选择需要授权的角色。

从步骤 2 查询到的租户列表中，用 **AskUserQuestion** (multiSelect) 选择需要关联的租户。

#### 3.5 自动推断组件路径

当用户选择"菜单"类型时，探测 views 目录并扫描可用页面组件：

```bash
# 探测 views 目录位置
ls src/views/ frontend/src/views/ 2>/dev/null
```

找到后列出子目录供选择。如果用户提供的组件路径不存在，给出警告。

### 步骤 4：展示菜单信息，确认后调用 skill

将收集到的菜单信息组装成结构化数据展示给用户确认。确认后调用 **khala-spec-create-menu** skill：

调用 skill 时传入：
- `profile`：步骤 1 获取的数据库 profile
- `menu`：{ name, code, url, path, type, parent_id, app_id, sort, hidden, css, tenant_visible }
- `role_ids`：步骤 3.4 选中的角色 ID 数组
- `tenant_ids`：步骤 3.4 选中的租户 ID 数组

skill 执行校验、插入、关联、验证，返回创建结果。

### 步骤 5：循环创建（可选）

询问用户是否继续创建下一条菜单。如果继续，回到步骤 3。

---

## 批量模式 — 从 views 目录

从已有的前端 views 目录结构自动生成菜单。

### 步骤 3：探测 views 目录

```bash
# 探测可能的位置
ls src/views/ frontend/src/views/ 2>/dev/null
```

找到后扫描子目录：

```bash
ls -d <views_dir>/*/ 2>/dev/null
```

### 步骤 4：生成菜单树结构

将目录结构转换为菜单数据列表：

```
views/
├── bizComplainant/       → 菜单 "投诉人管理" (type=1)
│   ├── index.vue
│   └── detail.vue        → 跳过
├── approvalManagement/   → 菜单 "审批管理" (type=1)
│   └── index.vue
└── dashboard/            → 跳过（已有菜单）
    └── index.vue
```

**转换规则**：
- 有 `index.vue` 的子目录 → 生成一条菜单（type=1）
- 目录名转中文菜单名：camelCase/PascalCase 按大写字母分词，每个词翻译
- 目录名转 code：保留 PascalCase（如 `bizComplainant` → `BizComplainant`）
- 路由路径：camelCase 转 kebab-case（如 `bizComplainant` → `/biz-complainant`）
- 组件路径：`views/<dirName>/index.vue`
- 与现有菜单 code 比对，跳过已存在的

将生成的菜单列表展示给用户，用 **AskUserQuestion** 确认：
- 展示完整列表预览（名称、code、路由、组件路径）
- 用户可以勾选要创建的项
- 用户可以修正自动推断的菜单名称

### 步骤 5：选择父菜单和关联信息

- 用 **AskUserQuestion** 选择这些菜单挂载到哪个父目录下
- 选择关联角色和租户（同交互式模式步骤 3.4）

### 步骤 6：按顺序调用 skill 创建

对每条菜单数据，按顺序调用 **khala-spec-create-menu** skill：

调用顺序：如果需要先创建父目录，先调用 skill 创建目录（type=0），再逐个创建子菜单（type=1）。

每次调用传入：
- `profile`：步骤 1 获取的数据库 profile
- `menu`：当前菜单的结构化数据
- `role_ids`：步骤 5 选中的角色 ID 数组
- `tenant_ids`：步骤 5 选中的租户 ID 数组

### 步骤 7：汇总报告

所有菜单创建完成后，汇总每条结果：

```
批量创建完成：
- 成功：4 条
- 失败：0 条
- 跳过（已存在）：1 条

创建详情：
  ✅ 投诉人管理 (BizComplainant) → ID: 201
  ✅ 审批管理 (ApprovalManagement) → ID: 202
  ✅ 工单管理 (WorkOrderManagement) → ID: 203
  ✅ 统计报表 (StatisticsReport) → ID: 204
  ⏭ dashboard → 已存在，跳过
```

---

## 批量模式 — 从设计文档

从设计文档中的页面/模块描述自动生成菜单。

### 步骤 3：定位设计文档

搜索设计文档：

1. `khala-spec/rd/design/archive/` — 归档设计文档
2. `khala-spec/rd/design/changes/` — 增量设计文档

在文档中查找页面/模块设计章节，匹配以下标题模式：
- `## 页面设计`、`## 前端页面`、`## 功能模块`
- `#### 页面列表`、`#### 模块划分`
- 包含路由、组件路径、页面名称等信息的表格或列表

### 步骤 4：提取页面结构

从设计文档中提取菜单信息。每条记录应包含：

| 字段 | 来源 | 示例 |
|------|------|------|
| name | 页面/模块中文名称 | "投诉人管理" |
| code | 模块编码或路由名称 | "BizComplainant" |
| url | 路由路径 | "/complaint-management/complainant" |
| path | 组件路径 | "views/bizComplainant/index.vue" |
| type | 目录 or 菜单 | 0 或 1 |
| parent | 所属模块 | "投诉管理" |

如果设计文档信息不完整，用 views 目录结构补充缺失的组件路径。

将提取结果展示给用户确认和修正。

### 步骤 5-7

同"批量模式 — 从 views 目录"的步骤 5-7。

---

## 技能调用关系

```
/yx:create-menu (编排层)
  ├── db-helper skill         → 连接数据库、查询基础数据
  └── khala-spec-create-menu skill  → 原子创建菜单（校验、插入、关联、验证）
```

## 数据库字段映射参考

从 `permission.js` 分析得到的菜单字段与前端路由映射关系：

| 数据库字段 | 前端用途 | 说明 |
|-----------|---------|------|
| `url` | `route.path` | 路由路径，如 `/approval-management` |
| `path` | `importComponent(path)` | 组件路径，如 `views/approval-management/index.vue` |
| `code` | `route.name` | 路由名称（唯一标识） |
| `name` | `meta.title` | 菜单显示标题 |
| `css` | `icon` | 菜单图标 |
| `type` | 路由类型 | 0=目录 1=菜单 3=iframe |
| `hidden` | `route.hidden` | bit(1)，b'0'=显示 b'1'=隐藏 |
| `tenant_visible` | 租户可见性 | bit(1)，b'0'=租户可见 b'1'=不可见 |

### 关联表说明

| 表名 | 用途 |
|------|------|
| `khala_sys_menu` | 菜单主表 |
| `khala_sys_role_menu` | 角色-菜单关联，控制哪些角色能看到此菜单 |
| `khala_sys_tenant_menu` | 租户-菜单关联，控制哪些租户能看到此菜单 |
| `khala_sys_package_menu` | 套餐-菜单关联（可选） |

## 注意事项

- 菜单创建后需要**重新登录**前端才能看到新菜单（菜单数据在登录时加载并缓存）
- `path` 字段存的是组件路径（如 `views/xxx/index.vue`），不是 Java 的 component
- 租户 ID 从查询结果中让用户选择，不再硬编码
