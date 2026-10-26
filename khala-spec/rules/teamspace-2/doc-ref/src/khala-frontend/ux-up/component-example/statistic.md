# Statistic 统计数值
显示统计数据。

## Statistic的基础用法
 用于突出某个或某组数字时，如统计数值、金额、排名等，数值和标题前后都可以加icon、单位等元素。 可以使用 [vueuse](https://vueuse.org/core/useTransition/) 实现数值的变化动效
```vue
<template>
    <ux-row>
        <ux-col :span="6">
            <ux-statistic title="增长人数" :value="268500" />
        </ux-col>
        <ux-col :span="6">
            <ux-statistic :value="138">
                <template #title>
                    <div>
                        男女比
                        <ux-svg-icon :size="12" icon-name="ux-icon-Male" />
                    </div>
                </template>
                <template #suffix>/100</template>
            </ux-statistic>
        </ux-col>
        <ux-col :span="6">
            <ux-statistic title="总人数" :value="outputValue" />
        </ux-col>
        <ux-col :span="6">
            <ux-statistic title="反馈人数" :value="562">
                <template #suffix>
                    <ux-svg-icon style="vertical-align: -0.1em" icon-name="ux-icon-ChatLineRound" />
                </template>
            </ux-statistic>
        </ux-col>
    </ux-row>
</template>

<script setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'

const source = ref(0)
const outputValue = useTransition(source, {
    duration: 1500
})
source.value = 172000
</script>

```

## Statistic的倒计时
 倒计时组件，支持添加其他组件来控制。
```vue
<template>
    <ux-row>
        <ux-col :span="8">
            <ux-countdown title="抢购即将开始" :value="value" />
        </ux-col>
        <ux-col :span="8">
            <ux-countdown title="剩余VIP时间" format="HH:mm:ss" :value="value1" />
            <ux-button type="primary" @click="reset">重置</ux-button>
        </ux-col>
        <ux-col :span="8">
            <ux-countdown format="DD [天] HH:mm:ss" :value="value2">
                <template #title>
                    <div>
                        <ux-icon :size="12">
                            <Calendar />
                        </ux-icon>
                        距离下个月还剩
                    </div>
                </template>
            </ux-countdown>
            <div>
                {{ value2.format('YYYY-MM-DD') }}
            </div>
        </ux-col>
    </ux-row>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@ux-up/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
    value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

```
 

:::info primary

在格式化过程中，建议在天数范围内

:::
## Statistic的统计卡片
 卡片式用法展示，可以自由组合
```vue
<template>
    <ux-row :gutter="16">
        <ux-col :span="8">
            <div>
                <ux-statistic :value="98500">
                    <template #title>
                        <div>
                            会员数
                            <ux-tooltip effect="dark" content="会员数" placement="top">
                                <ux-svg-icon :size="12" icon-name="ux-icon-Warning" />
                            </ux-tooltip>
                        </div>
                    </template>
                </ux-statistic>
                <div>
                    <div>
                        <span>同比昨天</span>
                        <span>
                            24%
                            <ux-svg-icon icon-name="ux-icon-CaretTop" />
                        </span>
                    </div>
                </div>
            </div>
        </ux-col>
        <ux-col :span="8">
            <div>
                <ux-statistic :value="693700">
                    <template #title>
                        <div>
                            月贡献
                            <ux-tooltip effect="dark" content="月贡献" placement="top">
                                <ux-svg-icon :size="12" icon-name="ux-icon-Warning" />
                            </ux-tooltip>
                        </div>
                    </template>
                </ux-statistic>
                <div>
                    <div>
                        <span>同比上月</span>
                        <span>
                            12%
                            <ux-svg-icon icon-name="ux-icon-CaretBottom" />
                        </span>
                    </div>
                </div>
            </div>
        </ux-col>
        <ux-col :span="8">
            <div>
                <ux-statistic :value="72000" title="新注册人员">
                    <template #title>
                        <div>新注册人员</div>
                    </template>
                </ux-statistic>
                <div>
                    <div>
                        <span>同比昨天</span>
                        <span>
                            16%
                            <ux-svg-icon icon-name="ux-icon-CaretTop" />
                        </span>
                    </div>
                    <div>
                        <ux-svg-icon :size="14" icon-name="ux-icon-ArrowRight" />
                    </div>
                </div>
            </div>
        </ux-col>
    </ux-row>
</template>
```

