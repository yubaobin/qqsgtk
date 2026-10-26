# TimeSelect 时间选择
用于选择或输入日期，可用时间范围是 00

## TimeSelect的固定时间点
提供几个固定的时间点供用户选择。

 分别通过 `start`、`end` 和 `step` 指定可选的起始时间、结束时间和步长。
```vue
<template>
    <ux-time-select v-model="value" start="08:30" step="00:15" end="18:30" placeholder="选择时间" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

```

## TimeSelect的时间格式
使用 `format` 属性来控制时间格式 (小时以及分钟)。

详情查看[日期格式](/zh-CN/component/date-picker#日期格式)

```vue
<template>
    <ux-time-select v-model="value" start="00:00" step="00:30" end="23:59" placeholder="选择时间" format="hh:mm A" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

```

## TimeSelect的固定时间范围
 如果先选中了开始（或结束）时间，则结束（或开始）时间的状态也将会随之改变。
```vue
<template>
    <div>
        <ux-time-select
            v-model="startTime"
            :max-time="endTime"
           
            placeholder="起始时间"
            start="08:30"
            step="00:15"
            end="18:30" />
        <ux-time-select
            v-model="endTime"
            :min-time="startTime"
            placeholder="结束时间"
            start="08:30"
            step="00:15"
            end="18:30" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>

```

