# Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构。

`<ux-container>`：外层容器。 当子元素中包含 `<ux-header>` 或 `<ux-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<ux-header>`：顶栏容器。

`<ux-aside>`：侧边栏容器。

`<ux-main>`：主要区域容器。

`<ux-footer>`：底栏容器。

:::info primary

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<ux-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的父元素必须是一个 `<ux-container>`

:::

## Container的常见页面布局
```vue
<template>
    <div>
        <ux-container>
            <ux-header>Header</ux-header>
            <ux-main>Main</ux-main>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-header>Header</ux-header>
            <ux-main>Main</ux-main>
            <ux-footer>Footer</ux-footer>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-aside width="200px">Aside</ux-aside>
            <ux-main>Main</ux-main>
            <ux-aside width="200px">Aside</ux-aside>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-header>Header</ux-header>
            <ux-container>
                <ux-aside width="200px">Aside</ux-aside>
                <ux-main>Main</ux-main>
            </ux-container>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-header>Header</ux-header>
            <ux-container>
                <ux-aside width="200px">Aside</ux-aside>
                <ux-container>
                    <ux-main>Main</ux-main>
                    <ux-footer>Footer</ux-footer>
                </ux-container>
            </ux-container>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-aside width="200px">Aside</ux-aside>
            <ux-container>
                <ux-header>Header</ux-header>
                <ux-main>Main</ux-main>
            </ux-container>
        </ux-container>
    </div>
</template>

```

```vue
<template>
    <div>
        <ux-container>
            <ux-aside width="200px">Aside</ux-aside>
            <ux-container>
                <ux-header>Header</ux-header>
                <ux-main>Main</ux-main>
                <ux-footer>Footer</ux-footer>
            </ux-container>
        </ux-container>
    </div>
</template>

```

## Container的例子

```vue
<template>
    <ux-container>
        <ux-aside width="200px">
            <ux-scrollbar>
                <ux-menu :default-openeds="['1', '3']">
                    <ux-sub-menu index="1">
                        <template #title>
                            <ux-icon><message /></ux-icon>导航一
                        </template>
                        <ux-menu-item-group>
                            <template #title>分组一</template>
                            <ux-menu-item index="1-1">选项一</ux-menu-item>
                            <ux-menu-item index="1-2">选项二</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-menu-item-group title="分组二">
                            <ux-menu-item index="1-3">选项三</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-sub-menu index="1-4">
                            <template #title>选项四</template>
                            <ux-menu-item index="1-4-1">选项4-1</ux-menu-item>
                        </ux-sub-menu>
                    </ux-sub-menu>
                    <ux-sub-menu index="2">
                        <template #title>
                            <ux-icon><icon-menu /></ux-icon>导航二
                        </template>
                        <ux-menu-item-group>
                            <template #title>分组一</template>
                            <ux-menu-item index="2-1">选项一</ux-menu-item>
                            <ux-menu-item index="2-2">选项二</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-menu-item-group title="Group二">
                            <ux-menu-item index="2-3">选项三</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-sub-menu index="2-4">
                            <template #title>选项 4</template>
                            <ux-menu-item index="2-4-1">选项 4-1</ux-menu-item>
                        </ux-sub-menu>
                    </ux-sub-menu>
                    <ux-sub-menu index="3">
                        <template #title>
                            <ux-icon><setting /></ux-icon>导航三
                        </template>
                        <ux-menu-item-group>
                            <template #title>分组一</template>
                            <ux-menu-item index="3-1">选项一</ux-menu-item>
                            <ux-menu-item index="3-2">选项二</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-menu-item-group title="Group 2">
                            <ux-menu-item index="3-3">选项三</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-sub-menu index="3-4">
                            <template #title>选项四</template>
                            <ux-menu-item index="3-4-1">选项 4-1</ux-menu-item>
                        </ux-sub-menu>
                    </ux-sub-menu>
                </ux-menu>
            </ux-scrollbar>
        </ux-aside>

        <ux-container>
            <ux-header>
                <div>
                    <ux-dropdown>
                        <ux-icon>
                            <setting />
                        </ux-icon>
                        <template #dropdown>
                            <ux-dropdown-menu>
                                <ux-dropdown-item>查看</ux-dropdown-item>
                                <ux-dropdown-item>新增</ux-dropdown-item>
                                <ux-dropdown-item>删除</ux-dropdown-item>
                            </ux-dropdown-menu>
                        </template>
                    </ux-dropdown>
                    <span>小明</span>
                </div>
            </ux-header>

            <ux-main>
                <ux-scrollbar>
                    <ux-table :data="tableData">
                        <ux-table-column prop="date" label="日期" width="140" />
                        <ux-table-column prop="name" label="姓名" width="120" />
                        <ux-table-column prop="address" label="地址" />
                    </ux-table>
                </ux-scrollbar>
            </ux-main>
        </ux-container>
    </ux-container>
</template>

<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@ux-up/icons-vue'

const item = {
    date: '2024-05-02',
    name: '小明',
    address: '上海市普陀区金沙江路 1518 弄'
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
```

