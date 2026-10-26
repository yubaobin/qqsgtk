---
name: yx:pbc-extractor
description: 从接口文档（PDF/Word/Markdown）或业务源码中自动提取 API / SDK 能力信息，按内置 PBC 模板格式生成标准化能力说明文档
argument-hint: <路径或@引用...> [-o <输出目录>] [-m <merged|separate>] [-t <auto|api|sdk>]
category: Workflow
tags: []
---

<!-- managed-by: khala-spec -->

## 执行角色
PBC 能力提供方 / 开发人员

## 执行时机
- API/SDK 开发完成后，从接口文档或业务源码提取能力信息生成 PBC 语义文件
- `/yx:design` 流程前置：为设计阶段准备可引用的 PBC 能力文件

---

## 执行

使用 Skill 工具调用 `khala-spec-pbc-extractor` skill，将下列用户输入原样透传给 skill（由 skill 解析各参数，本指令不重复实现解析逻辑）：

$ARGUMENTS

参数说明（供用户敲命令时参考，解析由 skill 完成）：

- `sources`（必填）：文件或目录路径，支持多个、支持各 AI 工具的 @ 引用语法
- `-o`（可选，output_dir）：输出目录，默认首个输入源所在目录
- `-m`（可选，output_mode）：`merged`（默认）/ `separate`
- `-t`（可选，capability_type）：`auto`（默认）/ `api` / `sdk`

> 参数解析（标志参数抽取、@ 语法去除、多源合并、目录展开、路径校验、兜底询问）与提取全流程（识别、模板匹配、文档生成、结果汇报）均由 skill 完成。本指令仅负责调用与透传，不重复实现。

---

## 使用示例

```
# 单文件 @ 引用
/yx:pbc-extractor @docs/ai-vision-api.md -o ./khala-spec/rd/references/pbc/

# 位置路径 + 类型偏好
/yx:pbc-extractor ./src/main/java/com/example/sdk/ -t sdk -m separate

# 多文件 / 多源 @ 引用（全部纳入识别）
/yx:pbc-extractor @docs/order-api.md @docs/payment-api.md

# 混合：@ 引用 + 目录 + 标志参数
/yx:pbc-extractor @docs/legacy-api.md ./src/controller/ -t api
```
