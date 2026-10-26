# DatePicker 日期选择器
用于选择或输入日期。

## DatePicker的选择某一天
以「日」为基本单位，基础的日期选择控件。

 基本单位由 `type` 属性指定。 通过 `picker-options` 对象中的 `shortcuts` 配置快捷选项， 通过 `disabledDate` 函数，来设置禁用掉的日期。
```vue
<template>
    <ux-radio-group v-model="size" aria-label="大小控制">
        <ux-radio-button value="large">large</ux-radio-button>
        <ux-radio-button value="default">default</ux-radio-button>
        <ux-radio-button value="small">small</ux-radio-button>
        <ux-radio-button value="mini">mini</ux-radio-button>
    </ux-radio-group>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker v-model="value1" type="date" placeholder="选择日期" :size="size" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :disabled-date="disabledDate"
                :shortcuts="shortcuts"
                :size="size" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
    {
        text: '今天',
        value: new Date()
    },
    {
        text: '昨天',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        }
    },
    {
        text: '一周前',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        }
    }
]

const disabledDate = (time) => {
    return time.getTime() > Date.now()
}
</script>

```

## DatePicker的其他日期单位
通过扩展基础的日期选择，可以选择周、月、年或多个日期。

```vue
<template>
    <div>
        <div>
            <div>
                <div>周</div>
                <ux-date-picker v-model="value1" type="week" format="yyyy [第] WW 周" placeholder="选择周" />
            </div>
            <div>
                <div>多个日期</div>
                <ux-date-picker v-model="value2" type="dates" placeholder="选择一个或多个日期" />
            </div>
        </div>
        <div>
            <div>
                <div>年</div>
                <ux-date-picker v-model="value3" type="year" placeholder="选择年" />
            </div>
            <div>
                <div>多个年</div>
                <ux-date-picker v-model="value4" type="years" placeholder="选择一个或多个年" />
            </div>
        </div>
        <div>
            <div>
                <div>月</div>
                <ux-date-picker v-model="value5" type="month" placeholder="选择月" />
            </div>
            <div>
                <div>多个月</div>
                <ux-date-picker v-model="value6" type="months" placeholder="选择一个或多个月" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>

```

## DatePicker的选择日期范围
以天为单位选择一个时间范围。

 在选择日期范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前月份，可以使用 `unlink-panels` 属性解除联动。
```vue
<template>
    <ux-radio-group v-model="size" aria-label="大小控制">
        <ux-radio-button value="large">large</ux-radio-button>
        <ux-radio-button value="default">default</ux-radio-button>
        <ux-radio-button value="small">small</ux-radio-button>
        <ux-radio-button value="mini">mini</ux-radio-button>
    </ux-radio-group>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :size="size" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker
                v-model="value2"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :shortcuts="shortcuts"
                :size="size" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
    {
        text: '上周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        }
    },
    {
        text: '上个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        }
    },
    {
        text: '前3个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        }
    }
]
</script>

```

## DatePicker的选择月份范围
以月为单位选择一个时间范围。

 在选择月份范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前年份，可以使用 `unlink-panels` 属性解除联动。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker
                v-model="value1"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker
                v-model="value2"
                type="monthrange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :shortcuts="shortcuts" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
    {
        text: 'This month',
        value: [new Date(), new Date()]
    },
    {
        text: 'This year',
        value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
        }
    },
    {
        text: 'Last 6 months',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
        }
    }
]
</script>

```

## DatePicker的年份范围
以年为单位选择一个时间范围。

 在选择年范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前年份，可以使用 `unlink-panels` 属性解除联动。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-date-picker
                v-model="value1"
                type="yearrange"
                range-separator="至"
                start-placeholder="开始年份"
                end-placeholder="结束年份" />
        </div>
        <div>
            <div>带快捷选项</div>
            <ux-date-picker
                v-model="value2"
                type="yearrange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始年份"
                end-placeholder="结束年份"
                :shortcuts="shortcuts" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()

const shortcuts = [
    {
        text: '今年',
        value: [new Date(), new Date()]
    },
    {
        text: '前10年',
        value: () => {
            const end = new Date()
            const start = new Date(new Date().setFullYear(new Date().getFullYear() - 10))
            return [start, end]
        }
    },
    {
        text: '下50年',
        value: () => {
            const start = new Date()
            const end = new Date(new Date().setFullYear(new Date().getFullYear() + 50))
            return [start, end]
        }
    }
]
</script>

```

## DatePicker的默认值
日期选择器会在用户未选择任何日期的时候默认展示当天的日期。 你也可以使用 `default-value` 来修改这个默认的日期。 请注意该值需要是一个可以解析的 `new Date()` 对象。

如果类型是 `daterange`, `default-value` 则会设置左边窗口的默认值。

```vue
<template>
    <div>
        <div>
            <div>日期</div>
            <ux-date-picker v-model="value1" type="date" placeholder="选择日期" :default-value="new Date(2025, 0, 1)" />
        </div>
        <div>
            <div>日期范围</div>
            <ux-date-picker
                v-model="value2"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-value="[new Date(2025, 0, 1), new Date(2025, 6, 1)]" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

```

## DatePicker的日期格式
使用`format`指定输入框的格式。 使用 `value-format` 指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

:::info warning

请一定要注意传入参数的大小写是否正确

:::

