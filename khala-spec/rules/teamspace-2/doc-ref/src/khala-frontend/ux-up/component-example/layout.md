# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

:::info primary

组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

列的基本单位为1，最多24个，最少0个。

:::

## Layout的基础布局
使用列创建基础网格布局。

 通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```vue
<template>
    <ux-row>
        <ux-col :span="24"><div /></ux-col>
    </ux-row>
    <ux-row>
        <ux-col :span="12"><div /></ux-col>
        <ux-col :span="12"><div /></ux-col>
    </ux-row>
    <ux-row>
        <ux-col :span="8"><div /></ux-col>
        <ux-col :span="8"><div /></ux-col>
        <ux-col :span="8"><div /></ux-col>
    </ux-row>
    <ux-row>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
    </ux-row>
</template>
```

## Layout的分栏间隔
支持列间距。

 行提供 `gutter` 属性来指定列之间的间距，其默认值为0。
```vue
<template>
    <ux-row :gutter="20">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
</template>
```

## Layout的混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```vue
<template>
    <ux-row :gutter="20">
        <ux-col :span="16"><div /></ux-col>
        <ux-col :span="8"><div /></ux-col>
    </ux-row>
    <ux-row :gutter="20">
        <ux-col :span="8"><div /></ux-col>
        <ux-col :span="8"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
    </ux-row>
    <ux-row :gutter="20">
        <ux-col :span="4"><div /></ux-col>
        <ux-col :span="16"><div /></ux-col>
        <ux-col :span="4"><div /></ux-col>
    </ux-row>
</template>
```

## Layout的列偏移
您可以指定列偏移量。

 通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。
```vue
<template>
    <ux-row :gutter="20">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6" :offset="6">
            <div />
        </ux-col>
    </ux-row>
    <ux-row :gutter="20">
        <ux-col :span="6" :offset="6">
            <div />
        </ux-col>
        <ux-col :span="6" :offset="6">
            <div />
        </ux-col>
    </ux-row>
    <ux-row :gutter="20">
        <ux-col :span="12" :offset="6">
            <div />
        </ux-col>
    </ux-row>
</template>
```

## Layout的对齐方式
默认使用 flex 布局来对分栏进行灵活的对齐。

 您可以通过`justify` 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。
```vue
<template>
    <ux-row>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row justify="center">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row justify="end">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row justify="space-between">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row justify="space-around">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
    <ux-row justify="space-evenly">
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
        <ux-col :span="6"><div /></ux-col>
    </ux-row>
</template>
```

## Layout的响应式布局
参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

```vue
<template>
    <ux-row :gutter="10">
        <ux-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div />
        </ux-col>
        <ux-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div />
        </ux-col>
        <ux-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div />
        </ux-col>
        <ux-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div />
        </ux-col>
    </ux-row>
</template>
```

## Layout的基于断点的隐藏类
ux-ui 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 如果需要，请自行引入以下文件：

```js
import 'ux-up/theme-chalk/display.css'
```

这些类名为：

- `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
- `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
- `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
- `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
- `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
- `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
- `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
- `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
- `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
- `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
- `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏
