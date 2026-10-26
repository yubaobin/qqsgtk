# Message 消息提示
常用于主动操作后的反馈提示。 与 `ux-notification` 的区别是后者更多用于系统级通知的被动提醒。

## Message的基础用法
从顶部出现，3 秒后自动消失。

 `UxMessage` 在配置上与 `ux-notification` 非常类似，所以部分 `options` 在此不做详尽解释。 文末有 `options` 列表，可以结合 `ux-notification` 的文档理解它们。 `ux-ui` 注册了一个全局的 `$message`方法用于调用。 `UxMessage` 可以接收一个字符串或一个 `VNode` 作为参数，它会被显示为正文内容。
```vue
<template>
    <ux-button @click="open">打开消息提示</ux-button>
    <ux-button @click="openVn">VNode</ux-button>
</template>

<script setup>
import { h } from 'vue'
import { UxMessage } from 'ux-up'

const open = () => {
    UxMessage('这是一条消息提示')
}

const openVn = () => {
    UxMessage({
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: #1890ff' }, 'VNode')])
    })
}
</script>

```

## Message的不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

 当需要自定义更多属性时，`UxMessage` 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为 `info`。设置 `plian` 属性设置朴素样式。 此时正文内容以 `message` 的值传入。 同时，我们也为 `UxMessage` 的各种 `type` 注册了方法，可以在不传入 `type` 字段的情况下像 `open4` 那样直接调用。`primary` 已被添加到 ^(1.1.4)。
```vue
<template>
    <div>
        <div>
            <div>默认</div>
            <div>
                <ux-button @click="open1()">主色</ux-button>
                <ux-button @click="open2()">成功</ux-button>
                <ux-button @click="open3()">警告</ux-button>
                <ux-button @click="open4()">消息</ux-button>
                <ux-button @click="open5()">错误</ux-button>
            </div>
        </div>
        <div>
            <div>朴素</div>
            <div>
                <ux-button @click="open1(true)">主色</ux-button>
                <ux-button @click="open2(true)">成功</ux-button>
                <ux-button @click="open3(true)">警告</ux-button>
                <ux-button @click="open4(true)">消息</ux-button>
                <ux-button @click="open5(true)">错误</ux-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const open1 = (plain) => {
    UxMessage.primary({
        message: '提示，这是一条消息',
        plain
    })
}
const open2 = (plain) => {
    UxMessage({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        plain
    })
}
const open3 = (plain) => {
    UxMessage({
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        plain
    })
}

const open4 = (plain) => {
    UxMessage({
        message: '这是一条消息',
        plain
    })
}

const open5 = (plain) => {
    UxMessage.error({ message: '错了哦，这是一条错误消息', plain })
}
</script>

```

## Message的可关闭的消息提示
可以添加关闭按钮。

 默认的 `UxMessage` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true` 此外，和 `ux-notification` 一样，`UxMessage` 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。
```vue
<template>
    <ux-button :plain="true" @click="open1">主要</ux-button>
    <ux-button :plain="true" @click="open2">信息</ux-button>
    <ux-button :plain="true" @click="open3">成功</ux-button>
    <ux-button :plain="true" @click="open4">告警</ux-button>
    <ux-button :plain="true" @click="open5">错误</ux-button>
    <ux-button :plain="true" @click="open6">不会自动关闭</ux-button>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const open1 = () => {
    UxMessage({
        showClose: true,
        message: '这是一条主要消息',
        type: 'primary'
    })
}

const open2 = () => {
    UxMessage({
        showClose: true,
        message: '提示，这是一条消息'
    })
}
const open3 = () => {
    UxMessage({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
    })
}
const open4 = () => {
    UxMessage({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
    })
}
const open5 = () => {
    UxMessage({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
    })
}
const open6 = () => {
    UxMessage({
        showClose: true,
        message: '哎呀，这是一条不会自动关闭的消息',
        duration: 0
    })
}
</script>

```

## Message的使用 HTML 片段
`message` 还支持使用 `HTML` 字符串作为正文内容。

 将`dangerouslyUseHTMLString`属性设置为 `true`,`message` 就会被当作 HTML 片段处理。
```vue
<template>
    <ux-button :plain="true" @click="openHTML">使用 HTML 片段</ux-button>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const openHTML = () => {
    UxMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
    })
}
</script>

```

:::info danger

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::
## Message的分组消息合并
合并相同内容的消息。

 设置 `grouping` 为 `true`，内容相同的 `message` 将被合并。
```vue
<template>
    <ux-button :plain="true" @click="open">打开消息提示</ux-button>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const open = () => {
    UxMessage({
        message: '这是一条消息提示',
        grouping: true,
        type: 'success'
    })
}
</script>

```

## Message的全局方法
ux-ui 为 `app.config.globalProperties` 添加了全局方法 `$message`。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 `Message`
## Message的单独引用
```ts
import { UxMessage } from 'ux-up'
```

此时调用方法为 `UxMessage(options)`。 我们也为每个 type 定义了各自的方法，如 `UxMessage.success(options)`。 并且可以调用 `UxMessage.closeAll()` 手动关闭所有实例。
## Message的应用程序上下文继承
`UxMessage` 接受 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 `UxMessage` 中，这将允许你继承应用程序的所有属性。

:::info primary

如果您全局注册了 UxMessage 组件，它将自动继承应用的上下文环境。

:::

```ts
import { getCurrentInstance } from 'vue'
import { UxMessage } from 'ux-up'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
UxMessage({}, appContext)
```
