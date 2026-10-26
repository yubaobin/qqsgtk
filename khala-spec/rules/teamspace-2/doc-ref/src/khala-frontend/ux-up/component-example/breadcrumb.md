# Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

## Breadcrumb的基础用法
 在 `ux-breadcrumb` 中使用 `ux-breadcrumb-item` 标签表示从首页开始的每一级。 该组件接受一个 `String` 类型的参数 `separator` 来作为分隔符。 默认值为 `'/'`。
```vue
<template>
    <ux-breadcrumb separator="/">
        <ux-breadcrumb-item :to="{ path: '/' }">首页</ux-breadcrumb-item>
        <ux-breadcrumb-item>
            <a href="/">组件</a>
        </ux-breadcrumb-item>
        <ux-breadcrumb-item>导航</ux-breadcrumb-item>
        <ux-breadcrumb-item>面包屑</ux-breadcrumb-item>
    </ux-breadcrumb>
</template>

```

## Breadcrumb的图标分隔符
 通过设置 `separator-class` 可使用相应的 `icon` 作为分隔符，注意这将使 `separator` 失效。
```vue
<template>
    <ux-breadcrumb :separator-icon="ArrowRight">
        <ux-breadcrumb-item :to="{ path: '/' }">首页</ux-breadcrumb-item>
        <ux-breadcrumb-item>组件</ux-breadcrumb-item>
        <ux-breadcrumb-item>导航</ux-breadcrumb-item>
        <ux-breadcrumb-item>面包屑</ux-breadcrumb-item>
    </ux-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@ux-up/icons-vue'
</script>

```

