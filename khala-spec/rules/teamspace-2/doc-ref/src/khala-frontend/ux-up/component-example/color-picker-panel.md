# ColorPickerPanel
ColorPickerPanel是ColorPicker的核心组件

## ColorPickerPanel的Basic usage
 ColorPickerPanel requires a string typed variable to be bound to v-model.
```vue
<template>
    <ux-color-picker-panel v-model="color" />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('#409EFF')
</script>

```

## ColorPickerPanel的Alpha
 ColorPickerPanel supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.
```vue
<template>
    <ux-color-picker-panel v-model="color" show-alpha />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')
</script>

```

## ColorPickerPanel的Predefined colors
 ColorPickerPanel supports predefined color options
```vue
<template>
    <ux-color-picker-panel v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
]
</script>

```

## ColorPickerPanel的Border
By default the color-picker-panel is bordered but in some case you don't want it.

```vue
<template>
    <div ref="containerRef">
        <div>No border:</div>
        <ux-divider />
        <div>
            <div>
                <ux-color-picker-panel v-model="value" :border="false" />
            </div>
            <ux-divider :direction="isNarrow ? 'horizontal' : 'vertical'" />
            <ux-card>
                <ux-color-picker-panel v-model="value" :border="false" />
            </ux-card>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const value = ref('#ff6900')
const containerRef = ref()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)
</script>

```

## ColorPickerPanel的Disabled
The `disabled` attribute determines if the color picker is fully disabled.

```vue
<template>
    <ux-color-picker-panel v-model="color" disabled show-alpha :predefine="predefineColors" />
</template>

<script setup>
import { ref } from 'vue'

const color = ref('#ff6900')
const predefineColors = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585']
</script>

```

