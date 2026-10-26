# SimplePie 基础饼图
生成基础饼图配置。

## 基础用法

 传入 PieDataItem 数组即可生成饼图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSimplePieOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = {
        name: '访问来源',
        data: [
            { name: '直接访问', value: 1048 },
            { name: '邮件营销', value: 735 },
            { name: '搜索引擎', value: 580 },
            { name: '联盟广告', value: 484 },
            { name: '视频广告', value: 300 }
        ]
    }
    chartInstance.setOption(getSimplePieOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


