---
name: yx:require-export
description: 需求规格导出工作流 — 将需求文档导出为 Word 文档、功能清单导出为 Excel
  文档。默认导出完整需求规格说明书，也可指定需求文档文件/文件夹导出，或导出功能清单
tags:
  - workflow
  - requirements
  - export
  - word
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
需求人员（产品经理/需求分析师）

## 执行粒度
需求规格文档完成后，需要导出正式 Word 文档时执行

## 前置条件（按模式）
- **模式A**：`khala-spec/rd/requirements/project-overview.md` 存在 且 `khala-spec/rd/requirements/specs/` 下存在 `*-spec.md` 文件
- **模式B**：用户指定的文件或文件夹路径存在
- **模式C**：`khala-spec/rd/requirements/feature-list.md` 存在

## 核心目标
将需求规格文档导出为格式规范的 Word 文档（.docx）或 Excel 文档（.xlsx），支持三种模式：
- **模式A（规格说明书导出）**：按需求规格说明书模板格式，全量导出完整的需求规格说明书（默认模式）
- **模式B（指定文件/文件夹导出）**：将用户指定的需求 md 文件（或文件夹中的所有 md 文件）逐个导出为 Word，保持原始结构，不合并
- **模式C（功能清单Excel导出）**：将功能清单导出为公司模板格式的 Excel 文件

---

使用 `/khala-spec-require-export` skill 执行需求导出工作流。
