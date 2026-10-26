# Skeleton 骨架屏
在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## Skeleton的基础用法
 基础的骨架效果。
```vue
<template>
    <div>
        <ux-skeleton />
        <br />
        <ux-skeleton>
            <template #template>
                <ux-skeleton-item variant="circle" />
            </template>
        </ux-skeleton>
    </div>
</template>

```

## Skeleton的更多参数
 可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。
```vue
<template>
    <ux-skeleton :rows="5" />
</template>

```

## Skeleton的动画效果
 我们提供了一个开关标志，表明是否显示加载动画， 调用 `animated` 如果为 `true`，所有的 `ux-skeleton` 的子节点将显示动画。
```vue
<template>
    <ux-skeleton :rows="5" animated />
</template>

```

## Skeleton的自定义样式
ui 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名插槽 `template` 来自己设定模板。

我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 另外，在构建您自己自定义的骨架时，您应该尽可能更接近于真正的 `DOM`。 避免 `DOM` 因高度差而发生抖动。

```vue
<template>
    <ux-skeleton>
        <template #template>
            <ux-skeleton-item variant="image" />
            <div>
                <ux-skeleton-item variant="p" />
                <div>
                    <ux-skeleton-item variant="text" />
                    <ux-skeleton-item variant="text" />
                </div>
            </div>
        </template>
    </ux-skeleton>
</template>

```

## Skeleton的加载状态
 当 `Loading` 结束之后，我们往往需要显示真实的 `UI`， 可以通过 loading 属性的值来控制是否显示加载后的 `DOM`。 也可以通过具名插槽 `default` 来构建 `loading` 结束之后需要展示的真实 `DOM` 元素结构。
```vue
<template>
    <div>
        <div>
            <label>切换 Loading</label>
            <ux-switch v-model="loading" />
        </div>
        <ux-skeleton :loading="loading" animated>
            <template #template>
                <ux-skeleton-item variant="image" />
                <div>
                    <ux-skeleton-item variant="h3" />
                    <div
                       >
                        <ux-skeleton-item variant="text" />
                        <ux-skeleton-item variant="text" />
                    </div>
                </div>
            </template>
            <template #default>
                <ux-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img :src="src" />
                    <div>
                        <span>显示的实际dom</span>
                        <div>
                            <span>{{ currentDate }}</span>
                            <ux-button is-text type="primary">操作按钮</ux-button>
                        </div>
                    </div>
                </ux-card>
            </template>
        </ux-skeleton>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo1.png`
const loading = ref(true)
const currentDate = '2024-06-22'
</script>

```

## Skeleton的渲染多条数据
大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 `UI`。利用 `count` 这个属性就能控制渲染多少条假的数据在页面上。

:::info primary

我们不推荐在浏览器中渲染过多的虚假 `UI` 元素，这样会消耗更多时间销毁骨架元素，从而引起性能问题。 为了用户体验，请尽量将 `count` 值保持在小一点的数值。

:::

```vue
<template>
    <div>
        <div>
            <ux-button @click="setLoading">点我重新加载</ux-button>
        </div>
        <ux-skeleton :loading="loading" animated :count="3">
            <template #template>
                <ux-skeleton-item variant="image" />
                <div>
                    <ux-skeleton-item variant="h3" />
                    <div
                       >
                        <ux-skeleton-item variant="text" />
                        <ux-skeleton-item variant="text" />
                    </div>
                </div>
            </template>
            <template #default>
                <ux-card
                    v-for="item in lists"
                    :key="item.name"
                   
                    :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img :src="item.imgUrl" />
                    <div>
                        <span>{{ item.name }}</span>
                        <div>
                            <span>{{ currentDate }}</span>
                            <ux-button is-link type="primary">操作按钮</ux-button>
                        </div>
                    </div>
                </ux-card>
            </template>
        </ux-skeleton>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const loading = ref(true)
const lists = ref([])
const currentDate = '2024-06-22'
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const setLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 2000)
}

