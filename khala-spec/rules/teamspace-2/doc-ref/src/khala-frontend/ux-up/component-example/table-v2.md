# TableVirtual 虚拟化表格
可超过 1000 条数据记录的表格。

## TableV2的基础用法

```vue
<template>
    <ux-table-v2 :columns="columns" :data="data" :width="700" :height="400" fixed />
</template>

<script setup>
const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 200
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 1000)
</script>

```

## TableV2的自动调整大小
如果不想手动向表格传递 `width` 和 `height` 属性，可以使用 `AutoResizer` 组件对表格组件进行封装。 这会自动为你更新宽度和高度。

尝试调整您的浏览器大小来看看它是如何工作的。

:::info primary

由于 `AutoResizer` 组件的默认高度是 100%，所以请确保该组件的父元素**拥有固定的高度值**。 或者，您可以通过将 `style` 属性传递到 `AutoResizer` 来定义它。

:::

```vue
<template>
    <div>
        <ux-auto-resizer>
            <template #default="{ height, width }">
                <ux-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed />
            </template>
        </ux-auto-resizer>
    </div>
</template>

<script setup>
const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>

```

## TableV2的自定义单元格渲染器
当然，您可以根据您的需要呈现表格单元格。 这是如何自定义您的单元格的简单例子。

```vue
<template>
    <ux-table-v2 :columns="columns" :data="data" :width="750" :height="400" fixed />
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { UxButton, UxSvgIcon, UxTag, UxTooltip } from 'ux-up'

let id = 0

const dataGenerator = () => ({
    id: `random-id-${++id}`,
    pName: '低代码开发平台',
    dName: '公共研发部',
    contact: '张三',
    date: '2023-02-08',
    status: Math.round(Math.random() * 3)
})

const columns = [
    {
        key: 'pName',
        title: '项目名称',
        dataKey: 'pName',
        width: 150
    },
    {
        key: 'dName',
        title: '部门',
        dataKey: 'dName',
        width: 150
    },
    {
        key: 'contact',
        title: '联系人',
        dataKey: 'contact',
        width: 150
    },
    {
        key: 'date',
        title: '日期',
        dataKey: 'date',
        width: 150,
        cellRenderer: ({ cellData: date }) => (
            <UxTooltip content={dayjs(date).format('YYYY-MM-DD')}>
                {
                    <span>
                        <UxSvgIcon icon-name="ux-icon-Timer" />
                        {dayjs(date).format('YYYY-MM-DD')}
                    </span>
                }
            </UxTooltip>
        )
    },
    {
        key: 'status',
        title: '状态',
        dataKey: 'status',
        cellRenderer: ({ cellData: status }) => (
            <>
                <ux-button type={statusMap[status].color} is-link>
                                    </ux-button>
                {statusMap[status].text}
            </>
        ),
        width: 150,
        align: 'center'
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))
</script>

```

## TableV2的带有选择的表格
使用自定义的单元格渲染来给表格组件添加选择的能力。

```vue
<template>
    <div>
        <ux-auto-resizer>
            <template #default="{ height, width }">
                <ux-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed />
            </template>
        </ux-auto-resizer>
    </div>
</template>

<script lang="jsx" setup>
import { ref, unref } from 'vue'
import { UxCheckbox } from 'ux-up'

const SelectionCell = ({ value, intermediate = false, onChange }) => {
    return <UxCheckbox onChange={onChange} modelValue={value} indeterminate={intermediate} />
}

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                checked: false,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
columns.unshift({
    key: 'selection',
    width: 50,
    cellRenderer: ({ rowData }) => {
        const onChange = (value) => (rowData.checked = value)
        return <SelectionCell value={rowData.checked} onChange={onChange} />
    },

    headerCellRenderer: () => {
        const _data = unref(data)
        const onChange = (value) =>
            (data.value = _data.map((row) => {
                row.checked = value
                return row
            }))
        const allSelected = _data.every((row) => row.checked)
        const containsChecked = _data.some((row) => row.checked)

        return <SelectionCell value={allSelected} intermediate={containsChecked && !allSelected} onChange={onChange} />
    }
})

const data = ref(generateData(columns, 200))
</script>

```

