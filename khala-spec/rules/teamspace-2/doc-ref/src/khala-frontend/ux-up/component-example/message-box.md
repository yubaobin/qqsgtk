# MessageBox 消息弹框
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

:::info primary

从设计上来说，`UxMessageBox` 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 `ux-dialog`。

:::

## MessageBox的消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

 调用 `UxMessageBox.alert` 方法即可打开消息提示，它模拟了系统的 `alert`，无法通过按下 `ESC` 或点击框外关闭。 此例中接收了两个参数，`message` 和 `title`。 值得一提的是，窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。 若不确定浏览器是否支持 `Promise`，可自行引入第三方 `polyfill` 或像本例一样使用回调进行后续处理。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.alert('这是一段内容', '标题名称', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: '确定',
        callback: (action) => {
            UxMessage({
                type: 'info',
                message: `action: ${action}`
            })
        }
    })
}
</script>

```

## MessageBox的确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

 调用 `UxMessageBox.confirm` 方法以打开 confirm 框。它模拟了系统的 `confirm`。 `UxMessageBox` 组件也拥有极高的定制性，我们可以传入 `options` 作为第三个参数，它是一个字面量对象。 `type` 字段表明消息类型，可以为 `primary`, `success`，`error`，`info`和 `warning`。 需要注意的是，第二个参数 `title` 必须定义为 `String` 类型，如果是 `Object`，会被当做为 `options`使用。 在这里我们返回了一个 `Promise` 来处理后续响应。`primary` 已被添加到 ^(1.1.4)。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    })
        .then(() => {
            UxMessage({
                type: 'success',
                message: '删除成功'
            })
        })
        .catch(() => {
            UxMessage({
                type: 'info',
                message: '已取消删除'
            })
        })
}
</script>

```

## MessageBox的提交内容
当需要用户输入内容时，可以使用 `Prompt` 类型的消息框。

 调用 `UxMessageBox.prompt` 方法以打开 `prompt` 提示框。它模拟了系统的 `prompt`。 可以用 `inputPattern` 字段自己规定匹配模式， 使用 `inputValidator` 来指定验证方法，可以返回 `Boolean` 或 `String`。 返回 `false` 或 `String` 均表示校验未通过， 返回的字符串将用作 `inputErrorMessage`，用来提示用户错误原因。 此外，可以用 `inputPlaceholder` 字段来定义输入框的占位符。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
    })
        .then(({ value }) => {
            UxMessage({
                type: 'success',
                message: `你的邮箱是: ${value}`
            })
        })
        .catch(() => {
            UxMessage({
                type: 'info',
                message: '取消输入'
            })
        })
}
</script>

```

## MessageBox的使用 VNode
`message` 可以是 `VNode`。

```vue
<template>
    <div>
        <ux-button @click="open">正常的VNode</ux-button>
        <ux-button @click="open1">动态的VNode</ux-button>
    </div>
</template>

<script setup>
import { h, ref } from 'vue'
import { UxMessageBox, UxSwitch } from 'ux-up'

const open = () => {
    UxMessageBox({
        title: '消息',
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: #1890ff' }, 'VNode')])
    })
}

const open1 = () => {
    const checked = ref(false)
    UxMessageBox({
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

## MessageBox的自定义
可自定义配置不同内容。

 上面提到的三个方法都是对 `UxMessageBox` 方法的二次包装。 本例直接调用 `UxMessageBox` 方法，使用了 `showCancelButton` 字段，用于显示取消按钮。 另外可使用 `cancelButtonClass` 为其添加自定义样式，使用 `cancelButtonText` 来自定义取消按钮文本（`Confirm` 按钮也具有相同的字段，在文末的 `API` 说明中有完整的字段列表）。 此例还使用了 `beforeClose` 属性， 当 `beforeClose` 被赋值且被赋值为一个回调函数时，在消息弹框被关闭之前将会被调用，并且可以通过该方法来阻止弹框被关闭。 它是一个接收三个参数：`action`、`instance` 和`done` 的方法。 使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 `loading` 状态等；此时若需要关闭实例，可以调用 `done` 方法（若在 `beforeClose` 中没有调用 `done`，则弹框便不会关闭）。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { h } from 'vue'
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox({
        title: '消息',
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: #1890ff' }, 'VNode')]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmButtonLoading = true
                instance.confirmButtonText = '执行中...'
                setTimeout(() => {
                    done()
                    setTimeout(() => {
                        instance.confirmButtonLoading = false
                    }, 300)
                }, 3000)
            } else {
                done()
            }
        }
    }).then((action) => {
        UxMessage({
            type: 'info',
            message: `action: ${action}`
        })
    })
}
</script>

