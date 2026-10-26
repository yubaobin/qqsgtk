# DatePickerPanel
DatePickerPanel是DatePicker的核心组件

## DatePickerPanel的Enter Date
Basic date picker measured by 'day'.

```vue
<template>
    <div>
        <ux-date-picker-panel v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>

```

## DatePickerPanel的Border
By default the date-picker-panel is bordered but in some case you don't want it.
For example `DatePicker` don't inherit `border`.

```vue
<template>
    <div ref="containerRef" :class="['date-picker--example', { 'is-narrow': isNarrow }]">
        <div>No border:</div>
        <ux-divider />
        <div>
            <div class="p-[20px]">
                <ux-date-picker-panel v-model="value" :border="false" />
            </div>
            <ux-divider :direction="isNarrow ? 'horizontal' : 'vertical'" />
            <ux-card>
                <ux-date-picker-panel v-model="value" :border="false" />
            </ux-card>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const value = ref()
const containerRef = ref()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)
</script>

```

## DatePickerPanel的Disabled
The `disabled` attribute determines if the date picker is fully disabled.

```vue
<template>
    <div>
        <ux-switch v-model="disabled" active-text="Disabled" inactive-text="Enabled" />
        <ux-date-picker-panel v-model="value" :disabled="disabled" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const disabled = ref(true)
</script>

```

## DatePickerPanel的Types
The measurement is determined by the `type` attribute.

```vue
<template>
    <div>
        <div>
            <div>
                <span>Type:</span>
                <ux-select v-model="type">
                    <ux-option v-for="optionType in types" :key="optionType" :value="optionType" />
                </ux-select>
            </div>
        </div>
        <ux-divider />
        <div>
            <ux-date-picker-panel v-model="date" :type="type" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const date = ref()
const type = ref('date')

watch(type, () => {
    date.value = undefined
})

const types = [
    'year',
    'years',
    'month',
    'months',
    'date',
    'dates',
    'week',
    'datetime',
    'datetimerange',
    'daterange',
    'monthrange',
    'yearrange'
]
</script>

```

## DatePickerPanel的Localization
The default locale of is English, if you need to use other languages, please check [Internationalization](/zh-CN/guide/i18n)

Note, date time locale (month name, first day of the week ...) are also configured in localization.