## TableV2的可编辑单元格
类似上面添加筛选框的方法，我们可以用同样的方法实现可编辑单元格。

```vue
<template>
    <div>
        <ux-auto-resizer>
            <template #default="{ height, width }">
                <ux-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed />
            </template>
        </ux-auto-resizer>
    </div>
</template>

<script lang="jsx" setup>
import { ref, withKeys } from 'vue'
import { UxInput } from 'ux-up'

const InputCell = ({ value, onChange, onBlur, onKeydownEnter, forwardRef }) => {
    return (
        <UxInput
            ref={forwardRef}
            onInput={onChange}
            onBlur={onBlur}
            onKeydown={withKeys(onKeydownEnter, ['enter'])}
            modelValue={value}
        />
    )
}

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                editing: false,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
columns[0] = {
    ...columns[0],
    title: '可编辑的列',
    cellRenderer: ({ rowData, column }) => {
        const onChange = (value) => {
            rowData[column.dataKey] = value
        }
        const onEnterEditMode = () => {
            rowData.editing = true
        }

        const onExitEditMode = () => (rowData.editing = false)
        const input = ref()
        const setRef = (el) => {
            input.value = el
            if (el) {
                el.focus?.()
            }
        }

        return rowData.editing ? (
            <InputCell
                forwardRef={setRef}
                value={rowData[column.dataKey]}
                onChange={onChange}
                onBlur={onExitEditMode}
                onKeydownEnter={onExitEditMode}
            />
        ) : (
            <div onClick={onEnterEditMode}>
                {rowData[column.dataKey]}
            </div>
        )
    }
}

const data = ref(generateData(columns, 200))
</script>
```

## TableV2的带状态的表格
可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

要自定义行的外观，请使用 `row-class-name` 属性。 举个例子，每10行会自动添加 `bg-blue-200` 类名，每5行会添加 `bg-red-100` 类名。

```vue
<template>
    <ux-table-v2
       
        :columns="columns"
        :data="data"
        :row-class="rowClass"
        :width="750"
        :height="400" />
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { UxButton, UxSvgIcon, UxTooltip } from 'ux-up'

let id = 0

const dataGenerator = () => ({
    id: `random-id-${++id}`,
    pName: '低代码开发平台',
    dName: '公共研发部',
    contact: '张三',
    date: '2023-02-08',
    status: Math.round(Math.random() * 3)
})

const columns = [
    {
        key: 'pName',
        title: '项目名称',
        dataKey: 'pName',
        width: 150
    },
    {
        key: 'dName',
        title: '部门',
        dataKey: 'dName',
        width: 150
    },
    {
        key: 'contact',
        title: '联系人',
        dataKey: 'contact',
        width: 150
    },
    {
        key: 'date',
        title: '日期',
        dataKey: 'date',
        width: 150,
        cellRenderer: ({ cellData: date }) => (
            <UxTooltip content={dayjs(date).format('YYYY-MM-DD')}>
                {
                    <span>
                        <UxSvgIcon icon-name="ux-icon-Timer" />
                        {dayjs(date).format('YYYY-MM-DD')}
                    </span>
                }
            </UxTooltip>
        )
    },
    {
        key: 'status',
        title: '状态',
        dataKey: 'status',
        cellRenderer: ({ cellData: status }) => (
            <>
                <UxButton type={statusMap[status].color} is-link>
                                    </UxButton>
                {statusMap[status].text}
            </>
        ),
        width: 150,
        align: 'center'
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

const rowClass = ({ rowData }) => {
    if (rowData.status === 1) {
        return 'success-row'
    } else if (rowData.status === 2) {
        return 'warning-row'
    } else if (rowData.status === 3) {
        return 'danger-row'
    }
    return ''
}
</script>
```

## TableV2的表格行的粘性布局
您可以简单地使用 `fixed-data` 属性来实现将某些行固定到表格的头部。

您可以根据滚动事件动态设置粘性行，如这个示例所示。

