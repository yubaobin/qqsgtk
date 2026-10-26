# Notification 通知
悬浮出现在页面角落，显示全局的通知提醒消息。

## Notification的基础用法
 ux-ui 注册了 `$notify` 方法并且它接受一个 `Object` 作为其参数。 在最简单的情况下，你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。 默认情况下，通知在**4500**毫秒 后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 `0`，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。
```vue
<template>
    <ux-button @click="open1">可自动关闭</ux-button>
    <ux-button @click="open2">不会自动关闭</ux-button>
</template>

<script setup>
import { h } from 'vue'
import { UxNotification } from 'ux-up'

const open1 = () => {
    UxNotification({
        title: '标题名称',
        message: h(
            'i',
            { style: 'color: #1890ff' },
            '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
        )
    })
}

const open2 = () => {
    UxNotification({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
    })
}
</script>

```

## Notification的不同类型的通知
我们提供了四种不同类型的提醒框：`success`、`warning`、`info` 和`error`。

 ux-ui 为 `UxNotification` 组件准备了四种通知类型：`primary`, `success`, `warning`, `info`, `error`。 他们可以设置 `type` 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 `UxNotification` 的各种 type 注册了单独的方法，可以在不传入 `type` 字段的情况下像 `open3` 和 `open4` 那样直接调用。`primary` 已被添加到 ^(1.1.4)。
```vue
<template>
    <ux-button @click="open1">主要</ux-button>
    <ux-button @click="open2">成功</ux-button>
    <ux-button @click="open3">警告</ux-button>
    <ux-button @click="open4">消息</ux-button>
    <ux-button @click="open5">错误</ux-button>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const open1 = () => {
    UxNotification({
        title: '主要',
        message: '这是一条信息',
        type: 'primary'
    })
}

const open2 = () => {
    UxNotification({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
    })
}

const open3 = () => {
    UxNotification({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
    })
}

const open4 = () => {
    UxNotification({
        title: '消息',
        message: '这是一条消息的提示消息',
        type: 'info'
    })
}

const open5 = () => {
    UxNotification({
        title: '错误',
        message: '这是一条错误的提示消息',
        type: 'error'
    })
}
</script>

```

## Notification的自定义消息弹出的位置
可以让 Notification 从屏幕四角中的任意一角弹出

 使用 `position` 属性设置 `UxNotification` 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。
```vue
<template>
    <ux-button @click="open1">右上角</ux-button>
    <ux-button @click="open2">右下角</ux-button>
    <ux-button @click="open3">左下角</ux-button>
    <ux-button @click="open4">左上角</ux-button>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const open1 = () => {
    UxNotification({
        title: '自定义位置',
        message: '右上角弹出的消息'
    })
}

const open2 = () => {
    UxNotification({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right'
    })
}

const open3 = () => {
    UxNotification({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left'
    })
}

const open4 = () => {
    UxNotification({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left'
    })
}
</script>

```

## Notification的有位置偏移的通知栏
能够设置偏移量来使 `UxNotification` 偏移默认位置。

 `UxNotification` 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 `UxNotification` 实例应当具有一个相同的偏移量。
```vue
<template>
    <ux-button @click="open">偏移的消息</ux-button>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const open = () => {
    UxNotification.success({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100
    })
}
</script>

```

## Notification的使用 HTML 片段作为正文内容
`message` 支持传入 HTML 字符串来作为正文内容。

 将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 属性就会被当作 HTML 片段处理。
```vue
<template>
    <ux-button @click="open">使用 HTML 片段</ux-button>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const open = () => {
    UxNotification({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
    })
}
</script>

```

:::info danger

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::
## Notification的使用 VNode
`message` 可以是 VNode。

在之后， `message` 支持返回值为 VNode的函数。

```vue
<template>
    <ux-button @click="open">正常的VNode</ux-button>
    <ux-button @click="open1">动态的VNode</ux-button>
</template>

<script setup>
import { h, ref } from 'vue'
import { UxNotification, UxSwitch } from 'ux-up'

const open = () => {
    UxNotification({
        title: '消息',
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: #1890ff' }, 'VNode')])
    })
}

const open1 = () => {
    const checked = ref(false)
    UxNotification({
        title: '动态VNode',
        message: () =>
            h(UxSwitch, {
                modelValue: checked.value,
                'onUpdate:modelValue': (val) => {
                    checked.value = val
                }
            })
    })
}
</script>

```

## Notification的隐藏关闭按钮
通知的关闭按钮可以被设置为隐藏。

 将 ` showClose ` 属性设置为 `false` 即可隐藏关闭按钮。
```vue
<template>
    <ux-button @click="open">隐藏关闭按钮</ux-button>
</template>

<script setup>
import { UxNotification } from 'ux-up'

const open = () => {
    UxNotification.success({
        title: '提示',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
    })
}
</script>

```

## Notification的全局方法
ux-ui 为 `app.config.globalProperties` 添加了全局方法 `$notify`。 因此在 Vue instance 中可以采用本页面中的方式调用 `UxNotification`。
## Notification的单独引用
```javascript
import { UxNotification } from 'ux-up'
import { CloseBold } from '@ux-up/icons-vue'

UxNotification({
  title: '标题',
  message: '这是信息',
  closeIcon: CloseBold
})
```

你可以在对应的处理函数内调用 `UxNotification(options)` 来呼出通知栏。 我们也提前定义了多个 type 的单独调用方法，如 `UxNotification.success(options)`。 当你需要关闭页面上所有的通知栏的时候，可以调用 `UxNotification.closeAll()` 来关闭所有的实例。在 ^(1.1.5) 版本中，你可以通过调用 `UxNotification.updateOffsets(position)` 手动更新所有通知实例在特定方向上的偏移量。
## Notification的应用程序上下文继承
现在 `UxNotification` 接受一条 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 `UxNotification` 中，这将允许你继承应用程序的所有属性。

你可以像这样使用它：

:::info primary

如果您全局注册了 `UxNotification` 组件，它将自动继承应用的上下文环境。

:::

```ts
import { getCurrentInstance } from 'vue'
import { UxNotification } from 'ux-up'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
UxNotification({}, appContext)
```
