<!-- khala-spec:path-scope: user-project -->
---
title: 接口开发规范
description: 接口开发规范
---

## 统一使用封装的 `fetch.js` 数据请求工具类发起请求
> 源码参考：[fetch.js](/doc-ref/src/khala-frontend/utils/fetch.js)

## 接口文件结构
接口文件统一存放于 `src/api/modules/` 目录下，按业务模块划分，每个模块单独创建目录，入口文件名为 `index.js`。目录结构示例：
```
src/api/
└── modules/
    ├── user/           # 用户模块
    │   └── index.js
    ├── system/         # 系统模块
    │   └── index.js
    └── business/       # 业务模块
        └── index.js
```

## 接口定义规范

### 命名规范
- 接口函数命名使用小驼峰（camelCase），前缀使用动词：
  - 查询类：`get`、`list`、`query` 开头
  - 新增类：`add`、`create` 开头
  - 更新类：`update`、`edit` 开头
  - 删除类：`delete`、`remove` 开头
  - 操作类：`do`、`exec` 开头

### 注释规范
- 使用`jsdoc`为每个接口函数前添加注释，说明接口用途和参数
```javascript
/**
 * 描述
 * @params {*} params 参数
 */
```

## 请求方法
### 方法列表
| 方法名 | 说明 | 用途 | 参数 |
|--------|------|------|---|
| get | 查询数据，参数拼接在URL上 | 获取详情、列表查询 | (serviceId: string, url: string, params: any, config: Config) => Promise<any> |
| post | 提交数据，参数放在请求体中 | 新增、修改、复杂查询 | 同上 |
| upload | 文件上传，参考类型FormData | 上传文件、图片 | 同上 |
| download | 文件下载，自动处理blob响应 | 导出Excel、下载文件 | 同上 |

### Config 类型说明
```typescript
interface Config {
  ignore401: boolean,
  ignoreError: boolean,
  headers: Record<string, string>,
  withCredentials: boolean
}
```

## 示例代码
1. 完整接口定义示例代码：[user.js](/doc-ref/examples/khala-frontend/api/definition/user.js)

## 接口调用规范
`fetch.js` 已对返回结果进行封装
  - 统一处理错误码和错误信息，调用时无需处理错误码
  - 结果已直接返回 `data` 的数据

```javascript
import { getDetail } from '@/api/modules/user'
getDetail().then(data => {
  console.log(data) // <- data就是用户数据
})
```
## 示例代码
1. 完整接口调用示例代码：
  - [usage-vue](/doc-ref/examples/khala-frontend/api/usage/usage.vue)
  - [usage-js](/doc-ref/examples/khala-frontend/api/usage/usage.js)