```vue
<template>
    <div>
        <ux-table-v2
            :columns="columns"
            :data="tableData"
            :fixed-data="fixedData"
            :width="700"
            :height="400"
            :row-class="rowClass"
            fixed
            @scroll="onScroll" />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowClass = ({ rowIndex }) => {
    if (rowIndex < 0 || (rowIndex + 1) % 5 === 0) return 'sticky-row'
}

const stickyIndex = ref(0)

const fixedData = computed(() => data.slice(stickyIndex.value, stickyIndex.value + 1))

const tableData = computed(() => {
    return data.slice(1)
})

const onScroll = ({ scrollTop }) => {
    stickyIndex.value = Math.floor(scrollTop / 250) * 5
}
</script>
```

## TableV2的固定列表格
如果您想要有列粘贴左侧或右侧的某种原因。 您可以通过向表中添加特殊属性来实现这一点。

您可以设置该行的` fixed` 属性为 `true` （代表`FixedDir.LEFT`）、`FixedDir.LEFT` 或 `FixedDir.RIGHT`

```vue
<template>
    <ux-table-v2
        :columns="columns"
        :data="data"
        :sort-by="sortBy"
        :width="700"
        :height="400"
        fixed
        @column-sort="onSort" />
</template>

<script setup>
import { ref } from 'vue'
// import { FixedDir } from 'ux-up'
const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].fixed = true
columns[1].fixed = 'left'
columns[9].fixed = 'right'

for (let i = 0; i < 3; i++) columns[i].sortable = true

const sortBy = ref({
    key: 'column-0',
    order: 'asc'
})

const onSort = (_sortBy) => {
    data = data.reverse()
    sortBy.value = _sortBy
}
</script>

```

## TableV2的表头分组
通过自定义表头渲染以将表头分组。

:::info primary

建议使用 `JSX` 使用您的表格组件，因为它包含 VNode 操作。

:::

```vue
<template>
    <div>
        <ux-table-v2
            fixed
            :columns="fixedColumns"
            :data="data"
            :header-height="[50, 40, 50]"
            :header-class="headerClass"
            :width="700"
            :height="400">
            <template #header="props">
                <customized-header v-bind="props" />
            </template>
        </ux-table-v2>
    </div>
</template>

<script lang="jsx" setup>
import { TableV2Placeholder } from 'ux-up'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })
const columns = generateColumns(15)
const data = generateData(columns, 200)

const fixedColumns = columns.map((column, columnIndex) => {
    let fixed = undefined
    if (columnIndex < 2) fixed = 'left'
    if (columnIndex > 12) fixed = 'right'
    return { ...column, fixed, width: 100 }
})

const CustomizedHeader = ({ cells, columns, headerIndex }) => {
    if (headerIndex === 2) return cells

    const groupCells = []
    let width = 0
    let idx = 0

    columns.forEach((column, columnIndex) => {
        if (column.placeholderSign === TableV2Placeholder) groupCells.push(cells[columnIndex])
        else {
            width += cells[columnIndex].props.column.width
            idx++

            const nextColumn = columns[columnIndex + 1]
            if (
                columnIndex === columns.length - 1 ||
                nextColumn.placeholderSign === TableV2Placeholder ||
                idx === (headerIndex === 0 ? 4 : 2)
            ) {
                groupCells.push(
                    <div
                       
                        role="columnheader"
                        style={{
                            ...cells[columnIndex].props.style,
                            width: `${width}px`
                        }}>
                        分组宽度 {width}
                    </div>
                )
                width = 0
                idx = 0
            }
        }
    })
    return groupCells
}

const headerClass = ({ headerIndex }) => {
    if (headerIndex === 1) return 'ux-primary-color'
    return ''
}
</script>
```

## TableV2的过滤器
虚拟表格提供自定义页眉渲染器以创建自定义标题。 然后我们可以利用这些来渲染过滤器。

