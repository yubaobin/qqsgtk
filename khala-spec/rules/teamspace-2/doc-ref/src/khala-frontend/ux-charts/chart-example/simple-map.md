# SimpleMap 基础地图
生成基础地图配置。

## 基础用法

 传入 MapDataItem 数组即可生成地图配置。
```vue
<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init, registerMap } from 'echarts/core'
import { getSimpleMapOption, DEFAULT_THEME_KEY } from '@ux-up/chart-options'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const chartRef = ref(null)
let chartInstance = null

onMounted(async () => {
    const res = await fetch(`${props.baseUrl}map/440000.json`)
    const geoJson = await res.json()
    registerMap('guangdong', geoJson)
    chartInstance = init(chartRef.value, DEFAULT_THEME_KEY)
    const data = [
        { name: '广州市', value: 580 },
        { name: '深圳市', value: 420 },
        { name: '珠海市', value: 390 },
        { name: '佛山市', value: 350 },
        { name: '东莞市', value: 310 }
    ]
    chartInstance.setOption(getSimpleMapOption(data, { mapName: 'guangdong' }))
})

onBeforeUnmount(() => {
    chartInstance?.dispose()
})
</script>

```


