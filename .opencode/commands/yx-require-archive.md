---
name: yx:require-archive
description: 需求归档工作流 — 将已完成版本的需求数据归档并同步主规格。归档活跃版本目录、增量同步需求主规格、对比提案主规格同步差异、更新功能清单
tags:
  - workflow
  - requirements
  - archive
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
需求人员（产品经理/需求分析师）

## 执行粒度
每次版本开发测试完成且 /yx:archive 执行后，归档一次

## 前置条件
- /yx:archive 指令已执行（提案归档完成）
- `khala-spec/rd/requirements/changes/` 下存在活跃的版本目录

## 核心目标
将本次版本的需求变更归档，并将归档版本的变更内容同步到需求主规格，确保主规格始终反映最新完整需求。同时与提案主规格对比，将提案实现的变更也同步到需求主规格。最后更新功能清单，确保功能清单与最新需求状态一致。

---

使用 `/khala-spec-require-archive` skill 执行需求归档工作流。
