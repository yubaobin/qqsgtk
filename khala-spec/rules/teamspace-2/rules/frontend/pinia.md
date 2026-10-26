<!-- khala-spec:path-scope: user-project -->
---
title: Pinia 状态管理规范
description: Pinia 状态管理规范
---

## 基本信息

- **Store 文件位置**: 统一存放于 `src/store/modules/` 目录下，按业务模块划分
- 每个模块单独创建文件，命名为 `[module].js`，使用小驼峰命名
- 主入口文件：`src/store/index.js`

## 命名规范

1. Store ID 必须使用大驼峰命名，后缀为 `Store`，如 `UserStore`、`AppStore`
2. Store 导出函数命名为 `use[Xxx]Store`，如 `useUserStore`
3. 组件外使用的 Hook 函数命名为 `use[Xxx]StoreHook`，如 `useUserStoreHook`
4. state 属性名使用小驼峰命名
5. actions 方法名使用动词开头的小驼峰命名

## 定义规范

### 基础结构
- 使用 `defineStore` 定义 Store，第一个参数为唯一的 Store ID
- state 必须使用函数返回对象的形式定义
- actions 使用普通函数定义，通过 `this` 访问 state 和其他 actions
- 必须导出 `use[Xxx]StoreHook` 函数，用于组件外访问 Store

### 可选规范
- 复杂状态计算使用 getters 定义
- 异步操作必须在 actions 中处理，禁止在组件内直接修改 state
- 跨模块状态访问通过导入其他 Store 实现

## 使用规范

1. **组件内使用**：直接导入 `use[Xxx]Store` 函数调用即可
2. **组件外/工具函数中使用**：必须使用 `use[Xxx]StoreHook` 函数，避免上下文丢失
3. state 访问推荐使用 computed 包装，实现响应式
4. 状态修改必须通过 actions 方法，禁止直接修改 state（$patch 除外）

## 完整示例代码
- 定义 Store：[define-demo.js](/doc-ref/examples/khala-frontend/store/define-demo.js)
- 在组件中使用：[use-demo.vue](/doc-ref/examples/khala-frontend/store/use-demo.vue)
- 在组件外使用（路由守卫、工具函数等）：[use-injs.js](/doc-ref/examples/khala-frontend/store/use-injs.js)