|格式|含义|备注|举例|
|-----------|----------------|------------------------|-------------|
|`yyyy`(`YYYY`)|年|-|2025|
|`YY`|年|-|25|
|`M`|月|不补0|1|
|`MM`|月|-|01|
|`W`|周|仅周选择器的`format`可用,不补0|1|
|`WW`|周|仅周选择器的`format`可用|01|
|`d`(`D`)|日|不补0|2|
|`dd`(`DD`)|日|-|02|
|`H`|小时|24小时制,不补0|3|
|`HH`|小时||24小时制|03|
|`h`|小时|12小时制，须和`A`或`a`使用,不补0|3|
|`hh`|小时|12小时制，须和`A`或`a`使用|03|
|`m`|分钟||不补0|4|
|`mm`|分钟|-|04|
|`s`|秒|不补0|5|
|`ss`|秒|-|05|
|`A`|AM/PM|仅`format`可用，大写|AM|
|`a`|am/pm|仅`format`可用，小写|am|
|`timestamp`|JS时间戳|仅`value-format`可用,组件绑定值为`number`类型|1704135845000|
|`[MM]`|不需要格式化字符|使用方括号标识不需要格式化的字符(如[A][mm])|MM|

```vue
<template>
    <div>
        <div>
            <div>默认为 Date 对象</div>
            <div>值： {{ value1 }}</div>
            <ux-date-picker v-model="value1" type="date" placeholder="选择日期" format="YYYY-MM-DD" />
        </div>
        <div>
            <div>使用 value-format</div>
            <div>值：{{ value2 }}</div>
            <ux-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD" />
        </div>
        <div>
            <div>时间戳</div>
            <div>值：{{ value3 }}</div>
            <ux-date-picker v-model="value3" type="date" placeholder="选择日期" format="YYYY-MM-DD" value-format="x" />
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

## DatePicker的默认显示日期
日期选择器会在用户未选择任何日期的时候默认展示当天的日期。 你也可以使用 `default-value` 来修改这个默认的日期。 请注意该值需要是一个可以解析的 `new Date()` 对象。

 如果类型是 `daterange`时，默认情况下，，开始日期和结束日期的时间部分都是选择日期当日的 `00:00:00`。 通过 `default-time` 可以分别指定开始日期和结束日期的具体时刻。 它接受最多两个日期对象的数组。 其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。
```vue
<template>
    <div>
        <p>组件值：{{ value }}</p>
        <ux-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD HH:mm:ss"
            :default-time="defaultTime" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const defaultTime = ref([new Date(2025, 1, 1, 0, 0, 0), new Date(2025, 2, 1, 23, 59, 59)])
</script>

```

## DatePicker的设置自定义前缀的内容
前缀内容可以被自定义。

 当你从其他vue组件或由渲染函数生成的组件中导入组件时, 你可以设置 `prefix-icon` 属性来定制前缀内容
```vue
<template>
    <div>
        <div>
            <span>设置前置图标</span>
            <ux-date-picker v-model="value1" type="date" placeholder="选择日期" :prefix-icon="customPrefix" />
        </div>
    </div>
</template>

<script setup>
import { h, ref, shallowRef } from 'vue'

const value1 = ref('')

const customPrefix = shallowRef({
    render() {
        return h('p', 'pre')
    }
})
</script>
```

## DatePicker的自定义内容
弹出框的内容是可以自定义的，在插槽内你可以获取到当前单元格的数据 请注意，自定义内容结构应与默认结构一致，否则可能风格会不一致。

```vue
<template>
    <div>
        <div>
            <ux-date-picker
                v-model="value"
                type="date"
                placeholder="选择日期"
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD">
                <template #default="cell">
                    <div :class="{ current: cell.isCurrent }">
                        <span>{{ cell.text }}</span>
                        <span v-if="isHoliday(cell)" />
                    </div>
                </template>
            </ux-date-picker>
        </div>
        <div>
            <ux-date-picker v-model="month" type="month" placeholder="选择月份">
                <template #default="cell">
                    <div :class="{ current: cell.isCurrent }">
                        <span>{{ cell.text + 1 }}期</span>
                    </div>
                </template>
            </ux-date-picker>
        </div>
        <div>
            <ux-date-picker v-model="year" type="year" placeholder="选择年份">
                <template #default="cell">
                    <div :class="{ current: cell.isCurrent }">
                        <span>{{ cell.text + 1 }}y</span>
                    </div>
                </template>
            </ux-date-picker>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2021-10-29')
const month = ref('')
const year = ref('')
const holidays = ['2021-10-01', '2021-10-02', '2021-10-03', '2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07']

const isHoliday = ({ dayjs }) => {
    return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
</script>
```

## DatePicker的自定义图标
使用插槽自定义图标。

```vue
<template>
    <div>
        <div>
            <div>
                <div>日期</div>
                <ux-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD">
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
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CaretLeft, CaretRight } from '@ux-up/icons-vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
```

更详细的数据类型，请查看下表

```ts
interface DateCell {
  column: number
  customClass: string
  disabled: boolean
  end: boolean
  inRange: boolean
  row: number
  selected: Dayjs
  isCurrent: boolean
  isSelected: boolean
  start: boolean
  text: number
  timestamp: number
  date: Date
  dayjs: Dayjs
  type: 'normal' | 'today' | 'week' | 'next-month' | 'prev-month'
}
```
## DatePicker的国际化
默认语言为中文，如果你需要设置其它的语言，请参考[国际化](/zh-CN/guide/i18n)文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都是通过国际化来配置的。
