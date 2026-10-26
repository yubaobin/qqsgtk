# TreeSelect 树形选择
含有下拉菜单的树形选择器，结合了 ux-tree 和 ux-select 两个组件的功能。

## TreeSelect的基础用法
树状选择器。

```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-tree-select v-model="value" :data="data" :render-after-expand="false" />
        </div>
        <div>
            <div>显示多选框</div>
            <ux-tree-select v-model="value" :data="data" :render-after-expand="false" show-checkbox />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const data = [
    {
        label: '一级 1',
        value: '1',
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        value: '2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        value: '3',
        children: [
            {
                value: '3-1',
                label: '二级 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: '二级 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

```

## TreeSelect的选择任意级别
当设置属性 `check-strictly` 为 `true` 时，任何节点都可以被选择，否则只有子节点可被选择。

:::info primary

当使用 `show-checkbox`时，由于 `check-on-click-node` 默认值是 false，这时候只能通过 `checkbox` 来选中，当然您也可以将其设置成 true，这样点击整个 node 都可以用来完成选择

:::

```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-tree-select v-model="value" :data="data" check-strictly :render-after-expand="false" />
        </div>
        <div>
            <div>显示多选框(点击多选框选择)</div>
            <ux-tree-select v-model="value" :data="data" check-strictly :render-after-expand="false" show-checkbox />
        </div>
        <div>
            <div>显示多选框(点击节点选择)</div>
            <ux-tree-select
                v-model="value"
                :data="data"
                check-strictly
                :render-after-expand="false"
                show-checkbox
                check-on-click-node />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const data = [
    {
        label: '一级 1',
        value: '1',
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        value: '2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        value: '3',
        children: [
            {
                value: '3-1',
                label: '二级 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: '二级 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

```

:::info warning

在使用 `show-checkbox` 时，因为 `check-on-click-leaf` 默认值为 true， 最后一个树节点可以通过点击节点进行勾选。

:::
## TreeSelect的多选
通过点击或复选框选择多个选项。

```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-tree-select v-model="value" :data="data" multiple :render-after-expand="false" />
        </div>
        <div>
            <div>显示多选框</div>
            <ux-tree-select v-model="value" :data="data" multiple :render-after-expand="false" show-checkbox />
        </div>
        <div>
            <div>显示多选框(使用 check-strictly)</div>
            <ux-tree-select
                v-model="valueStrictly"
                :data="data"
                multiple
                :render-after-expand="false"
                show-checkbox
                check-strictly
                check-on-click-node />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const valueStrictly = ref()

const data = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

```

## TreeSelect的禁用选项
使用 `disabled` 字段禁用选项。

```vue
<template>
    <ux-tree-select v-model="value" :data="data" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const data = [
    {
        label: '一级 1',
        value: '1',
        disabled: true,
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                disabled: true,
                children: [
                    {
                        disabled: true,
                        value: '1-1-1',
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        value: '2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        value: '3',
        children: [
            {
                value: '3-1',
                label: '二级 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: '二级 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

```

## TreeSelect的可筛选
使用关键字筛选或自定义筛选方法。 `filterMethod` 可以自定义数据筛选的方法， `filterNodeMethod` 可以自定义节点数据筛选的方法。

```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-tree-select v-model="value" :data="data" filterable />
        </div>
        <div>
            <div>使用filter-method</div>
            <ux-tree-select v-model="value" :data="data" :filter-method="filterMethod" filterable />
        </div>
        <div>
            <div>使用filter-node-method</div>
            <ux-tree-select v-model="value" :data="data" :filter-node-method="filterNodeMethod" filterable />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const sourceData = [
    {
        label: '一级 1',
        value: '1',
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        value: '2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        value: '3',
        children: [
            {
                value: '3-1',
                label: '二级 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: '二级 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
const data = ref(sourceData)

const filterMethod = (value) => {
    data.value = [...sourceData].filter((item) => item.label.includes(value))
}

const filterNodeMethod = (value, data) => data.label.includes(value)
</script>

```

## TreeSelect的自定义内容
自定义树节点的内容。

```vue
<template>
    <div>
        <div>
            <div>使用slot</div>
            <ux-tree-select v-model="value" :data="data">
                <template #default="{ data: { label } }">{{ label }}<span>(slot)</span></template>
            </ux-tree-select>
        </div>
        <div>
            <div>使用render-content</div>
            <ux-tree-select v-model="value" :data="data" :render-content="renderContent" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const renderContent = (h, { data }) => {
    return h(
        'span',
        {
            style: {
                color: '#FFC0CB'
            }
        },
        data.label
    )
}

const data = [
    {
        label: '一级 1',
        value: '1',
        children: [
            {
                value: '1-1',
                label: '二级 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: '三级 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 2',
        value: '2',
        children: [
            {
                value: '2-1',
                label: '二级 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: '二级 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        value: '3',
        children: [
            {
                value: '3-1',
                label: '二级 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: '二级 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

```

## TreeSelect的懒加载
树节点懒加载，更加适合于数据量大的列表。

```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-tree-select v-model="value" lazy :load="load" :props="props" />
        </div>
        <div>
            <div>使用cache-data展示默认选中</div>
            <ux-tree-select v-model="value2" lazy :load="load" :props="props" :cache-data="cacheData" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref(5)

const cacheData = [{ value: 5, label: '节点5' }]

const props = {
    label: 'label',
    children: 'children',
    isLeaf: 'isLeaf'
}

let id = 0

const load = (node, resolve) => {
    if (node.isLeaf) return resolve([])

    setTimeout(() => {
        resolve([
            {
                value: ++id,
                label: `节点${id}`
            },
            {
                value: ++id,
                label: `节点${id}`,
                isLeaf: true
            }
        ])
    }, 400)
}
</script>

```

