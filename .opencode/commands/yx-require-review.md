---
name: yx:require-review
description: 需求评审工作流 — 评审人员执行。对需求规格文档进行全面评审，发现问题当场修改，产出需求评审报告
tags:
  - workflow
  - yx-sdd
  - requirements
  - review
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
评审人员（需求评审专家）

## 执行粒度
每次需求文档准备好后执行一次

## 前置条件
- 需求文档存在（`khala-spec/rd/requirements/` 目录下存在需求文档，或用户指定的其他需求文档路径）

## 核心目标
对需求文档进行全面评审，确保需求正确、完整、可测试。**发现问题可当场修改，修改后重新验证。**

---

使用 `/khala-spec-require-review` skill 执行需求评审工作流。