```

## MessageBox的使用 HTML 片段
`message` 支持传入 HTML 字符串来作为正文内容。

 将 `dangerouslyUseHTMLString` 属性设置为 `true`，`message` 属性就会被当作 HTML 片段处理。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
        dangerouslyUseHTMLString: true
    })
}
</script>

```

:::info danger

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::
## MessageBox的区分取消与关闭
有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。

 默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，`Promise` 的 `reject` 回调和 `callback` 回调的参数均为 `cancel`。 如果将`distinguishCancelAndClose`属性设置为 `true`，则上述两种行为的参数分别为 `cancel` 和 `close`。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '放弃修改'
    })
        .then(() => {
            UxMessage({
                type: 'info',
                message: '保存修改'
            })
        })
        .catch((action) => {
            UxMessage({
                type: 'info',
                message: action === 'cancel' ? '放弃保存并离开页面' : '停留在当前页面'
            })
        })
}
</script>

```

## MessageBox的内容居中
内容支持居中布局。

 将 `center` 属性设置为 `true` 可将内容居中显示。
```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
    })
        .then(() => {
            UxMessage({
                type: 'success',
                message: '删除成功'
            })
        })
        .catch(() => {
            UxMessage({
                type: 'info',
                message: '已取消删除'
            })
        })
}
</script>

```

## MessageBox的自定义图标
图标可以使用任意Vue 组件或 [渲染函数 (JSX)](https://cn.vuejs.org/guide/extras/render-function)来自定义。

```vue
<template>
    <ux-button @click="open">点击打开 Message Box</ux-button>
</template>

<script setup>
import { markRaw } from 'vue'
import { UxMessageBox } from 'ux-up'
import { Delete } from '@ux-up/icons-vue'

const open = () => {
    UxMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        type: 'warning',
        icon: markRaw(Delete)
    })
}
</script>

```

## MessageBox的可拖放
设置 `UxMessageBox` 可以拖拽。

 设置 `draggable` 属性为`true`来开启拖拽弹窗能力。 设置 `overflow`  为 `true` 可以让拖拽范围超出可视区。
```vue
<template>
    <div>
        <ux-button @click="open">打开可拖拽 Message Box</ux-button>
        <ux-button @click="open2"> 打开可拖拽 Message Boxx（设置overflow）</ux-button>
    </div>
</template>

<script setup>
import { UxMessage, UxMessageBox } from 'ux-up'

const open = () => {
    UxMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        draggable: true
    })
        .then(() => {
            UxMessage({
                type: 'success',
                message: '删除成功'
            })
        })
        .catch(() => {
            UxMessage({
                type: 'info',
                message: '已取消删除'
            })
        })
}

const open2 = () => {
    UxMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        draggable: true,
        overflow: true
    })
        .then(() => {
            UxMessage({
                type: 'success',
                message: '删除成功'
            })
        })
        .catch(() => {
            UxMessage({
                type: 'info',
                message: '已取消删除'
            })
        })
}
</script>

```

## MessageBox的全局方法
如果你完整引入了组件库，它会为 `app.config.globalProperties` 添加如下全局方法：`$msgbox`、 `$alert`、 `$confirm` 和 `$prompt`。 因此在 Vue 实例中可以采用本页面中的方式来调用`MessageBox`。 参数如下：

- `$msgbox(options)`
- `$alert(message, title, options)` 或 `$alert(message, options)`
- `$confirm(message, title, options)` 或 `$confirm(message, options)`
- `$prompt(message, title, options)` 或 `$prompt(message, options)`
## MessageBox的应用程序上下文继承
现在 `UxMessageBox` 接受构造器的 `context` 作为第二个(如果你正在使用消息框变量的话) 参数，这个参数允许你将当前应用的上下文注入到消息中，这将允许你继承应用程序的所有属性。

```ts
import { getCurrentInstance } from 'vue'
import { UxMessageBox } from 'ux-up'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
// 你可以像这样传递参数：
UxMessageBox({}, appContext)
// 或者正在使用不同的调用方式
UxMessageBox.alert('Hello world!', 'Title', {}, appContext)
```
## MessageBox的单独引用
如果单独引入 `MessageBox`：

```ts
import { UxMessageBox } from 'ux-up'
```

那么对应于上述四个全局方法的调用方法依次为：`UxMessageBox`、`UxMessageBox.alert`、`UxMessageBox.confirm` 和 `UxMessageBox.prompt`。 参数同上所述。
