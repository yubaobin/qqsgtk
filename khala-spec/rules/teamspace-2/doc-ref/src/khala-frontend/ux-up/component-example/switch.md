# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## Switch的基础用法
 绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--ux-switch-on-color` 属性与 `--ux-switch-off-color` 属性来设置开关的背景色。
```vue
<template>
    <div>
        <ux-switch v-model="value" style="--ux-switch-on-color: #13ce66; --ux-switch-off-color: #ff4949" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

```

## Switch的尺寸

```vue
<template>
    <div>
        <ux-switch v-model="value" size="large" active-text="开" inactive-text="关" />

        <ux-switch v-model="value" active-text="开" inactive-text="关" />

        <ux-switch v-model="value" size="small" active-text="开" inactive-text="关" />
        <ux-switch v-model="value" size="mini" active-text="开" inactive-text="关" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

```

## Switch的文字描述
 使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。
```vue
<template>
    <div>
        <div>
            <ux-switch v-model="value1" active-text="按月付费" inactive-text="按年付费" />
        </div>
        <div>
            <ux-switch
                v-model="value2"
                style="--ux-switch-on-color: #13ce66; --ux-switch-off-color: #ff4949"
                active-text="按月付费"
                inactive-text="按年付费" />
        </div>
        <div>
            <ux-switch v-model="value3" inline-prompt active-text="是" inactive-text="否" />
            <ux-switch
                v-model="value4"
               
                inline-prompt
                style="--ux-switch-on-color: #13ce66; --ux-switch-off-color: #ff4949"
                active-text="Y"
                inactive-text="N" />
        </div>
        <div>
            <ux-switch v-model="value6" width="60" inline-prompt active-text="超出省略" inactive-text="超出省略" />
        </div>
        <div>
            <ux-switch
                v-model="value5"
                inline-prompt
                style="--ux-switch-on-color: #13ce66; --ux-switch-off-color: #ff4949"
                active-text="完整展示多个内容"
                inactive-text="多个内容" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>

```

## Switch的显示自定义图标
:::info primary

可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 可以在 [icon组件](/zh-CN/component/icon) 查看。

:::

 使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 使用 `inline-prompt` 属性来控制图标显示在点内。
```vue
<template>
    <div>
        <div>
            <ux-switch v-model="value1" :active-icon="Check" :inactive-icon="Close" />
        </div>
        <div>
            <ux-switch
                v-model="value2"
               
                inline-prompt
                :active-icon="Check"
                :inactive-icon="Close" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check, Close } from '@ux-up/icons-vue'

const value1 = ref(true)
const value2 = ref(true)
</script>

```

## Switch的扩展的 value 类型
 设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number` 类型的值。
```vue
<template>
    <ux-tooltip :content="'当前值: ' + value" placement="top">
        <ux-switch
            v-model="value"
            style="--ux-switch-on-color: #13ce66; --ux-switch-off-color: #ff4949"
            active-value="100"
            inactive-value="0" />
    </ux-tooltip>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('100')
</script>

```

## Switch的禁用状态
 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
```vue
<template>
    <div>
        <ux-switch v-model="value1" disabled />
        <ux-switch v-model="value2" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>

```

## Switch的加载状态
 设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。
```vue
<template>
    <div>
        <ux-switch v-model="value1" loading />
        <ux-switch v-model="value2" loading />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

```

## Switch的阻止切换
 设置 `beforeChange` 属性，若返回 `false` 或者返回 `Promise` 且被 `reject`，则停止切换。
```vue
<template>
    <div>
        <ux-switch v-model="value1" :loading="loading1" :before-change="beforeChange1" />
        <ux-switch v-model="value2" :loading="loading2" :before-change="beforeChange2" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage } from 'ux-up'

const value1 = ref(false)
const value2 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = () => {
    loading1.value = true
    return new Promise((resolve) => {
        setTimeout(() => {
            loading1.value = false
            UxMessage.success('切换成功')
            return resolve(true)
        }, 1000)
    })
}

const beforeChange2 = () => {
    loading2.value = true
    return new Promise((_, reject) => {
        setTimeout(() => {
            loading2.value = false
            UxMessage.error('切换失败')
            return reject(new Error('Error'))
        }, 1000)
    })
}
</script>

```

## Switch的自定义动作图标
 使用 `inactive-action-icon` 和 `active-action-icon` 属性来添加图标。
```vue
<template>
    <ux-switch v-model="value1" :active-action-icon="View" :inactive-action-icon="Hide" />
</template>

<script setup>
import { ref } from 'vue'
import { Hide, View } from '@ux-up/icons-vue'

const value1 = ref(true)
</script>

```

## Switch的自定义操作图标
 使用 `active-action` 和 `inactive-action` 属性来添加图标。
```vue
<template>
    <ux-switch v-model="value1">
        <template #active-action>
            <span>好</span>
        </template>
        <template #inactive-action>
            <span>错</span>
        </template>
    </ux-switch>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
</script>

```

