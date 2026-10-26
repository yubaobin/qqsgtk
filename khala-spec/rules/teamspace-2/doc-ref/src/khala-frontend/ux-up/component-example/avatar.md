# Avatar 头像
用来代表人物或对象，支持使用图片、图标或者文字作为头像。

## Avatar的基础用法。
 通过 `shape` 和 `size` 设置头像的形状和大小。
```vue
<template>
    <ux-row>
        <ux-col :span="12">
            <div>circle</div>
            <div>
                <div>
                    <ux-avatar :size="60" :src="circleUrl" />
                </div>
                <div v-for="size in sizeList" :key="size">
                    <ux-avatar :size="size" :src="circleUrl" />
                </div>
            </div>
        </ux-col>
        <ux-col :span="12">
            <div>square</div>
            <div>
                <div>
                    <ux-avatar shape="square" :size="60" :src="squareUrl" />
                </div>
                <div v-for="size in sizeList" :key="size">
                    <ux-avatar shape="square" :size="size" :src="squareUrl" />
                </div>
            </div>
        </ux-col>
    </ux-row>
</template>

<script setup>
import { reactive, toRefs } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const state = reactive({
    circleUrl: `${props.baseUrl}images/avatar-circle.png`,
    squareUrl: `${props.baseUrl}images/avatar-rect.png`,
    sizeList: ['large', '', 'small', 'mini']
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

```

## Avatar的展示类型
 支持三种类型：图标、图片和字符。
```vue
<template>
    <div>
        <div>
            <ux-avatar :icon="UserFilled" />
        </div>
        <div>
            <ux-avatar :src="circleUrl" />
        </div>
        <div>
            <ux-avatar> user </ux-avatar>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserFilled } from '@ux-up/icons-vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const circleUrl = ref(`${props.baseUrl}images/avatar-circle.png`)
</script>
```

## Avatar的回退行为
 当展示类型为图片的时候，图片加载失败的回退行为。
```vue
<template>
    <div>
        <ux-avatar :size="60" src="https://empty" @error="errorHandler">
            <img :src="circleUrl" />
        </ux-avatar>
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
const circleUrl = ref(`${props.baseUrl}images/avatar-circle.png`)
const errorHandler = () => true
</script>

```

## Avatar的适应容器
当使用图片作为用户头像时，设置该图片如何在容器中展示。与[ object-fit ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性一致

```vue
<template>
    <div>
        <div v-for="fit in fits" :key="fit">
            <div>{{ fit }}</div>
            <ux-avatar shape="square" :size="100" :fit="fit" :src="url" />
        </div>
    </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const state = reactive({
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    url: `${props.baseUrl}images/demo/demo2.png`
})

const { fits, url } = toRefs(state)
</script>

```

### Avatar 属性

|名称|说明|类型|默认值|
|-------|---|-------------------|-------|
|icon|设置Avatar的图标类型，具体参考Icon组件|string/Component|—|
|size|Avatar大小|number/'large'\|'default'\|'small'\|'mini'|-|
|shape|Avatar形状|'circle'\|'square'|-|
|src|Avatar图片的源地址|`string`|—|
|src-set|图片Avatar的原生`srcset`属性|`string`|—|
|alt|图片Avatar的原生`alt`属性|`string`|—|
|fit|当展示类型为图片的时候，设置图片如何适应容器|'fill'\|'contain'\|'cover'\|'none'\|'scale-down'|cover|

### Avatar 事件

|名称|说明|类型|
|-----|---------|---------|
|error|图片加载失败时触发|(e:Event)=>void|

### Avatar 插槽

|插槽名|说明|
|-------|---------|
|default|自定义头像展示内容|

<!--
