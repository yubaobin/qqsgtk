# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## Tooltip的基础用法
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

 使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果。 `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
```vue
<template>
    <div>
        <div>
            <ux-tooltip effect="dark" content="Top Left 提示文字" placement="top-start">
                <ux-button>上左</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Top Center 提示文字" placement="top">
                <ux-button>上边</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Top Right 提示文字" placement="top-end">
                <ux-button>上右</ux-button>
            </ux-tooltip>
        </div>
        <div>
            <ux-tooltip effect="dark" content="Left Top 提示文字" placement="left-start">
                <ux-button>左上</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Right Top 提示文字" placement="right-start">
                <ux-button>右下</ux-button>
            </ux-tooltip>
        </div>
        <div>
            <ux-tooltip effect="dark" content="Left Center 提示文字" placement="left">
                <ux-button>左边</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Right Center 提示文字" placement="right">
                <ux-button>右边</ux-button>
            </ux-tooltip>
        </div>
        <div>
            <ux-tooltip effect="dark" content="Left Bottom 提示文字" placement="left-end">
                <ux-button>左下</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Right Bottom 提示文字" placement="right-end">
                <ux-button>右下</ux-button>
            </ux-tooltip>
        </div>
        <div>
            <ux-tooltip effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                <ux-button>下左</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Bottom Center 提示文字" placement="bottom">
                <ux-button>下边</ux-button>
            </ux-tooltip>
            <ux-tooltip effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                <ux-button>下右</ux-button>
            </ux-tooltip>
        </div>
    </div>
</template>
```

## Tooltip的主题
`ux-tooltip` 组件内置了两个主题：`dark`和`light`。

:::info primary

要使用自定义主题，您必须知道您的工具提示在哪里渲染， 如果您的工具提示被呈现为根元素，您将需要全局设置css规则。

建议您使用自定义主题并同时显示箭头时不使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素， 弹出箭头的样式需要单独设置， 当它到渐变背景颜色时，会看起来很奇怪。

:::

 通过设置 `effect` 来修改主题，默认值为 `dark`.
```vue
<template>
    <div>
        <ux-tooltip content="Top center" placement="top">
            <ux-button>Dark</ux-button>
        </ux-tooltip>
        <ux-tooltip content="Bottom center" placement="bottom" effect="light">
            <ux-button>Light</ux-button>
        </ux-tooltip>
        <ux-tooltip content="自定义主题" effect="customized" :visible="true" popper-class="demo-tooltip-theme">
            <ux-button>自定义</ux-button>
        </ux-tooltip>
    </div>
</template>
```

## Tooltip的更多内容的文字提示
展示多行文本或者是设置文本内容的格式

 用具名 slot `content`，替代`tooltip`中的`content`属性。
```vue
<template>
    <ux-tooltip placement="top">
        <template #content>多行信息<br />第二行信息</template>
        <ux-button>更多内容</ux-button>
    </ux-tooltip>
</template>

```

## Tooltip的高级扩展
除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。

如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求， 它接受一个`Boolean`，设置为`true`即可。

```vue
<template>
    <ux-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
        <ux-button @click="disabled = !disabled">点击{{ disabled ? '开启' : '关闭' }} tooltip 功能 </ux-button>
    </ux-tooltip>
</template>

<script setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>

```

:::info primary

`ux-tooltip` 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

`ux-tooltip` 内不支持 disabled form 元素，参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events/mouseenter)， 请在 disabled form 元素外层添加一层包裹元素。

:::
## Tooltip的显示 HTML 内容
内容属性可以设置为 HTML 字符串。

:::info danger

`content` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `raw-content` 打开的情况下，请确保 `content` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `content` 属性。

:::

```vue
<template>
    <ux-tooltip content="<strong>这是 <i>HTML</i> 片段</strong>" raw-content>
        <ux-button>html内容</ux-button>
    </ux-tooltip>
</template>

```

## Tooltip的虚拟触发
把 `ux-tooltip` 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。

:::info primary

需要注意的是，虚拟触发的 `ux-tooltip` 是受控组件，因此你必须自己去控制 `ux-tooltip` 是否显示，**你将无法**通过点击空白处来关闭 tooltip。

:::

```vue
<template>
    <ux-tooltip
        v-model:visible="visible"
        content="虚拟触发内容"
        placement="bottom"
        effect="light"
        trigger="click"
        virtual-triggering
        :virtual-ref="triggerRef" />
    <ux-button @click="visible = !visible">虚拟触发</ux-button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)
const triggerRef = ref({
    getBoundingClientRect() {
        return position.value
    }
})

const position = ref({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
})

const mousemoveHandler = (e) => {
    position.value = DOMRect.fromRect({
        width: 0,
        height: 0,
        x: e.clientX,
        y: e.clientY
    })
}
onMounted(() => {
    document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
    document.removeEventListener('mousemove', mousemoveHandler)
})
</script>

```

## Tooltip的单例模式
`ux-tooltip` 可以作为单例，也就是是说你可以同时有多个触发同一个 tooltip 的触发元素，这个功能是在 `虚拟触发` 的基础上开发的。

```vue
<template>
    <div>
        <div>
            <ux-button
                v-for="i in 3"
                :key="i"
                @mouseover="(e) => (buttonRef = e.currentTarget)"
                @click="visible = !visible">
                点击打开
            </ux-button>
        </div>
        <ux-tooltip
            ref="tooltipRef"
            :visible="visible"
            :popper-options="{
                modifiers: [
                    {
                        name: 'computeStyles',
                        options: {
                            adaptive: false,
                            enabled: false
                        }
                    }
                ]
            }"
            :virtual-ref="buttonRef"
            virtual-triggering
            popper-class="demo-tooltip-singleton-tooltip">
            <template #content>
                <span>同一个tooltip</span>
            </template>
        </ux-tooltip>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const buttonRef = ref()
const tooltipRef = ref()

const visible = ref(false)
</script>
```

## Tooltip的受控模式
`ux-tooltip` 可以通过父组件使用 `:visible` 来控制它的显示与关闭。

```vue
<template>
    <ux-tooltip :visible="visible">
        <template #content>
            <span>受控模式内容</span>
        </template>
        <ux-button @mouseenter="visible = true" @mouseleave="visible = false">受控模式</ux-button>
    </ux-tooltip>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

```

## Tooltip的自定义动画
`ux-tooltip` 可以自定义动画，您可以使用 `transition` 设置所需的动画效果。

:::info primary

过渡效果的更多信息可以在 [Vue 过渡效果](https://cn.vuejs.org/guide/built-ins/transition#css-based-transitions) 中找到。

:::

```vue
<template>
    <ux-tooltip content="自定义动画" transition="slide-fade">
        <ux-button>激活</ux-button>
    </ux-tooltip>
</template>

<script setup></script>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(120px);
    opacity: 0;
}
</style>

```

## Tooltip的使用 `append-to`
您必须等待 DOM 加载后才能使用 `targetElement`.

```vue
<template>
    <ux-tooltip :append-to="targetElement" trigger="click" content="附加到 .target" placement="top">
        <ux-button>点击打开tooltip</ux-button>
    </ux-tooltip>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const targetElement = ref('')

onMounted(() => {
    targetElement.value = '.target'
})
</script>

```

