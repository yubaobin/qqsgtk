# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## Select的基础用法
适用广泛的基础单选。

 `v-model` 的值为当前被选中的 `ux-option` 的 value 属性值
```vue
<template>
    <ux-select v-model="value">
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的Options 属性 ^(1.1.5)
 `ux-option` 基本用法。 您可以通过 `props` 属性自定义 `options` 的别名。
```vue
<template>
    <ux-select v-model="value" :options="options" placeholder="请选择" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        value: '选项1',
        label: '选项1'
    },
    {
        value: '选项2',
        label: '选项2'
    },
    {
        value: '选项3',
        label: '选项3'
    },
    {
        value: '选项4',
        label: '选项4'
    },
    {
        value: '选项5',
        label: '选项5'
    }
]
</script>

```

## Select的有禁用选项
 在 `ux-option` 中，设定 `disabled` 值为 `true`，即可禁用该选项
```vue
<template>
    <ux-select v-model="value">
        <ux-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        disabled: true,
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的禁用状态
禁用整个选择器组件

 为 `ux-select` 设置 `disabled` 值为 `true`，则整个选择器不可用。
```vue
<template>
    <ux-select v-model="value" disabled>
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        disabled: true,
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的可清空
您可以使用清除图标来清除选择。

 为 `ux-select` 设置 `clearable` 的值为 `true`，则可将选择器清空。需要注意的是，`clearable` 属性仅适用于单选。
```vue
<template>
    <ux-select v-model="value" clearable>
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        disabled: true,
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的尺寸
 使用 `size` 属性改变选择器大小。 除了默认大小外，还有另外三个选项： `large`, `small`, `mini`。
```vue
<template>
    <div>
        <ux-select v-model="value" size="large">
            <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </ux-select>
        <ux-select v-model="value">
            <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </ux-select>
        <ux-select v-model="value" size="small">
            <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </ux-select>
        <ux-select v-model="value" size="mini">
            <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </ux-select>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的基础多选
多选选择器使用 `tag` 组件来展示已选中的选项。

 为 `ux-select` 设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。 默认情况下选中值会以 Tag 组件的形式展现， 你也可以设置 `collapse-tags` 属性将它们合并为一段文字。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。
```vue
<template>
    <div>
        <div>
            <div>
                <div>默认展示</div>
                <ux-select v-model="value1" multiple>
                    <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </ux-select>
            </div>
            <div>
                <div>使用collapse-tags展示</div>
                <ux-select v-model="value2" multiple collapse-tags>
                    <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </ux-select>
            </div>
        </div>
        <div>
            <div>
                <div>使用collapse-tags-tooltip展示</div>
                <ux-select v-model="value3" multiple collapse-tags collapse-tags-tooltip>
                    <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </ux-select>
            </div>
            <div>
                <div>使用max-collapse-tags展示</div>
                <ux-select v-model="value4" multiple collapse-tags collapse-tags-tooltip :max-collapse-tags="3">
                    <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </ux-select>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的自定义模板
你可以自定义如何来渲染每一个选项。

 将自定义的 `HTML` 模板插入 `ux-option` 的 `slot` 中即可。
```vue
<template>
    <ux-select v-model="value">
        <ux-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
            <span>{{ item.label }}</span>
            <span style="float: right; color: var(--ux-text-color-secondary); font-size: 13px">
                {{ item.value }}
            </span>
        </ux-option>
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const cities = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的自定义下拉菜单的头部
::: demo 使用 `slot` 自定义下拉菜单的头部内容。

select/custom-header

:::
## Select的自定义下拉菜单的底部
::: demo 使用 `slot` 自定义下拉菜单的底部内容。

select/custom-footer

:::
## Select的分组
备选项进行分组展示。

 使用 `ux-option-group` 对备选项进行分组，它的 `label` 属性为分组名
```vue
<template>
    <ux-select v-model="value">
        <ux-option-group v-for="group in options" :key="group.label" :label="group.label">
            <ux-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </ux-option-group>
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        label: '基础组件',
        options: [
            {
                value: '选项1',
                label: '布局'
            },
            {
                value: '选项2',
                label: '布局容器'
            },
            {
                value: '选项3',
                label: '色彩'
            },
            {
                value: '选项4',
                label: '边框'
            },
            {
                value: '选项5',
                label: '字体'
            }
        ]
    },
    {
        label: '表单组件',
        options: [
            {
                value: '选项1',
                label: '自动补全输入框'
            },
            {
                value: '选项2',
                label: '级联选择器'
            },
            {
                value: '选项3',
                label: '多选框'
            },
            {
                value: '选项4',
                label: '取色器'
            },
            {
                value: '选项5',
                label: '日期选择器'
            }
        ]
    }
]
</script>

