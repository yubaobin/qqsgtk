# Input 输入框
通过鼠标或键盘输入字符。

## Input的基础用法

```vue
<template>
    <ux-input v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

```

## Input的禁用状态
 通过 `disabled` 属性指定是否禁用 input 组件。
```vue
<template>
    <ux-input v-model="input" disabled placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

```

## Input的一键清空
 使用`clearable`属性即可得到一个可一键清空的输入框。
```vue
<template>
    <ux-input v-model="input" placeholder="请输入内容" clearable />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

```

## Input的格式化
在 `formatter`的情况下显示值，我们通常同时使用 `parser`。

```vue
<template>
    <ux-input
        v-model="input"
       
        placeholder="请输入内容"
        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

```

## Input的密码框
 使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。
```vue
<template>
    <ux-input v-model="input" type="password" placeholder="请输入密码" show-password />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

```

## Input的带图标的输入框
带有图标标记输入类型

 要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 也可以通过 `prefix` 和 `suffix` 命名的插槽添加图标。
```vue
<template>
    <div>
        <div>
            <span>属性方式：</span>
            <ux-input v-model="input1" placeholder="请选择日期" :suffix-icon="Calendar" />
            <ux-input v-model="input2" placeholder="请输入内容" :prefix-icon="Search" />
        </div>
        <div>
            <span>slot 方式：</span>
            <ux-input v-model="input3" placeholder="请选择日期">
                <template #suffix>
                    <ux-icon><calendar /></ux-icon>
                </template>
            </ux-input>
            <ux-input v-model="input4" placeholder="请输入内容">
                <template #prefix>
                    <ux-icon><search /></ux-icon>
                </template>
            </ux-input>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar, Search } from '@ux-up/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```

## Input的文本域
用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

 文本域高度可通过 `rows` 属性控制
```vue
<template>
    <ux-input v-model="textarea" :rows="2" type="textarea" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const textarea = ref('')
</script>

```

## Input的可自适应文本高度的文本域
设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

```vue
<template>
    <div>
        <div>
            <ux-input v-model="textarea1" autosize type="textarea" placeholder="请输入内容" />
        </div>
        <ux-input
            v-model="textarea2"
           
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="请输入内容" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const textarea1 = ref('')
const textarea2 = ref('')
</script>

```

## Input的复合型输入框
可前置或后置元素，一般为标签或按钮。

 可通过 `slot` 来指定在 `input` 中前置或者后置内容。
```vue
<template>
    <div>
        <div>
            <ux-input v-model="input1" placeholder="请输入内容">
                <template #prepend>Http://</template>
            </ux-input>
        </div>
        <div>
            <ux-input v-model="input2" placeholder="请输入内容">
                <template #append>.com</template>
            </ux-input>
        </div>
        <div>
            <ux-input v-model="input3" placeholder="请输入内容">
                <template #prepend>
                    <ux-select v-model="select" placeholder="请选择">
                        <ux-option label="餐厅名" value="1" />
                        <ux-option label="订单号" value="2" />
                        <ux-option label="用户电话" value="3" />
                    </ux-select>
                </template>
                <template #append>
                    <ux-button :icon="Search" />
                </template>
            </ux-input>
        </div>
        <div>
            <ux-input v-model="input3" placeholder="请输入内容">
                <template #prepend>
                    <ux-button :icon="Search" />
                </template>
                <template #append>
                    <ux-select v-model="select" placeholder="请选择">
                        <ux-option label="餐厅名" value="1" />
                        <ux-option label="订单号" value="2" />
                        <ux-option label="用户电话" value="3" />
                    </ux-select>
                </template>
            </ux-input>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@ux-up/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

```

## Input的尺寸
 使用 `size` 属性改变输入框大小。 除了默认大小外，还提供了 `large`, `small`, `mini` 三种尺寸。
```vue
<template>
    <div>
        <ux-row :gutter="16" align="middle">
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input1" size="large" placeholder="请输入内容" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input2" placeholder="请输入内容" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input3" size="small" placeholder="请输入内容" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input4" size="mini" placeholder="请输入内容" />
            </ux-col>
        </ux-row>
        <ux-row :gutter="16" align="middle">
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input1" size="large" placeholder="请输入内容" :prefix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input2" placeholder="请输入内容" :prefix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input3" size="small" placeholder="请输入内容" :prefix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input4" size="mini" placeholder="请输入内容" :prefix-icon="Search" />
            </ux-col>
        </ux-row>
        <ux-row :gutter="16" align="middle">
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input1" size="large" placeholder="请输入内容" :suffix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input2" placeholder="请输入内容" :suffix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input3" size="small" placeholder="请输入内容" :suffix-icon="Search" />
            </ux-col>
            <ux-col :md="6" :xs="24">
                <ux-input v-model="input4" size="mini" placeholder="请输入内容" :suffix-icon="Search" />
            </ux-col>
        </ux-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@ux-up/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>

```

## Input的输入长度限制
 `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 为 `true` 来展示字数统计。
```vue
<template>
    <ux-input v-model="text" maxlength="10" placeholder="请输入内容" show-word-limit type="text" />
    <div />
    <ux-input
        v-model="textarea"
        maxlength="30"
       
        placeholder="请输入内容"
        show-word-limit
        type="textarea" />
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const textarea = ref('')
</script>

```