onMounted(() => {
    loading.value = false
    lists.value = [
        {
            imgUrl: `${props.baseUrl}images/demo/demo1.png`,
            name: 'demo1'
        },
        {
            imgUrl: `${props.baseUrl}images/demo/demo2.png`,
            name: 'demo2'
        },
        {
            imgUrl: `${props.baseUrl}images/demo/demo3.png`,
            name: 'demo3'
        }
    ]
})
</script>

```

## Skeleton的防止渲染抖动
有的时候，`API` 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪， 此时为了避免这种情况，就需要通过 `throttle` 属性来避免这个问题。

:::info primary

`throtle` 属性支持两个值： `number` 和 `object`。 当通过 `number`时，它相当于 `{leading: xxx}`，控制骨架屏幕显示的节奏。 当然，您也可以通过传递 `{trailing: xxx}` 来控制骨架屏消失的节奏。

:::

```vue
<template>
    <div>
        <div>
            <label>切换 Loading</label>
            <ux-switch v-model="loading" />
        </div>
        <ux-skeleton :loading="loading" animated :throttle="500">
            <template #template>
                <ux-skeleton-item variant="image" />
                <div>
                    <ux-skeleton-item variant="h3" />
                    <div
                       >
                        <ux-skeleton-item variant="text" />
                        <ux-skeleton-item variant="text" />
                    </div>
                </div>
            </template>
            <template #default>
                <ux-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img :src="src" />
                    <div>
                        <span>demo卡片</span>
                        <div>
                            <span>{{ currentDate }}</span>
                            <ux-button is-text type="primary">操作按钮</ux-button>
                        </div>
                    </div>
                </ux-card>
            </template>
        </ux-skeleton>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo1.png`
const loading = ref(false)
const currentDate = '2024-06-22'
</script>

```

## Skeleton的初始渲染加载
当初始值为 `loading` 为 `true` 时，您可以设置 `throttle: {initVal: true, leading: xxx}` 来控制初始骨架屏的即时显示，而无需进行节流。

```vue
<template>
    <div>
        <div>
            <label>切换 Loading</label>
            <ux-switch v-model="loading" />
        </div>
        <ux-skeleton :loading="loading" animated :throttle="{ leading: 500, initVal: true }">
            <template #template>
                <ux-skeleton-item variant="image" />
                <div>
                    <ux-skeleton-item variant="h3" />
                    <div
                       >
                        <ux-skeleton-item variant="text" />
                        <ux-skeleton-item variant="text" />
                    </div>
                </div>
            </template>
            <template #default>
                <ux-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img :src="src" />
                    <div>
                        <span>demo卡片</span>
                        <div>
                            <span>{{ currentDate }}</span>
                            <ux-button is-text type="primary">操作按钮</ux-button>
                        </div>
                    </div>
                </ux-card>
            </template>
        </ux-skeleton>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo1.png`
const loading = ref(true)
const currentDate = '2024-06-22'
</script>

```

## Skeleton的切换显示/隐藏时避免渲染抖动
:::info primary

您可以设置 `throttle: {initVal: true, leading: xxx, trailing: xxx}`，以控制骨架效果的初始显示，并使切换加载状态时骨架效果的过渡更加平滑。

:::

有时，当加载状态切换显示或隐藏时，您可能希望业务组件的渲染更加平滑。 您可以设置 `throttle: {leading: xxx, trailing: xxx}` 来控制渲染抖动。

```vue
<template>
    <div>
        <div>
            <label>切换 Loading</label>
            <ux-switch v-model="loading" />
        </div>
        <ux-skeleton
           
            :loading="loading"
            animated
            :throttle="{ leading: 500, trailing: 500, initVal: true }">
            <template #template>
                <ux-skeleton-item variant="image" />
                <div>
                    <ux-skeleton-item variant="h3" />
                    <div
                       >
                        <ux-skeleton-item variant="text" />
                        <ux-skeleton-item variant="text" />
                    </div>
                </div>
            </template>
            <template #default>
                <ux-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img :src="src" />
                    <div>
                        <span>demo卡片</span>
                        <div>
                            <span>{{ currentDate }}</span>
                            <ux-button is-text type="primary">操作按钮</ux-button>
                        </div>
                    </div>
                </ux-card>
            </template>
        </ux-skeleton>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo1.png`
const loading = ref(false)
const currentDate = '2024-06-22'
</script>

```

