# Slider 滑块
通过拖动滑块在一个固定区间内进行选择。

## Slider的基础用法
在拖动滑块时，显示当前值，通过设置绑定值自定义滑块的初始值。

```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-slider v-model="value1" />
        </div>
        <div>
            <div>自定义初始值</div>
            <ux-slider v-model="value2" />
        </div>
        <div>
            <div>隐藏 Tooltip</div>
            <ux-slider v-model="value3" :show-tooltip="false" />
        </div>
        <div>
            <div>格式化 Tooltip</div>
            <ux-slider v-model="value4" :format-tooltip="formatTooltip" />
        </div>
        <div>
            <div>禁用</div>
            <ux-slider v-model="value5" disabled />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(36)
const value4 = ref(48)
const value5 = ref(42)

const formatTooltip = (val) => {
    return val / 100
}
</script>

```

## Slider的离散值
选项可以是离散的

 改变 `step` 的值可以改变步长， 通过设置 `show-stops` 属性可以显示间断点。
```vue
<template>
    <div>
        <div>
            <div>不显示间断点</div>
            <ux-slider v-model="value1" :step="10" />
        </div>
        <div>
            <div>显示间断点</div>
            <ux-slider v-model="value2" :step="10" show-stops />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>

```

## Slider的带有输入框
通过输入框输入来改变当前的值。

 设置 `show-input` 属性会在右侧显示一个输入框。
```vue
<template>
    <div>
        <ux-slider v-model="value" show-input />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

```

## Slider的不同尺寸

```vue
<template>
    <div>
        <div>
            <ux-slider v-model="value" show-input size="large" />
        </div>
        <div>
            <ux-slider v-model="value" show-input />
        </div>
        <div>
            <ux-slider v-model="value" show-input size="small" />
        </div>
        <div>
            <ux-slider v-model="value" show-input size="mini" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

```

## Slider的位置
可以自定义 Tooltip 提示的位置。

```vue
<template>
    <div>
        <div>
            <ux-slider v-model="value1" />
        </div>
        <div>
            <ux-slider v-model="value2" placement="bottom" />
        </div>
        <div>
            <ux-slider v-model="value3" placement="right" />
        </div>
        <div>
            <ux-slider v-model="value4" placement="left" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
</script>

```

## Slider的范围选择
支持选择某一数值范围。

 配置 `range` 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。
```vue
<template>
    <div>
        <ux-slider v-model="value" range show-stops :max="10" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([4, 8])
</script>

```

## Slider的垂直模式
 配置 `vertical` 属性为 `true` 启用垂直模式。 在垂直模式下，必须设置 `height` 属性。
```vue
<template>
    <div>
        <ux-slider v-model="value" vertical height="200px" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

```

## Slider的显示标记
 设置 `marks` 属性可以在滑块上显示标记。
```vue
<template>
    <div>
        <ux-slider v-model="value" range :marks="marks" />
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const value = ref([30, 60])
const marks = reactive({
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: {
        style: {
            color: '#1989FA'
        },
        label: '50%'
    }
})
</script>

```

