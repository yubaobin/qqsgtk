# PageHeader 页头
如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。

## PageHeader的完整示例

```vue
<template>
    <div aria-label="完整例子">
        <ux-page-header @back="onBack">
            <template #breadcrumb>
                <ux-breadcrumb separator="/">
                    <ux-breadcrumb-item :to="{ path: './page-header.html' }">首页</ux-breadcrumb-item>
                    <ux-breadcrumb-item>组件</ux-breadcrumb-item>
                    <ux-breadcrumb-item>导航</ux-breadcrumb-item>
                </ux-breadcrumb>
            </template>
            <template #content>
                <div>
                    <ux-avatar :size="32" :src="src" />
                    <span>标题</span>
                    <span style="color: var(--ux-text-color-regular)">子标题</span>
                    <ux-tag>标签</ux-tag>
                </div>
            </template>
            <template #extra>
                <div>
                    <ux-button>打印</ux-button>
                    <ux-button type="primary">标记</ux-button>
                </div>
            </template>

            <ux-descriptions :column="3" size="small">
                <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
                <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
                <ux-descriptions-item label="居住地">广州市</ux-descriptions-item>
                <ux-descriptions-item label="备注">
                    <ux-tag size="small">学校</ux-tag>
                </ux-descriptions-item>
                <ux-descriptions-item label="Address"> 广东省广州市10000号 </ux-descriptions-item>
            </ux-descriptions>
            <p>
                我们秉承UED的设计价值观，延用规范设计原则，可以进一步提升你的工作效率。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多案例、模板、组件的代码实现，阐述通用表单设计器、报表设计器、大屏设计器、一体化设计器的最佳实践。
            </p>
        </ux-page-header>
    </div>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const src = `${props.baseUrl}images/avatar-circle.png`

const onBack = () => {
    UxNotification('Back')
}
</script>

```

## PageHeader的基础用法
简单场景下的标准页头。

```vue
<template>
    <ux-page-header @back="goBack">
        <template #content>
            <span>标题</span>
        </template>
    </ux-page-header>
</template>

<script setup>
const goBack = () => {
    console.log('go back')
}
</script>

```

## PageHeader的自定义图标
默认图标可能无法满足您的需求，您可以通过设置`icon`属性来自定义图标。

```vue
<template>
    <ux-page-header :icon="ArrowLeft">
        <template #content>
            <span>标题</span>
        </template>
    </ux-page-header>
</template>

<script setup>
import { ArrowLeft } from '@ux-up/icons-vue'
</script>

```

## PageHeader的无图标
有时不想展示页面上方的图标，您可以设置 `icon` 属性值为 `""` 来去除它。

```vue
<template>
    <ux-page-header icon="">
        <template #content>
            <span> Title </span>
        </template>
    </ux-page-header>
</template>

```

## PageHeader的面包屑导航
使用页头组件，您可以通过添加插槽 `breadcrumb` 来设置面包屑路由导航。

```vue
<template>
    <ux-page-header>
        <template #breadcrumb>
            <ux-breadcrumb separator="/">
                <ux-breadcrumb-item :to="{ path: './page-header.html' }">首页</ux-breadcrumb-item>
                <ux-breadcrumb-item>组件</ux-breadcrumb-item>
                <ux-breadcrumb-item>导航</ux-breadcrumb-item>
            </ux-breadcrumb>
        </template>
        <template #content>
            <span>标题</span>
        </template>
    </ux-page-header>
</template>

```

## PageHeader的额外操作部分
头部可能会变得很复杂，您可以在头部添加更多的区块，以允许丰富的交互。

```vue
<template>
    <ux-page-header icon="">
        <template #content>
            <div>
                <ux-avatar :size="32" :src="src" />
                <span>标题</span>
                <span style="color: var(--ux-text-color-regular)">子标题</span>
                <ux-tag>标签</ux-tag>
            </div>
        </template>
        <template #extra>
            <div>
                <ux-button>打印</ux-button>
                <ux-button type="primary">标记</ux-button>
            </div>
        </template>
    </ux-page-header>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/avatar-circle.png`
</script>

```

## PageHeader的主要内容
有时我们想让页头显示一些协同响应内容，我们可以使用 `default` 插槽。

```vue
<template>
    <ux-page-header>
        <template #content>
            <span>标题</span>
        </template>
        <div>
            我们秉承UED的设计价值观，延用规范设计原则，可以进一步提升你的工作效率。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多案例、模板、组件的代码实现，阐述通用表单设计器、报表设计器、大屏设计器、一体化设计器的最佳实践。
        </div>
    </ux-page-header>
</template>

```

## PageHeader的组件插槽结构
本组件由这些部件构成：

```vue
<template>
  <ux-page-header>
    <!-- 第一行内容 -->
    <template #breadcrumb />
    <!-- 第二行内容 -->
    <template #icon />
    <template #title />
    <template #content />
    <template #extra />
    <!-- 其他 -->
    <template #default />
  </ux-page-header>
</template>
```
