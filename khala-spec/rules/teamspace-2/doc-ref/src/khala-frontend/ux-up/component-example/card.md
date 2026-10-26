# Card 卡片
将信息聚合在卡片容器中展示。

## Card的基础用法
卡片包含标题，内容以及操作区域。

 Card 组件由 `header` `body` 和 `footer`组成。 `header` 和 `footer`是可选的，其内容取决于一个具名的 `slot`。
```vue
<template>
    <ux-card>
        <template #header>
            <div>
                <span>卡片标题</span>
            </div>
        </template>
        <p v-for="o in 4" :key="o">{{ '卡片列表 ' + o }}</p>
        <template #footer>卡片底部</template>
    </ux-card>
</template>

```

## Card的简单卡片
卡片可以只有内容区域。

```vue
<template>
    <ux-card>
        <p v-for="o in 4" :key="o">{{ '卡片列表 ' + o }}</p>
    </ux-card>
</template>

```

## Card的有图片内容的卡片
可配置定义更丰富的内容展示。

 配置 `body-style` 属性来自定义 `body` 部分的样式。
```vue
<template>
    <ux-card>
        <template #header>图片</template>
        <img :src="imgSrc" />
    </ux-card>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const imgSrc = ref(`${props.baseUrl}images/demo/demo2.png`)
</script>

```

## Card的带有阴影效果的卡片
你可以定义什么时候展示卡片的阴影效果。

 通过 `shadow` 属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover` 或 `never`。
```vue
<template>
    <div>
        <ux-card shadow="always">Always</ux-card>
        <ux-card shadow="hover">Hover</ux-card>
        <ux-card shadow="never">Never</ux-card>
    </div>
</template>

```

