# SinglePie 单指标饼图
生成单指标饼图配置。

## 基础用法

 传入数值和配置即可生成单指标饼图。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSinglePieOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = { name: '完成率', value: 75 }
    chartInstance.setOption(getSinglePieOption(data, { total: 100 }))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


