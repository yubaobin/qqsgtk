# LineAndBar 折线柱状组合图
生成折线柱状组合图配置。

## 基础用法

 传入包含柱状和折线类型的数据数组即可生成组合图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getLineAndBarOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        {
            name: '收入',
            type: 'bar',
            data: [
                { name: '1月', value: 320 },
                { name: '2月', value: 280 },
                { name: '3月', value: 450 },
                { name: '4月', value: 380 },
                { name: '5月', value: 520 },
                { name: '6月', value: 410 }
            ]
        },
        {
            name: '增长率',
            type: 'line',
            data: [
                { name: '1月', value: 12 },
                { name: '2月', value: 8 },
                { name: '3月', value: 15 },
                { name: '4月', value: 11 },
                { name: '5月', value: 18 },
                { name: '6月', value: 14 }
            ]
        }
    ]
    chartInstance.setOption(getLineAndBarOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


## 多柱状+折线

 支持多个柱状系列与折线系列混合展示。相同 type 的系列共享同一个 Y 轴，多个 bar 共用左侧 Y 轴，line 使用右侧 Y 轴。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getLineAndBarOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        {
            name: '收入',
            type: 'bar',
            data: [
                { name: '1月', value: 320 },
                { name: '2月', value: 280 },
                { name: '3月', value: 450 },
                { name: '4月', value: 380 },
                { name: '5月', value: 520 },
                { name: '6月', value: 410 }
            ]
        },
        {
            name: '支出',
            type: 'bar',
            data: [
                { name: '1月', value: 220 },
                { name: '2月', value: 180 },
                { name: '3月', value: 350 },
                { name: '4月', value: 290 },
                { name: '5月', value: 380 },
                { name: '6月', value: 320 }
            ]
        },
        {
            name: '增长率',
            type: 'line',
            data: [
                { name: '1月', value: 12 },
                { name: '2月', value: 8 },
                { name: '3月', value: 15 },
                { name: '4月', value: 11 },
                { name: '5月', value: 18 },
                { name: '6月', value: 14 }
            ]
        }
    ]
    chartInstance.setOption(getLineAndBarOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


