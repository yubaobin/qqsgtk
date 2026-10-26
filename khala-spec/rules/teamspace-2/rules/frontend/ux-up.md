<!-- khala-spec:path-scope: user-project -->
---
title: ux-up组件库使用规范
description: ux-up组件库使用规范，当使用ux-up组件时，必须遵守的规范。
---

## ux-up 组件库使用规范

- 使用`UX-UP`组件库的任何组件前，**必须**先获取组件库的使用文档，确认组件的正确用法:
    1. 获取`UX-UP`组件列表，[ux-up_overview](/doc-ref/src/khala-frontend/ux-up/ux-up_overview.md)
        - 文件列出所有`ux-up`可用组件。
        - 每个组件都有对应的`组件api链接`、`组件示例连接`、`连接`，可以查看组件的使用文档。
    2. 找不到组件提示`ux-up`没有该组件，使用`div + css`
- **禁止**猜测组件的属性、事件、插槽等API，所有用法必须严格遵循官方文档
- **禁止**使用组件未公开的私有属性、内部方法或非标准用法
- 组件属性和事件命名必须严格按照文档使用，保证与组件库规范一致
- 覆盖组件样式时必须遵循[样式规范](./styles.md)中的要求，使用`$namespace`变量