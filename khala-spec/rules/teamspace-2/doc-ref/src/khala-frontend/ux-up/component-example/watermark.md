# Watermark 水印
在页面上添加文本或图片等水印信息。

## Watermark的基础用法
基础用法

```vue
<template>
    <ux-watermark :font="font">
        <div />
    </ux-watermark>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { isDark } from '~/composables/dark'

const font = reactive({
    color: 'rgba(0, 0, 0, .15)'
})

watch(
    isDark,
    () => {
        font.color = isDark.value ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)'
    },
    {
        immediate: true
    }
)
</script>

```

## Watermark的多行水印
使用 `content` 设置一个字符串数组来指定多行文本水印内容

```vue
<template>
    <ux-watermark :font="font" :content="['这是水印', '@xxxx']">
        <div />
    </ux-watermark>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { isDark } from '~/composables/dark'

const font = reactive({
    color: 'rgba(0, 0, 0, .15)'
})

watch(
    isDark,
    () => {
        font.color = isDark.value ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)'
    },
    {
        immediate: true
    }
)
</script>

```

## Watermark的图片水印
通过 `image` 指定图像地址。 为了确保图像清晰展示而不是被拉伸，请设置宽度和高度，建议使用至少两倍的宽度和高度的图片来保证显示效果。

```vue
<template>
    <ux-watermark :width="155" :height="38" :image="demo1">
        <div />
    </ux-watermark>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const demo1 = `${props.baseUrl}images/logo.svg`
</script>

```

## Watermark的自定义配置
配置自定义参数预览水印效果。

```vue
<template>
    <div>
        <ux-watermark
           
            :content="config.content"
            :font="config.font"
            :z-index="config.zIndex"
            :rotate="config.rotate"
            :gap="config.gap"
            :offset="config.offset">
            <div>
                <h1>ux-ui</h1>
                <h2>在视觉元素、布局结构保持一致性，延续和培养用户的固有使用习惯，让用户对系统感觉稳定可控。</h2>
                <img :src="demo1" alt="示例图片" />
            </div>
        </ux-watermark>
        <ux-form :model="config" label-position="top" label-width="50px">
            <ux-form-item label="水印">
                <ux-input v-model="config.content" />
            </ux-form-item>
            <ux-form-item label="颜色">
                <ux-color-picker v-model="config.font.color" show-alpha />
            </ux-form-item>
            <ux-form-item label="字体大小">
                <ux-slider v-model="config.font.fontSize" />
            </ux-form-item>
            <ux-form-item label="层级">
                <ux-slider v-model="config.zIndex" />
            </ux-form-item>
            <ux-form-item label="旋转角度">
                <ux-slider v-model="config.rotate" :min="-180" :max="180" />
            </ux-form-item>
            <ux-form-item label="间隔">
                <ux-space>
                    <ux-input-number v-model="config.gap[0]" controls-position="right" />
                    <ux-input-number v-model="config.gap[1]" controls-position="right" />
                </ux-space>
            </ux-form-item>
            <ux-form-item label="偏移">
                <ux-space>
                    <ux-input-number v-model="config.offset[0]" placeholder="offsetLeft" controls-position="right" />
                    <ux-input-number v-model="config.offset[1]" placeholder="offsetTop" controls-position="right" />
                </ux-space>
            </ux-form-item>
        </ux-form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const config = reactive({
    content: 'ux-ui',
    font: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.15)'
    },
    zIndex: -1,
    rotate: -22,
    gap: [100, 100],
    offset: []
})

const demo1 = `${props.baseUrl}images/demo/demo1.png`
</script>

```

