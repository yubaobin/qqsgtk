<!-- khala-spec:path-scope: user-project -->
---
title: 字典数据规范
description: 字典数据规范, 包括静态字典数据和动态字典数据
---

## 静态数据规范

### 目录结构
```
modules/
└── enum.js <- 枚举值定义
└── dict.js <- 字典值定义
```

### 静态字典规范
1. 新增 `enum.js` 文件，用于定义静态枚举值，需使用 `jsdoc` 添加详细的注释
2. 新增 `dict.js` 文件，用于定义静态字典项，需使用 `jsdoc` 添加详细的注释，value 使用 enum.js的值

### 完善示例代码
1. 枚举值定义：[enum.js](/doc-ref/examples/khala-frontend/dict/static-demo/enum.js)
2. 字典项定义：[dict.js](/doc-ref/examples/khala-frontend/dict/static-demo/dict.js)
3. vue组件内使用: [index.vue](/doc-ref/examples/khala-frontend/dict/static-demo/index.vue)

## 动态字典规范
当用户给出字典编码时，使用动态字典。统一使用封装的 `Pinia Store` 进行动态字典的管理

> 源码参考 [dict.js](/doc-ref/src/khala-frontend/store/dict.js)

### 完善示例代码
1. vue组件内使用：[index.vue](/doc-ref/examples/khala-frontend/dict/dynamic-demo/index.vue)

