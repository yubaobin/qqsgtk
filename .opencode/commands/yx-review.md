---
name: yx:review
description: Review code changes against Khala company rules
tags:
  - workflow
  - review
  - quality
category: Workflow
---

<!-- managed-by: khala-spec -->

Use the **Skill tool** to invoke `khala-spec-review`.

**Input**: `$ARGUMENTS` 可包含：

- `--from <ref>` 起始 ref（分支/commit）
- `--to <ref>` 结束 ref
- `--commit <sha>` 单 commit 审查
- `--scope backend|frontend|auto` 限制审查范围

未提供任何 ref 时默认 workspace 模式（staged + unstaged + untracked）。

**步骤**

1. 解析 `$ARGUMENTS`
2. 调用 `khala-spec-review` skill，传入解析后的参数：

   ```
   Skill({ skill: "khala-spec-review", args: "<解析后的参数>" })
   ```

3. 严格遵循 skill 的 workflow，把报告写到 `khala-spec/reviews/<timestamp>.md`
4. 在对话中向用户展示报告摘要（findings 数 + 路径）

**约束**

- 本命令完全委托给 `khala-spec-review` skill — 不要重新实现审查逻辑
- 参数原样传递给 skill — 不要转换或校验
- 不要自动 git commit 报告文件
