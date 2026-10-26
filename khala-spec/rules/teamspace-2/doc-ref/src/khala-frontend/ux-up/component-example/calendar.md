# Calendar 日历
显示日期。

## Calendar的基础用法
 设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 `v-model` 双向绑定。
```vue
<template>
    <ux-calendar v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>

```

<!-- ## 控制器类型 ^(1.1.4)

 您可以设置日历头部的控制器类型。 设置 `select` 时，您可以使用 `formatter` 自定义 `label`。
```vue
<template>
    <ux-radio-group v-model="controllerType">
        <ux-radio-button label="select" value="select" />
        <ux-radio-button label="button" value="button" />
    </ux-radio-group>

    <ux-calendar v-model="value" :controller-type="controllerType" />
</template>

<script setup>
import { ref } from 'vue'

const controllerType = ref('select')
const value = ref(new Date())
</script>

```
 -->
## Calendar的自定义内容
 通过设置名为 `date-cell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。 在 `scoped-slot` 可以获取到 date（当前单元格的日期）, `data`（包括 `type`，`isSelected`，`day` 属性）。 详情解释参考下方的[API 文档](/zh-CN/component/calendar#calendar-api)。
```vue
<template>
    <ux-calendar>
        <template #date-cell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }}
                {{ data.isSelected ? '✔️' : '' }}
            </p>
        </template>
    </ux-calendar>
</template>

```

## Calendar的范围
 设置 `range` 属性指定日历的显示范围。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。
```vue
<template>
    <ux-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
</template>

```

## Calendar的自定义日历头部

```vue
<template>
    <ux-calendar ref="calendar">
        <template #header="{ date }">
            <span>自定义头部内容</span>
            <span>{{ date }}</span>
            <ux-button-group size="mini">
                <ux-button @click="selectDate('prev-year')">上年</ux-button>
                <ux-button @click="selectDate('prev-month')">上月</ux-button>
                <ux-button @click="selectDate('today')">今天</ux-button>
                <ux-button @click="selectDate('next-month')">下月</ux-button>
                <ux-button @click="selectDate('next-year')">下年</ux-button>
            </ux-button-group>
        </template>
    </ux-calendar>
</template>

<script setup>
import { ref } from 'vue'

const calendar = ref()
const selectDate = (val) => {
    if (!calendar.value) return
    calendar.value.selectDate(val)
}
</script>

```

