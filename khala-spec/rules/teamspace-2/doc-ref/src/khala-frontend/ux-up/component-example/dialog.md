# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

:::info primary

在 Vue 3 之后的版本 v-model 可以用于任何一个组件，`visible.sync` 已被移除，请使用 `v-model="visibilityBinding"` 来控制抽屉组件的显示和隐藏状态。

:::

:::info primary

建议将滚动区域放置在一个挂载的 vue 节点，如 `<div id="app" />` 下，并对 body 使用 `overflow: hidden` 样式。

:::

## Dialog的基础用法
`ux-dialog` 弹出一个对话框，适合需要定制性更大的场景。

 需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 `ux-dialog`。 `ux-dialog` 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。
```vue
<template>
    <div>
        <ux-button type="primary" @click="dialogVisible = true">点击打开 Dialog</ux-button>

        <ux-dialog v-model="dialogVisible" title="提示" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <template #footer>
                <span>
                    <ux-button @click="dialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
                </span>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessageBox } from 'ux-up'

const dialogVisible = ref(false)

const handleClose = (done) => {
    UxMessageBox.confirm('确认关闭?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
</script>

```

:::info primary

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名 slot 里添加了用于关闭 `ux-dialog` 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::
## Dialog的自定义内容
`ux-dialog` 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 表格 和 表单 组件的两个样例。

```vue
<template>
    <div>
        <!-- 表格 -->
        <ux-button type="primary" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</ux-button>

        <ux-dialog v-model="dialogTableVisible" title="收货地址">
            <ux-table :data="gridData">
                <ux-table-column type="index" label="序号" align="center" width="60" />
                <ux-table-column prop="pName" label="项目名称" />
                <ux-table-column prop="dName" label="部门" />
                <ux-table-column prop="contact" label="联系人" />
                <ux-table-column prop="photo" label="联系手机" />
                <ux-table-column prop="date" label="日期" />
                <ux-table-column prop="status" label="状态">
                    <template #default="{ row }">
                        <ux-button :type="statusMap[row.status].color" is-link>
                                                    </ux-button>
                        {{ statusMap[row.status].text }}
                    </template>
                </ux-table-column>
            </ux-table>
        </ux-dialog>

        <!-- 表单 -->
        <ux-button type="primary" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</ux-button>

        <ux-dialog v-model="dialogFormVisible" title="收货地址" width="500px">
            <ux-form :model="form">
                <ux-form-item label="活动名称" :label-width="formLabelWidth">
                    <ux-input v-model="form.name" autocomplete="off" />
                </ux-form-item>
                <ux-form-item label="活动区域" :label-width="formLabelWidth">
                    <ux-select v-model="form.region" placeholder="请选择活动区域">
                        <ux-option label="区域一" value="shanghai" />
                        <ux-option label="区域二" value="beijing" />
                    </ux-select>
                </ux-form-item>
            </ux-form>
            <template #footer>
                <div>
                    <ux-button @click="dialogFormVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="dialogFormVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '90px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const gridData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>

```

## Dialog的自定义头部
`header` 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 `title` 属性，或使用 `titleId` 插槽属性来指定哪些元素应该读取为对话框标题。

```vue
<template>
    <div>
        <ux-button type="primary" @click="visible = true">打开自定义头部</ux-button>

        <ux-dialog v-model="visible" :show-close="false" width="500">
            <template #header="{ close, titleId, titleClass }">
                <div>
                    <h4 :id="titleId" :class="titleClass">这是一个自定义头部</h4>
                    <ux-button type="danger" @click="close">
                        <ux-icon><CircleCloseFilled /></ux-icon>
                        关闭
                    </ux-button>
                </div>
            </template>
            弹窗内容
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@ux-up/icons-vue'

const visible = ref(false)
</script>

```

## Dialog的嵌套的 
如果需要在一个 `ux-dialog` 内部嵌套另一个 `ux-dialog`，需要使用 `append-to-body` 属性。

 正常情况下，我们不建议使用嵌套的 `ux-dialog`，如果需要在页面上同时显示多个 `ux-dialog`，可以将它们平级放置。对于确实需要嵌套 `ux-dialog` 的场景，我们提供了`append-to-body`属性。将内层 `ux-dialog` 的该属性设置为 `true`，它就会插入至 `body` 元素上，从而保证内外层 `ux-dialog` 和遮罩层级关系的正确。
```vue
<template>
    <ux-button type="primary" @click="outerVisible = true">点击打开外层 Dialog</ux-button>

    <ux-dialog v-model="outerVisible" title="外层 Dialog" width="800">
        <span>这是外层 Dialog</span>
        <ux-dialog v-model="innerVisible" width="500" title="内层 Dialog" append-to-body>
            <span>这是内层 Dialog</span>
        </ux-dialog>
        <template #footer>
            <div>
                <ux-button @click="outerVisible = false">取 消</ux-button>
                <ux-button type="primary" @click="innerVisible = true">打开内层 Dialog</ux-button>
            </div>
        </template>
    </ux-dialog>
</template>

<script setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>

```

