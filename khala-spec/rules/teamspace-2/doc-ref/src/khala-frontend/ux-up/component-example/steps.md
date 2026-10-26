# Steps 步骤条
引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。

## Steps的基础用法
简单的步骤条。

 设置 `active` 属性，接受一个 `Number`，表明步骤的 `index`，从 0 开始。 需要定宽的步骤条时，设置 `space` 属性即可，它接受 `Number`， 单位为 `px`， 如果不设置，则为自适应。 设置 `finish-status` 属性可以改变已经完成的步骤的状态。
```vue
<template>
    <div>
        <ux-steps :active="active" finish-status="success">
            <ux-step title="步骤 1" />
            <ux-step title="步骤 2" />
            <ux-step title="步骤 3" />
        </ux-steps>
        <ux-button @click="next">下一步</ux-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
    if (active.value++ > 2) active.value = 0
}
</script>

```

## Steps的含状态的步骤条
每一步骤显示出该步骤的状态。

 可以用 `slot` 的方式来取代属性的设置。
```vue
<template>
    <ux-steps :space="200" :active="1" finish-status="success">
        <ux-step title="已完成" />
        <ux-step title="进行中" />
        <ux-step title="步骤 3" />
    </ux-steps>
</template>

```

## Steps的带描述的步骤栏
每一步都有描述。

```vue
<template>
    <ux-steps :active="1">
        <ux-step title="步骤 1" description="这是一段很长很长很长的描述性文字" />
        <ux-step title="步骤 2" description="这是一段很长很长很长的描述性文字" />
        <ux-step title="步骤 3" description="这段就没那么长了" />
    </ux-steps>
</template>

```

## Steps的居中的步骤条
标题和描述可以居中。

```vue
<template>
    <ux-steps :active="2" align-center>
        <ux-step title="步骤1" description="这是一段很长很长很长的描述性文字" />
        <ux-step title="步骤2" description="这是一段很长很长很长的描述性文字" />
        <ux-step title="步骤3" description="这是一段很长很长很长的描述性文字" />
        <ux-step title="步骤4" description="这是一段很长很长很长的描述性文字" />
    </ux-steps>
</template>

```

## Steps的带图标的步骤条
可以在步骤栏中使用各种自定义图标。

 通过 `icon` 属性来设置图标，图标的类型可以参考 [Icon 组件](/zh-CN/component/icons.html)， 除此以外，还能通过具名 `slot` 来使用自定义的图标。
```vue
<template>
    <ux-steps :active="1">
        <ux-step title="步骤 1" :icon="Edit" />
        <ux-step title="步骤 2" :icon="Cloudy" />
        <ux-step title="步骤 3" :icon="Picture" />
    </ux-steps>
</template>

<script setup>
import { Cloudy, Edit, Picture } from '@ux-up/icons-vue'
</script>

```

## Steps的垂直的步骤条
垂直方向的步骤条。

 只需要在 `ux-steps` 元素中设置 `direction` 属性为 `vertical` 即可。
```vue
<template>
    <div>
        <ux-steps direction="vertical" :active="1">
            <ux-step title="步骤 1" />
            <ux-step title="步骤 2" />
            <ux-step title="步骤 3" description="这是一段很长很长很长的描述性文字" />
        </ux-steps>
    </div>
</template>

```

## Steps的简洁风格的步骤条
 设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。
```vue
<template>
    <div>
        <ux-steps :space="200" :active="1" simple>
            <ux-step title="步骤 1" :icon="Edit" />
            <ux-step title="步骤 2" :icon="Cloudy" />
            <ux-step title="步骤 3" :icon="Picture" />
        </ux-steps>

        <ux-steps :active="1" finish-status="success" simple>
            <ux-step title="步骤 1" />
            <ux-step title="步骤 2" />
            <ux-step title="步骤 3" />
        </ux-steps>
    </div>
</template>

<script setup>
import { Cloudy, Edit, Picture } from '@ux-up/icons-vue'
</script>

```

