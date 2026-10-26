# SimpleBar 基础柱状图
生成基础柱状图配置。

## 基础用法

 传入 BarDataItem 数组即可生成柱状图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSimpleBarOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        {
            name: '收入',
            data: [
                { name: '1月', value: 320 },
                { name: '2月', value: 280 },
                { name: '3月', value: 450 },
                { name: '4月', value: 380 },
                { name: '5月', value: 520 },
                { name: '6月', value: 410 },
                { name: '7月', value: 410 },
                { name: '8月', value: 410 },
                { name: '9月', value: 410 },
                { name: '10月', value: 410 },
                { name: '11月', value: 410 },
                { name: '12月', value: 410 }
            ]
        }
    ]
    chartInstance.setOption(getSimpleBarOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


## 多系列

 传入多个 BarDataItem 可生成多系列柱状图。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSimpleBarOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        {
            name: '收入',
            data: [
                { name: '1月', value: 320 },
                { name: '2月', value: 280 },
                { name: '3月', value: 450 }
            ]
        },
        {
            name: '支出',
            data: [
                { name: '1月', value: 220 },
                { name: '2月', value: 180 },
                { name: '3月', value: 350 }
            ]
        }
    ]
    chartInstance.setOption(getSimpleBarOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


## 自定义配置

 通过第二个参数传入 SimpleBarConfig 自定义配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSimpleBarOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        {
            name: '收入',
            data: [
                { name: '1月', value: 320 },
                { name: '2月', value: 280 },
                { name: '3月', value: 450 }
            ]
        }
    ]
    chartInstance.setOption(getSimpleBarOption(data, { showLabel: true, barWidth: 30 }))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


