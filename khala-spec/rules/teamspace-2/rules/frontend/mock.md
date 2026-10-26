---
title: Mock数据开发规范
description: Mock数据用于本地开发阶段模拟后端接口
---

## 接口统一使用封装的 `fetch.js` 工具类发起请求
Mock数据的返回格式必须与后端实际返回格式保持一致，使用封装的 `fetch.js` 工具类发起请求，统一处理返回格式，方便后续维护和扩展。

> 源码参考：[fetch.js](/src/utils/fetch.js)

## 目录结构
```
mock/
├── _util.js              # 提供统一返回格式方法
└── modules/
    └── demo/             # 模块
        ├── index.mock.js # 接口定义文件
        └── json.js       # 数据定义文件

```

## 核心规则

### 接口定义
- 使用 `vite-plugin-mock-dev-server` 的 `defineMock` 函数定义接口
  - `defineMock` 接受数组，每个元素为一个对象，对象包含 `url`, `method`, `delay`, `body`
  -  源码参考 `node_modules/vite-plugin-mock-dev-server/dist/index.d.ts`

- 响应体调用 `_util.js` 的 `resultSuccess`, `resultError` 统一封装
  - 源码参考：[\_util.js](/mock/_util.js)
- 必须指定 `method` 请求方法
- 可配置 `delay` 模拟接口响应延迟，默认建议 200-500ms

### 返回格式
- 成功返回调用 `resultSuccess(data, message)` 函数
- 失败返回调用 `resultError(message, code)` 函数
- 禁止直接返回裸数据，必须通过工具函数封装统一格式

```javascript
// 成功返回
export function resultSuccess(data = null, message = '操作成功', code = 200) {
    return {
        code,
        success: true,
        message,
        data
    }
}

// 失败返回
export function resultError(message = '操作失败', code = 500, data = null) {
    return {
        code,
        success: false,
        message,
        data
    }
}
```

## 示例代码
- 参考示例源码：[demo][/mock/modules/demo/index.mock.js]
- 数据模板文件：[json.js](/doc-ref/examples/khala-frontend/mock/json.js)
- 接口定义文件：[index.mock.js](/doc-ref/examples/khala-frontend/mock/index.mock.js)
