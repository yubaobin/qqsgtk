# Tag 标签
用于标记和选择。

## Tag的基础用法
 由 `type` 属性来选择 `ux-tag` 的类型。 也可以通过 `color` 属性来自定义背景色。
```vue
<template>
    <div>
        <ux-tag>标签一</ux-tag>
        <ux-tag type="success">标签二</ux-tag>
        <ux-tag type="info">标签三</ux-tag>
        <ux-tag type="warning">标签四</ux-tag>
        <ux-tag type="danger">标签五</ux-tag>
    </div>
</template>

```

## Tag的可移除标签
 设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 `disable-transitions` 属性，它接受一个 `Boolean`，`true` 为关闭。 当 `ux-tag` 被移除时会触发 `close` 事件。
```vue
<template>
    <div>
        <ux-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
            {{ tag.name }}
        </ux-tag>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
    { name: '标签一', type: '' },
    { name: '标签二', type: 'success' },
    { name: '标签三', type: 'info' },
    { name: '标签四', type: 'warning' },
    { name: '标签五', type: 'danger' }
])
</script>

```

## Tag的动态编辑标签
 动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现。
```vue
<template>
    <div>
        <ux-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
            {{ tag }}
        </ux-tag>
        <ux-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
           
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm" />
        <ux-button v-else size="small" @click="showInput"> + 新增标签</ux-button>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { UxInput } from 'ux-up'

const inputValue = ref('')
const dynamicTags = ref(['标签一', '标签二', '标签三'])
const inputVisible = ref(false)
const InputRef = ref()

const handleClose = (tag) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value.input.focus()
    })
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ''
}
</script>

```

## Tag的不同尺寸
`ux-tag` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

 使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default`, `small` 或 `mini`.
```vue
<template>
    <div>
        <ux-tag size="large" closable>大型标签</ux-tag>
        <ux-tag closable>默认标签</ux-tag>
        <ux-tag size="small" closable>小型标签</ux-tag>
        <ux-tag size="mini" closable>超小标签</ux-tag>
    </div>
</template>

```

## Tag的主题
`ux-tag` 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

 通过设置 `effect` 属性来改变主题，默认为 `light`。
```vue
<template>
    <div>
        <span>Dark</span>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
            {{ item.label }}
        </ux-tag>
    </div>
    <div>
        <span>Light</span>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="light">
            {{ item.label }}
        </ux-tag>
    </div>
    <div>
        <span>Plain</span>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
            {{ item.label }}
        </ux-tag>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' }
])
</script>

```

## Tag的圆形标签
`ux-tag` 可以向按钮组件一样变为完全圆形。

```vue
<template>
    <div>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark" round>
            {{ item.label }}
        </ux-tag>
    </div>
    <div>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="light" round>
            {{ item.label }}
        </ux-tag>
    </div>
    <div>
        <ux-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain" round>
            {{ item.label }}
        </ux-tag>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
    { type: 'primary', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'warning', label: '标签四' },
    { type: 'danger', label: '标签五' }
])
</script>

```

## Tag的可选中的标签
有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是**按钮式的复选框**的样式又不满足需求，此时我们就可以用到 `check-tag`组件。 您可以在中使用 `type` 属性。

```vue
<template>
    <div>
        <ux-check-tag checked>可选择</ux-check-tag>
        <ux-check-tag :checked="checked" @change="onChange">点击触发</ux-check-tag>
        <ux-check-tag disabled>禁用</ux-check-tag>
    </div>
    <div>
        <ux-check-tag :checked="checked1" type="primary" @change="onChange1">标签一</ux-check-tag>
        <ux-check-tag :checked="checked2" type="success" @change="onChange2">标签二</ux-check-tag>
        <ux-check-tag :checked="checked3" type="info" @change="onChange3">标签三</ux-check-tag>
        <ux-check-tag :checked="checked4" type="warning" @change="onChange4">标签四</ux-check-tag>
        <ux-check-tag :checked="checked5" type="danger" @change="onChange5">标签五</ux-check-tag>
        <ux-check-tag :checked="checked6" disabled type="success" @change="onChange6">标签六</ux-check-tag>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(true)
const checked4 = ref(true)
const checked5 = ref(true)
const checked6 = ref(true)

const onChange = (status) => {
    checked.value = status
}

const onChange1 = (status) => {
    checked1.value = status
}

const onChange2 = (status) => {
    checked2.value = status
}

const onChange3 = (status) => {
    checked3.value = status
}

const onChange4 = (status) => {
    checked4.value = status
}

const onChange5 = (status) => {
    checked5.value = status
}

const onChange6 = (status) => {
    checked6.value = status
}
</script>

```