```vue
<template>
    <div>
        <ux-table-v2 fixed :columns="fixedColumns" :data="data" :width="700" :height="400" />
    </div>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import { UxButton, UxCheckbox, UxIcon, UxPopover } from 'ux-up'
import { Filter } from '@ux-up/icons-vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })
const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

const shouldFilter = ref(false)
const popoverRef = ref()

const onFilter = () => {
    popoverRef.value.hide()
    if (shouldFilter.value) {
        data.value = generateData(columns, 100, 'filtered-')
    } else {
        data.value = generateData(columns, 200)
    }
}

const onReset = () => {
    shouldFilter.value = false
    onFilter()
}

columns[0].headerCellRenderer = (props) => {
    return (
        <div>
            <span>{props.column.title}</span>
            <UxPopover ref={popoverRef} trigger="click" {...{ width: 200 }}>
                {{
                    default: () => (
                        <div>
                            <div>
                                <UxCheckbox v-model={shouldFilter.value}>前100条</UxCheckbox>
                            </div>
                            <div>
                                <UxButton text onClick={onFilter}>
                                    确定
                                </UxButton>
                                <UxButton text onClick={onReset}>
                                    重置
                                </UxButton>
                            </div>
                        </div>
                    ),
                    reference: () => (
                        <UxIcon>
                            <Filter />
                        </UxIcon>
                    )
                }}
            </UxPopover>
        </div>
    )
}

const fixedColumns = columns.map((column, columnIndex) => {
    let fixed = undefined
    if (columnIndex < 2) fixed = 'left'
    if (columnIndex > 9) fixed = 'right'
    return { ...column, fixed, width: 100 }
})
</script>
```

## TableV2的可排序表格
可以使用排序状态来对表格进行排序。

```vue
<template>
    <ux-table-v2
        :columns="columns"
        :data="data"
        :sort-by="sortState"
        :width="700"
        :height="400"
        fixed
        @column-sort="onSort" />
</template>

<script setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].sortable = true

const sortState = ref({
    key: 'column-0',
    order: 'asc'
})

const onSort = (sortBy) => {
    console.log(sortBy)
    data = data.reverse()
    sortState.value = sortBy
}
</script>

```

## TableV2的受控的排序
可以在需要时定义多个可排序的列。 请记住，当您在定义了多个可排序的列时， UI 可能会显得有些奇怪，因为用户不知道哪一列被排序。

```vue
<template>
    <ux-table-v2
        v-model:sort-state="sortState"
        :columns="columns"
        :data="data"
        :width="700"
        :height="400"
        fixed
        @column-sort="onSort" />
</template>

<script setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

columns[0].sortable = true
columns[1].sortable = true

const sortState = ref({
    'column-0': 'desc',
    'column-1': 'asc'
})

const onSort = ({ key, order }) => {
    sortState.value[key] = order
    data.value = data.value.reverse()
}
</script>

```

## TableV2的高亮显示鼠标悬停单元格
当处理一个大的列表时，很容易丢失当前行的轨迹和您正在访问的一列。 在这种情况下，使用这个功能可能很有帮助。

```vue
<template>
    <div>
        <ux-auto-resizer>
            <template #default="{ height, width }">
                <ux-table-v2
                    :columns="columns"
                    :cell-props="cellProps"
                    :class="kls"
                    :data="data"
                    :width="width"
                    :height="height" />
            </template>
        </ux-auto-resizer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
columns.unshift({
    key: 'column-n-1',
    width: 60,
    title: '序号',
    cellRenderer: ({ rowIndex }) => `${rowIndex + 1}`,
    align: 'center'
})
const data = generateData(columns, 200)

const cellProps = ({ columnIndex }) => {
    const key = `hovering-col-${columnIndex}`
    return {
        ['data-key']: key,
        onMouseenter: () => {
            kls.value = key
        },
        onMouseleave: () => {
            kls.value = ''
        }
    }
}

const kls = ref('')
</script>
```

## TableV2的横跨列
虚拟化表格没有使用内置的 `table` 元素，故 `colspan` 和 `rowspan` 与 [TableV1](./table.md) 比较略有不同。 然而，通过定制的行渲染器，这些功能仍然可以实现。 在本节中，我们将演示如何实现这一点。

```vue
<template>
    <ux-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
        <template #row="props">
            <Row v-bind="props" />
        </template>
    </ux-table-v2>
</template>

<script setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const Row = ({ rowData, rowIndex, cells, columns }) => {
    const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
    if (colSpan > 1) {
        let width = Number.parseInt(cells[colSpanIndex].props.style.width)
        for (let i = 1; i < colSpan; i++) {
            width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
            cells[colSpanIndex + i] = null
        }
        const style = {
            ...cells[colSpanIndex].props.style,
            width: `${width}px`,
            color: 'var(--ux-color-white)',
            backgroundColor: 'var(--ux-color-primary-light-3)'
        }
        cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
    }

    return cells
}
</script>

```

