# Table 表格
用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## Table的基础表格
基础的表格展示用法。

 当 `ux-table` 元素中注入 `data` 对象数组后，在 `ux-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。 可以使用 `width` 属性来定义列宽。
```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

 `stripe` 属性可以创建带斑马纹的表格。它接受一个 `Boolean`，默认为 `false`，设置为 `true` 即为启用。
```vue
<template>
    <ux-table :data="tableData" stripe>
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的带边框表格
 默认情况下，`ux-table` 组件是不具有竖直方向的边框的，如果需要，可以使用 `border` 属性，它接受一个 `Boolean`，设置为 `true` 即可启用。
```vue
<template>
    <ux-table :data="tableData" border>
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的带状态表格
可将表格内容高亮显示，方便区分「成功、信息、警告、危险」等内容。

 可以通过指定 `ux-table` 组件的 `row-class-name` 属性来为 `ux-table` 中的某一行添加 `class`， 这样就可以自定义每一行的样式了。
```vue
<template>
    <ux-table :data="tableData" :row-class-name="tableRowClassName">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableRowClassName = ({ row }) => {
    if (row.status === 1) {
        return 'success-row'
    } else if (row.status === 2) {
        return 'warning-row'
    } else if (row.status === 3) {
        return 'danger-row'
    }
    return ''
}

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>
```

## Table的显示溢出工具提示的表格
当内容太长时，它会分成多行。您可以使用 `show-overflow-tooltip` 将其保留在一行中。

 属性 `show-overflow-tooltip` 接受一个 `Boolean`。 为 `true` 时多余的内容会在 `hover` 时以 `tooltip` 的形式显示出来。
```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" width="200" label="使用show-overflow-tooltip" show-overflow-tooltip />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '189888888881898888888818988888888',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的固定表头
纵向内容过多时，可选择固定表头。

 只要在 `ux-table` 元素中定义了 `height` 属性，即可实现固定表头的表格，而不需要额外的代码。
```vue
<template>
    <ux-table :data="tableData" height="250">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的固定列
横向内容过多时，可选择固定列。

 固定列需要使用 `fixed` 属性，它接受 `Boolean` 值。 如果为 `true`, 列将被左侧固定。 它还接受传入字符串，`left` 或 `right`，表示左边固定还是右边固定。
```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column fixed prop="date" label="日期" width="150" />
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" width="200" />
        <ux-table-column prop="dName" label="部门" width="200" />
        <ux-table-column prop="contact" label="联系人" width="200" />
        <ux-table-column prop="photo" label="联系手机" width="200" />
        <ux-table-column prop="date" label="日期" width="200" />
        <ux-table-column prop="status" label="状态" width="200">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
        <ux-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
                <ux-button is-text size="small" type="primary" @click="handleClick(scope.row)">查看</ux-button>
                <ux-button is-text size="small" type="primary">编辑</ux-button>
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的固定列和表头
当您有大量数据块放入表中，您可以同时固定表头和列。

 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。
```vue
<template>
    <ux-table :data="tableData" height="250">
        <ux-table-column fixed prop="date" label="日期" width="150" />
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" width="200" />
        <ux-table-column prop="dName" label="部门" width="200" />
        <ux-table-column prop="contact" label="联系人" width="200" />
        <ux-table-column prop="photo" label="联系手机" width="200" />
        <ux-table-column prop="date" label="日期" width="200" />
        <ux-table-column prop="status" label="状态" width="200">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
        <ux-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
                <ux-button is-text type="primary" size="small" @click="handleClick(scope.row)">查看</ux-button>
                <ux-button is-text type="primary" size="small">编辑</ux-button>
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]
const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的流体高度
当数据量动态变化时，可以为 Table 设置一个最大高度。

 通过设置 `max-height` 属性为 `ux-table` 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。
```vue
<template>
    <div>
        <ux-table :data="tableData" max-height="250">
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
            <ux-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <ux-button type="text" size="small" @click="deleteRow(scope.$index, tableData)"> 移除 </ux-button>
                </template>
            </ux-table-column>
        </ux-table>
        <div>
            <ux-button @click="onAddRow">添加一项</ux-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    }
])

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]

const deleteRow = (index) => {
    tableData.value.splice(index, 1)
}

const onAddRow = () => {
    tableData.value.push({
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: Date.now() % 3
    })
}
</script>

```

