# Divider 分割线
区隔内容的分割线。

## Divider的基础用法
对不同章节的文本段落进行分割。

```vue
<template>
    <div>
        <span>我们秉承UED的设计价值观，延用规范设计原则，可以进一步提升你的工作效率。</span>
        <ux-divider />
        <span>随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多案例、模板、组件的代码实现。</span>
    </div>
</template>

```

## Divider的设置文案
可以在分割线上自定义文本内容。

```vue
<template>
    <div>
        <span>设计资源命名方式统一</span>
        <ux-divider content-position="left">设计原则</ux-divider>
        <span>视觉元素组件的统一</span>
        <ux-divider>
            <ux-icon><star-filled /></ux-icon>
        </ux-divider>
        <span>交互方式的统一，比如：点击操作的按钮的排布位置</span>
        <ux-divider content-position="right">ui组件库</ux-divider>
    </div>
</template>

<script setup>
import { StarFilled } from '@ux-up/icons-vue'
</script>

```

## Divider的虚线
设置分隔符的样式。

```vue
<template>
    <div>
        <div>
            <span>设计资源命名方式统一</span>
            <ux-divider border-style="dashed" />
            <span>视觉元素组件的统一</span>
        </div>
        <ux-divider border-style="dotted" />
        <span>交互方式的统一，比如：点击操作的按钮的排布位置</span>
        <ux-divider border-style="double" />
    </div>
</template>

```

## Divider的垂直分隔线

```vue
<template>
    <div>
        <span>统一</span>
        <ux-divider direction="vertical" />
        <span>清晰</span>
        <ux-divider direction="vertical" border-style="dashed" />
        <span>简洁</span>
    </div>
</template>

```

