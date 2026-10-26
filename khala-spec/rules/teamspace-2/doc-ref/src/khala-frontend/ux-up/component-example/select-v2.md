# SelectVirtual 虚拟化选择器
单个选择器可加载数万行数据。

## SelectV2的基础用法
适用广泛的基础选择器。

```vue
<template>
    <ux-select-v2 v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的多选
基础的多选选择器。

```vue
<template>
    <ux-select-v2 v-model="value" :options="options" multiple />
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = ref(
    Array.from({ length: 1000 }).map((_, idx) => ({
        value: `选项 ${idx + 1}`,
        label: `用户-${idx}`
    }))
)
</script>

```

## SelectV2的尺寸
 使用 `size` 属性改变选择器大小。 除了默认大小外，还有另外三个选项： `large`, `small`, `mini`。
```vue
<template>
    <div>
        <ux-select-v2 v-model="value" :options="options" size="large" />
        <ux-select-v2 v-model="value" :options="options" />
        <ux-select-v2 v-model="value" :options="options" size="small" />
        <ux-select-v2 v-model="value" :options="options" size="mini" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的隐藏多余标签的多选
默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

```vue
<template>
    <div>
        <div>
            <div>使用collapse-tags</div>
            <ux-select-v2 v-model="value" :options="options" multiple collapse-tags />
        </div>
        <div>
            <div>使用collapse-tags-tooltip</div>
            <ux-select-v2 v-model="value2" :options="options" multiple collapse-tags collapse-tags-tooltip />
        </div>
        <div>
            <div>使用max-collapse-tags</div>
            <ux-select-v2
                v-model="value3"
                :options="options"
                multiple
                collapse-tags
                collapse-tags-tooltip
                :max-collapse-tags="3" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const value2 = ref([])
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的可过滤的多选
当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项。

```vue
<template>
    <ux-select-v2 v-model="value" filterable :options="options" multiple />
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的禁用选择器本身或选项
您可以选择禁用 Select 或者 Select 中的某个选项。

```vue
<template>
    <div>
        <div>
            <div>禁用选项</div>
            <ux-select-v2 v-model="value" filterable :options="options" multiple />
        </div>
        <div>
            <div>禁用选择器</div>
            <ux-select-v2 v-model="value" disabled filterable :options="options" multiple />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项${idx + 1}`,
    label: `用户-${idx}`,
    disabled: idx % 10 === 0
}))
</script>

```

## SelectV2的给选项进行分组
只要数据格式满足特定要求，我们就可以按照自己的意愿为选项进行分组。

```vue
<template>
    <ux-select-v2 v-model="value" filterable :options="options" multiple />
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = Array.from({ length: 10 }).map((_, idx) => {
    const label = idx + 1
    return {
        value: `分组 ${label}`,
        label: `分组 ${label}`,
        options: Array.from({ length: 10 }).map((_, idx) => ({
            value: `选项 ${idx + 1 + 10 * label}`,
            label: `用户-${idx + 1 + 10 * label}`
        }))
    }
})
</script>

```

## SelectV2的一键清除
我们可以同时清除所有选定的选项。此设定也适用于单选。

```vue
<template>
    <div>
        <div>
            <div>多选</div>
            <ux-select-v2 v-model="value1" :options="options" multiple clearable />
        </div>
        <div>
            <div>单选</div>
            <ux-select-v2 v-model="value2" :options="options" clearable />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的自定义选项的渲染模板
我们也可以通过自定义模板来渲染自己想要的选项内容。

```vue
<template>
    <ux-select-v2 v-model="value" filterable :options="options" multiple>
        <template #default="{ item }">
            <span>{{ item.label }}</span>
            <span style="color: var(--ux-text-color-secondary); font-size: 13px">
                {{ item.value }}
            </span>
        </template>
    </ux-select-v2>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的自定义下拉菜单的头部
您可以自定义下拉菜单的头部。

::: demo 使用slot 自定义内容

select-v2/custom-header

:::
## SelectV2的自定义下拉菜单的底部
您可以自定义下拉菜单的底部。

::: demo 使用slot 自定义内容

select-v2/custom-footer

:::
## SelectV2的创建临时选项
创建并选中未包含在初始选项中的条目。

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。本例还使用了 `default-first-option` 属性， 在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

:::info primary

最好在使用 `allow-create` 属性的同时设置 `:reserve-keyword="false"`。

:::

```vue
<template>
    <div>
        <div>
            <div>使用默认展示(多选)</div>
            <ux-select-v2
                v-model="value1"
                :options="options"
                allow-create
                default-first-option
                filterable
                multiple
                clearable />
        </div>
        <div>
            <div>使用默认展示(单选)</div>
            <ux-select-v2 v-model="value2" :options="options" allow-create default-first-option filterable clearable />
        </div>
        <div>
            <div>设置reserve-keyword为false</div>
            <ux-select-v2
                v-model="value3"
                :options="options"
                allow-create
                default-first-option
                filterable
                multiple
                clearable
                :reserve-keyword="false" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref()
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的远程搜索
输入关键字以从远程服务器中查找数据。

 从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。
```vue
<template>
    <ux-select-v2
        v-model="value"
        multiple
        filterable
        remote
        :remote-method="remoteMethod"
        clearable
        :options="options"
        :loading="loading"
        placeholder="请输入" />
</template>

<script setup>
import { ref } from 'vue'

const states = [
    'Layout布局',
    'Container布局容器',
    'Color色彩',
    'Border边框',
    'Typography字体',
    'Icon图标',
    'Button按钮',
    'Link文字链接'
]
const list = states.map((item) => {
    return { value: item, label: item }
})

const value = ref([])
const options = ref([])
const loading = ref(false)

const remoteMethod = (query) => {
    if (query !== '') {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            options.value = list.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 200)
    } else {
        options.value = []
    }
}
</script>

```

