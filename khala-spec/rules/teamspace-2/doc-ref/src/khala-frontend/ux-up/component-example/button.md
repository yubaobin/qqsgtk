# Button 按钮
常用的操作按钮。

## Button的基础用法
 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
```vue
<template>
    <div>
        <div>
            <ux-button>默认按钮</ux-button>
            <ux-button type="primary">主要按钮</ux-button>
            <ux-button type="success">成功按钮</ux-button>
            <ux-button type="info">信息按钮</ux-button>
            <ux-button type="warning">警告按钮</ux-button>
            <ux-button type="danger">危险按钮</ux-button>
        </div>

        <div>
            <ux-button plain>朴素按钮</ux-button>
            <ux-button type="primary" plain>主要按钮</ux-button>
            <ux-button type="success" plain>成功按钮</ux-button>
            <ux-button type="info" plain>Info</ux-button>
            <ux-button type="warning" plain>警告按钮</ux-button>
            <ux-button type="danger" plain>危险按钮</ux-button>
        </div>

        <div>
            <ux-button round>圆角按钮</ux-button>
            <ux-button type="primary" round>主要按钮</ux-button>
            <ux-button type="success" round>成功按钮</ux-button>
            <ux-button type="info" round>信息按钮</ux-button>
            <ux-button type="warning" round>警告按钮</ux-button>
            <ux-button type="danger" round>危险按钮</ux-button>
        </div>

        <div>
            <ux-button :icon="Search" circle />
            <ux-button type="primary" :icon="Edit" circle />
            <ux-button type="success" :icon="Check" circle />
            <ux-button type="info" :icon="Message" circle />
            <ux-button type="warning" :icon="Star" circle />
            <ux-button type="danger" :icon="Delete" circle />
        </div>
    </div>
</template>

<script setup>
import { Check, Delete, Edit, Message, Search, Star } from '@ux-up/icons-vue'
</script>

```

## Button的禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
```vue
<template>
    <div>
        <div>
            <ux-button disabled>默认按钮</ux-button>
            <ux-button type="primary" disabled>主要按钮</ux-button>
            <ux-button type="success" disabled>成功按钮</ux-button>
            <ux-button type="info" disabled>信息按钮</ux-button>
            <ux-button type="warning" disabled>警告按钮</ux-button>
            <ux-button type="danger" disabled>危险按钮</ux-button>
        </div>

        <div>
            <ux-button plain disabled>Plain</ux-button>
            <ux-button type="primary" plain disabled>主要按钮</ux-button>
            <ux-button type="success" plain disabled>成功按钮</ux-button>
            <ux-button type="info" plain disabled>信息按钮</ux-button>
            <ux-button type="warning" plain disabled>警告按钮</ux-button>
            <ux-button type="danger" plain disabled>危险按钮</ux-button>
        </div>
    </div>
</template>

```

## Button的文字按钮
 没有边框的按钮, 会保留原来的 padding 样式, 使用 `is-text` 属性来定义按钮是否为文字按钮，它接受一个Boolean值。
```vue
<template>
    <div>
        <div>
            <div>
                <ux-button is-text>基础文字按钮</ux-button>
            </div>
            <ux-button v-for="button in buttons" :key="button.text" :type="button.type" is-text>
                {{ button.text }}
            </ux-button>
        </div>

        <div>
            <div>
                <ux-button is-text>有背景的文字按钮</ux-button>
            </div>
            <ux-button v-for="button in buttons" :key="button.text" :type="button.type" is-text is-bg>
                {{ button.text }}
            </ux-button>
        </div>

        <div>
            <div>
                <ux-button is-text>禁用时文字按钮</ux-button>
            </div>
            <ux-button v-for="button in buttons" :key="button.text" :type="button.type" is-text disabled>
                {{ button.text }}
            </ux-button>
        </div>
    </div>
</template>

<script setup>
const buttons = [
    { type: '', text: '默认按钮' },
    { type: 'primary', text: '主要按钮' },
    { type: 'success', text: '成功按钮' },
    { type: 'info', text: '信息按钮' },
    { type: 'warning', text: '警告按钮' },
    { type: 'danger', text: '危险按钮' }
]
</script>

```

## Button的链接按钮
 和文字按钮类似没有边框的按钮, 但会保留原来的 padding 样式, 使用 `is-link` 属性来定义按钮是否为文字按钮，它接受一个Boolean值。
```vue
<template>
    <div>
        <p>基础链接按钮</p>
        <div>
            <ux-button v-for="button in buttons" :key="button.text" :type="button.type" is-link>
                {{ button.text }}
            </ux-button>
        </div>

        <p>禁用时链接按钮</p>
        <div>
            <ux-button v-for="button in buttons" :key="button.text" :type="button.type" is-link disabled>
                {{ button.text }}
            </ux-button>
        </div>
    </div>
</template>

<script setup>
const buttons = [
    { type: '', text: '默认按钮' },
    { type: 'primary', text: '主要按钮' },
    { type: 'success', text: '成功按钮' },
    { type: 'info', text: '信息按钮' },
    { type: 'warning', text: '警告按钮' },
    { type: 'danger', text: '危险按钮' }
]
</script>

```

