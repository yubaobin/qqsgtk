# Splitter 分隔面板
可将区域水平或垂直分隔，并可自由拖动以调整各个区域的大小。

## Splitter的基础用法
最基本的用法，如果未传入默认尺寸，将自动平均分配。

```vue
<template>
    <div style="height: 250px; box-shadow: var(--ux-border-color-light) 0px 0px 10px">
        <ux-splitter>
            <ux-splitter-panel size="30%">
                <div>1</div>
            </ux-splitter-panel>
            <ux-splitter-panel :min="200">
                <div>2</div>
            </ux-splitter-panel>
        </ux-splitter>
    </div>
</template>

```

## Splitter的垂直布局
使用垂直方向。

```vue
<template>
    <div style="height: 250px; box-shadow: var(--ux-border-color-light) 0px 0px 10px">
        <ux-splitter layout="vertical">
            <ux-splitter-panel>
                <div>1</div>
            </ux-splitter-panel>
            <ux-splitter-panel>
                <div>2</div>
            </ux-splitter-panel>
        </ux-splitter>
    </div>
</template>

```

## Splitter的可折叠
配置 `collapsible` 可提供快速收缩功能。 你可以使用 `min` 属性来防止折叠后通过拖拽进行扩展。

```vue
<template>
    <div style="height: 250px; box-shadow: var(--ux-border-color-light) 0px 0px 10px">
        <ux-splitter>
            <ux-splitter-panel collapsible min="50">
                <div>1</div>
            </ux-splitter-panel>
            <ux-splitter-panel collapsible>
                <div>2</div>
            </ux-splitter-panel>
            <ux-splitter-panel>
                <div>3</div>
            </ux-splitter-panel>
            <ux-splitter-panel collapsible>
                <ux-splitter layout="vertical">
                    <ux-splitter-panel collapsible>
                        <div>4</div>
                    </ux-splitter-panel>
                    <ux-splitter-panel collapsible>
                        <div>5</div>
                    </ux-splitter-panel>
                </ux-splitter>
            </ux-splitter-panel>
        </ux-splitter>
    </div>
</template>

```

## Splitter的禁用拖动
当任一面板禁用 `resizable` 时，拖拽功能将被禁用。

```vue
<template>
    <ux-switch v-model="resizable" active-text="启用" inactive-text="禁用" inline-prompt />
    <div style="height: 250px; box-shadow: var(--ux-border-color-light) 0px 0px 10px">
        <ux-splitter>
            <ux-splitter-panel>
                <div>1</div>
            </ux-splitter-panel>
            <ux-splitter-panel :resizable="resizable">
                <div>{{ resizable ? '启用' : '禁用' }}</div>
            </ux-splitter-panel>
            <ux-splitter-panel>
                <div>3</div>
            </ux-splitter-panel>
        </ux-splitter>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const resizable = ref(false)
</script>

```

## Splitter的面板大小
`v-model:size` 可以获取面板的大小。

```vue
<template>
    <div style="height: 250px; box-shadow: var(--ux-border-color-light) 0px 0px 10px">
        <ux-splitter @resize-start="handleResizeStart" @resize-end="handleResizeEnd" @resize="handleResize">
            <ux-splitter-panel>
                <div>1</div>
            </ux-splitter-panel>
            <ux-splitter-panel v-model:size="size" :max="200" :min="50">
                <div>{{ size }}px</div>
            </ux-splitter-panel>
            <ux-splitter-panel>
                <div>3</div>
            </ux-splitter-panel>
        </ux-splitter>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref(100)
const handleResizeStart = (index: number, sizes: number[]) => {
    console.log('resizeStart', index, sizes)
}
const handleResize = (index: number, sizes: number[]) => {
    console.log('resize', index, sizes)
}
const handleResizeEnd = (index: number, sizes: number[]) => {
    console.log('resizeEnd', index, sizes)
}
</script>

```