```

## Select的筛选选项
可以利用筛选功能快速查找选项。

 为`ux-select`添加`filterable`属性即可启用搜索功能。 默认情况下，`Select` 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。
```vue
<template>
    <ux-select v-model="value" filterable>
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

## Select的远程搜索
输入关键字以从远程服务器中查找数据。

 从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。 需要注意的是，如果 `ux-option` 是通过 `v-for` 指令渲染出来的，此时需要为 `ux-option` 添加 `key` 属性， 且其值需具有唯一性，比如这个例子中的 `item.value`。
```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入"
                :remote-method="remoteMethod"
                :loading="loading">
                <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </ux-select>
        </div>
        <div>
            <div>使用 remote-show-suffix</div>
            <ux-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入"
                remote-show-suffix
                :remote-method="remoteMethod"
                :loading="loading">
                <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </ux-select>
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
        return { value: item, label: item }
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
        }, 200)
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

## Select的创建新的选项
创建并选中未包含在初始选项中的条目。

 通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。 本例还使用了 `default-first-option` 属性， 在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。
```vue
<template>
    <ux-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        :reserve-keyword="false"
        placeholder="请选择文章标签">
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = [
    {
        value: 'HTML',
        label: 'HTML'
    },
    {
        value: 'CSS',
        label: 'CSS'
    },
    {
        value: 'JavaScript',
        label: 'JavaScript'
    }
]
</script>

```

## Select的使用值键 value-key 属性
如果 `Select` 的绑定值为对象类型，请务必指定 `value-key` 作为它的唯一性标识。

 通过使用 `value-key` 属性，可以正确处理带有重复 `label` 的数据。 这样虽然`label` 是重复的，但任可通过 `id` 来确认唯一性。
```vue
<template>
    <div>
        <ux-select v-model="value" value-key="id">
            <ux-option v-for="item in options" :key="item.id" :label="item.label" :value="item" />
        </ux-select>
        <p>
            当前选择的描述:
            {{ value ? value.desc : '请选择' }}
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const options = ref([
    { id: 1, label: '备选项A', desc: '备选项 A - 1' },
    { id: 2, label: '备选项B', desc: '备选项 B - 2' },
    { id: 3, label: '备选项C', desc: '备选项 C - 3' },
    { id: 4, label: '备选项A', desc: '备选项 A - 1' }
])
</script>

```

## Select的自定义标签
 将自定义的标签插入 `ux-select` 的 slot 中即可。 注意 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.
```vue
<template>
    <ux-select v-model="value" multiple>
        <ux-option v-for="item in colors" :key="item.value" :label="item.label" :value="item.value">
            <div>
                <ux-tag :color="item.value" size="small" />
                <span :style="{ color: item.value }">{{ item.label }}</span>
            </div>
        </ux-option>
        <template #tag>
            <ux-tag v-for="color in value" :key="color" :color="color" />
        </template>
    </ux-select>
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

## Select的自定义加载
修改加载区域内容。

```vue
<template>
    <div>
        <div>
            <div>自定义图标1</div>
            <ux-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入"
                :remote-method="remoteMethod"
                :loading="loading">
                <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                <template #loading>
                                        </ux-icon>
                </template>
            </ux-select>
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
        }, 30000)
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

## Select的空值配置
若想配置如空字符串为有效值而不是空值，可以配置 `empty-values` 为 `[null, undefined]`.

如果您想要将清空值更改为 `null`, 请设置 `value-on-clear` 为 `null`

```vue
<template>
    <ux-select v-model="value" :empty-values="[null, undefined]" :value-on-clear="null" clearable @clear="handleClear">
        <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ux-select>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage } from 'ux-up'

const value = ref('')

const options = [
    {
        value: '',
        label: '全部'
    },
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]

const handleClear = () => {
    UxMessage.info(`清空之后的值: ${value.value}`)
}
</script>

```

## Select的自定义标签
 可以自定义标签。
```vue
<template>
    <div>
        <div>
            <div>单选</div>
            <ux-select v-model="value1" clearable>
                <template #label="{ label, value }">
                    <span>{{ label }}: </span>
                    <span>{{ value }}</span>
                </template>
                <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </ux-select>
        </div>
        <div>
            <div>多选</div>
            <ux-select v-model="value2" clearable multiple>
                <template #label="{ label, value }">
                    <span>{{ label }}: </span>
                    <span>{{ value }}</span>
                </template>
                <ux-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </ux-select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('选项1')
const value2 = ref(['选项1'])
const options = [
    {
        value: '选项1',
        label: '自动补全输入框'
    },
    {
        value: '选项2',
        label: '级联选择器'
    },
    {
        value: '选项3',
        label: '多选框'
    },
    {
        value: '选项4',
        label: '取色器'
    },
    {
        value: '选项5',
        label: '日期选择器'
    }
]
</script>

```

