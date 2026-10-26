# SimpleLine 基础折线图
生成基础折线图配置。

## 基础用法

 传入 LineDataItem 数组即可生成折线图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init } from 'echarts/core'
import { getSimpleLineOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

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
                { name: '6月', value: 410 }
            ]
        }
    ]
    chartInstance.setOption(getSimpleLineOption(data))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


