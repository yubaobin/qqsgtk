---
title: vue组件开发规范
description: 项目vue组件开发规范，开发vue组件是必须遵守的规范
---

# Vue 组件规范

## script规范

- 使用 `<script setup>` 语法
- 使用 Composition API
- 涉及条件判断变量使用 `computed` 定义
- 涉及 `v-model` 语法，使用 `defineModel` 语法

## template规范

- 组件属性使用 kebab-case
- 组件事件使用 kebab-case
- 模板引用命名使用 camelCase , 并以 Ref 结尾
- 自闭合标签最后一个属性与 `/>` 之间必须保留一个空格，禁止将 `/>` 单独换行
- 标签属性较多时每个属性单独占一行，最后一个属性也与标签闭合符保持在同一行

## style 规范

1. 组件样式使用 scoped
2. 具体查阅 `rules/styles.md`

## 组件拆分规范
- 使用 `components` 目录存放子组件
- 弹窗功能独立封装成组件
- 组件的入口文件使用 `index.vue` 命名

## UX-UP 组件使用规范
查询 [ux-up](./ux-up.md)

## 功能规范

### CRUD 功能规范
项目提供了通用的CRUD页面模板，新开发列表页面请直接复用以下模板：

- **列表页模板**：[page-list.md](docs/page-list.md) - 包含查询表单、表格、分页、新增/编辑弹窗引用
- **新增编辑弹窗模板**：[add-edit-dialog.md](docs/add-edit-dialog.md) - 包含表单验证、新增/编辑逻辑复用

模板已封装通用的列表查询、分页、表单提交等逻辑，使用 `usePageListHook` 和 `useDialogComponentHook` 钩子函数可以快速开发CRUD页面，减少重复代码。

### 时间格式规范 
查询 [datetime-format](docs/datetime-format.md)

### 文件上传规范
查询 [upload](docs/upload.md)
