# TimePicker 时间选择器
用于选择或输入日期。

## TimePicker的任意时间点
可以选择任意时间。

 提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-time-picker v-model="value1" placeholder="任意时间点" />
        </div>
        <div>
            <div>添加arrow-control</div>
            <ux-time-picker v-model="value2" arrow-control placeholder="任意时间点" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()
</script>

```

## TimePicker的限制时间选择范围
您也可以限制时间选择范围。

 通过 `disabledHours`，`disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。,
```vue
<template>
    <div>
        <ux-time-picker
            v-model="value1"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"
            placeholder="任意时间点" />
        <ux-time-picker
            v-model="value1"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"
            arrow-control
            placeholder="任意时间点" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(new Date(2024, 9, 10, 18, 30))

const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
const disabledHours = () => {
    // [0, 1, 2, 3, 4, 5, 6, 7, ...]
    return makeRange(0, 16).concat(makeRange(19, 23))
}
const disabledMinutes = (hour) => {
    if (hour === 17) {
        return makeRange(0, 29)
    }
    if (hour === 18) {
        return makeRange(31, 59)
    }
}
const disabledSeconds = (hour, minute) => {
    if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
    }
}
</script>
```

## TimePicker的任意时间范围
可选择任意的时间范围

 添加`is-range`属性即可选择时间范围。 同样支持 `arrow-control` 属性。
```vue
<template>
    <div>
        <div>
            <ux-time-picker
                v-model="value1"
                is-range
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围" />
        </div>
        <div>
            <ux-time-picker
                v-model="value2"
                is-range
                arrow-control
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([new Date(2025, 9, 10, 8, 40), new Date(2025, 9, 10, 9, 40)])
const value2 = ref([new Date(2025, 9, 10, 8, 40), new Date(2025, 9, 10, 9, 40)])
</script>

```

