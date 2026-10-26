# TreeVirtual 虚拟化树形控件
可加载数据量大的数据。

## TreeV2的基础用法
基础的树形结构展示。

```vue
<template>
    <ux-tree-v2 :data="data" :props="props" :height="200" />
</template>

<script setup>
const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}

const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}
const data = createData(4, 30, 40)
</script>

```

## TreeV2的可选择的虚拟树
适用于需要选择层级时使用。

```vue
<template>
    <ux-tree-v2 :data="data" :props="props" show-checkbox :height="200" />
</template>

<script setup>
const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}

const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}
const data = createData(4, 30, 40)
</script>

```

:::info warning

在使用 `show-checkbox` 时，因为 `check-on-click-leaf` 默认值为 true， 最后一个树节点可以通过点击节点进行勾选。

:::
## TreeV2的禁用复选框
节点的复选框可以设置为禁用。

 在示例中，属性在 `defaultProps` 中声明了 `disabled`，一些节点被设置为 `disabled：true`。 相应的复选框已禁用，不能点击。
```vue
<template>
    <ux-tree-v2 :data="data" :props="props" show-checkbox :height="200" />
</template>

<script setup>
const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined,
                disabled: nodeKey.includes('2')
            }
        })
}

const props = {
    value: 'id',
    label: 'label',
    children: 'children',
    disabled: 'disabled'
}
const data = createData(4, 30, 40)
</script>

```

## TreeV2的默认扩展和默认检查
树节点可以在初始化阶段被设置为展开或选中。

 分别通过 `default-expanded-keys` 和 `default-checked-keys` 设置默认展开和默认选中的节点。
```vue
<template>
    <ux-tree-v2
       
        :data="data"
        :height="200"
        :props="props"
        show-checkbox
        :default-checked-keys="defaultCheckedKeys"
        :default-expanded-keys="defaultExpandedKeys" />
</template>

<script setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}

const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}
const data = createData(4, 30, 40)
const checkedKeys = []
const expanedKeys = []
for (const datum of data) {
    const children = datum.children
    if (children) {
        expanedKeys.push(datum.id)
        checkedKeys.push(children[0].id)
        break
    }
}

const defaultCheckedKeys = ref(checkedKeys)
const defaultExpandedKeys = ref(expanedKeys)
</script>

```

## TreeV2的自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容。

```vue
<template>
    <div>
        <ux-tree-v2 :data="data" :props="props" :height="200">
            <template #default="{ node }">
                <ux-icon>
                    <Document v-if="node.isLeaf" />
                    <Folder v-else-if="!node.expanded" />
                    <FolderOpened v-else />
                </ux-icon>
                <span :class="{ 'is-leaf': node.isLeaf }">[ux-ui]</span>
                <span>{{ node.label }}</span>
            </template>
        </ux-tree-v2>
    </div>
</template>

<script setup>
import { Document, Folder, FolderOpened } from '@ux-up/icons-vue'

const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}

const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}
const data = createData(4, 30, 40)
</script>
```

## TreeV2的自定义节点类
节点的类名支持自定义。

```vue
<template>
    <div>
        <ux-tree-v2
           
            :data="data"
            show-checkbox
            :expand-on-click-node="false"
            :props="{ class: customNodeClass }" />
    </div>
</template>

<script setup>
const customNodeClass = ({ isPenultimate }, node) => (isPenultimate ? 'is-penultimate' : '')

const data = [
    {
        id: '1',
        label: '节点-1',
        children: [
            {
                id: '4',
                label: '节点-1-1',
                isPenultimate: true,
                children: [
                    {
                        id: '9',
                        label: '节点-1-1-1'
                    },
                    {
                        id: '10',
                        label: '节点-1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        label: '节点-2',
        isPenultimate: true,
        children: [
            {
                id: '5',
                label: '节点-2-1'
            },
            {
                id: '6',
                label: '节点-2-2'
            }
        ]
    },
    {
        id: '3',
        label: '节点-3',
        isPenultimate: true,
        children: [
            {
                id: '7',
                label: '节点-3-1'
            },
            {
                id: '8',
                label: '节点-3-2'
            }
        ]
    }
]
</script>
```

## TreeV2的自定义图标 ^(1.1.5)
您可以自定义不同节点状态的图标。 树节点暴露了 `expanded` 属性和 `isLeaf` 属性，允许你根据节点的状态动态渲染不同的图标：叶子节点、展开的节点或折叠的节点。

```vue
<template>
    <ux-tree-v2 :data="data" :props="props" :height="200">
        <template #default="{ node }">
            <ux-icon :class="{ 'is-leaf': node.isLeaf }">
                <Document v-if="node.isLeaf" />
                <Folder v-else-if="!node.expanded" />
                <FolderOpened v-else />
            </ux-icon>
            <span>{{ node.label }}</span>
        </template>
    </ux-tree-v2>
</template>

<script setup>
import { Document, Folder, FolderOpened } from '@ux-up/icons-vue'

const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}
const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = 'node') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}
const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}
const data = createData(4, 30, 40)
</script>

```

## TreeV2的树节点过滤
 在需要对节点进行过滤时，调用 `ux-tree-v2` 实例的 `filter` 方法， 参数为关键字。 需要注意的是，此时需要设置 `filter-method`，值为过滤函数。
```vue
<template>
    <div>
        <div>
            <ux-input v-model="query" placeholder="输入关键字进行过滤" @input="onQueryChanged" />
        </div>
        <ux-tree-v2 ref="treeRef" :data="data" :props="props" :filter-method="filterMethod" :height="200" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = '节点') => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined
            }
        })
}

const query = ref('')
const treeRef = ref()
const data = createData(4, 30, 5)
const props = {
    value: 'id',
    label: 'label',
    children: 'children'
}

const onQueryChanged = (query) => {
    treeRef.value.filter(query)
}
const filterMethod = (query, node) => node.label.includes(query)
</script>

```

