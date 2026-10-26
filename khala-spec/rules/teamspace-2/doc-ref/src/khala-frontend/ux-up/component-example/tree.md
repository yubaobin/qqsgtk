# Tree 树形控件
用清晰的层级结构展示信息，可展开或折叠。
## Tree的基础用法
基础的树形结构展示

```vue
<template>
    <ux-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script setup>
const handleNodeClick = (data) => {
    console.log(data)
}

const data = [
    {
        label: '一级 1',
        children: [
            {
                label: '二级 1-1',
                children: [
                    {
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        children: [
            {
                label: '二级 2-1',
                children: [
                    {
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                label: '二级 2-2',
                children: [
                    {
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        children: [
            {
                label: '二级 3-1',
                children: [
                    {
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                label: '二级 3-2',
                children: [
                    {
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]

const defaultProps = {
    children: 'children',
    label: 'label'
}
</script>

```

## Tree的可选择
需要选择层级时使用。

 本例还展示了动态加载节点数据的方法。
```vue
<template>
    <ux-tree
       
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox
        @check-change="handleCheckChange" />
</template>

<script setup>
let count = 1

const props = {
    label: 'name',
    children: 'zones'
}

const handleCheckChange = (data, checked, indeterminate) => {
    console.log(data, checked, indeterminate)
}

const loadNode = (node, resolve) => {
    if (node.level === 0) {
        return resolve([{ name: '顶级1' }, { name: '顶级2' }])
    }
    if (node.level > 3) return resolve([])

    let hasChild = false
    if (node.data.name === '顶级1') {
        hasChild = true
    } else if (node.data.name === '顶级2') {
        hasChild = false
    } else {
        hasChild = Math.random() > 0.5
    }

    setTimeout(() => {
        let data = []
        if (hasChild) {
            data = [
                {
                    name: `区域${count++}`
                },
                {
                    name: `区域${count++}`
                }
            ]
        } else {
            data = []
        }

        resolve(data)
    }, 500)
}
</script>

```

:::info warning

在使用 `show-checkbox` 时，因为 `check-on-click-leaf` 默认值为 true， 最后一个树节点可以通过点击节点进行勾选。

:::
## Tree的懒加载自定义叶子节点
 由于在点击节点时才进行该层数据的获取，默认情况下 `ux-tree` 无法预知某个节点是否为叶子节点， 所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。 同时，你也可以提前告知 `ux-tree` 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。
```vue
<template>
    <div>
        <ux-tree
           
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange" />
    </div>
</template>

<script setup>
const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf'
}

const handleCheckChange = (data, checked, indeterminate) => {
    console.log(data, checked, indeterminate)
}

const loadNode = (node, resolve) => {
    if (node.level === 0) {
        return resolve([{ name: '区域2' }])
    }
    if (node.level > 1) return resolve([])

    setTimeout(() => {
        const data = [
            {
                name: '叶子节点(不会出现加载按钮)',
                leaf: true
            },
            {
                name: '子节点'
            }
        ]
        resolve(data)
    }, 500)
}
</script>

```

## Tree的多次懒加载
 加载远程节点数据时，懒加载有时可能失败。 在这种情况下，您可以调用 `reject` 以保持节点状态，并允许远程加载继续。
```vue
<template>
    <ux-tree :props="props" :load="loadNode" lazy />
</template>

<script setup>
import { UxMessage } from 'ux-up'

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf'
}

let time = 0
const loadNode = (node, resolve, reject) => {
    if (node.level === 0) {
        return resolve([{ name: '区域' }])
    }
    time++
    if (node.level >= 1) {
        setTimeout(() => {
            if (time > 2) {
                UxMessage.error('加载失败')
                return resolve([
                    { name: '地区1', leaf: true },
                    { name: '地区2', leaf: true },
                    { name: '地区3', leaf: true }
                ])
            } else {
                UxMessage.error('加载失败')
                return reject()
            }
        }, 1500)
    }
}
</script>

```

## Tree的默认展开以及默认选中
树节点可以在初始化阶段被设置为展开和选中。

 分别通过 `default-expanded-keys` 和 `default-checked-keys` 设置默认展开和默认选中的节点。 需要注意的是，此时必须设置 `node-key`， 其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
```vue
<template>
    <div>
        <ux-tree
           
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps" />
    </div>
</template>

<script setup>
const defaultProps = {
    children: 'children',
    label: 'label'
}
const data = [
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2'
            }
        ]
    }
]
</script>

```

