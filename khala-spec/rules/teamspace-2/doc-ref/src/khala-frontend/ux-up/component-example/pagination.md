# Pagination 分页
当数据量过多时，使用分页分解数据。

## Pagination的基础用法
 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 分页元素如下： `prev` (上一页按钮), `next` (下一页按钮), `pager` (分页列表), `jumper` (跳转), `total` (总计), `sizes` (每页条数选择) 和 `->` (`->` 后的元素会靠右显示)。
```vue
<template>
    <div>
        <div>
            <div>
                <div>页数较少时的效果</div>
                <ux-pagination layout="prev, pager, next" :total="50" />
            </div>
        </div>
        <div>
            <div>
                <div>大于 7 页时的效果</div>
                <ux-pagination layout="prev, pager, next" :total="1000" />
            </div>
        </div>
    </div>
</template>

```

## Pagination的设置最大页码按钮数
 默认情况下，当总页数超过 7 页时，`Pagination` 会折叠多余的页码按钮。 通过 `pager-count` 属性可以设置最大页码按钮数。
```vue
<template>
    <ux-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
</template>

```

## Pagination的带有背景色的分页
 设置`background`属性可以为分页按钮添加背景色。
```vue
<template>
    <ux-pagination background layout="prev, pager, next" :total="1000" />
</template>

```

## Pagination的小型分页
在空间有限的情况下，可以使用简单的小型分页。

 只需要设置 `small` 属性为 `true` 即可让分页变小。
```vue
<template>
    <div>
        <ux-pagination size="small" layout="prev, pager, next" :total="50" />
        <ux-pagination size="small" background layout="prev, pager, next" :total="50" />
    </div>
</template>

```

## Pagination的当只有一页时隐藏分页
当只有一页时，通过设置 `hide-on-single-page` 属性来隐藏分页。

```vue
<template>
    <div>
        <ux-switch v-model="value" />
        <ux-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

```

## Pagination的附加功能
根据场景需要，可以添加其他功能模块。

 此示例是一个完整的用例。 使用了 `size-change` 和 `current-change` 事件来处理页码大小和当前页变动时候触发的事件。 `page-sizes`接受一个整数类型的数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]` 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。
```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="size">
                <ux-radio-button value="large">large</ux-radio-button>
                <ux-radio-button value="default">default</ux-radio-button>
                <ux-radio-button value="small">small</ux-radio-button>
                <ux-radio-button value="mini">mini</ux-radio-button>
            </ux-radio-group>

            <span>背景: </span><ux-switch v-model="background" />

            <span>禁用: </span><ux-switch v-model="disabled" />
        </div>

        <div>
            <div>
                <div>统计总数</div>
                <ux-pagination
                    v-model:current-page="currentPage1"
                    :page-size="100"
                    :size="size"
                    :disabled="disabled"
                    :background="background"
                    layout="total, prev, pager, next"
                    :total="1000"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </div>
        <div>
            <div>
                <div>每页数改变</div>
                <ux-pagination
                    v-model:current-page="currentPage2"
                    v-model:page-size="pageSize2"
                    :page-sizes="[100, 200, 300, 400]"
                    :size="size"
                    :disabled="disabled"
                    :background="background"
                    layout="sizes, prev, pager, next"
                    :total="1000"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </div>
        <div>
            <div>
                <div>跳转</div>
                <ux-pagination
                    v-model:current-page="currentPage3"
                    v-model:page-size="pageSize3"
                    :size="size"
                    :disabled="disabled"
                    :background="background"
                    layout="prev, pager, next, jumper"
                    :total="1000"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </div>
        <div>
            <div>
                <div>所有组合</div>
                <ux-pagination
                    v-model:current-page="currentPage4"
                    v-model:page-size="pageSize4"
                    :page-sizes="[100, 200, 300, 400]"
                    :size="size"
                    :disabled="disabled"
                    :background="background"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
</script>

```

