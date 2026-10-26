# Empty 空状态
空状态时的占位提示。

## Empty的基础用法

```vue
<template>
    <ux-empty description="描述文字" />
</template>

```

## Empty的自定义图片
 通过设置 `image` 属性传入图片 URL。
```vue
<template>
    <ux-empty :image="src" />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = ref(`${props.baseUrl}images/demo/demo3.png`)
</script>

```

## Empty的图片尺寸
 通过使用 `image-size` 属性来控制图片大小。
```vue
<template>
    <ux-empty :image-size="200" />
</template>

```

## Empty的底部内容
 使用默认插槽可在底部插入内容。
```vue
<template>
    <ux-empty>
        <ux-button type="primary">按钮</ux-button>
    </ux-empty>
</template>

```

## Empty的自定义样式
您可以为empty组件设置自定义样式。 使用 `css/scss` 语言来更改全局或局部颜色。 我们设置了一些全局颜色变量：`--ux-empty-fill-color-0`、`--ux-empty-fill-color-1`、`--ux-empty-fill-color-2`、……、`--ux-empty-fill-color-9`。 您可以使用类似 `:root { --ux-empty-fill-color-0: red; --ux-empty-fill-color-1: blue; }` 等变量。 但通常，如果你想要更改样式，你需要更改所有颜色，因为这些颜色是一个组合。

### 默认变量

|变量|颜色|
|-----------------------|---------------------|
|--ux-empty-fill-color-0|var(--ux-color-white)|
|--ux-empty-fill-color-1|<ux-buttonsize="mini"color="#fcfcfd"/>|
|--ux-empty-fill-color-2|<ux-buttonsize="mini"color="#f8f9fb"/>|
|--ux-empty-fill-color-3|<ux-buttonsize="mini"color="#f7f8fc"/>|
|--ux-empty-fill-color-4|<ux-buttonsize="mini"color="#eeeff3"/>|
|--ux-empty-fill-color-5|<ux-buttonsize="mini"color="#edeef2"/>|
|--ux-empty-fill-color-6|<ux-buttonsize="mini"color="#e9ebef"/>|
|--ux-empty-fill-color-7|<ux-buttonsize="mini"color="#e5e7e9"/>|
|--ux-empty-fill-color-8|<ux-buttonsize="mini"color="#e0e3e9"/>|
|--ux-empty-fill-color-9|<ux-buttonsize="mini"color="#d5d7de"/>|
