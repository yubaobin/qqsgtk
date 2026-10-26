# ColorPicker 颜色选择器
用于颜色选择，支持多种格式。

## ColorPicker的基础用法
 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。
```vue
<template>
    <div>
        <div>
            <div>有默认值</div>
            <ux-color-picker v-model="color1" />
        </div>
        <div>
            <div>无默认值</div>
            <ux-color-picker v-model="color2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const color1 = ref('#1890ff')
const color2 = ref()
</script>

```

## ColorPicker的选择透明度
 `ColorPicker` 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。 要启用 Alpha 选择，只需添加 `show-alpha` 属性。
```vue
<template>
    <ux-color-picker v-model="color" show-alpha />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')
</script>

```

## ColorPicker的预定义颜色
 `ColorPicker` 支持预定义颜色
```vue
<template>
    <ux-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    '#FFD7D9',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
])
</script>

```

## ColorPicker的不同尺寸

```vue
<template>
    <div>
        <ux-color-picker v-model="color" size="large" />
        <ux-color-picker v-model="color" />
        <ux-color-picker v-model="color" size="small" />
        <ux-color-picker v-model="color" size="mini" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('#1890ff')
</script>
```

