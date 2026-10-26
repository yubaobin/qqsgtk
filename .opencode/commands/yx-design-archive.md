---
name: yx:design-archive
description: 将指定版本的概要设计文档归档到 archive 目录，并按功能模块分类到 specs 目录
tags:
  - workflow
  - yx-sdd
  - architecture
  - archive
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
架构师

## 执行粒度
每次概要设计完成后或版本迭代后执行

## 前置条件
- 设计目录存在（`khala-spec/rd/design/changes/` 存在）
- 至少有一个版本目录存在（`khala-spec/rd/design/changes/vX.X.X/` 目录存在）
- 版本目录中包含增量设计文档（`vX.X.X-*.md` 文件存在）

## 核心目标
1. 将指定版本的设计文档完整归档到 `khala-spec/rd/design/archive/` 目录，保留版本目录结构
2. 将归档的设计文档按功能模块分类到 `khala-spec/rd/design/specs/` 目录，每个功能模块维护一份主规格设计文档

---

依次使用 `/khala-spec-design-archive` skill 完成版本归档，再使用 `/khala-spec-design-specs` skill 完成模块分类。


---

**阶段隔离**:本阶段产物已落盘 khala-spec/rd/design/archive/。下一阶段请新开会话执行,无需依赖本会话历史。。
