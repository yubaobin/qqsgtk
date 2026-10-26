---
name: yx:design
description: 根据需求规格完成概要设计，产出模块划分、技术约束和质量等级标注（架构师角色）
tags:
  - workflow
  - yx-sdd
  - architecture
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
架构师

## 执行粒度
每次概要设计时执行一次（项目级或版本级）

## 前置条件
- 需求规格目录已确认（需求规格说明书存在于 `khala-spec/rd/requirements/`目录）
- 原型设计如有则一并输入（`khala-spec/prototype/` 目录）

## 核心目标
根据需求规格（和原型）完成总体架构设计。**只做概要设计，不做过细设计。** 核心是回答三个问题：
1. 系统分几个模块？
2. 模块间如何交互？
3. 用什么技术栈？

详细设计交给每个模块的 `/yx:propose` 阶段。

## 命令行参数

| 参数 | 等价形式 | 取值 | 说明 |
|------|---------|------|------|
| `--no-diagrams` | `--diagrams=off` / `--diagrams=none` / `--headless` | — | 直接跳过 4+1 视图生成，**不写任何占位 HTML、不调 archify deliver/visual-check**。design-overview.md 不嵌入 `./diagrams/<视图>.html` 链接、不引用未生成的视图图。步骤 10 的"4+1 视图关联门禁"在无图模式下视为通过。**用于无头流水线（pipeline-eval）加速**。 |
| `--diagrams-granularity` | `--granularity` / `--粒度` | `coarse` / `fine` | 指定视图图生成粒度（仅当未传 `--no-diagrams` 时生效）：<br/>- `coarse`（默认）：每个视图图生成 1 次写盘即收尾，不走 visual-check 与自检循环<br/>- `fine`：每个视图图走完整校验链路（schema + showcase + visual-check + 自检项），失败回退重写最多 3 轮/视图<br/><br/>无头流水线（pipeline-eval）传 `--diagrams-granularity=fine` 可在两步 AskUserQuestion 中预填粒度分支，不阻塞。 |
| `--no-self-check` | `--skip-self-check` | — | 跳过步骤 11 的自检，仅保留必要一致性检查（占位符、TBD）。 |

**参数优先级**：`--no-diagrams` > `--diagrams-granularity` > 默认（无图模式优先于粒度；粒度仅在非无图模式下生效）。

**参数解析**：本命令接收 user 提供的任意 flag 列表，并在第一行消息里把上述标识显式追加到转发给 skill 的请求中。skill 入口会读取该标识决定是否走无图分支 / 直接进入对应粒度分支。

**示例**：

```
/yx:design --no-diagrams
/yx:design 订单中心 v1.0.0 --no-diagrams
/yx:design --headless
/yx:design --diagrams-granularity=coarse          # 默认行为，显式声明
/yx:design --granularity=fine                      # 无头流水线走细致粒度
/yx:design --no-diagrams --granularity=fine        # 无图模式优先，granularity 被忽略
```

---

使用 Skill 工具调用 `khala-spec-design` skill 执行概要设计工作流，**必须使用 `name` 参数**（不能省略，否则会触发 `SchemaError(Missing key at ["name"])`）：

```
Skill({ skill: "khala-spec-design", name: "khala-spec-design", args: "<用户输入原样透传>" })
```

skill 会识别 user 输入中的：
- `--no-diagrams` / `--diagrams=off` / `--headless` → 启用无图模式（跳过 5 张架构视图图、豁免步骤 10 的 4+1 视图关联门禁、design-overview.md 视图章节标记为未生成）
- `--diagrams-granularity=coarse|fine` / `--granularity=coarse|fine` → 跳过步骤 9.1 与 9.2 的 AskUserQuestion，直接进入对应粒度（coarse = 一次生成；fine = 7 步校验链路 + 最多 3 轮重试），输出"已预填：立即生成 + 粒度=<coarse|fine>"（如已传 `--no-diagrams`，按无图模式处理，granularity 被忽略）


---

**阶段隔离**:本阶段产物已落盘 khala-spec/rd/design/。下一阶段请新开会话执行,无需依赖本会话历史。。
