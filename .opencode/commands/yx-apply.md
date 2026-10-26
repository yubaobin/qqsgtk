---
name: yx:apply
description: 实施变更中的任务，将设计转化为代码
tags:
  - workflow
  - artifacts
  - implementation
category: Workflow
---

<!-- managed-by: khala-spec -->

Use Skill tool to invoke khala-spec-apply.

---

## 后置步骤：检测前端页面并创建菜单

apply skill 完成所有任务（`state: "all_done"`）后，执行以下步骤：

### 1. 检测是否生成了前端页面

扫描本次变更中创建或修改的前端页面文件：

```bash
# 查看 apply 过程中变更的文件
git diff --name-only --diff-filter=AM HEAD

# 或直接扫描 views 目录
ls src/views/ frontend/src/views/ 2>/dev/null
```

**匹配规则**（任一命中即视为包含前端页面）：

- 新增或修改了 `**/views/**/*.vue` 文件（特别是 `index.vue`）
- 新增或修改了 `**/pages/**/*.vue` 文件
- tasks.md 中的任务描述涉及前端页面创建（如"新增 XX 页面"、"实现 XX 管理界面"）

如果**未检测到**前端页面，跳过后续步骤，按原流程提示 archive。

### 2. 询问用户

使用 **AskUserQuestion** 询问：

> "检测到本次变更包含前端页面。是否自动将这些页面注册为菜单？"

选项：
- **是，创建菜单** — 调用 khala-spec-create-menu skill
- **否，稍后手动执行** — 跳过，用户可稍后通过 `/yx:create-menu` 手动执行

### 3. 调用 khala-spec-create-menu skill

如果用户选择创建菜单，调用 **khala-spec-create-menu** skill：

该 skill 是原子操作，需要编排层（本 command）提供以下数据：

**前置准备**：

1. **连接数据库** — 调用 db-helper skill 连接开发数据库，获取 `--profile`
2. **查询基础数据** — 并行查询菜单树、角色列表、租户列表、应用列表
3. **收集菜单信息** — 从新增的 Vue 页面文件推断：
   - 目录名 → 菜单名称（camelCase 转中文）
   - 文件路径 → 组件路径（如 `views/bizComplainant/index.vue`）
   - 目录名 → 路由路径（camelCase 转 kebab-case）
   - 目录名 → 菜单编码（转 PascalCase）
4. **让用户确认** — 展示推断的菜单列表，用户可修正名称、选择父菜单、关联角色和租户

**逐条调用 skill**：对每条菜单数据调用 khala-spec-create-menu skill，传入：
- `profile`：数据库 profile
- `menu`：结构化菜单数据
- `role_ids`：用户选择的角色 ID
- `tenant_ids`：用户选择的租户 ID

**调用顺序**：先创建 parent 目录（type=0），再创建 child 菜单（type=1）。

### 4. 汇总报告

菜单创建完成后，与 apply 的完成报告合并展示：

```
## Implementation Complete

**Change:** <change-name>
**Progress:** 7/7 tasks complete ✓

### Menu Registration
- 成功：3 条菜单已注册
- 失败：0 条
  ✅ 投诉人管理 (BizComplainant) → ID: 201
  ✅ 审批管理 (ApprovalManagement) → ID: 202
  ✅ 工单管理 (WorkOrderManagement) → ID: 203

All tasks complete! You can archive this change with `/yx:archive`.
```