## Table的多级表头
数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

 只需要在 `ux-table-column` 里面嵌套 `ux-table-column`，就可以实现多级表头。
```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column prop="date" label="日期" width="150" />
        <ux-table-column label="配送信息">
            <ux-table-column prop="name" label="姓名" width="120" />
            <ux-table-column label="地址">
                <ux-table-column prop="province" label="省份" />
                <ux-table-column prop="city" label="市区" />
                <ux-table-column prop="address" label="地址" />
                <ux-table-column prop="zip" label="邮编" width="120" />
            </ux-table-column>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const tableData = [
    {
        date: '2024-06-03',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-02',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-04',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-01',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-08',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-06',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    },
    {
        date: '2024-06-07',
        name: '王小虎',
        province: '广州',
        city: '天河区',
        address: '广州市天河区10000号',
        zip: 200333
    }
]
</script>

```

## Table的单选
选择单行数据时使用色块表示。

 `ux-table` 组件提供了单选的支持， 只需要配置 `highlight-current-row` 属性即可实现单选。 之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow`，`oldCurrentRow`。 如果需要显示索引，可以增加一列 `ux-table-column`，设置 `type` 属性为 `index` 即可显示从 1 开始的索引号。
```vue
<template>
    <div>
        <ux-table
            ref="singleTableRef"
            :data="tableData"
            highlight-current-row
           
            @current-change="handleCurrentChange">
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
        <div>
            <ux-button @click="setCurrent(tableData[1])">选中第二行</ux-button>
            <ux-button @click="setCurrent()">取消选择</ux-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const currentRow = ref()
const singleTableRef = ref()

const setCurrent = (row) => {
    singleTableRef.value.setCurrentRow(row)
}
const handleCurrentChange = (val) => {
    currentRow.value = val
}
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的多选
可以选择多行数据。

 实现多选非常简单: 手动添加一个 `ux-table-column`，设 `type` 属性为 `selection` 即可。
```vue
<template>
    <div>
        <ux-table
            ref="multipleTableRef"
            :data="tableData"
            row-key="id"
           
            @selection-change="handleSelectionChange">
            <ux-table-column type="selection" :selectable="selectable" width="55" />
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
        <div>
            <ux-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</ux-button>
            <ux-button @click="toggleSelection([tableData[1], tableData[2]], false)">切换选中状态</ux-button>
            <ux-button @click="toggleSelection()">取消选择</ux-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const multipleTableRef = ref()
const multipleSelection = ref([])

const selectable = (row) => ![1, 2].includes(row.id)
const toggleSelection = (rows, ignoreSelectable) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined, ignoreSelectable)
        })
    } else {
        multipleTableRef.value.clearSelection()
    }
}
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

const tableData = [
    {
        id: 1,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        id: 2,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        id: 3,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        id: 4,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的排序
对表格进行排序，可快速查找或对比数据。

在列中设置 `sortable` 属性即可实现以该列为基准的排序，接受一个 `Boolean`，默认为 `false`。可以通过 `ux-table` 的 `default-sort` 属性设置默认的排序列和排序顺序。可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。如果需要后端排序，需将 `sortable` 设置为 `custom`，同时在 `ux-table` 上监听 `sort-change` 事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值，接受一个 `Function`，会传入两个参数：`row` 和 `column`，可以根据自己的需求进行处理。

```vue
<template>
    <ux-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" :formatter="formatter" />
        <ux-table-column prop="status" label="状态" sortable>
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const formatter = (row) => {
    return row.date
}

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-09',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-10',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-11',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的筛选
对表格进行筛选，可快速查找到自己想看的数据。

 在列中设置 `filters`、 `filter-method` 属性即可开启该列的筛选，`filters` 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。