## Tree的禁用复选框
节点的复选框可以设置为禁用。

 通过 `disabled` 设置禁用状态。 相应的复选框已禁用，不能点击。
```vue
<template>
    <div>
        <ux-tree :data="data" :props="defaultProps" show-checkbox />
    </div>
</template>

<script setup>
const defaultProps = {
    children: 'children',
    label: 'label',
    disabled: 'disabled'
}

const data = [
    {
        id: 1,
        label: '一级 2',
        children: [
            {
                id: 3,
                label: '二级 2-1',
                children: [
                    {
                        id: 4,
                        label: '三级 3-1-1'
                    },
                    {
                        id: 5,
                        label: '三级 3-1-2',
                        disabled: true
                    }
                ]
            },
            {
                id: 2,
                label: '二级 2-2',
                disabled: true,
                children: [
                    {
                        id: 6,
                        label: '三级 3-2-1'
                    },
                    {
                        id: 7,
                        label: '三级 3-2-2',
                        disabled: true
                    }
                ]
            }
        ]
    }
]
</script>

```

## Tree的树节点的选择
 本例展示如何获取和设置选中节点。 获取和设置各有两种方式：通过 `node` 或通过 `key`。 如果需要通过 `key` 来获取或设置，则必须设置 `node-key`。
```vue
<template>
    <div>
        <div>
            <ux-button size="small" @click="getCheckedNodes">通过 node 获取</ux-button>
            <ux-button size="small" @click="getCheckedKeys">通过 key 获取</ux-button>
        </div>
        <div>
            <ux-button size="small" @click="setCheckedNodes">通过 node 设置</ux-button>
            <ux-button size="small" @click="setCheckedKeys">通过 key 设置</ux-button>
            <ux-checkbox v-model="setStrictly">set-strictly</ux-checkbox>
        </div>
        <div>
            <ux-button size="small" @click="resetChecked">清空</ux-button>
        </div>
        <ux-tree
            ref="treeRef"
           
            :data="data"
            show-checkbox
            :set-strictly="setStrictly"
            default-expand-all
            node-key="id"
            highlight-current
            :props="defaultProps" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage } from 'ux-up'

const treeRef = ref()

const getCheckedNodes = () => {
    console.log(treeRef.value.getCheckedNodes(false, false))
    UxMessage({ type: 'success', message: '获取成功，可以打开控制台查看打印日志' })
}
const getCheckedKeys = () => {
    console.log(treeRef.value.getCheckedKeys(false))
    UxMessage({ type: 'success', message: '获取成功，可以打开控制台查看打印日志' })
}
const setCheckedNodes = () => {
    treeRef.value.setCheckedNodes(
        [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 9,
                label: '三级 1-1-1'
            }
        ],
        false
    )
}
const setStrictly = ref(false)

const setCheckedKeys = () => {
    // 当设置 set-strictly 为 true 时，由于节点3没有选中的子节点，所以节点3也不会选中。
    treeRef.value.setCheckedKeys([3, 2, 5], false)
}
const resetChecked = () => {
    treeRef.value.setCheckedKeys([], false)
}

const defaultProps = {
    children: 'children',
    label: 'label'
}

const data = [
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2'
            }
        ]
    }
]
</script>

```