## TableV2的纵跨行
既然我们已经覆盖了 [colspan](#横跨列)，那我们也可以覆盖Row也是没问题的。 它与 `colspan` 略有不同，但是 的想法基本上是一样的。

```vue
<template>
    <ux-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
        <template #row="props">
            <Row v-bind="props" />
        </template>
    </ux-table-v2>
</template>

<script setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) => (rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1)

const Row = ({ rowData, rowIndex, cells, columns }) => {
    const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
    if (rowSpan > 1) {
        const cell = cells[rowSpanIndex]
        const style = {
            ...cell.props.style,
            color: 'var(--ux-color-white)',
            backgroundColor: 'var(--ux-color-primary-light-3)',
            height: `${rowSpan * 50 - 1}px`,
            alignSelf: 'flex-start',
            boxShadow: '0 1px var(--ux-color-white) inset',
            zIndex: 1
        }
        cells[rowSpanIndex] = cloneVNode(cell, { style })
    }
    return cells
}
</script>

```

## TableV2的同时跨行和跨列
可以同时使用横跨列与纵跨行来满足您的业务需求。

```vue
<template>
    <ux-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
        <template #row="props">
            <Row v-bind="props" />
        </template>
    </ux-table-v2>
</template>

<script lang="jsx" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) => (rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1)

const Row = ({ rowData, rowIndex, cells, columns }) => {
    const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
    if (colSpan > 1) {
        let width = Number.parseInt(cells[colSpanIndex].props.style.width)
        for (let i = 1; i < colSpan; i++) {
            width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
            cells[colSpanIndex + i] = null
        }
        const style = {
            ...cells[colSpanIndex].props.style,
            width: `${width}px`,
            color: 'var(--ux-color-white)',
            backgroundColor: 'var(--ux-color-primary-light-3)'
        }
        cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
    }

    const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
    if (rowSpan > 1) {
        const cell = cells[rowSpanIndex]
        const style = {
            ...cell.props.style,
            backgroundColor: 'var(--ux-color-danger-light-3)',
            height: `${rowSpan * 50}px`,
            alignSelf: 'flex-start',
            color: 'var(--ux-color-white)',
            boxShadow: '0 1px var(--ux-color-white) inset',
            zIndex: 1
        }
        cells[rowSpanIndex] = cloneVNode(cell, { style })
    } else {
        const style = cells[rowSpanIndex].props.style
        // override the cell here for creating a pure node without pollute the style
        cells[rowSpanIndex] = <div style={{ ...style, width: `${style.width}px` }} />
    }
    return cells
}
</script>

```

## TableV2的树形数据
虚拟表也可以在树状结构中呈现数据。 点击箭头图标，你可以展开或折叠树节点。

```vue
<template>
    <ux-table-v2
        v-model:expanded-row-keys="expandedRowKeys"
        :columns="columns"
        :data="treeData"
        :width="700"
        :expand-column-key="expandColumnKey"
        :height="400"
        fixed
        @row-expand="onRowExpanded"
        @expanded-rows-change="onExpandedRowsChange" />
</template>

<script setup>
import { computed, ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10).map((column, columnIndex) => {
    let fixed
    if (columnIndex < 2) fixed = 'left'
    if (columnIndex > 8) fixed = 'right'
    return { ...column, fixed }
})

const data = generateData(columns, 200)

const expandColumnKey = 'column-0'

// 子节点
for (let i = 0; i < 50; i++) {
    data.push(
        {
            ...data[0],
            id: `${data[0].id}-sub-${i}`,
            parentId: data[0].id,
            [expandColumnKey]: `子节点 ${i}`
        },
        {
            ...data[2],
            id: `${data[2].id}-sub-${i}`,
            parentId: data[2].id,
            [expandColumnKey]: `子节点 ${i}`
        },
        {
            ...data[2],
            id: `${data[2].id}-sub-sub-${i}`,
            parentId: `${data[2].id}-sub-${i}`,
            [expandColumnKey]: `孙子节点 ${i}`
        }
    )
}

function unflatten(data, rootId = null, dataKey = 'id', parentKey = 'parentId') {
    const tree = []
    const childrenMap = {}

    for (const datum of data) {
        const item = { ...datum }
        const id = item[dataKey]
        const parentId = item[parentKey]

        if (Array.isArray(item.children)) {
            childrenMap[id] = item.children.concat(childrenMap[id] || [])
        } else if (!childrenMap[id]) {
            childrenMap[id] = []
        }
        item.children = childrenMap[id]

        if (parentId !== undefined && parentId !== rootId) {
            if (!childrenMap[parentId]) childrenMap[parentId] = []
            childrenMap[parentId].push(item)
        } else {
            tree.push(item)
        }
    }

    return tree
}

const treeData = computed(() => unflatten(data))

const expandedRowKeys = ref([])

const onRowExpanded = ({ expanded }) => {
    console.log('展开:', expanded)
}

const onExpandedRowsChange = (expandedKeys) => {
    console.log(expandedKeys)
}
</script>

```

## TableV2的动态高度行
虚拟表能够呈现具有动态高度的行数。 如果您正在处理数据并不确定内容大小， 此功能对于调整到内容高度的渲染行是理想的。 要启用此功能，请传递 `estimated-row-height` 属性。 估计高度越接近实际内容，渲染体验就越顺。

:::info primary

每行高度在渲染过程中动态测量。 因此，如果您试图显示大量数据， 页面 **可能会** 抖动。

:::

```vue
<template>
    <ux-table-v2
        :columns="columns"
        :data="data"
        :sort-by="sort"
        :estimated-row-height="40"
        :width="700"
        :height="400"
        fixed
        @column-sort="onColumnSort" />
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import { UxTag } from 'ux-up'

const longText = '我们秉承UED的设计价值观，延用规范设计原则，可以进一步提升你的工作效率。'
const midText = '激发用户的探索兴趣，继续深入访问.'
const shortText = '设计指引。'

const textList = [shortText, midText, longText]

let id = 0

const dataGenerator = () => ({
    id: `${++id}`,
    pName: '低代码开发平台',
    dName: '公共研发部',
    date: '2024-05-03',
    description: textList[Math.floor(Math.random() * 3)],
    status: Math.round(Math.random() * 3)
})

const columns = [
    {
        key: 'id',
        title: '序号',
        dataKey: 'id',
        width: 100,
        sortable: true,
        fixed: 'left'
    },
    {
        key: 'pName',
        title: '项目名称',
        dataKey: 'pName',
        width: 150,
        align: 'center',
        cellRenderer: ({ cellData: name }) => <UxTag>{name}</UxTag>
    },
    {
        key: 'dName',
        title: '部门',
        dataKey: 'dName',
        width: 150
    },
    {
        key: 'description',
        title: '描述',
        dataKey: 'description',
        width: 150,
        cellRenderer: ({ cellData: description }) => <div>{description}</div>
    },
    {
        key: 'status',
        title: '状态',
        dataKey: 'status',
        cellRenderer: ({ cellData: status }) => (
            <>
                <ux-button type={statusMap[status].color} is-link>
                                    </ux-button>
                {statusMap[status].text}
            </>
        ),
        width: 150,
        align: 'center'
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
const data = ref(
    Array.from({ length: 200 })
        .map(dataGenerator)
        .sort((a, b) => (a.name > b.name ? 1 : -1))
)

const sort = ref({ key: 'name', order: 'asc' })

const onColumnSort = (sortBy) => {
    const order = sortBy.order === 'asc' ? 1 : -1
    const dataClone = [...data.value]
    dataClone.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
    sort.value = sortBy
    data.value = dataClone
}
</script>

```

## TableV2的可展开的附加信息
使用动态高度渲染，您也可以在表格中显示详细的视图。

```vue
<template>
    <div>
        <ux-table-v2
            :columns="columns"
            :data="data"
            :estimated-row-height="50"
            :expand-column-key="columns[0].key"
            :width="700"
            :height="400">
            <template #row="props">
                <Row v-bind="props" />
            </template>
        </ux-table-v2>
    </div>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'

const detailedText = `在视觉元素、布局结构保持一致性，延续和培养用户的固有使用习惯，让用户对系统感觉稳定可控。
设计资源命名方式统一。
视觉元素组件的统一，比如：布局框架、品牌色、功能色、按钮、间距、字体、字号、字距、字重。
交互方式的统一，比如：点击操作的按钮的排布位置，跳转的体验、行为逻辑。
严格地遵循视觉排版规则，在所有文字应用场景中使用统一的字号、字距、行距。
语言文案的统一，比如：全局的通用文案、表述含义的严谨与一致性、标点符号、数字、时间、单位、格式等。`

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 200
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(4)
const data = ref(
    generateData(columns, 200).map((data) => {
        data.children = [
            {
                id: `${data.id}-detail-content`,
                detail: detailedText
            }
        ]
        return data
    })
)

const Row = ({ cells, rowData }) => {
    if (rowData.detail) return <div>{rowData.detail}</div>
    return cells
}

Row.inheritAttrs = false
</script>
```

## TableV2的自定义页脚
自定义表格 footer， 通常用来展示一些汇总数据和信息。

```vue
<template>
    <ux-table-v2 :columns="columns" :data="data" :row-height="40" :width="700" :height="400" :footer-height="50" fixed>
        <template #footer
            ><div
               
                style="
                    justify-content: center;
                    height: 100%;
                    color: var(--ux-color-white);
                    background-color: var(--ux-color-primary-light-7);
                ">
                底部扩展信息
            </div>
        </template>
    </ux-table-v2>
</template>

<script setup>
const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>

```

## TableV2的自定义空元素渲染器
渲染自定义的空元素

```vue
<template>
    <ux-table-v2 :columns="columns" :data="[]" :row-height="40" :width="700" :height="400" :footer-height="50">
        <template #empty>
            <div>
                <ux-empty />
            </div>
        </template>
    </ux-table-v2>
</template>

<script lang="jsx" setup>
const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const columns = generateColumns(6)
</script>

```

## TableV2的浮动遮罩层
当您想要显示加载指示器之类的浮动元素，可以通过渲染一个浮动在表格之上的遮罩层来实现。

```vue
<template>
    <ux-table-v2 :columns="columns" :data="data" :row-height="40" :width="700" :height="400">
        <template #overlay>
            <div>
                <ux-icon color="var(--ux-color-primary)" :size="26">
                    <loading-icon />
                </ux-icon>
            </div>
        </template>
    </ux-table-v2>
</template>

<script setup>
import { Loading as LoadingIcon } from '@ux-up/icons-vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>
```

## TableV2的手动滚动
使用 `ux-table-v2` 暴露的方法可以进行手动或编程式的滚动到指定的偏移量或者行。

:::info primary

`scrollToRow` 的第二个参数代表滚动策略，计算了要滚动的位置，其默认值是 `auto`。 如果你想要滚动到某个特定位置，你可以自己定义战略。 可用的选项是 `auto`、 `center`、 `end`、 `start`、 `smart`

`smart` 和`auto` 之间的区别是， `auto` 是 `smart` 滚动策略的子集。

:::

```vue
<template>
    <div>
        <ux-form-item label="滚动像素">
            <ux-input v-model="scrollDelta" />
        </ux-form-item>
        <ux-form-item label="滚动行数">
            <ux-input v-model="scrollRows" />
        </ux-form-item>
    </div>
    <div>
        <ux-button @click="scrollByPixels">根据像素滚动</ux-button>
        <ux-button @click="scrollByRows">根据行数滚动</ux-button>
    </div>
    <div>
        <ux-auto-resizer>
            <template #default="{ height, width }">
                <ux-table-v2 ref="tableRef" :columns="columns" :data="data" :width="width" :height="height" fixed />
            </template>
        </ux-auto-resizer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `第${columnIndex}列`,
        width: 150
    }))

const generateData = (columns, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `第${rowIndex}行 - 第${columnIndex}列`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null
            }
        )
    })

const columns = generateColumns(10)
const data = generateData(columns, 200)
const tableRef = ref()
const scrollDelta = ref(200)
const scrollRows = ref(10)

function scrollByPixels() {
    tableRef.value?.scrollToTop(scrollDelta.value)
}

function scrollByRows() {
    tableRef.value?.scrollToRow(scrollRows.value)
}
</script>

```

