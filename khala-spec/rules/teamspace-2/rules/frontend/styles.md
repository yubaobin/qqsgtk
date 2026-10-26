<!-- khala-spec:path-scope: user-project -->
---
title: 样式规范
description: 样式规范
---

## 样式编写规范
- 样式使用 `SCSS`，**通常不需要嵌套**
- 类名使用 `BEM` 规范
- 字体大小，颜色色值(包括背景，边框，文字)，必须使用 `ux-up` 的样式变量
- 覆盖组件库样式时使用 `$namespace` 变量

## 公共样式
khala项目已定义公共样式，当页面符合以下布局时，可以直接使用公共样式。
- 通用查询 + 列表
- 新增编辑弹窗
- 带标题+操作按钮页面

### 项目公共样式 (`common.scss`)
> 参考源码 [common.scss](/doc-ref/src/khala-frontend/styles/common.scss)

### 通用查询 + 列表
> 示例参考： [page-list.vue](/doc-ref/examples/khala-frontend/crud-page/page-list.vue)
> 注意，当操作列按钮大于3时，需要使用 `table-more-tools` 组件, 必须包括 `key` 属性
> 操作列添加 `fixed` 属性， 按钮参数包括 `is-link`, `type`

### 新增编辑弹窗
> 示例参考：[add-edit-dialog.vue](/doc-ref/examples/khala-frontend/crud-page/add-edit-dialog.vue)

### 带标题+操作按钮页面
页面结构：
```html
<div class="common-page page-wrapper">
    <div class="page-wrapper--header">
        <div class="page-wrapper--header__inner">
            <div class="page-wrapper--header__title">模块标题</div>
            <div class="page-wrapper--header__actions">
                <!-- 操作按钮 -->
                <ux-button type="primary" icon="ux-icon-Plus">创建</ux-button>
            </div>
        </div>
    </div>
    <div class="page-wrapper--content"> <!-- 页面内容 --> </div>
</div>
```

## 样式变量

当样式涉及 `背景色`、`边框色`、`文字色`，`字体大小`，`圆角` 等，必须使用 `ux-up` 的样式变量。

### 资源参考
- `ux-up` 可用的样式变量：[css-variables.md](/doc-ref/src/khala-frontend/ux-up/css-variables.md)
    - 文件列出了 `ux-up` 中所有可用的样式变量，包括颜色，字体大小，边框等。
- 项目级自定义变量：[variable.scss](/src/styles/theme/normal/variable.scss)
    - 文件列出了项目级自定义的样式变量，包括头部，侧栏，标签页样式变量等。
- `ux-up` 组件列表：[ux-up_overview](/doc-ref/src/khala-frontend/ux-up/ux-up_overview.md)：
    - 文件列出所有`ux-up`可用组件。
    - 每个组件都有对应的 `组件样式链接`，可以查看组件的样式。

### SCSS 中使用
1. 引入 `function` 模块
2. 使用 `getCssVar` 函数获取 CSS 变量值

- 完整示例代码：[use-scss.scss](/doc-ref/examples/khala-frontend/styles/use-scss.scss)

### 覆盖组件库 ux-up 样式
注意事项：
> 覆盖前先通过 `组件样式文档` 获取 `ux-up` 组件可覆盖的类名
> 使用 `$namespace` 变量, `$namespace` 的作用如下：
    1. **CSS 类名前缀**：所有 UX-UP 组件的 CSS 类名都以 `ux-` 为前缀
    2. **CSS 变量前缀**：所有 CSS 变量都以 `--ux-` 为前缀
> **禁止**添加ux-up组件中不存在的类名

- 完整示例代码：[cover-ux.scss](/doc-ref/examples/khala-frontend/styles/cover-ux.scss)
