# Text 文本
文本的常见操作。

## Text的基础用法
 由 `type` 属性来选择 Text 的类型。
```vue
<template>
    <ux-text>默认文本</ux-text>
    <ux-text type="primary">主要文本</ux-text>
    <ux-text type="success">成功文本</ux-text>
    <ux-text type="warning">警告文本</ux-text>
    <ux-text type="danger">危险文本</ux-text>
    <ux-text type="info">信息文本</ux-text>
</template>

```

## Text的尺寸
 使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`
```vue
<template>
    <ux-text size="large">大号文本</ux-text>
    <ux-text>默认文本</ux-text>
    <ux-text size="small">小型文本</ux-text>
    <ux-text size="small">超小文本</ux-text>
</template>

```

## Text的省略
 通过 ` truncated ` 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 `line-clamp` 属性控制多行的样式
```vue
<template>
    <ux-text truncated>激发用户的探索兴趣，继续深入访问</ux-text>
    <ux-row>
        <ux-text truncated>引导设计师直接使用统一的设计规范</ux-text>
    </ux-row>
    <ux-text line-clamp="2">
        我们秉承UED的设计价值观<br />
        延用规范设计原则<br />
        可以进一步提升你的工作效率。
    </ux-text>
</template>

```

## Text的覆盖
 使用属性 `tag` 覆盖元素
```vue
<template>
    <ux-space direction="vertical">
        <ux-text>span</ux-text>
        <ux-text tag="p">段落(p).</ux-text>
        <ux-text tag="b">加粗(b)</ux-text>
        <ux-text tag="i">斜体(i)</ux-text>
        <ux-text>
            这是
            <ux-text tag="sub" size="small">subscript</ux-text>
        </ux-text>
        <ux-text>
            这是
            <ux-text tag="sup" size="small">superscript</ux-text>
        </ux-text>
        <ux-text tag="ins">插入(ins)</ux-text>
        <ux-text tag="del">删除(del)</ux-text>
        <ux-text tag="mark">标记(mark)</ux-text>
    </ux-space>
</template>

```

## Text的混合使用
 混合使用 Text 组件
```vue
<template>
    <ux-space direction="vertical">
        <ux-text>
            <ux-svg-icon icon-name="ux-icon-User" />
            ux-up组件库
        </ux-text>
        <ux-row>
            <ux-text>评分</ux-text>
            <ux-rate />
        </ux-row>
        <ux-text>
            文本加图标
            <ux-svg-icon icon-name="ux-icon-Bell" />
            加组件
            <ux-button>按钮</ux-button>
        </ux-text>
    </ux-space>
</template>

<script setup></script>

```

