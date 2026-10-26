# InputNumber 计数器
仅允许输入标准的数字值，可定义范围。

## InputNumber的基础用法
 要使用它，只需要在 `<ux-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。
```vue
<template>
    <ux-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value) => {
    console.log(value)
}
</script>

```

:::info primary

当输入无效的字符串到输入框时，由于错误，输入值将把 `NaN` 导入到上层

:::
## InputNumber的禁用状态
 `disabled` 属性接受一个 `Boolean`，设置为 `true` 即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性，不设置 `min` 和 `max` 时，最小值为 0。
```vue
<template>
    <ux-input-number v-model="num" :disabled="true" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
</script>

```

## InputNumber的步数
允许定义递增递减的步进控制

 设置 `step` 属性可以控制步长，接受一个 `Number`。
```vue
<template>
    <ux-input-number v-model="num" :step="2" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(5)
</script>

```

## InputNumber的严格步进
 `step-strictly`属性接受一个`Boolean`。 如果这个属性被设置为 `true`，则只能输入步进的倍数。
```vue
<template>
    <ux-input-number v-model="num" :step="2" step-strictly />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(2)
</script>

```

## InputNumber的精度
 设置 `precision` 属性可以控制数值精度，接收一个 `Number`。
```vue
<template>
    <ux-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
</script>

```

:::info primary

`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

:::
## InputNumber的尺寸
提供了 `large`、`small`、`mini` 三种尺寸的数字输入框。

```vue
<template>
    <div>
        <ux-input-number v-model="num1" size="large" />
        <ux-input-number v-model="num2" />
        <ux-input-number v-model="num3" size="small" />
        <ux-input-number v-model="num4" size="mini" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref(1)
const num2 = ref(2)
const num3 = ref(3)
const num4 = ref(4)
</script>

```

## InputNumber的按钮位置
 设置 `controls-position` 属性可以控制按钮位置。
```vue
<template>
    <ux-input-number v-model="num" :min="1" :max="10" controls-position="right" size="large" @change="handleChange" />
    <ux-input-number v-model="num" :min="1" :max="10" controls-position="right" @change="handleChange" />
    <ux-input-number
        v-model="num"
       
        :min="1"
        :max="10"
        size="small"
        controls-position="right"
        @change="handleChange" />
    <ux-input-number
        v-model="num"
       
        :min="1"
        :max="10"
        size="mini"
        controls-position="right"
        @change="handleChange" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value) => {
    console.log(value)
}
</script>

```

## InputNumber的自定义图标
 使用 `decrease-icon` 和 `increase-icon` 设置自定义图标。
```vue
<template>
    <ux-space direction="vertical">
        <ux-space>
            <ux-input-number v-model="num" />
            <ux-input-number v-model="num">
                <template #decrease-icon>
                    <ux-icon>
                        <ArrowDown />
                    </ux-icon>
                </template>
                <template #increase-icon>
                    <ux-icon>
                        <ArrowUp />
                    </ux-icon>
                </template>
            </ux-input-number>
        </ux-space>
        <ux-space>
            <ux-input-number v-model="num" controls-position="right" />
            <ux-input-number v-model="num" controls-position="right">
                <template #decrease-icon>
                    <ux-icon>
                        <Minus />
                    </ux-icon>
                </template>
                <template #increase-icon>
                    <ux-icon>
                        <Plus />
                    </ux-icon>
                </template>
            </ux-input-number>
        </ux-space>
    </ux-space>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, Minus, Plus } from '@ux-up/icons-vue'

const num = ref(1)
</script>

```

## InputNumber的带前缀和后缀
 可通过 `slot` 来指定在中前缀或者后缀内容。
```vue
<template>
    <ux-space>
        <ux-input-number v-model="num" :min="1" :max="10">
            <template #prefix>
                <span>￥</span>
            </template>
        </ux-input-number>
        <ux-input-number v-model="num" :min="1" :max="10">
            <template #suffix>
                <span>RMB</span>
            </template>
        </ux-input-number>
    </ux-space>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
</script>

```

