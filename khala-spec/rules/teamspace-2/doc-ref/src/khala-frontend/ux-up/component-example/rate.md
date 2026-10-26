# Rate 评分
用于评分。

## Rate的基础用法
评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用 `colors` 属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。

```vue
<template>
    <div>
        <div>
            <div>默认不区分颜色</div>
            <ux-rate v-model="value1" />
        </div>
        <div>
            <div>区分颜色</div>
            <ux-rate v-model="value2" :colors="colors" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

```

## Rate的尺寸
 使用 `size` 属性改变大小。 除了默认大小外，还提供了 `large`, `small`, `mini` 三种尺寸。
```vue
<template>
    <div>
        <ux-rate v-model="value" size="large" />
        <ux-rate v-model="value" />
        <ux-rate v-model="value" size="small" />
        <ux-rate v-model="value" size="mini" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(1)
</script>

```

## Rate的允许半选
 属性 `allow-half` 允许出现半星。
```vue
<template>
    <ux-rate v-model="value" allow-half />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>

```

## Rate的辅助文字
用辅助文字直接地表达对应分数。

 为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。
```vue
<template>
    <div>
        <div>
            <ux-rate v-model="value" show-text />
        </div>
        <div>
            <ux-rate v-model="value" :texts="['1', '2', '3', '4', '5']" show-text />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>

```

## Rate的可清空
 当你再次点击相同的值时，可以将值重置为 `0`。
```vue
<template>
    <ux-rate v-model="value" clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(3)
</script>

```

## Rate的更多种类的图标
当有多层评价时，可以用不同类型的图标区分评分层级。

 设置`icons`属性可以自定义不同分段的图标。 若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。 本例还使用 `void-icon` 指定了未选中时的图标类名。
```vue
<template>
    <ux-rate v-model="value" :icons="icons" :void-icon="ChatRound" :colors="['#409eff', '#67c23a', '#FF9900']" />
</template>

<script setup>
import { ref } from 'vue'
import { ChatDotRound, ChatLineRound, ChatRound } from '@ux-up/icons-vue'

const value = ref()
const icons = [ChatRound, ChatLineRound, ChatDotRound] // 等同于 { 2: ChatRound, 4: { value: ChatLineRound, excluded: true }, 5: ChatDotRound }
</script>

```

## Rate的只读
只读的评分用来展示分数， 允许出现半星。

 为组件设置 `disabled` 属性为 `true` 表示组件为只读。 此时若设置 `show-score`，则会在右侧显示目前的分值。 此外，您可以使用属性 `score-template` 来提供评分模板。 模板为一个包含了 `{value}` 的字符串，`{value}` 会被替换为当前分值。
```vue
<template>
    <ux-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(3.7)
</script>

```

## Rate的自定义样式
您可以为 rate 组件设定自定义样式。 使用 `css` 或 `scss` 改变全局或局部的颜色。 我们设置了一些全局颜色变量：`--ux-rate-void-color`、`--ux-rate-fill-color`、`--ux-rate-disabled-void-color` 和 `--ux-rate-text-color`。 您可以像这样使用：`:root { --ux-rate-void-color: red; --ux-rate-fill-color: blue; }`。

### 默认变量

|变量|默认颜色|
|----|----|
|--ux-rate-void-color|<ux-buttonsize="mini"color="var(--ux-border-color-darker)"/>|
|--ux-rate-fill-color|<ux-buttonsize="mini"color="#f7ba2a"/>|
|--ux-rate-disabled-void-color|<ux-buttonsize="mini"color="var(--ux-fill-color)"/>|
|--ux-rate-text-color|<ux-buttonsize="mini"color="var(--ux-text-color-primary)"/>|