```vue
<template>
    <div>
        <div>
            <ux-button @click="resetDateFilter">清除日期过滤器</ux-button>
            <ux-button @click="clearFilter">清除所有过滤器</ux-button>
        </div>
        <ux-table ref="tableRef" row-key="date" :data="tableData">
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
                column-key="date"
                :filters="[
                    { text: '2023-02-08', value: '2023-02-08' },
                    { text: '2023-02-09', value: '2023-02-09' },
                    { text: '2023-02-10', value: '2023-02-10' },
                    { text: '2023-02-11', value: '2023-02-11' }
                ]"
                :filter-method="filterHandler" />
            <ux-table-column
                prop="status"
                label="状态"
                :filters="[
                    { value: 0, text: '待处理' },
                    { value: 1, text: '已通过' },
                    { value: 2, text: '待审核' },
                    { value: 3, text: '不通过' }
                ]"
                :filter-method="filterStatus"
                filter-placement="bottom-end">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tableRef = ref()

const resetDateFilter = () => {
    tableRef.value.clearFilter(['date'])
}
const clearFilter = () => {
    tableRef.value.clearFilter()
}
const filterStatus = (value, row) => {
    return row.status === value
}
const filterHandler = (value, row, column) => {
    const property = column.property
    return row[property] === value
}

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-09',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-10',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-11',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的自定义列模板
自定义列的显示内容，可组合其他组件使用。

 通过 `slot` 可以获取到 `row`, `column`, `$index` 和 `store`（table 内部的状态管理）的数据，用法参考 demo。
```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称">
            <template #default="scope">
                <ux-popover trigger="hover" placement="top">
                    <p>部门: {{ scope.row.dName }}</p>
                    <p>联系人: {{ scope.row.contact }}</p>
                    <p>联系手机: {{ scope.row.photo }}</p>
                    <template #reference>
                        <div>
                            <ux-tag size="medium">{{ scope.row.pName }}</ux-tag>
                        </div>
                    </template>
                </ux-popover>
            </template>
        </ux-table-column>
        <ux-table-column label="日期">
            <template #default="scope">
                <i />
                <span>{{ scope.row.date }}</span>
            </template>
        </ux-table-column>
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
        <ux-table-column label="操作">
            <template #default="scope">
                <ux-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</ux-button>
                <ux-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</ux-button>
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的自定义表头
表头支持自定义。

 通过设置具名插槽 `header` 来自定义表头。
```vue
<template>
    <ux-table :data="filterTableData">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #header>
                <ux-input v-model="search" size="mini" placeholder="输入项目名称搜索" />
            </template>
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
import { computed, ref } from 'vue'

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter((data) => !search.value || data.pName.toLowerCase().includes(search.value.toLowerCase()))
)
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '零代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: 'ui库建设',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '应用集成平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的展开行
当行内容过多并且不想显示横向滚动条时，可以使用 `ux-table` 展开行功能。

在 ^(1.1.4) 版本后，新增了 `preserve-expanded-content` 属性，用于控制折叠时是否在 `DOM` 中保留已展开的行内容。

 通过设置 `type` 为 `expand` 和 `slot` 可以开启展开行功能，`ux-table-column` 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 `slot` 相同。
```vue
<template>
    <div>
        <div>
            <div>切换父表格的border: <ux-switch v-model="parentBorder" /></div>
            <div>切换子表格的border: <ux-switch v-model="childBorder" /></div>
            <div>切换preserve expanded: <ux-switch v-model="preserveExpanded" /></div>
        </div>
        <ux-table
            :data="tableData"
            :border="parentBorder"
            :preserve-expanded-content="preserveExpanded"
           >
            <ux-table-column type="expand">
                <template #default="scope">
                    <ux-form label-position="right" label-suffix=":" label-width="90px">
                        <ux-form-item label="部门">
                            <span>{{ scope.row.dName }}</span>
                        </ux-form-item>
                        <ux-form-item label="联系人">
                            <span>{{ scope.row.contact }}</span>
                        </ux-form-item>
                        <ux-form-item label="联系手机">
                            <span>{{ scope.row.photo }}</span>
                        </ux-form-item>
                        <ux-form-item>
                            <ux-table :data="scope.row.children" :border="childBorder">
                                <ux-table-column prop="pName" label="项目名称" />
                                <ux-table-column prop="dName" label="部门" />
                                <ux-table-column prop="contact" label="联系人" />
                                <ux-table-column prop="photo" label="联系手机" />
                                <ux-table-column prop="date" label="日期" />
                            </ux-table>
                        </ux-form-item>
                    </ux-form>
                </template>
            </ux-table-column>
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const preserveExpanded = ref(false)
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的树形数据与懒加载
 支持树类型的数据的显示。当 `row` 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 `ux-table` 的 `lazy` 属性为 `true` 与加载函数 `load`。通过指定 `row` 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。
