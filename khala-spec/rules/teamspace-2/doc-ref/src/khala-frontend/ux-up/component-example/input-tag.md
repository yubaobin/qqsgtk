# InputTag 标签输入框
允许用户添加内容作为标签。

## InputTag的基础用法
按Enter回车键添加输入内容为标签。

```vue
<template>
    <ux-input-tag v-model="input" placeholder="请输入内容" aria-label="输入内容后按回车" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref()
</script>

```

## InputTag的自定义触发器
您可以自定义用于触发输入标签的键位， 默认是Enter 回车键。

```vue
<template>
    <div>
        <ux-segmented v-model="trigger" :options="options" />
        <ux-input-tag v-model="input" :trigger="trigger" placeholder="请输入内容" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { EVENT_CODE } from 'ux-up'

const trigger = ref('Space')
const input = ref()
const options = [EVENT_CODE.enter, EVENT_CODE.space]
</script>

```

## InputTag的最大标签数
您可以设置可以添加的标签数量限制。

```vue
<template>
    <ux-input-tag v-model="input" :max="3" placeholder="限制3个标签" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref()
</script>

```

## InputTag的禁用状态
您可以设置 InputTag 被禁用。

```vue
<template>
    <ux-input-tag v-model="input" disabled placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref(['标签1', '标签2', '标签3'])
</script>

```

## InputTag的可清空
您可以设置是否显示清除按钮。

```vue
<template>
    <ux-input-tag v-model="input" clearable placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref(['标签1', '标签2', '标签3'])
</script>

```

## InputTag的可拖放
您可以设置是否可以拖动标签。

```vue
<template>
    <ux-input-tag v-model="input" draggable placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref(['标签1', '标签2', '标签3'])
</script>

```

## InputTag的分隔符 ^(1.1.4)
当一个分隔符匹配时，您可以添加一个标签。

```vue
<template>
    <ux-input-tag v-model="input" draggable placeholder="试着用以下分隔符 ," delimiter="," />
</template>

<script setup>
import { ref } from 'vue'

const input = ref([])
</script>

```

## InputTag的尺寸
使用 `size` 属性改变输入框大小。 除了默认大小外，还提供： `large`, `small`, `mini`三个尺寸。

```vue
<template>
    <div>
        <ux-input-tag v-model="input" size="large" placeholder="请输入内容" />
        <ux-input-tag v-model="input" placeholder="请输入内容" />
        <ux-input-tag v-model="input" size="small" placeholder="请输入内容" />
        <ux-input-tag v-model="input" size="mini" placeholder="请输入内容" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref()
</script>

```

## InputTag的自定义标签
您可以通过 `tag` 插槽自定义标签内容。

```vue
<template>
    <div>
        <div>
            <ux-segmented v-model="tagType" :options="type" />
            <ux-segmented v-model="tagEffect" :options="effect" />
        </div>
        <ux-input-tag v-model="input" :tag-type="tagType" :tag-effect="tagEffect" placeholder="请输入内容">
            <template #tag="{ value }">
                <div>
                    <ux-svg-icon icon-name="ux-icon-User" />
                    <span>{{ value }}</span>
                </div>
            </template>
        </ux-input-tag>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const type = ['primary', 'success', 'info', 'warning', 'danger']
const effect = ['light', 'dark', 'plain']

const tagType = ref('primary')
const tagEffect = ref('plain')
const input = ref(['tag1', 'tag2', 'tag3'])
</script>

```

## InputTag的自定义前缀和后缀
您可以通过 `prefix` 和 `suffix` 插槽自定义 `InputTag` 的前缀和后缀。

```vue
<template>
    <ux-input-tag v-model="input" clearable placeholder="请输入内容">
        <template #prefix>
            <ux-svg-icon icon-name="ux-icon-Lock" />
        </template>
        <template #suffix>
            <ux-svg-icon icon-name="ux-icon-Search" />
        </template>
    </ux-input-tag>
</template>

<script setup>
import { ref } from 'vue'

const input = ref()
</script>

```

