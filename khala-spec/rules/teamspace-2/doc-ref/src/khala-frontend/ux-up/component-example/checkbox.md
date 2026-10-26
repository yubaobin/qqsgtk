# Checkbox 多选框
在一组备选项中进行多选。

## Checkbox的基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的内容。

 在 `ux-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。
```vue
<template>
    <div>
        <ux-checkbox v-model="checked1" size="large">备选项(large)</ux-checkbox>
        <ux-checkbox v-model="checked2">备选项</ux-checkbox>
        <ux-checkbox v-model="checked3" size="small">备选项(small)</ux-checkbox>
        <ux-checkbox v-model="checked4" size="mini">备选项(mini)</ux-checkbox>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
</script>

```

## Checkbox的禁用状态
 多选框不可用状态，设置 `disabled` 属性即可。
```vue
<template>
    <ux-checkbox v-model="checked1" disabled>禁用</ux-checkbox>
    <ux-checkbox v-model="checked2">正常</ux-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
</script>

```

## Checkbox的多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

 `checkbox-group` 元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用 `v-model` 绑定 `Array` 类型的变量即可。 `ux-checkbox` 的 `label`属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 `checkbox` 按钮后的介绍。`label` 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
```vue
<template>
    <ux-checkbox-group v-model="checkList">
        <ux-checkbox label="复选框 A" value="复选框A" />
        <ux-checkbox label="复选框 B" value="复选框B" />
        <ux-checkbox label="复选框 C" value="复选框C" />
        <ux-checkbox label="禁用" value="禁用" disabled />
        <ux-checkbox label="选中且禁用" value="选中且禁用" disabled />
    </ux-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref(['选中且禁用', '复选框A'])
</script>

```

<!-- ## Options 属性 ^(1.1.4)

基础用法 `ux-checkbox-group` 的快捷示例。 您可以通过 `props` 属性自定义 `options` 的别名。

```vue
<template>
    <ux-checkbox-group v-model="checkList" :options="options" :props="props" />
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
const props = { label: 'name', value: 'id', disabled: 'unable' }
const options = [
    { name: '备选项 A', id: 'Value A' },
    { name: '备选项 B', id: 'Value B' },
    { name: '备选项 C', id: 'Value C' },
    { name: '禁用项', id: 'Value disabled', unable: true },
    {
        name: '选中并禁用',
        id: 'Value selected and disabled',
        unable: true
    }
]
</script>

```
 -->
## Checkbox的不确定状态
 `indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。
```vue
<template>
    <ux-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"> 全选 </ux-checkbox>
    <ux-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <ux-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
            {{ city }}
        </ux-checkbox>
    </ux-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['上海', '北京'])
const cities = ['上海', '北京', '广州', '深圳']

const handleCheckAllChange = (val) => {
    checkedCities.value = val ? cities : []
    isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === cities.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>

```

## Checkbox的可选项目数量的限制
 使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。
```vue
<template>
    <ux-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <ux-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
            {{ city }}
        </ux-checkbox>
    </ux-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checkedCities = ref(['上海', '北京'])
const cities = ['上海', '北京', '广州', '深圳']
</script>

```

## Checkbox的按钮样式
按钮样式的多选组合。

 只需要把 `ux-checkbox` 元素替换为 `ux-checkbox-button` 元素即可。 此外，ux-ui 还提供了`size`属性。
```vue
<template>
    <div>
        <div>
            <ux-checkbox-group v-model="checkboxGroup1" size="large">
                <ux-checkbox-button v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                </ux-checkbox-button>
            </ux-checkbox-group>
        </div>
        <div>
            <ux-checkbox-group v-model="checkboxGroup2">
                <ux-checkbox-button v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                </ux-checkbox-button>
            </ux-checkbox-group>
        </div>
        <div>
            <ux-checkbox-group v-model="checkboxGroup3" size="small">
                <ux-checkbox-button v-for="city in cities" :key="city" :value="city" :disabled="city === '北京'">
                    {{ city }}
                </ux-checkbox-button>
            </ux-checkbox-group>
        </div>
        <div>
            <ux-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <ux-checkbox-button v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                </ux-checkbox-button>
            </ux-checkbox-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checkboxGroup1 = ref(['上海'])
const checkboxGroup2 = ref(['上海'])
const checkboxGroup3 = ref(['上海'])
const checkboxGroup4 = ref(['上海'])
const cities = ['上海', '北京', '广州', '深圳']
</script>

```

## Checkbox的带有边框
 设置`border`属性可以渲染为带有边框的多选框。
```vue
<template>
    <div>
        <ux-checkbox v-model="checked1" label="备选项1" size="large" border />
        <ux-checkbox v-model="checked2" label="备选项2" size="large" border />
    </div>
    <div>
        <ux-checkbox v-model="checked3" label="备选项1" border />
        <ux-checkbox v-model="checked4" label="备选项2" border />
    </div>
    <div>
        <ux-checkbox-group v-model="checkboxGroup1" size="small">
            <ux-checkbox label="备选项1" value="Value1" border />
            <ux-checkbox label="备选项2" value="Value2" border />
        </ux-checkbox-group>
    </div>
    <div>
        <ux-checkbox-group v-model="checkboxGroup1" size="mini">
            <ux-checkbox label="备选项1" value="Value1" border disabled />
            <ux-checkbox label="备选项2" value="Value2" border disabled />
        </ux-checkbox-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Value1'])
</script>

```

