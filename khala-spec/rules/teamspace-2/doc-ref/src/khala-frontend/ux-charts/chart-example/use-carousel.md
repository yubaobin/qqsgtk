# useCarousel 图表轮播
图表数据轮播 Hook，自动高亮并显示提示框。

## 引入方式

```ts
import { useCarousel } from '@ux-up/chart-options/vue'
```

> useCarousel 通过 `@ux-up/chart-options/vue` 子路径引入，需配合 `ChartPanel` 组件使用。

:::info primary

轮播hook只会轮播第一个 `series` 的数据。

:::

## 基础用法

 配合 `ChartPanel` 组件和 `getSimpleBarOption` 使用，自动轮播高亮柱状图各数据。
```vue
<template>
    <ChartPanel ref="chartPanelRef" :chart-option="option" height="300px" @init="handleInit" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ChartPanel, useCarousel } from '@ux-up/chart-options/vue'
import { getSimpleBarOption } from '@ux-up/chart-options'

const chartPanelRef = ref(null)
const chartRef = ref(null)
const option = ref({})

const { start, stop } = useCarousel(chartRef)

onMounted(() => {
    getData()
})

function getData () {
    const data = [{
        name: '来源',
        data: [
            { name: '直接访问', value: 335 },
            { name: '邮件营销', value: 310 },
            { name: '联盟广告', value: 234 },
            { name: '视频广告', value: 135 },
            { name: '搜索引擎', value: 548 }
        ]
    }]

    option.value = getSimpleBarOption(data)
    start()
}
function handleInit (chartInstance) {
    chartRef.value = chartInstance
}
</script>

```


:::info warning

`getSimplePieOption`、`getSinglePieOption`、`getHalfPieOption` 不适合使用。

:::

