# Scrollbar 滚动条
用于替换浏览器原生滚动条。

## Scrollbar的基础用法
 通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。
```vue
<template>
    <ux-scrollbar height="400px">
        <p v-for="item in 20" :key="item">
            {{ item }}
        </p>
    </ux-scrollbar>
</template>

```

## Scrollbar的横向滚动
 当元素宽度大于滚动条宽度时，会显示横向滚动条。
```vue
<template>
    <ux-scrollbar>
        <div>
            <p v-for="item in 50" :key="item">
                {{ item }}
            </p>
        </div>
    </ux-scrollbar>
</template>
```

## Scrollbar的最大高度
 当元素高度超过最大高度，才会显示滚动条。
```vue
<template>
    <ux-button @click="add">添加一项</ux-button>
    <ux-button @click="onDelete">删除一项</ux-button>
    <ux-scrollbar max-height="400px">
        <p v-for="item in count" :key="item">
            {{ item }}
        </p>
    </ux-scrollbar>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(3)

const add = () => {
    count.value++
}
const onDelete = () => {
    if (count.value > 0) {
        count.value--
    }
}
</script>

```

## Scrollbar的手动滚动
 通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。
```vue
<template>
    <div>
        <ux-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
            <div ref="innerRef">
                <p v-for="item in 20" :key="item">
                    {{ item }}
                </p>
            </div>
        </ux-scrollbar>

        <ux-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const max = ref(0)
const value = ref(0)
const innerRef = ref()
const scrollbarRef = ref()

onMounted(() => {
    max.value = innerRef.value.clientHeight - 380
})

const inputSlider = (value) => {
    scrollbarRef.value.setScrollTop(value)
}
const scroll = ({ scrollTop }) => {
    value.value = scrollTop
}
const formatTooltip = (value) => {
    return `${value} px`
}
</script>
```

## Scrollbar的无限滚动 ^(1.1.5)
 `end-reached` 是在滚动条到达底部时触发的。 它可以用作无限滚动。
```vue
<template>
    <ux-scrollbar height="400px" @end-reached="loadMore">
        <p v-for="item in num" :key="item">
            {{ item }}
        </p>
    </ux-scrollbar>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(30)
const loadMore = (direction) => {
    if (direction === 'bottom') {
        num.value += 5
    }
}
</script>

```

