# Segmented 分段控制器
用于展示多个选项并允许用户选择其中单个选项。

## Segmented的基础用法
设置 `v-model` 为选项值。

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options" size="large" />
        <ux-segmented v-model="value" :options="options" size="default" />
        <ux-segmented v-model="value" :options="options" size="small" />
        <ux-segmented v-model="value" :options="options" size="mini" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('周一')

const options = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
</script>

```

## Segmented的配置方向
设置 `vertical` 来改变方向。

```vue
<template>
    <div>
        <div>
            <ux-segmented v-model="size" :options="sizeOptions" />
        </div>
        <div>
            <ux-segmented v-model="direction" :options="directionOptions" />
        </div>
        <ux-segmented v-model="value" :options="options" :direction="direction" :size="size">
            <template #default="scope">
                <div :class="['flex', 'items-center', 'gap-2', 'flex-col', direction === 'horizontal' && 'p-2']">
                    <ux-icon size="20">
                        <component :is="scope.item.icon" />
                    </ux-icon>
                    <div>{{ scope.item.label }}</div>
                </div>
            </template>
        </ux-segmented>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Apple, Cherry, Grape, Orange, Pear, Watermelon } from '@ux-up/icons-vue'

const value = ref('Apple')
const direction = ref('horizontal')
const size = ref('default')

const directionOptions = [
    { label: '水平方向', value: 'horizontal' },
    { label: '垂直方向', value: 'vertical' }
]

const sizeOptions = ['large', 'default', 'small', 'mini']

const options = [
    {
        label: '苹果',
        value: 'Apple',
        icon: Apple
    },
    {
        label: '樱桃',
        value: 'Cherry',
        icon: Cherry
    },
    {
        label: '葡萄',
        value: 'Grape',
        icon: Grape
    },
    {
        label: '橙子',
        value: 'Orange',
        icon: Orange
    },
    {
        label: '雪梨',
        value: 'Pear',
        icon: Pear
    },
    {
        label: '西瓜',
        value: 'Watermelon',
        icon: Watermelon,
        disabled: true
    }
]
</script>

```

## Segmented的禁用状态
设置 `disabled` 属性来禁用一些选项。

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options" disabled />
        <ux-segmented v-model="value" :options="options" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('Mon')
const options = [
    {
        label: '周一',
        value: '周一',
        disabled: true
    },
    {
        label: '周二',
        value: '周二'
    },
    {
        label: '周三',
        value: '周三',
        disabled: true
    },
    {
        label: '周四',
        value: '周四'
    },
    {
        label: '周五',
        value: '周五',
        disabled: true
    },
    {
        label: '周六',
        value: '周六'
    },
    {
        label: '周日',
        value: '周日'
    }
]
</script>

```

## Segmented的自定义选项 ^(1.1.4)
当您的 `options` 格式不同于默认格式时，可通过 `props` 属性自定义 `options`

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options" :props="props" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')
const props = {
    label: 'myLabel',
    value: 'myValue',
    disabled: 'myDisabled'
}
const options = [
    {
        myLabel: '周一',
        myValue: '周一',
        myDisabled: true
    },
    {
        myLabel: '周二',
        myValue: '周二'
    },
    {
        myLabel: '周三',
        myValue: '周三',
        myDisabled: true
    },
    {
        myLabel: '周四',
        myValue: '周四'
    },
    {
        myLabel: '周五',
        myValue: '周五',
        myDisabled: true
    },
    {
        myLabel: '周六',
        myValue: '周六'
    },
    {
        myLabel: '周日',
        myValue: '周日'
    }
]
</script>

```

## Segmented的块级分段选择器
设置 `block` 为 `true` 以适应父元素的宽度。

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options" block />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('周一')

const options = [
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六',
    '周日',
    '提供完善的设计规范、最佳实践和设计资源文件 Sketch，来帮助业务快速设计出高质量的产品原型。'
]
</script>

```

## Segmented的自定义内容
设置 `default slot` 位来渲染自定义内容。

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options">
            <template #default="scope">
                <div>
                    <ux-icon size="20">
                        <component :is="scope.item.icon" />
                    </ux-icon>
                    <div>{{ scope.item.label }}</div>
                </div>
            </template>
        </ux-segmented>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Apple, Cherry, Grape, Orange, Pear, Watermelon } from '@ux-up/icons-vue'

const value = ref('Apple')

const options = [
    {
        label: '苹果',
        value: 'Apple',
        icon: Apple
    },
    {
        label: '樱桃',
        value: 'Cherry',
        icon: Cherry
    },
    {
        label: '葡萄',
        value: 'Grape',
        icon: Grape
    },
    {
        label: '橙子',
        value: 'Orange',
        icon: Orange
    },
    {
        label: '雪梨',
        value: 'Pear',
        icon: Pear
    },
    {
        label: '西瓜',
        value: 'Watermelon',
        icon: Watermelon
    }
]
</script>

```

## Segmented的自定义样式
使用 CSS 变量设置自定义样式。

```vue
<template>
    <div>
        <ux-segmented v-model="value" :options="options" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('周一')

const options = ['周一', '周二', '周三', '周四']
</script>

```

