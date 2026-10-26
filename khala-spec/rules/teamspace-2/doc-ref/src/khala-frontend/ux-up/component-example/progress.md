# Progress 进度条
用于展示操作进度，告知用户当前状态和预期。

## Progress的线形进度条
 `Progress` 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性**必填**，并且必须在 `0-100` 的范围内。 你可以通过设置 `format` 来自定义文字显示的内容。
```vue
<template>
    <div>
        <ux-progress :percentage="50" />
        <ux-progress :percentage="100" :format="format" />
        <ux-progress :percentage="100" status="success" />
        <ux-progress :percentage="100" status="warning" />
        <ux-progress :percentage="50" status="exception" />
    </div>
</template>

<script setup>
const format = (percentage) => (percentage === 100 ? '满' : `${percentage}%`)
</script>
```

## Progress的进度条内显示百分比标识
百分比不占用额外空间，适用于文件上传等场景。

 Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。
```vue
<template>
    <div>
        <ux-progress :text-inside="true" :stroke-width="26" :percentage="70" />
        <ux-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
        <ux-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
        <ux-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
    </div>
</template>
```

## Progress的自定义进度条的颜色
可以通过 `color` 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。

```vue
<template>
    <div>
        <ux-progress :percentage="percentage" :color="customColor" />
        <ux-progress :percentage="percentage" :color="customColorMethod" />
        <ux-progress :percentage="percentage" :color="customColors" />
        <ux-progress :percentage="percentage" :color="customColors" />
        <div>
            <ux-button-group>
                <ux-button :icon="Minus" @click="decrease" />
                <ux-button :icon="Plus" @click="increase" />
            </ux-button-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Minus, Plus } from '@ux-up/icons-vue'

const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
]

const customColorMethod = (percentage) => {
    if (percentage < 30) {
        return '#909399'
    }
    if (percentage < 70) {
        return '#e6a23c'
    }
    return '#67c23a'
}
const increase = () => {
    percentage.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
}
const decrease = () => {
    percentage.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
}
</script>
```

## Progress的环形进度条
 `Progress` 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。
```vue
<template>
    <div>
        <ux-progress type="circle" :percentage="0" />
        <ux-progress type="circle" :percentage="25" />
        <ux-progress type="circle" :percentage="100" status="success" />
        <ux-progress type="circle" :percentage="70" status="warning" />
        <ux-progress type="circle" :percentage="50" status="exception" />
    </div>
</template>

```

## Progress的仪表盘形进度条
 可以指定 `type` 属性为 `dashboard` 使用仪表盘形进度条。
```vue
<template>
    <div>
        <ux-progress type="dashboard" :percentage="percentage" :color="colors" />
        <ux-progress type="dashboard" :percentage="percentage2" :color="colors" />
        <div>
            <ux-button-group>
                <ux-button :icon="Minus" @click="decrease" />
                <ux-button :icon="Plus" @click="increase" />
            </ux-button-group>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Minus, Plus } from '@ux-up/icons-vue'

const percentage = ref(10)
const percentage2 = ref(0)

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
]

const increase = () => {
    percentage.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
}
const decrease = () => {
    percentage.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
}
onMounted(() => {
    setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10
    }, 500)
})
</script>

```

## Progress的自定义内容
 通过默认插槽添加自定义内容。
```vue
<template>
    <div>
        <ux-progress :percentage="50">
            <ux-button text>自定义内容</ux-button>
        </ux-progress>
        <ux-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
            <span>自定义内容</span>
        </ux-progress>
        <ux-progress type="circle" :percentage="100" status="success">
            <ux-button type="success" :icon="Check" circle />
        </ux-progress>
        <ux-progress type="dashboard" :percentage="80">
            <template #default="{ percentage }">
                <span>{{ percentage }}%</span>
                <span>自定义内容</span>
            </template>
        </ux-progress>
    </div>
</template>

<script setup>
import { Check } from '@ux-up/icons-vue'
</script>
```

## Progress的动画进度条
 使用 `indeterminate` 属性来设置不确定的进度， `duration` 来控制动画持续时间。
```vue
<template>
    <div>
        <ux-progress :percentage="50" :indeterminate="true" />
        <ux-progress :percentage="100" :format="format" :indeterminate="true" />
        <ux-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
        <ux-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" />
        <ux-progress :percentage="50" status="exception" :indeterminate="true" />
    </div>
</template>

<script setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>
```

## Progress的条纹进度条
 通过设置 `striped` 属性获取条纹进度条。 也可以使用 `striped-flow` 属性来使条纹流动起来。 使用`duration` 属性来控制条纹流动的速度。
```vue
<template>
    <div>
        <ux-progress :percentage="50" :stroke-width="15" striped />
        <ux-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow />
        <ux-progress
           
            :percentage="100"
            :stroke-width="15"
            status="success"
            striped
            striped-flow
            :duration="10" />
        <ux-progress
           
            :percentage="percentage"
            :stroke-width="15"
            status="exception"
            striped
            striped-flow
            :duration="duration" />
        <ux-button-group>
            <ux-button :icon="Minus" @click="decrease" />
            <ux-button :icon="Plus" @click="increase" />
        </ux-button-group>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Minus, Plus } from '@ux-up/icons-vue'

const percentage = ref(70)
const duration = computed(() => Math.floor(percentage.value / 10))

const increase = () => {
    percentage.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
}
const decrease = () => {
    percentage.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
}
</script>
```