## Dialog的居中布局
标题和底部可水平居中。

 将`center`设置为`true`即可使标题和底部居中。 `center`仅影响标题和底部区域。 `ux-dialog` 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。
```vue
<template>
    <div>
        <ux-button type="primary" @click="centerDialogVisible = true">点击打开弹窗</ux-button>

        <ux-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
            <span>需要注意的是内容是默认不居中的</span>
            <template #footer>
                <div>
                    <ux-button @click="centerDialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="centerDialogVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>

```

:::info primary

`ux-dialog` 的内容是懒渲染的——在被第一次打开之前，传入的默认 slot 不会被立即渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::
## Dialog的居中对话框
从屏幕中心打开对话框。

 设置 `align-center` 为 `true` 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以`top`属性将不起作用。
```vue
<template>
    <div>
        <ux-button type="primary" @click="centerDialogVisible = true">点击打开弹窗</ux-button>

        <ux-dialog v-model="centerDialogVisible" title="Warning" width="500" align-center>
            <span>从屏幕中间显示弹窗</span>
            <template #footer>
                <div>
                    <ux-button @click="centerDialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="centerDialogVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>

```

## Dialog的关闭时销毁
启用此功能时，默认栏位下的内容将使用 `v-if` 指令销毁。 当出现性能问题时，可以启用此功能。

 需要注意的是，当这个属性被启用时，在 `transition.beforeEnter` 事件卸载前，除了 `overlay`、`header (可选)`与`footer(可选)`，`ux-dialog` 内不会有其它任何其它的 DOM 节点存在。
```vue
<template>
    <div>
        <ux-button type="primary" @click="centerDialogVisible = true">点击打开弹窗</ux-button>

        <ux-dialog v-model="centerDialogVisible" title="Notice" width="500" destroy-on-close center>
            <span>注意：弹窗打开前，弹窗的内容不会渲染</span>
            <div>
                <strong>额外的内容</strong>
            </div>
            <template #footer>
                <div>
                    <ux-button @click="centerDialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="centerDialogVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>

```

## Dialog的可拖拽对话框
试着拖动一下头部部分吧。

 设置 `draggable` 属性为`true` 可以实现拖拽， 设置 `overflow`  为 `true` 可以让拖拽范围超出可视区。
```vue
<template>
    <div>
        <ux-button type="primary" @click="dialogVisible = true">打开可拖拽的弹窗</ux-button>

        <ux-dialog v-model="dialogVisible" title="Tips" width="500" draggable>
            <span>这是一个可拖拽的弹窗</span>
            <template #footer>
                <div>
                    <ux-button @click="dialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>

        <ux-button type="primary" @click="dialogOverflowVisible = true">
            打开可拖拽的弹窗(设置了overflow)
        </ux-button>

        <ux-dialog v-model="dialogOverflowVisible" title="Tips" width="500" draggable overflow>
            <span>这是一个设置了overflow可拖拽的弹窗</span>
            <template #footer>
                <div>
                    <ux-button @click="dialogOverflowVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="dialogOverflowVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogOverflowVisible = ref(false)
</script>

```

:::info primary

当 `modal` 的值为 false 时，请一定要确保 `append-to-body` 属性为 **true**，由于 `Dialog` 使用 `position: relative` 定位，当外层的遮罩层被移除时，`Dialog` 则会根据当前 DOM 上的祖先节点来定位，因此可能造成定位问题。

:::
## Dialog的全屏
设置 `fullscreen` 打开全屏弹窗

```vue
<template>
    <ux-button plain @click="dialogVisible = true">点击打开全屏弹窗</ux-button>

    <ux-dialog v-model="dialogVisible" fullscreen>
        <span>这是一个全屏弹窗</span>
        <template #footer>
            <div>
                <ux-button @click="dialogVisible = false">取 消</ux-button>
                <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
            </div>
        </template>
    </ux-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
```

:::info primary

如果设置 `fullscreen` 为 `true`, `width` `top` `draggable` 将失效。

:::
## Dialog的遮罩层
设置 `modal` 为 `false` 将隐藏 `modal` (overlay) .

```vue
<template>
    <div>
        <ux-button type="primary" @click="dialogVisible = true">打开弹窗</ux-button>

        <ux-dialog v-model="dialogVisible" :modal="false" width="500">
            <span>这是一个设置model为false的弹窗</span>
            <template #footer>
                <div>
                    <ux-button @click="dialogVisible = false">取 消</ux-button>
                    <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
                </div>
            </template>
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

```

## Dialog的自定义动画 ^(1.1.5)
通过 `transition` 属性自定义对话框动画，该属性可以接受以下任意一种值：

- ​Transition name​​ (动画名称，字符串)

- ​​Vue transition configuration​​ (Vue 过渡配置，对象)

 示例包括缩放（scale）、滑动（slide）、淡入淡出（fade）、弹跳（bounce）动画，以及带有自定义事件处理器的基于对象的配置。
