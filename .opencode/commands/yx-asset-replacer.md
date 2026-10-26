---
name: yx:asset-replacer
description: 替换高保真原型中的图标与图片 — 采用 agent-driven 三步协议：scan（KB 导出 refs + assets）→ AI
  Agent 语义匹配产出 plan.json → apply（KB 落地替换）。被 quick-requirement T6 自动调用，也可独立调用。
category: Workflow
tags:
  - workflow
  - asset
  - replace
  - prototype
---

<!-- managed-by: khala-spec -->

<!-- managed-by: khala-spec -->

## 执行角色

设计 / 前端 / 任何对原型图片需要二次调整的角色

## 执行粒度

每次需要对 prototype 进行素材替换时执行一次

## 前置条件

- 已通过 `/yx:prototype` 或 quick-requirement 生成 prototype（`khala-spec/rd/prototype/high-fidelity/<system>-prototype/current/` 存在）
- 外部素材库 manifest.json 已就位（默认 `./khala-spec/rd/asset-library/manifest.json`，或通过 `--assets-root` 指定）

## 核心目标

按 `scene(role)` 语义（hint，非契约）匹配外部公共素材库，按角色替换 prototype HTML 中的 `<img src>` 与 CSS `url(...)`。**匹配决策权在 AI Agent，不在 KB。**

## 执行协议：scan → 决策 → apply

`/yx:asset-replacer` 与 quick-requirement T6 走同一套三步协议：

| 阶段 | 行为 | 入口 |
|------|------|------|
| **scan** | KB 扫描 prototype + 加载 manifest，输出单 JSON 对象（refs + context + assets） | `replace-assets.cjs scan` |
| **决策** | **AI Agent 自己用推理能力**为每张 ref 选 asset_id，产出 plan.json | Agent LLM 推理（无 KB 代码） |
| **apply** | KB 校验 plan.json + 复制素材 + 改写 HTML src | `replace-assets.cjs apply` |

> 详细协议见 `skills/asset-replacer/references/agent-protocol.md`。

## 硬约束：待办列表强制生成

asset-replacer 执行期间，AI Agent **必须**强制生成并实时维护待办列表（详见 SKILL.md 的 Execution Todo 章节）：
- **执行前**：呈现完整 4 项 todo 表（T1 scan / T2 决策 / T3 apply / T4 呈现 summary），每行带状态 emoji
- **执行中**：每完成一项立刻刷新对应行状态
- **阻塞时**：必须说明阻塞原因
- **完成后**：呈现「Todo 清单终态」

## 执行待办概览

| # | 任务 | 关键产出 |
|---|------|---------|
| T1 | scan：扫描 prototype + 加载 manifest | scan JSON（refs + assets） |
| T2 | Agent 决策：语义匹配产出 plan.json | `/tmp/plan.json` |
| **T2.5** | **AI 出图兜底：needs-ai ref → 调 text-to-image → 落盘 ai-generated/ → 构造 inline_assets** | **`${assets_root}/ai-generated/` 新文件 + plan.json inline_assets[]** |
| T3 | apply：校验 plan（含 inline_assets）+ 复制素材 + 改写 HTML | asset-library/ 下新文件 + HTML 修改 |
| T4 | 呈现 summary 事件 | stdout JSON Lines |

---

## 退出码

| code | 含义 | 自动触发（T6）时是否阻塞 |
|------|------|-----------------|
| 0 | 成功替换至少 1 条 | — |
| 1 | 参数错误（缺子命令 / 缺必填参数） | 是 |
| 10 | manifest.json 缺失 | 否（视为资产库未就绪） |
| 11 | manifest 解析失败 / `asset_count !== assets.length` / **plan.json 非法** | 否 |
| 12 | scene 不在 `manifest.scenes`（wizard 字典自检失败） | 否 |
| **13** | **plan.inline_assets 校验失败**（path / 目录穿越 / id 重复 / 缺字段） | **否** |
| 14 | 物理素材文件缺失（致命） | 否 |
| 20 | prototype 目录不存在 | 否 |
| 21 | prototype HTML 解析失败 | 否 |
| 30 | 无可替换项 / 全部 match 跳过 / dry-run | 否（视为通过） |

---

## AI 出图兜底（Step 2.5）

两类触发条件自动 / 按需启用 AI 出图：

- **素材库无合适**：scan exit 10 / `assets=[]` / Agent 推理匹配度均低
- **用户主动要求**：关键词命中「AI 出图 / AI 生成 / 换张 AI 图」等
- **多次不满意**（B 派生）：同 ref 被否定 ≥ 2 次

命中后 Agent 调 `khala-spec-text-to-image` skill 生成图片，落盘到 `${assets_root}/ai-generated/`，并以 `inline_assets[]` 形式带入 plan.json。apply 端自动识别 inline_assets 并落地替换。完整协议见 [`skills/asset-replacer/references/agent-protocol.md` 第八章](../skills/asset-replacer/references/agent-protocol.md) 与 [`skills/asset-replacer/references/ai-rules.md`](../skills/asset-replacer/references/ai-rules.md)。

---

使用 `asset-replacer` skill 执行素材替换工作流。
