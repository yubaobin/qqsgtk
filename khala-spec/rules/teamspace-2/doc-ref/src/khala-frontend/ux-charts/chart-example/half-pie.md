# HalfPie 半环饼图
生成半环饼图配置。

## 基础用法

 传入 PieDataItem 数组即可生成半环饼图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getHalfPieOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = { name: '完成率', value: 75 }
    chartInstance.setOption(getHalfPieOption(data, { total: 100 }))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


