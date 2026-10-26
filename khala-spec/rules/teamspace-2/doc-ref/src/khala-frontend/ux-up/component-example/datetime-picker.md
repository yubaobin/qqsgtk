# DateTimePicker 日期时间选择器
在同一个选择器里选择日期和时间。

:::info primary

日期时间选择器来自日期选择器和时间选择器的组合。 关于属性的更详细解释，请参阅[日期选择器](/zh-CN/component/date-picker)和[时间选择器](/zh-CN/component/time-picker)。

:::

## DateTimePicker的日期和时间点
 通过设置 `type` 属性为 `datetime`，即可在同一个选择器里同时进行日期和时间的选择。 快捷方式的使用方法与 `Date Picker` 相同。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" :shortcuts="shortcuts" />
        </div>
        <div>
            <div>设置默认时间</div>
            <ux-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" :default-time="defaultTime" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2025, 1, 1, 12, 0, 0)

const shortcuts = [
    {
        text: '今天',
        value: new Date()
    },
    {
        text: '昨天',
        value: () => {
            const date = new Date()
            date.setDate(date.getDate() - 1)
            return date
        }
    },
    {
        text: '一周前',
        value: () => {
            const date = new Date()
            date.setDate(date.getDate() - 7)
            return date
        }
    }
]
</script>

```

## DateTimePicker的日期时间格式
使用`format`指定输入框的格式。 使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

详情查看[日期格式](/zh-CN/component/date-picker#日期格式)

```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <div>值： {{ value1 }}</div>
            <ux-date-picker v-model="value1" type="datetime" placeholder="选择日期" format="YYYY-MM-DD HH:mm:ss" />
        </div>
        <div>
            <div>使用 value-format</div>
            <div>值：{{ value2 }}</div>
            <ux-date-picker
                v-model="value2"
                type="datetime"
                placeholder="选择日期"
                format="YYYY-MM-DD hh:mm:ss"
                value-format="YYYY-MM-DD h:m:s a" />
        </div>
        <div>
            <div>时间戳</div>
            <div>值：{{ value3 }}</div>
            <ux-date-picker
                v-model="value3"
                type="datetime"
                placeholder="选择日期"
                format="YYYY-MM-DD hh:mm:ss"
                value-format="x" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

```

## DateTimePicker的下拉列表中的日期和时间格式
使用 `date-format` 和 `time-format` 控制下拉列表面板输入框中显示的文本格式。

```vue
<template>
    <div>
        <div>
            <ux-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期"
                format="YYYY-MM-DD HH:mm:ss"
                date-format="MMM DD, YYYY"
                time-format="HH:mm" />
        </div>
        <div>
            <ux-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="YYYY-MM-DD HH:mm:ss"
                date-format="YYYY-MM-DD ddd"
                time-format="A hh:mm:ss" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

```

## DateTimePicker的日期和时间范围
 设置`type`为`datetimerange`即可选择日期和时间范围。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker
                v-model="value2"
                type="datetimerange"
                :shortcuts="shortcuts"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([new Date(2025, 0, 1, 8, 30), new Date(2025, 10, 11, 18, 0)])
const value2 = ref('')

const shortcuts = [
    {
        text: '上周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setDate(start.getDate() - 7)
            return [start, end]
        }
    },
    {
        text: '上个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 1)
            return [start, end]
        }
    },
    {
        text: '前三个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 3)
            return [start, end]
        }
    }
]
</script>

```

## DateTimePicker的默认的起始与结束时刻
 使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。 我们可以使用 `default-time` 属性来控制它。 `default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。 第一项控制开始日期的时间值，第二项控制结束日期的时间值。
```vue
<template>
    <div>
        <div>
            <div>起始日期时刻为 12:00:00</div>
            <ux-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="defaultTime1" />
        </div>
        <div>
            <div>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</div>
            <ux-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="defaultTime2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const defaultTime1 = new Date(2025, 0, 1, 12, 0, 0)
const defaultTime2 = [new Date(2025, 0, 1, 12, 0, 0), new Date(2025, 1, 1, 8, 0, 0)]
</script>

```

## DateTimePicker的自定义图标
 使用插槽自定义图标。
```vue
<template>
    <div>
        <div>
            <ux-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期"
                format="YYYY-MM-DD HH:mm:ss"
                date-format="MMM DD, YYYY"
                time-format="HH:mm">
                <template #prev-month>
                    <ux-icon><CaretLeft /></ux-icon>
                </template>
                <template #next-month>
                    <ux-icon><CaretRight /></ux-icon>
                </template>
                <template #prev-year>
                    <ux-icon>
                                            </ux-icon>
                </template>
            </ux-date-picker>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CaretLeft, CaretRight } from '@ux-up/icons-vue'

const value1 = ref('')
const value2 = ref('')
</script>

```