```vue
<template>
    <div>
        <ux-table :data="tableData" row-key="id" border default-expand-all>
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
const load = (row, treeNode, resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 2
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 3
            }
        ])
    }, 1000)
}

const tableData = [
    {
        id: 1,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        id: 2,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        id: 3,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    },
    {
        id: 4,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]
const tableData1 = [
    {
        id: 1,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        id: 2,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        id: 3,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2,
        hasChildren: true
    },
    {
        id: 4,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的可选择的树形数据
 当 `treeProps.checkStrictly` 为 true，父节点和子节点的选择状态不再关联， 也就是说，当选择父节点时，它的子节点将不被选择； 当 `treeProps.checkStrictly` 是false，父节点和子节点的选择状态将与子节点的选择状态相关联， 也就是说，当选择父节点时，将选择其所有子节点。
```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="treeProps.checkStrictly">
                <ux-radio-button :value="true" label="不关联" />
                <ux-radio-button :value="false" label="关联" />
            </ux-radio-group>
        </div>
        <ux-table :data="tableData" :tree-props="treeProps" row-key="id" default-expand-all>
            <ux-table-column type="selection" width="55" :selectable="selectable" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const treeProps = reactive({
    checkStrictly: false
})

const selectable = (row) => ![1, 31].includes(row.id)

