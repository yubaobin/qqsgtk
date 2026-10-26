# Radio 单选框
在一组备选项中进行单选。

## Radio的基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 [Select 选择器](/zh-CN/component/select)。

 要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `value` 属性的值， `value`可以是`String`、`Number` 或 `Boolean`。
```vue
<template>
    <div>
        <ux-radio v-model="radio" value="1" size="large">备选项(large)</ux-radio>
        <ux-radio v-model="radio" value="2">备选项</ux-radio>
        <ux-radio v-model="radio" value="3" size="small">备选项(small)</ux-radio>
        <ux-radio v-model="radio" value="4" size="mini">备选项(mini)</ux-radio>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('1')
</script>

```

## Radio的禁用状态
单选框不可用的状态。

 只要在 ux-radio 元素中设置 disabled 属性即可，它接受一个 Boolean，true 为禁用。
```vue
<template>
    <div>
        <ux-radio v-model="radio" disabled value="禁用">备选项1</ux-radio>
        <ux-radio v-model="radio" disabled value="选中且禁用">备选项2</ux-radio>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('选中且禁用')
</script>

```

## Radio的单选框组
适用于在多个互斥的选项中选择的场景。

  结合 `ux-radio-group` 元素和子元素 `ux-radio` 可以实现单选组，在 `ux-radio-group` 中绑定 `v-model`，在 `ux-radio` 中设置好 `value` 即可，无需再给每一个 `ux-radio` 绑定变量，另外，还提供了 `change` 事件来响应变化，它会传入一个参数 `value`。
```vue
<template>
    <ux-radio-group v-model="radio">
        <ux-radio :value="3">备选项1</ux-radio>
        <ux-radio :value="6">备选项2</ux-radio>
        <ux-radio :value="9">备选项3</ux-radio>
    </ux-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref(3)
</script>

```

## Radio的按钮样式
按钮样式的单选组合。

 只需要把 `ux-radio` 元素换成 `ux-radio-button` 元素即可， 此外，还提供了 size 属性。
```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="radio1" size="large">
                <ux-radio-button label="上海" value="上海" />
                <ux-radio-button label="北京" value="北京" />
                <ux-radio-button label="广州" value="广州" />
                <ux-radio-button label="深圳" value="深圳" />
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio2">
                <ux-radio-button label="上海" value="上海" />
                <ux-radio-button label="北京" value="北京" />
                <ux-radio-button label="广州" value="广州" />
                <ux-radio-button label="深圳" value="深圳" />
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio3" size="small">
                <ux-radio-button label="上海" value="上海" />
                <ux-radio-button label="北京" value="北京" disabled />
                <ux-radio-button label="广州" value="广州" />
                <ux-radio-button label="深圳" value="深圳" />
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio4" size="mini">
                <ux-radio-button label="上海" value="上海" />
                <ux-radio-button label="北京" value="北京" disabled />
                <ux-radio-button label="广州" value="广州" />
                <ux-radio-button label="深圳" value="深圳" />
            </ux-radio-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('上海')
const radio2 = ref('上海')
const radio3 = ref('上海')
const radio4 = ref('上海')
</script>

```

## Radio的按钮样式(自定义颜色)
按钮样式的单选组合。

 您可以使用 `填充` 和 `text-color` 设置按钮处于活动状态时的样式。
```vue
<template>
    <div>
        <ux-radio-group v-model="radio1" size="large" fill="#6cf">
            <ux-radio-button label="上海" value="上海" />
            <ux-radio-button label="北京" value="北京" />
            <ux-radio-button label="广州" value="广州" />
            <ux-radio-button label="深圳" value="深圳" />
        </ux-radio-group>
    </div>
    <div>
        <ux-radio-group v-model="radio2" text-color="#626aef" fill="rgb(239, 240, 253)">
            <ux-radio-button label="上海" value="上海" />
            <ux-radio-button label="北京" value="北京" />
            <ux-radio-button label="广州" value="广州" />
            <ux-radio-button label="深圳" value="深圳" />
        </ux-radio-group>
    </div>
    <div>
        <ux-radio-group v-model="radio3" size="small">
            <ux-radio-button label="上海" value="上海" />
            <ux-radio-button label="北京" value="北京" />
            <ux-radio-button label="广州" value="广州" />
            <ux-radio-button label="深圳" value="深圳" />
        </ux-radio-group>
    </div>
    <div>
        <ux-radio-group v-model="radio3" size="mini">
            <ux-radio-button label="上海" value="上海" />
            <ux-radio-button label="北京" value="北京" />
            <ux-radio-button label="广州" value="广州" />
            <ux-radio-button label="深圳" value="深圳" />
        </ux-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('上海')
const radio2 = ref('上海')
const radio3 = ref('上海')
const radio4 = ref('上海')
</script>

```

## Radio的带有边框
设置 `border` 属性为 true 可以渲染为带有边框的单选框。

```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="radio1">
                <ux-radio value="1" size="large" border>备选项1</ux-radio>
                <ux-radio value="2" size="large" border>备选项2</ux-radio>
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio2">
                <ux-radio value="1" border>备选项1</ux-radio>
                <ux-radio value="2" border>备选项2</ux-radio>
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio3" size="small">
                <ux-radio value="1" border>备选项1</ux-radio>
                <ux-radio value="2" border disabled>备选项2</ux-radio>
            </ux-radio-group>
        </div>
        <div>
            <ux-radio-group v-model="radio4" size="mini" disabled>
                <ux-radio value="1" border>备选项1</ux-radio>
                <ux-radio value="2" border>备选项2</ux-radio>
            </ux-radio-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>

```

