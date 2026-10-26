---
name: yx:quick-requirement
description: 快速打单工作流 — 产品/需求人员触发。AI Agent 解析关键词与编号化参考素材，调用 download-refs.sh 下载到
  references/。**默认 quick 模式**：跳过需求规格与审批，直接生成高保真原型；**`--normal` 模式**：依次执行
  /yx:require 与 /yx:prototype 一键产出需求规格 + 高保真原型。
category: Workflow
tags:
  - workflow
  - requirement
  - prototype
  - quick
---

<!-- managed-by: khala-spec -->

<!-- managed-by: khala-spec -->
<!-- synced-with: skills/quick-requirement/references/todo.md -->
<!-- last-synced: 2026-09-11 -->

## 执行角色

产品 / 需求人员

## 执行粒度

每次快速打单时执行一次

## 前置条件

- 项目根目录存在 `khala-spec/`
- 已将 `scripts/references.example.yaml` 复制为 `references.yaml` 并填写 `base_url`
- 容器/环境已安装 bash / curl / yq / unzip / tar

## 核心目标

将"关键词 + 编号化参考素材"通过 AI Agent 编排，一键拉取参考素材、生成需求规格、生成高保真原型。

## 执行模式

`/quick-requirement` 支持两种执行模式，flag 必须在关键词之前：

| 模式 | 触发方式 | 行为 |
|------|---------|------|
| `quick`（默认） | `/yx:quick-requirement 关键词 [#id]...` 或 `--quick 关键词` | 跳过需求规格生成（T3）与用户审批（T4），直接生成高保真原型；T6 按触发条件决定是否调用（详见 `skills/quick-requirement/SKILL.md`「T6 触发条件描述」），满足条件时按三步协议 `scan → 决策 → apply` 调用 asset-replacer |
| `normal` | `--normal 关键词` | 完整跑 6 步：解析关键词 → 拉素材 → 需求规格 → 用户审批 → 高保真原型 → 资产替换（T6 同 quick，按触发条件决定） |

边界处理：flag 写在关键词之后视为位置错误，提示并忽略；`--quick` 与 `--normal` 同时出现按 normal 处理。

> 详细规约（模式锁定逻辑、披露规约、双 Output 示例）见 `quick-requirement` skill 的「步骤 0A 执行模式识别」章节。

## 硬约束：待办列表强制生成

quick-requirement 执行期间，AI Agent **必须**强制生成并实时维护待办列表，无任何模式例外：

- **执行前**：先向用户完整呈现当前 mode 对应的待办表格（`quick` 模式 **4 项**（T1、T2、T5、T6）/ `normal` 模式 **6 项**（T1、T2、T3、T4、T5、T6）），每行带状态 emoji（⏳ 进行中 / ✅ 完成 / ⚪ 未开始 / ⛔ 阻塞 / ⏭️ 跳过）；同一时刻仅 1 项 ⏳，表格首屏出现时全部项为 ⚪
- **执行中**：每完成一项立刻刷新对应行状态；不得合并多条状态变更后再披露
- **阻塞时**：任意一项状态置为 ⛔，必须向用户说明阻塞原因（脚本退出码、用户审批拒绝、网络失败等）与建议的下一步动作
- **完成后**：无论 quick/normal 模式，结束前必须补一段「待办清单终态」汇报每项最终状态

> ⚠️ 此约束覆盖 skill 内部披露规约：quick 模式可省略中间冗余日志，但**待办列表 + 状态实时刷新 + 终态汇报**三件套不可省。

## 执行待办概览

> 📌 Todo 表格、状态集合、计数定义详见 [`skills/quick-requirement/references/todo.md`](../skills/quick-requirement/references/todo.md)。本文件**禁止**重写 todo 表格。
>
> 关键差异（仅作概览、不维护真表）：
> - **Normal 模式**：6 项 T1-T6（含 T3/T4 需求规格与审批）
> - **Quick 模式**：4 项 T1/T2/T5/T6（跳过 T3/T4 需求规格与审批）
> - **T6 在两套表里都保留**为可选阶段，触发条件与状态取值详见 references/todo.md 与 SKILL.md「T6 触发条件描述」章节。

> 当 T5 生成原型时涉及 icon 选择（参考素材里有多张图片 icon、或没有合适 icon 可用），遵循同 skill 的「软约束（启发式）：案例图标选择与兜底构建」章节。

---

使用 `quick-requirement` skill 执行快速打单工作流。