const tableData = [
    {
        id: 1,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        id: 2,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        id: 3,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2,
        children: [
            {
                id: 31,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 0
            },
            {
                id: 32,
                pName: '低代码开发平台',
                dName: '公共研发部',
                contact: '张三',
                photo: '18988888888',
                date: '2023-02-08',
                status: 1
            }
        ]
    },
    {
        id: 4,
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的表尾合计行
若表格展示的是各类数字，可以在表尾显示各列的合计。

将 `show-summary` 设置为 `true` 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 `sum-text` 配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考 demo 中的第二个表格。

```vue
<template>
    <div>
        <ux-table :data="tableData" border show-summary>
            <ux-table-column prop="id" label="ID" width="180" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="amount1" sortable label="数值 1" />
            <ux-table-column prop="amount2" sortable label="数值 2" />
            <ux-table-column prop="amount3" sortable label="数值 3" />
        </ux-table>

        <ux-table
            :data="tableData"
            border
            height="200"
            :summary-method="getSummaries"
            show-summary
           >
            <ux-table-column prop="id" label="ID" width="180" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="amount1" label="数值 1（元）" />
            <ux-table-column prop="amount2" label="数值 2（元）" />
            <ux-table-column prop="amount3" label="数值 3（元）" />
        </ux-table>
    </div>
</template>

<script setup>
import { h } from 'vue'

const getSummaries = (param) => {
    const { columns, data } = param
    const sums = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = h('div', null, ['总价'])
            return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => Number.isNaN(value))) {
            sums[index] = `${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)} 元`
        } else {
            sums[index] = 'N/A'
        }
    })

    return sums
}

const tableData = [
    {
        id: '12987122',
        pName: '低代码开发平台',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
    },
    {
        id: '12987123',
        pName: '低代码开发平台',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
    },
    {
        id: '12987124',
        pName: '低代码开发平台',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
    },
    {
        id: '12987125',
        pName: '低代码开发平台',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
    },
    {
        id: '12987126',
        pName: '低代码开发平台',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
    }
]
</script>

```

## Table的合并行或列
多行或多列共用一个数据时，可以合并行或列。

 通过给 `ux-table` 传入 `span-method` 方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行 `row`、当前列 `column`、当前行号 `rowIndex`、当前列号 `columnIndex` 四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表 `rowspan`，第二个元素代表 `colspan`， 也可以返回一个键名为 `rowspan` 和 `colspan` 的对象。
```vue
<template>
    <div>
        <ux-table :data="tableData" :span-method="arraySpanMethod" border>
            <ux-table-column prop="id" label="ID" width="180" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="amount1" sortable label="数值 1" />
            <ux-table-column prop="amount2" sortable label="数值 2" />
            <ux-table-column prop="amount3" sortable label="数值 3" />
        </ux-table>

        <ux-table :data="tableData" :span-method="objectSpanMethod" border>
            <ux-table-column prop="id" label="ID" width="180" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="amount1" label="数值 1（元）" />
            <ux-table-column prop="amount2" label="数值 2（元）" />
            <ux-table-column prop="amount3" label="数值 3（元）" />
        </ux-table>
    </div>
</template>

<script setup>
const arraySpanMethod = ({ row, column, rowIndex, columnIndex }) => {
    if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
            return [1, 2]
        } else if (columnIndex === 1) {
            return [0, 0]
        }
    }
}

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
    if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
            return {
                rowspan: 2,
                colspan: 1
            }
        } else {
            return {
                rowspan: 0,
                colspan: 0
            }
        }
    }
}

const tableData = [
    {
        id: '12987122',
        pName: '低代码开发平台',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
    },
    {
        id: '12987123',
        pName: '低代码开发平台',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
    },
    {
        id: '12987124',
        pName: '低代码开发平台',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
    },
    {
        id: '12987125',
        pName: '低代码开发平台',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
    },
    {
        id: '12987126',
        pName: '低代码开发平台',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
    }
]
</script>

```

## Table的自定义索引
自定义 `type` 为 `index` 的列的行号。

通过给 `type` 为 `index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。

```vue
<template>
    <ux-table :data="tableData">
        <ux-table-column type="index" label="索引" width="60" align="center" :index="indexMethod" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
const indexMethod = (index) => {
    return index * 2
}
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的表格布局
通过属性 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 可以指定表格中单元格、行和列的布局方式

```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="tableLayout">
                <ux-radio-button value="fixed">fixed</ux-radio-button>
                <ux-radio-button value="auto">auto</ux-radio-button>
            </ux-radio-group>
        </div>
        <ux-table :data="tableData" :table-layout="tableLayout">
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Table的Tooltip 自定义 ^(1.1.4)
您可以使用 `tooltip-formatter` 自定义 Tooltip 提示内容。

```vue
<template>
    <ux-table :data="tableData" show-overflow-tooltip :tooltip-formatter="tableRowFormatter">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" wdith="240" />
        <ux-table-column
            prop="tags"
            label="使用 tooltip-formatter"
            width="240"
            :tooltip-formatter="({ row }) => row.tags.join(', ')">
            <template #default="{ row }">
                <ux-tag v-for="tag in row.tags" :key="tag" type="primary">
                    {{ tag }}
                </ux-tag>
            </template>
        </ux-table-column>
        <ux-table-column prop="url" label="使用 vnode" width="240" :tooltip-formatter="withVNode" />
    </ux-table>
</template>

<script setup>
import { h } from 'vue'
import { UxLink } from 'ux-up'

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        tags: ['指南', '组件', '资源', '扩展组件'],
        url: 'http://10.18.96.24:8000/designportal/dashboard'
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        tags: ['指南', '组件', '资源', '扩展组件'],
        url: 'http://10.18.96.24:8000/designportal/dashboard'
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        tags: ['指南', '组件', '资源', '扩展组件'],
        url: 'http://10.18.96.24:8000/designportal/dashboard'
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        tags: ['指南', '组件', '资源', '扩展组件'],
        url: 'http://10.18.96.24:8000/designportal/dashboard'
    }
]

const tableRowFormatter = (data) => {
    return `${data.cellValue}: table formatter`
}

const withVNode = (data) => {
    return h(UxLink, { type: 'primary', href: data.cellValue }, () => h('span', null, data.cellValue))
}
</script>

<style scoped>
p {
    margin: 10px;
    padding: 0;
}
.tag-item + .tag-item {
    margin-left: 5px;
}
</style>

```

