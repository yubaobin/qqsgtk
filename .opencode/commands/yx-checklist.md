---
name: yx:checklist
version: 1.7.0
description: 使用检查清单技能执行安全代码审查
tags:
  - workflow
  - security
  - checklist
category: Workflow
---

<!-- managed-by: khala-spec -->

使用 `khala-spec-checklist` 技能执行安全代码审查。

**输入**：`/yx:checklist` 后的参数会直接传递给检查清单技能。示例：

- `/yx:checklist` — 交互模式（通过界面选择检查类型和模块范围）
- `/yx:checklist 短信炸弹 khala-business` — 直接模式（跳过选择，执行指定检查）

**步骤**

1. **调用检查清单技能**

   用户传入的参数（原样，不得转换/校验）：`$ARGUMENTS`

   使用 **Skill 工具**调用 `khala-spec-checklist`，参数原样传递：

   ```
   Skill({ skill: "khala-spec-checklist", args: "$ARGUMENTS" })
   ```

   如果 `$ARGUMENTS` 为空（无参数）— 传入空参数，技能不进行任何推断，直接通过 `question` 工具呈现交互式选择。

2. **检查清单技能处理全部逻辑**

   该技能将：
   - 呈现交互式选择（无参数时）或使用提供的参数
   - 从 skill 自身的 `references/` 目录读取参考检查清单
   - 扫描项目代码
   - 生成完整的安全报告

   **无需额外逻辑** — 本命令仅是轻量级包装。

**输出**

检查清单技能直接输出完整的安全审查报告，无需后续处理。

**约束**

- 本命令完全委托给 `khala-spec-checklist` 技能 — 不要重新实现任何检查逻辑
- 如果检查清单技能未安装，提示用户检查技能安装目录
- 参数原样传递 — 不要转换或校验
