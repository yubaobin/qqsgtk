# Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

## Tabs的基础用法
基础的、简洁的标签页。

 `ux-tabs` 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。
```vue
<template>
    <ux-tabs v-model="activeName" @tab-click="handleClick">
        <ux-tab-pane label="指南" name="first">指南</ux-tab-pane>
        <ux-tab-pane label="组件" name="second">组件</ux-tab-pane>
        <ux-tab-pane label="资源" name="third">资源</ux-tab-pane>
        <ux-tab-pane label="搜索文档" name="fourth">搜索文档</ux-tab-pane>
    </ux-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('second')

const handleClick = (tab, event) => {
    console.log(tab, event)
}
</script>

```

## Tabs的卡片风格的标签
可以设置具有卡片风格的标签。

 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。
```vue
<template>
    <ux-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <ux-tab-pane label="指南" name="first">指南</ux-tab-pane>
        <ux-tab-pane label="组件" name="second">组件</ux-tab-pane>
        <ux-tab-pane label="资源" name="third">资源</ux-tab-pane>
        <ux-tab-pane label="搜索文档" name="fourth">搜索文档</ux-tab-pane>
    </ux-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
    console.log(tab, event)
}
</script>

```

## Tabs的带有边框的卡片风格
你还可以设置标签页为带有边框的卡片

 将 `type` 设置为 `border-card`。
```vue
<template>
    <ux-tabs type="border-card">
        <ux-tab-pane label="指南">指南</ux-tab-pane>
        <ux-tab-pane label="组件">组件</ux-tab-pane>
        <ux-tab-pane label="资源">资源</ux-tab-pane>
        <ux-tab-pane label="搜索文档">搜索文档</ux-tab-pane>
    </ux-tabs>
</template>

```

## Tabs的标签位置的设置
可以通过 `tab-position` 设置标签的位置

 标签一共有四个方向的设置 `left`、`right`、`top`、`bottom`。
```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="tabPosition">
                <ux-radio-button value="top">top</ux-radio-button>
                <ux-radio-button value="right">right</ux-radio-button>
                <ux-radio-button value="bottom">bottom</ux-radio-button>
                <ux-radio-button value="left">left</ux-radio-button>
            </ux-radio-group>
        </div>
        <ux-tabs :tab-position="tabPosition">
            <ux-tab-pane label="指南">指南</ux-tab-pane>
            <ux-tab-pane label="组件">组件</ux-tab-pane>
            <ux-tab-pane label="资源">资源</ux-tab-pane>
            <ux-tab-pane label="搜索文档">搜索文档</ux-tab-pane>
        </ux-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>

```

## Tabs的自定义标签页的内容
可以通过具名插槽来实现自定义标签页的内容

```vue
<template>
    <ux-tabs type="border-card">
        <ux-tab-pane>
            <template #label>
                <span>
                    <ux-icon><calendar /></ux-icon>
                    <span>指南</span>
                </span>
            </template>
            指南
        </ux-tab-pane>
        <ux-tab-pane label="组件">组件</ux-tab-pane>
        <ux-tab-pane label="资源">资源</ux-tab-pane>
        <ux-tab-pane label="搜索文档">搜索文档</ux-tab-pane>
    </ux-tabs>
</template>

<script setup>
import { Calendar } from '@ux-up/icons-vue'
</script>

```

## Tabs的动态增减标签页
增减标签页按钮只能在选项卡样式的标签页下使用

```vue
<template>
    <ux-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <ux-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
        </ux-tab-pane>
    </ux-tabs>
</template>

<script setup>
import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: '指南',
        name: '1',
        content: '指南'
    },
    {
        title: '组件',
        name: '2',
        content: '组件'
    }
])

const handleTabsEdit = (targetName, action) => {
    if (action === 'add') {
        const newTabName = `${++tabIndex}`
        editableTabs.value.push({
            title: '新的Tab',
            name: newTabName,
            content: '新Tab的内容'
        })
        editableTabsValue.value = newTabName
    } else if (action === 'remove') {
        const tabs = editableTabs.value
        let activeName = editableTabsValue.value
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            })
        }

        editableTabsValue.value = activeName
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
}
</script>

```

## Tabs的添加按钮自定义图标

```vue
addIcon
<template>
    <ux-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <template #add-icon>
            <ux-icon><Select /></ux-icon>
        </template>
        <ux-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
        </ux-tab-pane>
    </ux-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '@ux-up/icons-vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: '指南',
        name: '1',
        content: '指南'
    },
    {
        title: '组件',
        name: '2',
        content: '组件'
    }
])

const handleTabsEdit = (targetName, action) => {
    if (action === 'add') {
        const newTabName = `${++tabIndex}`
        editableTabs.value.push({
            title: '新的Tab',
            name: newTabName,
            content: '新Tab的内容'
        })
        editableTabsValue.value = newTabName
    } else if (action === 'remove') {
        const tabs = editableTabs.value
        let activeName = editableTabsValue.value
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            })
        }

        editableTabsValue.value = activeName
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
}
</script>

```

## Tabs的增加自定义标签页触发器

```vue
<template>
    <div>
        <div>
            <ux-button size="small" @click="addTab(editableTabsValue)">添加 Tab</ux-button>
        </div>
        <ux-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <ux-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
                {{ item.content }}
            </ux-tab-pane>
        </ux-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: '指南',
        name: '1',
        content: '指南'
    },
    {
        title: '组件',
        name: '2',
        content: '组件'
    }
])

const addTab = (targetName) => {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
        title: '新的Tab',
        name: newTabName,
        content: '新Tab的内容'
    })
    editableTabsValue.value = newTabName
}
const removeTab = (targetName) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

```

