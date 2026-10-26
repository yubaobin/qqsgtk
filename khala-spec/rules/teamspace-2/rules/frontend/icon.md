<!-- khala-spec:path-scope: user-project -->
---
title: 项目图标使用规范
description: 项目图标使用规范
---

# 图标使用规范

图标库使用 @ux-up/icons-vue-plus

## 查询图标
[图标列表](docs/icons-categories.json)

```bash
# 搜索 新增 图标
grep -i 'add' docs/icons-categories.json | tr -d ' '
```

## 图标使用
> 使用ux-svg-icon组件

**组件文档**: 
- [svg-icon API](/doc-ref/src/khala-frontend/ux-up/component-type/svg-icon.d.ts)

### 使用@ux-up/icons-vue-plus图标库
- 示例代码：[icons-plus](/doc-ref/examples/khala-frontend/icon/icons-plus/index.vue)

### 使用自定义svg图标
- 需要结合`svg-symbol` 和 `svg-symbol-item` 组件。
- `svg-symbol-item` 的 `name` 属性需要添加 `icons` 前缀
- `ux-svg-icon` 的 `icon-name` 直接使用无 icons 前缀的图标名称，如：  

#### svg-symbol 插槽​
|插槽名 |	说明 |	子标签 |
| ---- | ---- | ---- |
|default| 自定义默认内容| SvgSymbolItem|

#### svg-symbol-item 文档
- [svg-symbol-item API](/doc-ref/src/khala-frontend/ux-up/component-type/svg-symbol-item.d.ts)

#### 完整示例代码
- 自定义svg图标：[custom-icon](/doc-ref/examples/khala-frontend/icon/custom-icon/index.vue)

### 直接使用图标

结合 `ux-up` 组件的图标属性使用(当组件图标属性类型有 `Component` 时可使用)

- 示例代码： [component-icon](/doc-ref/examples/khala-frontend/icon/component-icon/index.vue)