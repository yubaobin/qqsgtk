---
name: yx:propose
description: 创建一个提案变更并一次性生成所有工件（提案、规格、设计、任务）
tags:
  - workflow
  - artifacts
category: Workflow
---

<!-- managed-by: khala-spec -->

Use Skill tool to invoke khala-spec-propose.

---

## Post-step: Detect and Apply Database Changes

After the propose skill completes all artifact generation, execute the following steps:

### 1. Detect database content in design documents

Read the generated design.md file (path: `khala-spec/changes/<name>/design.md` or `khala-spec/rd/design/changes/<name>/design.md`) and check for database-related content.

**Match these heading patterns** (any match indicates database changes):

- `## 数据库设计`
- `## 核心数据模型`
- `#### 核心表设计`
- `##### *表（*）` — table definition heading, e.g. `##### 用户表（sys_user）`
- `### ADDED` / `### MODIFIED` followed by table definitions
- `**索引设计**` or `**约束设计**`

If **no** database content is detected, skip the remaining steps and finish.

### 2. Ask the user

Use **AskUserQuestion** to ask:

> "设计文档中检测到数据库表定义。是否立即应用这些变更到数据库？"

Options:
- **是，应用数据库变更** — invoke db-init skill in business table creation mode
- **否，稍后手动执行** — skip; user can run `/yx:db-init` manually later

### 3. Invoke db-init skill (business table creation mode)

If the user chooses to apply, invoke the **db-init** skill using **Business DDL (Mode B)**:

- The design document path is the design.md located in step 1
- db-init skill will automatically: connect to database → extract table definitions → generate DDL → confirm → create tables → verify
- Follow all db-init skill safety constraints (development environment only, execute DDL only after user confirmation)

**Note**: If propose processes multiple modules (batch topological order), each module's design.md must be checked and prompted separately. Process in module order.
