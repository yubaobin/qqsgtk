# TooltipVirtual 虚拟化文字提示
更精简的 tooltip。

## TooltipV2的基础用法
在图标上以 **Hover** 或者 **tab** 方式触发文字提示。

```vue
<template>
    <ux-tooltip-v2 aria-label="content" placement="left">
        <template #trigger>
            <ux-button circle>
                <ux-icon><Plus /></ux-icon>
            </ux-button>
        </template>
        Basic tooltip
    </ux-tooltip-v2>
</template>

<script setup>
import { Plus } from '@ux-up/icons-vue'
</script>

```

## TooltipV2的可访问性友好的文字提示

```vue
<template>
    <ux-tooltip-v2 :aria-label="title">
        <template #trigger>
            <ux-button>
                <ux-icon><Delete /></ux-icon>
            </ux-button>
        </template>
        {{ content }}
    </ux-tooltip-v2>
</template>

<script setup>
import { Delete } from '@ux-up/icons-vue'

const content = 'Delete'
const title = 'Delete item'
</script>

```

## TooltipV2的转场/动画
你可能会通过`CSS`或者 [Transition](https://cn.vuejs.org/guide/built-ins/transition#transition)组件为您的文字提示设置打开过渡（动画）

:::info primary

默认情况下，tooltip-v2 只会在文字提示被打开时显示过渡动画。 因为该组件实现是以 `v-if` 表示文字提示的展示或隐藏。 在关闭时，元素的内容将会从DOM中移除，因此过渡动画将会被中断。

:::

```vue
<template>
    <!-- eslint-disable vue/require-toggle-inside-transition  -->
    <ux-tooltip-v2 aria-label="content" placement="top" content-class="scale-in">
        <template #trigger>
            <ux-button circle>
                <ux-icon><Plus /></ux-icon>
            </ux-button>
        </template>
        <div>content</div>
    </ux-tooltip-v2>
</template>

<script setup>
import { Plus } from '@ux-up/icons-vue'
</script>
```

### 完全过渡

当然，你可以对于文字提示的内容有完整的过渡。 但是这需要 [Transition](https://cn.vuejs.org/guide/built-ins/transition#transition) 组件，请查看如下演示。

```vue
<template>
    <ux-tooltip-v2 full-transition :transition-props="transitionProps">
        <template #trigger>
            <ux-button circle>
                <ux-icon><Plus /></ux-icon>
            </ux-button>
        </template>
        <div>content</div>
    </ux-tooltip-v2>
</template>

<script setup>
import { Plus } from '@ux-up/icons-vue'

const transitionProps = {
    name: 'ux-fade-in-linear'
}
</script>

```

## TooltipV2的渲染到根元素
默认地，不像 [tooltip v1](./tooltip.md)，文字提示将会被渲染至body元素。 **tooltip v2**将会被渲染到触发或表现的元素上。 但是你仍然可以使用 `Teleport` 将它渲染到根元素。

```vue
<template>
    <ux-tooltip-v2 aria-label="content" teleported to="body">
        <template #trigger>
            <ux-button>hover me</ux-button>
        </template>
        <div>I am attached to document.body</div>
    </ux-tooltip-v2>
</template>

```

## TooltipV2的带箭头

```vue
<template>
    <ux-tooltip-v2 aria-label="content" show-arrow always-on placement="top">
        <template #trigger>
            <ux-button circle>
                <ux-icon><Plus /></ux-icon>
            </ux-button>
        </template>
        Basic tooltip
    </ux-tooltip-v2>
</template>

<script setup>
import { Plus } from '@ux-up/icons-vue'
</script>

```

<!-- ## Composing your own tooltip