## Button的图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

 使用 `icon` 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加`<i>`标签来添加图标， 你也可以使用自定义图标。
```vue
<template>
    <div>
        <ux-button type="primary" :icon="Edit" />
        <ux-button type="primary" :icon="Share" />
        <ux-button type="primary">
            <template #icon>
                <Delete />
            </template>
        </ux-button>
        <ux-button type="primary" :icon="Search">搜索</ux-button>
        <ux-button type="primary" icon="huabanfuben">iconfont</ux-button>
        <ux-button type="primary">
            上传<ux-icon><Upload /></ux-icon
        ></ux-button>
    </div>
</template>

<script setup>
import { Delete, Edit, Search, Share, Upload } from '@ux-up/icons-vue'
</script>

```

## Button的按钮组
以按钮组的方式出现，常用于多项类似操作。

在 ^(1.1.4) 中，您可以使用 `direction` 属性。

 使用 `<ux-button-group>` 对多个按钮分组。
```vue
<template>
    <div>
        <ux-button-group>
            <ux-button type="primary" :icon="ArrowLeft">上一页</ux-button>
            <ux-button type="primary">
                下一页<ux-icon><ArrowRight /></ux-icon>
            </ux-button>
        </ux-button-group>

        <ux-button-group>
            <ux-button type="primary" :icon="Edit" />
            <ux-button type="primary" :icon="Share" />
            <ux-button type="primary" :icon="Delete" />
        </ux-button-group>

        <ux-button-group>
            <ux-button type="primary" :icon="Edit" round />
            <ux-button type="primary" :icon="Share" round />
            <ux-button type="primary" :icon="Delete" round />
        </ux-button-group>
    </div>
</template>

<script setup>
import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@ux-up/icons-vue'
</script>

```

## Button的加载状态按钮
点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::info primary

您可以使用 `loading` 插槽或 `loadingIcon`属性自定义您的loading图标

ps: `loading` 插槽优先级高于`loadingIcon`属性

:::

```vue
<template>
    <div>
        <ux-button type="primary" loading>加载中...</ux-button>
        <ux-button type="primary" :loading-icon="User" loading>加载中...</ux-button>
        <ux-button type="primary" loading>
            <template #loading>
                <div>
                                    </div>
            </template>
            加载中...
        </ux-button>
    </div>
</template>

<script setup>
import { User } from '@ux-up/icons-vue'
</script>
```

## Button的调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

 使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。
```vue
<template>
    <div>
        <div>
            <ux-button size="large">大号按钮</ux-button>
            <ux-button>默认按钮</ux-button>
            <ux-button size="small">小型按钮</ux-button>
            <ux-button size="mini">超小按钮</ux-button>
            <ux-button size="large" :icon="Search">查询</ux-button>
            <ux-button :icon="Search">查询</ux-button>
            <ux-button size="small" :icon="Search">查询</ux-button>
            <ux-button size="mini" :icon="Search">查询</ux-button>
        </div>
        <div>
            <ux-button size="large" round>大号按钮</ux-button>
            <ux-button round>大号按钮</ux-button>
            <ux-button size="small" round>小型按钮</ux-button>
            <ux-button size="mini" round>超小按钮</ux-button>
            <ux-button size="large" :icon="Search" round>查询</ux-button>
            <ux-button :icon="Search" round>查询</ux-button>
            <ux-button size="small" :icon="Search" round>查询</ux-button>
            <ux-button size="mini" :icon="Search" round>查询</ux-button>
        </div>
        <div>
            <ux-button :icon="Search" size="large" circle />
            <ux-button :icon="Search" circle />
            <ux-button :icon="Search" size="small" circle />
            <ux-button :icon="Search" size="mini" circle />
        </div>
    </div>
</template>

<script setup>
import { Search } from '@ux-up/icons-vue'
</script>

```

## Button的Tag
您可以自定义元素标签。例如，按钮，div，路由链接，nuxt链接。

```vue
<template>
    <div>
        <ux-button>button</ux-button>
        <ux-button tag="div" role="button" tabindex="0">div</ux-button>
        <ux-button
            type="primary"
            tag="a"
            href="http://10.18.96.24:8000/designportal/dashboard"
            target="_blank"
            rel="noopener noreferrer">
            a
        </ux-button>
    </div>
</template>

```

## Button的自定义颜色
您可以自定义按钮的颜色。

我们将自动计算按钮处于 hover 和 active 状态时的颜色。

```vue
<script setup>
import { isDark } from '~/composables/dark'
</script>

<template>
    <div>
        <ux-button color="#FFD7D9" :dark="isDark">默认按钮</ux-button>
        <ux-button color="#FFD7D9" :dark="isDark" plain>朴素按钮</ux-button>

        <ux-button color="#FFD7D9" :dark="isDark" disabled>Disabled</ux-button>
        <ux-button color="#FFD7D9" :dark="isDark" disabled plain> Disabled Plain </ux-button>
    </div>
</template>

```

