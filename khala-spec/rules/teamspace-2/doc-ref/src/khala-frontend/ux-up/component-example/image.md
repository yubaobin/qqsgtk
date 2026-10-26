# Image 图片
图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等。

## Image的基础用法
 可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)。
```vue
<template>
    <div>
        <div v-for="fit in fits" :key="fit">
            <div>{{ fit }}</div>
            <ux-image
                style="width: 100px; height: 100px; border: 1px solid var(--border-color-light)"
                :src="url"
                :fit="fit" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = `${props.baseUrl}images/demo/demo1.png`
</script>

```

## Image的占位内容
 通过插槽 `placeholder` 可自定义占位内容
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-image :src="src" />
        </div>
        <div>
            <div>自定义</div>
            <ux-image :src="src">
                <template #placeholder>
                    <div>加载中<span>...</span></div>
                </template>
            </ux-image>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo3.png`
</script>

```

## Image的加载失败
 通过插槽 `error` 可自定义加载失败内容
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-image />
        </div>
        <div>
            <div>自定义</div>
            <ux-image>
                <template #error>
                    <div>
                        <ux-svg-icon icon-name="ux-icon-Picture" />
                    </div>
                </template>
            </ux-image>
        </div>
    </div>
</template>
```

## Image的懒加载
:::info primary

您可以使用 `loading="lazy"` 替换之前的`lazy= true`。

如果当前浏览器支持原生图片延迟加载，则先使用原生能力，否则将使用滚动监听实现相同效果。

:::

 可通过 `lazy` 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。
```vue
<template>
    <div>
        <ux-image v-for="url in urls" :key="url" :src="url" lazy />
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const urls = [
    `${props.baseUrl}images/demo/demo3.png`,
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo3.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo3.png`,
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`
]
</script>
```

## Image的图片预览
 可通过 `previewSrcList` 开启预览大图的功能。 你可以通过 `initial-index` 初始化第一张预览图片的位置。 默认初始位置为 0。
```vue
<template>
    <div>
        <ux-image
           
            :src="url"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="srcList"
            show-progress
            :initial-index="4"
            fit="cover" />
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const url = `${props.baseUrl}images/demo/demo1.png`
const srcList = [
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`
]
</script>

```

## Image的手动打开预览 ^(1.1.4)
通过调用 `showPreview `方法允许大图像预览。

```vue
<template>
    <div>
        <div>
            <ux-button @click="handleClick">使用showPreview方法打开预览</ux-button>
            <ux-image
                ref="imageRef"
               
                :src="url"
                show-progress
                :preview-src-list="srcList"
                fit="cover" />
        </div>
        <div>
            <ux-button @click="showPreview = true">控制预览图片</ux-button>
            <ux-image-viewer
                v-if="showPreview"
                :url-list="srcList"
                show-progress
                :initial-index="2"
                @close="showPreview = false" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const url = `${props.baseUrl}images/demo/demo1.png`
const srcList = [
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`
]

const imageRef = ref()
const showPreview = ref(false)

const handleClick = () => {
    imageRef.value.showPreview()
}
</script>

```

## Image的自定义工具栏 ^(1.1.4)
可通过 `toolbar` 插槽自定义工具栏内容, 自版本 ^(1.1.4) 起，插槽中添加了 `setActiveItem` 方法，用于根据索引切换图片。

```vue
<template>
    <div>
        <ux-image :src="url" :preview-src-list="srcList" fit="cover" show-progress>
            <template #toolbar="{ actions, prev, next, reset, activeIndex, setActiveItem }">
                <ux-icon @click="prev"><Back /></ux-icon>
                <ux-icon @click="next"><Right /></ux-icon>
                <ux-icon @click="setActiveItem(srcList.length - 1)">
                    <DArrowRight />
                </ux-icon>
                <ux-icon @click="actions('zoomOut')"><ZoomOut /></ux-icon>
                <ux-icon @click="actions('zoomIn', { enableTransition: false, zoomRate: 2 })">
                    <ZoomIn />
                </ux-icon>
                <ux-icon @click="actions('clockwise', { rotateDeg: 180, enableTransition: false })">
                    <RefreshRight />
                </ux-icon>
                <ux-icon @click="actions('anticlockwise')"><RefreshLeft /></ux-icon>
                <ux-icon @click="reset"><Refresh /></ux-icon>
                <ux-icon @click="download(activeIndex)"><Download /></ux-icon>
            </template>
        </ux-image>
    </div>
</template>

<script setup>
import { UxIcon } from 'ux-up'
import {
    Back,
    DArrowRight,
    Download,
    Refresh,
    RefreshLeft,
    RefreshRight,
    Right,
    ZoomIn,
    ZoomOut
} from '@ux-up/icons-vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const url = `${props.baseUrl}images/demo/demo1.png`
const srcList = [
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`
]

const download = (index) => {
    const url = srcList[index]
    const suffix = url.slice(url.lastIndexOf('.'))
    const filename = Date.now() + suffix

    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const blobUrl = URL.createObjectURL(new Blob([blob]))
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = filename
            document.body.appendChild(link)
            link.click()
            URL.revokeObjectURL(blobUrl)
            link.remove()
        })
}
</script>

```

## Image的自定义进度条 ^(1.1.4)
 可通过 `show-progress` 控制是否在预览图片时显示进度条。 自版本 ^(1.1.4) 起，进度条会在使用 `progress` 插槽时显示。
```vue
<template>
    <div>
        <ux-image :src="url" :preview-src-list="srcList" fit="cover">
            <template #progress="{ activeIndex, total }">
                <span>{{ activeIndex + 1 + '-' + total }}</span>
            </template>
        </ux-image>
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const url = `${props.baseUrl}images/demo/demo1.png`
const srcList = [
    `${props.baseUrl}images/demo/demo1.png`,
    `${props.baseUrl}images/demo/demo2.png`,
    `${props.baseUrl}images/demo/demo3.png`
]
</script>

```