## Tree的自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容

 可以通过两种方法进行树节点内容的自定义：`render-content` 和 `scoped slot`。 使用 `render-content` 指定渲染函数，该函数返回需要的节点区内容即可。 渲染函数的用法请参考[Vue 文档](https://cn.vuejs.org/api/render-function.html#render-function-apis)。 使用 `scoped slot` 会传入两个参数 `node` 和 `data`，分别表示当前节点的 Node 对象和当前节点的数据。 
```vue
<template>
    <div>
        <div>
            <div>使用 render-content</div>
            <ux-tree
               
                :data="dataSource"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent" />
        </div>
        <div>
            <div>使用 scoped slot</div>
            <ux-tree
               
                :data="dataSource"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <template #default="{ node, data }">
                    <div>
                        <span>{{ node.label }}</span>
                        <span>
                            <ux-button is-text size="mini" type="primary" @click="append(data)">添加</ux-button>
                            <ux-button is-text size="mini" type="danger" @click="remove(node, data)">删除</ux-button>
                        </span>
                    </div>
                </template>
            </ux-tree>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxButton } from 'ux-up'

let id = 1000

const append = (data) => {
    const newChild = { id: id++, label: '新增节点', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    dataSource.value = [...dataSource.value]
}

const remove = (node, data) => {
    const parent = node.parent
    const children = parent?.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataSource.value = [...dataSource.value]
}

const renderContent = (h, { node, data, store }) => {
    return h(
        'span',
        {
            class: 'custom-tree-node'
        },
        {
            default: () => [
                h('div', null, { default: () => node.label }),
                h(
                    'span',
                    null,
                    h(
                        UxButton,
                        {
                            size: 'mini',
                            isText: true,
                            type: 'primary',
                            onClick: () => append(data)
                        },
                        { default: () => '添加' }
                    ),
                    h(
                        UxButton,
                        {
                            size: 'mini',
                            isText: true,
                            type: 'danger',
                            onClick: () => remove(node, data)
                        },
                        { default: () => '删除' }
                    )
                )
            ]
        }
    )
}

const dataSource = ref([
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2'
            }
        ]
    }
])
</script>

```

## Tree的自定义节点类名
 使用 `props.class` 来建立节点的类名。
```vue
<template>
    <div>
        <ux-tree
           
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :props="{ class: customNodeClass }" />
    </div>
</template>

<script setup>
const customNodeClass = ({ isPenultimate }, node) => (isPenultimate ? 'is-penultimate' : '')

const data = [
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                isPenultimate: true,
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        isPenultimate: true,
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2'
            }
        ]
    }
]
</script>
```

## Tree的树节点过滤
可通过关键字过滤树节点。

 调用 `ux-tree` 实例对象的 `filter` 方法来过滤树节点。 方法的参数就是过滤关键字。 需要注意的是，此时需要设置 `filter-node-method` 属性，其值为过滤函数。
```vue
<template>
    <div>
        <div>
            <ux-input v-model="filterText" placeholder="输入关键字进行过滤" />
        </div>
        <ux-tree
            ref="treeRef"
           
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const filterText = ref('')
const treeRef = ref()

const defaultProps = {
    children: 'children',
    label: 'label'
}

watch(filterText, (val) => {
    treeRef.value.filter(val)
})

const filterNode = (value, data) => {
    if (!value) return true
    return data.label.includes(value)
}

const data = [
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2'
            }
        ]
    }
]
</script>

```

## Tree的手风琴模式
对于同一级的节点，每次只能展开一个

```vue
<template>
    <div>
        <ux-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
    </div>
</template>

<script setup>
const handleNodeClick = (data) => {
    console.log(data)
}

const data = [
    {
        label: '一级 1',
        children: [
            {
                label: '二级 1-1',
                children: [
                    {
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        children: [
            {
                label: '二级 2-1',
                children: [
                    {
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                label: '二级 2-2',
                children: [
                    {
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        children: [
            {
                label: '二级 3-1',
                children: [
                    {
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                label: '二级 3-2',
                children: [
                    {
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
const defaultProps = {
    children: 'children',
    label: 'label'
}
</script>

```

## Tree的可拖拽节点
通过 `draggable` 属性可让节点变为可拖拽

```vue
<template>
    <ux-tree
       
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        :data="data"
        draggable
        default-expand-all
        node-key="id"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop" />
</template>

<script setup>
const handleDragStart = (node, ev) => {
    console.log('drag start', node)
}
const handleDragEnter = (draggingNode, dropNode, ev) => {
    console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (draggingNode, dropNode, ev) => {
    console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode, dropNode, ev) => {
    console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
    console.log('tree drag end:', dropNode && dropNode.label, dropType)
}
const handleDrop = (draggingNode, dropNode, dropType, ev) => {
    console.log('tree drop:', dropNode.label, dropType)
}
const allowDrop = (draggingNode, dropNode, type) => {
    if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
    } else {
        return true
    }
}
const allowDrag = (draggingNode) => {
    return !draggingNode.data.label.includes('三级 3-2-2')
}

const data = [
    {
        id: 1,
        label: '一级 1',
        children: [
            {
                id: 4,
                label: '二级 1-1',
                children: [
                    {
                        id: 9,
                        label: '三级 1-1-1'
                    },
                    {
                        id: 10,
                        label: '三级 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '一级 2',
        children: [
            {
                id: 5,
                label: '二级 2-1'
            },
            {
                id: 6,
                label: '二级 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '一级 3',
        children: [
            {
                id: 7,
                label: '二级 3-1'
            },
            {
                id: 8,
                label: '二级 3-2',
                children: [
                    {
                        id: 11,
                        label: '三级 3-2-1'
                    },
                    {
                        id: 12,
                        label: '三级 3-2-2'
                    },
                    {
                        id: 13,
                        label: '三级 3-2-3'
                    }
                ]
            }
        ]
    }
]
</script>

```

