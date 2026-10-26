# ChartPanel 图表容器(vue)
ECharts 图表容器vue组件，内置自动 resize 和图表实例管理。

## 引入方式

```ts
import { ChartPanel } from '@ux-up/chart-options/vue'
```

> ChartPanel 通过 `@ux-up/chart-options/vue` 子路径独立引入，不会增加主包体积。

## 基础用法

 配合 `getSimpleBarOption` 等 option 生成函数使用。
```vue
<template>
    <ChartPanel :chart-option="option" height="300px" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { ChartPanel } from '@ux-up/chart-options/vue'
import { getSimpleBarOption } from '@ux-up/chart-options'

const option = ref({})
onMounted(() => {
    getData()
})

function getData () {
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

    option.value = getSimpleBarOption(data, {
        barWidth: 40
    })

}
</script>

```


## 自定义尺寸

 通过 `width` 和 `height` 控制容器尺寸。不设置 `width` 时，容器宽度由父元素决定；`height` 默认为 `100%`。
```vue
<template>
    <ChartPanel :chart-option="option" width="600px" height="300px" style="margin: auto" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { ChartPanel } from '@ux-up/chart-options/vue'
import { getLineAndBarOption } from '@ux-up/chart-options'

const option = ref({})
onMounted(() => {
    getData()
})

function getData () {
    const data = [
        {
            name: '支出',
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
            name: '收入',
            data: [
                { name: '1月', value: 20 },
                { name: '2月', value: 80 },
                { name: '3月', value: 50 },
                { name: '4月', value: 80 },
                { name: '5月', value: 20 },
                { name: '6月', value: 10 }
            ]
        }
    ]

    option.value = getLineAndBarOption(data, {
        barWidth: 40,
        unit: ['元', '%'],
        gridPosition: {
            top: 40
        }
    })

}
</script>

```


