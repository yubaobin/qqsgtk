# HorizontalBar3d 3D横向柱状图
生成3D横向柱状图配置。

## 基础用法

 传入 BarDataItem 数组即可生成横向柱状图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getHorizontalBar3dOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = {
        name: '收入',
        data: [
            { name: '1月', value: 320 },
            { name: '2月', value: 280 },
            { name: '3月', value: 450 },
            { name: '4月', value: 380 }
        ]
    }
    chartInstance.setOption(getHorizontalBar3dOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


