---
name: yx:require-from-code
description: 逆向需求生成工作流（需求人员角色）— 从存量代码全量逆向分析生成需求规格草稿。基于代码行为层（非命名/注释）提取业务能力、实体、API
  清单，通过 wiki 知识库做"专业术语→行业术语"反向对标。生成与 /yx:require 同构的需求规格草稿（默认 v1.0.0 现状基线版本），由
  /yx:require-archive 接管归档
tags:
  - workflow
  - yx-sdd
  - requirements
  - reverse
  - legacy
category: Workflow
---

<!-- managed-by: khala-spec -->

## 触发场景

- 用户提到"逆向需求"、"需求基线"、"存量项目需求"时 MUST 触发
- 用户输入 `/yx:require-from-code` 时 MUST 触发
- 用户要求"从代码生成需求文档"时 MUST 触发

## 不要触发

- 不要用于新建项目需求（用 `/yx:require`）
- 不要用于需求评审（用 `/yx:require-review`）
- 不要用于需求归档（用 `/yx:require-archive`）

## 执行角色

需求人员（产品经理/需求分析师）

## 执行粒度

每次需要建立存量项目需求基线时执行一次（无文档的存量项目 / 团队交接 / 安全审计 / 合规检查）

## 前置条件

- 项目已部署 khala-spec 工具环境
- 目标项目是"已存留项目"（代码已固定，非新项目）
- 可选：项目已有 wiki 知识库（强烈推荐）

## 核心目标

将存量代码转化为结构化的需求规格文档（"现状基线"），建立业务能力的真实描述，确保需求文档与代码实际行为一致。产出与 `/yx:require` 同构的需求规格草稿（`project-overview.md` / `feature-list.md` / `$VERSION`-功能域.md）+ 逆向特有附属物（`codebase-evidence.md` / `terminology-mapping.md`）。

---

## 顶层设计原则（来自 2026-06-23 用户明确）

- **骨架同构**：逆向产物的章节结构**完全沿用正向产物结构**，不允许自行发明章节
- **内容循证**：章节内容用逆向证据（代码扫描、AST、Controller 枚举等）填充，但**形式遵循正向模板**
- **证据外挂**：逆向过程中收集的代码证据（codebase-evidence / terminology-mapping / liveness-report 等）作为附属物单独保留，**不侵入主文档骨架**

## 防御约束（来自 SKILL.md P0 约束）

- **章节白名单**：`project-overview.md` 仅允许 5 个二级章节（按序）：`项目信息` / `业务背景` / `功能架构` / `约束条件` / `术语表`。其他章节（如"模块清单"、"质量属性"、"服务/API 实现"）MUST 移到附属文件
- **H1 标题强制命名**：`project-overview.md` H1 MUST 为 `# 项目需求概览 — [项目名]`（与正向模板 1:1），禁止变体
- **主文档零证据化**：`project-overview.md` / `$VERSION-{domain}.md` / `feature-list.md` MUST NOT 包含代码证据（文件路径、行号、类名、注解、HTTP 路径、表名）。代码证据统一记录在 `codebase-evidence.md`，主文档通过 `BC-XXX` 反向引用
- **默认版本号固定 `v1.0.0`**：不指定 `--version` 时固定使用 `v1.0.0` 作为逆向基线版本号，**禁止**从 build config 自动识别

---

## 命令参数

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `--domain` | 限定执行某业务域（按业务域过滤，非 scope / end） | — |
| `--version=vX.Y.Z` | 显式指定逆向基线版本号（必须匹配 `v\d+\.\d+\.\d+`） | **`v1.0.0`**（固定默认） |
| `--grill=off/light/normal/deep` | 拷问模式（4 维度，结果写入 codebase-evidence.md） | off |
| `--quick` | 快速模式（跳过审阅/归档） | off |
| `--baseline-strategy=unified/per-repo` | 基线策略（多仓库场景下聚合方式） | unified |
| `--ends=auto/comma-list/all` | 端识别粒度 | auto |
| `--liveness-filter=active,deprecated/active/all/internal` | liveness 过滤 | `active,deprecated` |
| `--liveness-threshold-days=180` | git log 时效阈值 | 180 |

**注意**：`--quick` 与 `--grill` 不兼容，同时使用会忽略 `--grill`。

---

## 产出物（**与正向 yx:require 100% 同构**）

- **项目级**：
  - `khala-spec/rd/requirements/project-overview.md`（项目枢纽，≤ 120 行硬上限；5 章节白名单）
  - `khala-spec/rd/requirements/feature-list.md`（功能清单总览，~20-30 行；无代码证据列）
- **版本级**（按功能域拆分，每个域独立文件 ~200-500 行）：
  - `khala-spec/rd/requirements/changes/$VERSION/$VERSION-{功能域}.md`
  - `khala-spec/rd/requirements/changes/$VERSION/.preview/flow-<图表名称>.html`
- **逆向特有附属物**：
  - `khala-spec/rd/requirements/codebase-evidence.md`（业务能力 → 代码位置映射）
  - `khala-spec/rd/requirements/changes/$VERSION/terminology-mapping.md`（术语对标表）
  - `khala-spec/rd/requirements/coverage-audit.md`（覆盖度审计）
  - `khala-spec/rd/requirements/cross-end-conflict-report.md`（跨端冲突报告）
  - `khala-spec/rd/requirements/liveness-report.md`（死代码/废弃代码审计）
  - `khala-spec/rd/requirements/changes/$VERSION/completeness-report.md`（完整性对账报告）

---

## 协作关系

- **上游**：`/yx:legacy-analyze`（项目规约，先于本命令建立编码规则）
- **下游**：`/yx:require-review` → `/yx:require-archive`（审阅与归档到主规格）
- **平级**：`/yx:design-from-code`（架构基线；与本命令同属"存量项目基线建立"阶段，可独立并行；典型场景：先建需求基线再建架构基线，或反之）

---

使用 `/khala-spec-require-from-code` skill 执行完整的需求逆向工作流。