## SelectV2的使用 value-key 键属性
当 `options.value` 是一个对象时，您应该为它设置一个唯一的标识名称

::: tip

在  之前，`value-key`既用作所选对象的唯一值，也用作`options`中表示值的对应 key。 现在 `value-key` 仅作为所选对象的唯一值使用，选项中值的 key 是 `props.value`.

:::

```vue
<template>
    <ux-select-v2 v-model="value" :options="options" value-key="name" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref({ name: '选项 1', test: '测试 0' })
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: {
        name: `选项 ${idx + 1}`,
        test: `测试 ${idx % 3}`
    },
    label: `用户-${idx}`
}))
</script>
```

## SelectV2的自定义选项
当您的 `options` 格式不同于默认格式 您可以通过 `props` 属性自定义 `options`

```vue
<template>
    <ux-select-v2 v-model="value" :options="options" :props="props" filterable multiple />
</template>

<script setup>
import { ref } from 'vue'

const props = {
    label: 'name',
    value: 'id'
}
const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    id: `选项 ${idx + 1}`,
    name: `用户-${idx}`
}))
</script>

```

## SelectV2的自定义标签
您可以自定义标签。

 将自定义的标签插入 `ux-select` 的 slot 中即可。 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.
```vue
<template>
    <ux-select-v2 v-model="value" multiple :options="colors">
        <template #default="{ item }">
            <div>
                <ux-tag :color="item.value" size="small" />
                <span :style="{ color: item.value }">{{ item.label }}</span>
            </div>
        </template>
        <template #tag>
            <ux-tag v-for="color in value" :key="color" :color="color" />
        </template>
    </ux-select-v2>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const colors = [
    {
        value: '#1890ff',
        label: 'primary'
    },
    {
        value: '#67c23a',
        label: 'success'
    },
    {
        value: '#faad15',
        label: 'warning'
    },
    {
        value: '#f56c6c',
        label: 'danger'
    },
    {
        value: '#999999',
        label: 'info'
    },
    {
        value: '#6222C9',
        label: 'purple'
    }
]
colors.forEach((color) => {
    value.value.push(color.value)
})
</script>
```

## SelectV2的自定义加载
修改加载区域内容

```vue
<template>
    <div>
        <div>
            <div>自定义图标1</div>
            <ux-select-v2
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入"
                :remote-method="remoteMethod"
                :loading="loading"
                :options="options">
                <template #loading>
                                        </ux-icon>
                </template>
            </ux-select-v2>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const list = ref([])
const options = ref([])
const value = ref([])
const loading = ref(false)

onMounted(() => {
    list.value = states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` }
    })
})

const remoteMethod = (query) => {
    if (query) {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            options.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 3000)
    } else {
        options.value = []
    }
}

const states = [
    'Layout布局',
    'Container布局容器',
    'Color色彩',
    'Border边框',
    'Typography字体',
    'Icon图标',
    'Button按钮',
    'Link文字链接'
]
</script>
```

## SelectV2的空值配
若想配置如空字符串为有效值而不是空值，可以配置 `empty-values` 为 `[null, undefined]`.

如果您想要将清空值更改为 `null`, 请设置 `value-on-clear` 为 `null`

```vue
<template>
    <ux-select-v2
        v-model="value"
        :options="options"
        :empty-values="[null, undefined]"
        :value-on-clear="null"
        clearable
        @clear="handleClear" />
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage } from 'ux-up'

const value = ref('')

const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项 ${idx + 1}`,
    label: `用户-${idx}`
}))

options.unshift({
    value: '',
    label: '全部'
})

const handleClear = () => {
    UxMessage.info(`清空之后的值: ${value.value}`)
}
</script>

```

## SelectV2的自定义标签
您可以自定义标签

```vue
<template>
    <div>
        <div>
            <div>单选</div>
            <ux-select-v2 v-model="value1" :options="options" clearable>
                <template #label="{ label, value }">
                    <span>{{ label }}: </span>
                    <span>{{ value }}</span>
                </template>
            </ux-select-v2>
        </div>
        <div>
            <div>多选</div>
            <ux-select-v2 v-model="value2" :options="options" clearable multiple>
                <template #label="{ label, value }">
                    <span>{{ label }}: </span>
                    <span>{{ value }}</span>
                </template>
            </ux-select-v2>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('选项1')
const value2 = ref(['选项1'])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选项${idx + 1}`,
    label: `用户-${idx}`
}))
</script>

```

## SelectV2的自定义宽度
默认情况下，下拉框的宽度会根据 `label` 的值进行计算。如果您通过 `default slot` 自定义下拉框选项，可能会导致选项中显示的文本与 `label` 的值不一致，从而引发计算错误。在这种情况下，您可以将 `fit-input-width` 属性设置为一个具体的数值，以固定其宽度。

```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <ux-select-v2 v-model="value" :options="options" placeholder="请选择" />
        </div>
        <div>
            <div>fit-input-width 为 false</div>
            <ux-select-v2
                v-model="value"
                :options="options"
                placeholder="请选择"
               
                :fit-input-width="false" />
        </div>
        <div>
            <div>fit-input-width 具体值</div>
            <ux-select-v2
                v-model="value"
                :options="options"
                placeholder="请选择"
               
                :fit-input-width="440">
                <template #default="{ item }">
                    <span>{{ item.value + item.label }}</span>
                </template>
            </ux-select-v2>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `选择 ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}${'-'.repeat(Math.ceil(idx / 25))}`
}))
</script>

```