```vue
<template>
    <div>
        <ux-button plain @click="openDialog('fade')">默认</ux-button>
        <ux-button plain @click="openDialog('scale')">scale</ux-button>
        <ux-button plain @click="openDialog('slide')">slide</ux-button>
        <ux-button plain @click="openDialog('bounce')">bounce</ux-button>
        <ux-button plain @click="openDialogWithObject">配置对象</ux-button>
    </div>

    <ux-dialog
        v-model="dialogVisible"
       
        :title="`${currentAnimation} 动画弹窗`"
        width="30%"
        :transition="transitionConfig">
        <div>
            <p>
                当前动画: <strong>{{ currentAnimation }}</strong>
            </p>
            <p>当前对话框演示了 {{ currentAnimation }} 动画效果。</p>
            <p v-if="isObjectConfig">
                <strong>使用对象配置:</strong><br />
                <code>{{ JSON.stringify(transitionConfig, null, 2) }}</code>
            </p>
        </div>
        <template #footer>
            <ux-button @click="dialogVisible = false">取 消</ux-button>
            <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
        </template>
    </ux-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'

const dialogVisible = ref(false)
const currentAnimation = ref('fade')
const isObjectConfig = ref(false)
const transitionConfig = computed(() => {
    if (isObjectConfig.value) {
        return {
            name: 'dialog-custom-object',
            appear: true,
            mode: 'out-in',
            duration: 500
        }
    }
    return `dialog-${currentAnimation.value}`
})
const openDialog = (type) => {
    currentAnimation.value = type
    isObjectConfig.value = false
    dialogVisible.value = true
}
const openDialogWithObject = () => {
    currentAnimation.value = '配置对象'
    isObjectConfig.value = true
    dialogVisible.value = true
}
</script>

<style>
/* Scale Animation */
.dialog-scale-enter-active,
.dialog-scale-leave-active,
.dialog-scale-enter-active .ux-dialog,
.dialog-scale-leave-active .ux-dialog {
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.dialog-scale-enter-from,
.dialog-scale-leave-to {
    opacity: 0;
}
.dialog-scale-enter-from .ux-dialog,
.dialog-scale-leave-to .ux-dialog {
    transform: scale(0.5);
    opacity: 0;
}
/* Slide Animation */
.dialog-slide-enter-active,
.dialog-slide-leave-active,
.dialog-slide-enter-active .ux-dialog,
.dialog-slide-leave-active .ux-dialog {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.dialog-slide-enter-from,
.dialog-slide-leave-to {
    opacity: 0;
}
.dialog-slide-enter-from .ux-dialog,
.dialog-slide-leave-to .ux-dialog {
    transform: translateY(-100px);
    opacity: 0;
}
/* Bounce Animation */
.dialog-bounce-enter-active,
.dialog-bounce-leave-active,
.dialog-bounce-enter-active .ux-dialog,
.dialog-bounce-leave-active .ux-dialog {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.dialog-bounce-enter-from,
.dialog-bounce-leave-to {
    opacity: 0;
}
.dialog-bounce-enter-from .ux-dialog,
.dialog-bounce-leave-to .ux-dialog {
    transform: scale(0.3) translateY(-50px);
    opacity: 0;
}
/* Object Configuration Animation */
.dialog-custom-object-enter-active,
.dialog-custom-object-leave-active,
.dialog-custom-object-enter-active .ux-dialog,
.dialog-custom-object-leave-active .ux-dialog {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.dialog-custom-object-enter-from,
.dialog-custom-object-leave-to {
    opacity: 0;
}
.dialog-custom-object-enter-from .ux-dialog,
.dialog-custom-object-leave-to .ux-dialog {
    transform: rotate(180deg) scale(0.5);
    opacity: 0;
}
</style>

```

:::info primary

动画类会根据过渡名称动态生成。 为了更细致地控制动画行为，你可以明确地定义这些类。 详情请参见 [自定义过渡类](https://cn.vuejs.org/guide/built-ins/transition#custom-transition-classes) 

:::
## Dialog的可绑定的事件
打开浏览器控制台 (window: ctrl + shift + J) / (mac: command + option + J), 可以看到事件回调.

```vue
<template>
    <ux-button plain @click="dialogVisible = true"> 打开事件弹窗 </ux-button>

    <ux-dialog
        v-model="dialogVisible"
        modal-class="overide-animation"
        :before-close="
            (doneFn) => {
                ;(console.log('before-close'), doneFn())
            }
        "
        @open="console.log('open')"
        @open-auto-focus="console.log('open-auto-focus')"
        @opened="console.log('opened')"
        @close="console.log('close')"
        @close-auto-focus="console.log('close-auto-focus')"
        @closed="console.log('closed')">
        <span>这是一个绑定所有事件的弹窗</span>
        <template #footer>
            <div>
                <ux-button @click="dialogVisible = false">取 消</ux-button>
                <ux-button type="primary" @click="dialogVisible = false">确 定</ux-button>
            </div>
        </template>
    </ux-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

```

