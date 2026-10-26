# Space 间距
间隔。

虽然我们拥有 [Divider 组件](/zh-CN/component/divider)，但很多时候我们需要不是一个被 [Divider 组件](/zh-CN/component/divider) 分割开的页面结构，因此我们会重复的使用很多的 [Divider 组件](/zh-CN/component/divider)，这在我们的开发效率上造成了一定的困扰。 **间距组件**就是为了解决这种困扰应运而生的。

## Space的基础用法
最基础的用法，通过这个组件来给组件之间提供统一的间距。

 通过间距组件来给多个组件之间提供间距
```vue
<template>
    <ux-space wrap>
        <ux-card v-for="i in 3" :key="i">
            <template #header>
                <div>
                    <span>Card name</span>
                    <ux-button text>Operation button</ux-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o">
                {{ 'List item ' + o }}
            </div>
        </ux-card>
    </ux-space>
</template>

```

## Space的垂直布局
使用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

 我们也提供垂直布局方式。
```vue
<template>
    <ux-space direction="vertical">
        <ux-card v-for="i in 2" :key="i">
            <template #header>
                <div>
                    <span>Card name</span>
                    <ux-button text>Operation button</ux-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o">
                {{ 'List item ' + o }}
            </div>
        </ux-card>
    </ux-space>
</template>

```

## Space的控制间距的大小
通过调整 `size` 的值来控制间距的大小

使用内置的 `small`、`default`、`large` 来设置间距大小，分别对应 `8px`、`12px` 和 `16px` 的间距。 默认的间距大小为 `small`，也就是 `8px`。

您也可以通过自定义的 size 来控制大小， 参见下一个部分。

```vue
<template>
    <ux-space direction="vertical" alignment="start" :size="30">
        <ux-radio-group v-model="size">
            <ux-radio value="large">Large</ux-radio>
            <ux-radio value="default">Default</ux-radio>
            <ux-radio value="small">Small</ux-radio>
        </ux-radio-group>

        <ux-space wrap :size="size">
            <ux-card v-for="i in 3" :key="i">
                <template #header>
                    <div>
                        <span>Card name</span>
                        <ux-button text>Operation button</ux-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o">
                    {{ 'List item ' + o }}
                </div>
            </ux-card>
        </ux-space>
    </ux-space>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('default')
</script>

```

## Space的自定义 Size
很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。

```vue
<template>
    <ux-slider v-model="size" />
    <ux-space wrap :size="size">
        <ux-card v-for="i in 2" :key="i">
            <template #header>
                <div>
                    <span>Card name</span>
                    <ux-button text>Operation button</ux-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o">
                {{ 'List item ' + o }}
            </div>
        </ux-card>
    </ux-space>
</template>

<script setup>
import { ref } from 'vue'

const size = ref(20)
</script>

```

:::info primary

不要让 `UxSpace` 与使用依赖父元素百分比宽度（或高度）的元素一起使用（例如 `UxSlider`），这样会造成光标不同步。

:::
## Space的自动换行
在 **水平 (horizontal) ** 模式下，通过使用 `wrap`（**布尔类型**）来控制自动换行行为。

 利用 `wrap` 属性控制换行
```vue
<template>
    <ux-space wrap>
        <div v-for="i in 20" :key="i">
            <ux-button text> Text button </ux-button>
        </div>
    </ux-space>
</template>

```

## Space的行间分隔符
有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。
## Space的字母数字类型分隔符

```vue
<template>
    <ux-space :size="size" spacer="|">
        <div v-for="i in 2" :key="i">
            <ux-button> button {{ i }} </ux-button>
        </div>
    </ux-space>
</template>

<script setup>
import { ref } from 'vue'

const size = ref(10)
</script>

```

## Space的分隔符还可以是 VNode 类型

```vue
<template>
    <ux-space :size="size" :spacer="spacer">
        <div v-for="i in 2" :key="i">
            <ux-button> button {{ i }} </ux-button>
        </div>
    </ux-space>
</template>

<script setup>
import { h, ref } from 'vue'
import { UxDivider } from 'ux-up'

const size = ref(10)
const spacer = h(UxDivider, { direction: 'vertical' })
</script>

```

## Space的对齐方式
设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 [align-items ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)一致。

 使用 `alignment` 属性来对齐
```vue
<template>
    <div>
        <ux-space>
            string
            <ux-button> button </ux-button>
            <ux-card>
                <template #header> header </template>
                body
            </ux-card>
        </ux-space>
    </div>
    <div>
        <ux-space alignment="flex-start">
            string
            <ux-button> button </ux-button>
            <ux-card>
                <template #header> header </template>
                body
            </ux-card>
        </ux-space>
    </div>
    <div>
        <ux-space alignment="flex-end">
            string
            <ux-button> button </ux-button>
            <ux-card>
                <template #header> header </template>
                body
            </ux-card>
        </ux-space>
    </div>
</template>
```

## Space的填充容器
通过 `fill`**（布尔类型）**参数，您可以控制子节点是否自动填充容器。

下面的例子中，当设置为 `fill` 时，子节点的宽度会自动适配容器的宽度。

 用 fill 属性让子节点自动填充容器
```vue
<template>
    <div>
        <div>fill: <ux-switch v-model="fill" /></div>
        <ux-space :fill="fill" wrap>
            <ux-card v-for="i in 3" :key="i">
                <template #header>
                    <div>
                        <span>Card name</span>
                        <ux-button text>Operation button</ux-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o">
                    {{ 'List item ' + o }}
                </div>
            </ux-card>
        </ux-space>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fill = ref(true)
</script>

```

也可以使用 `fillRatio` 参数，自定义填充的比例， 默认值为 `100`，代表基于父容器宽度的 ` 100%` 进行填充

需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子

 用 fillRatio 自定义填充比例
```vue
<template>
    <div>
        <div>
            direction:
            <ux-radio v-model="direction" value="horizontal">horizontal</ux-radio>
            <ux-radio v-model="direction" value="vertical">vertical</ux-radio>
        </div>
        <div>fillRatio:<ux-slider v-model="fillRatio" /></div>
        <ux-space fill wrap :fill-ratio="fillRatio" :direction="direction">
            <ux-card v-for="i in 5" :key="i">
                <template #header>
                    <div>
                        <span>Card name</span>
                        <ux-button text>Operation button</ux-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o">
                    {{ 'List item ' + o }}
                </div>
            </ux-card>
        </ux-space>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>

```

