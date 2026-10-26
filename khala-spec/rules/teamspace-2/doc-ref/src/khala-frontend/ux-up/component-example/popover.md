# Popover 弹出框
悬浮出现在页面角落，显示全局的通知提醒消息。

## Popover的展示位置
`Popover` 提供 9 种展示位置。

 使用 `content` 属性来设置悬停时显示的信息。 由 `placement` 属性决定 `Popover` 弹出框的位置。 该属性值格式为：`[方向]-[对齐位置]`，可供选择的四个方向分别是`top`、`left`、`right`、`bottom`，可供选择的三种对齐方式分别是`start`、`end`、`null`，默认的对齐方式为`null`。 以 `placement="left-end"` 为例，`Popover` 弹出框会显示在悬停元素的左侧，且提示信息的底部与悬停元素的底部对齐。
```vue
<template>
    <div>
        <div>
            <ux-popover title="标题" content="Top Left 提示信息" placement="top-start">
                <template #reference>
                    <ux-button>top-start</ux-button>
                </template>
            </ux-popover>
            <ux-popover title="标题" content="Top Center 提示信息" placement="top">
                <template #reference>
                    <ux-button>top</ux-button>
                </template>
            </ux-popover>
            <ux-popover title="标题" content="Top Right 提示信息" placement="top-end">
                <template #reference>
                    <ux-button>top-end</ux-button>
                </template>
            </ux-popover>
        </div>
        <div>
            <ux-popover title="标题" content="Left Top 提示信息" placement="left-start">
                <template #reference>
                    <ux-button>left-start</ux-button>
                </template>
            </ux-popover>
            <ux-popover title="标题" content="Right Top 提示信息" placement="right-start">
                <template #reference>
                    <ux-button>right-start</ux-button>
                </template>
            </ux-popover>
        </div>
        <div>
            <ux-popover title="标题" content="Left Center 提示信息" placement="left">
                <template #reference>
                    <ux-button>left</ux-button>
                </template>
            </ux-popover>
            <ux-popover title="标题" content="Right Center 提示信息" placement="right">
                <template #reference>
                    <ux-button>right</ux-button>
                </template>
            </ux-popover>
        </div>
        <div>
            <ux-popover title="标题" content="Left Bottom 提示信息" placement="left-end">
                <template #reference>
                    <ux-button>left-end</ux-button>
                </template>
            </ux-popover>
            <ux-popover title="标题" content="Right Bottom 提示信息" placement="right-end">
                <template #reference>
                    <ux-button>right-end</ux-button>
                </template>
            </ux-popover>
        </div>
        <div>
            <ux-popover title="标题" content="Bottom Left 提示信息" placement="bottom-start">
                <template #reference> <ux-button>bottom-start</ux-button></template>
            </ux-popover>
            <ux-popover title="标题" content="Bottom Center 提示信息" placement="bottom">
                <template #reference> <ux-button>bottom</ux-button></template>
            </ux-popover>
            <ux-popover title="标题" content="Bottom Right 提示信息" placement="bottom-end">
                <template #reference>
                    <ux-button>bottom-end</ux-button>
                </template>
            </ux-popover>
        </div>
    </div>
</template>

```

## Popover的基础用法
`ux-popover` 是在 `ux-tooltip` 基础上开发出来的。 因此对于重复属性，[Tooltip 的文档](/zh-CN/component/tooltip)，在此文档中不做详尽解释。

 `trigger` 属性被用来决定 `ux-popover` 的触发方式，支持的触发方式： `hover`、`click`、`focus` 或 `contextmenu`。 如果你想手动控制它，可以设置 `:visible` 属性。
```vue
<template>
    <ux-popover
        placement="top-start"
        title="标题"
        :width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <template #reference>
            <ux-button>hover 激活</ux-button>
        </template>
    </ux-popover>

    <ux-popover
        placement="bottom"
        title="标题"
        :width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <template #reference>
            <ux-button>点击激活</ux-button>
        </template>
    </ux-popover>

    <ux-popover
        ref="popover"
        placement="right"
        title="标题"
        :width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <template #reference>
            <ux-button>focus 激活</ux-button>
        </template>
    </ux-popover>

    <ux-popover
        ref="popover"
        title="标题"
        :width="200"
        trigger="contextmenu"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <template #reference>
            <ux-button>右键激活</ux-button>
        </template>
    </ux-popover>

    <ux-popover
        :visible="visible"
        placement="bottom"
        title="标题"
        :width="200"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <template #reference>
            <ux-button @click="visible = !visible">手动激活</ux-button>
        </template>
    </ux-popover>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

```

## Popover的虚拟触发
`ux-popover` 可以由虚拟元素触发，这个功能就很适合使用在触发元素和展示内容元素是分开的场景。通常我们使用 `#reference` 来放置我们的触发元素， 用 `triggering-element` API，您可以任意设置您的触发元素 但注意到触发元素应该是接受 `mouse` 和 `keyboard` 事件的元素。

:::info warning

`v-popover` 将被废弃，请使用 `virtual-ref` 作为替代。

:::

```vue
<template>
    <div>
        <ux-button ref="buttonRef" v-click-outside="onClickOutside">点击激活</ux-button>

        <ux-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="click" title="标题" virtual-triggering>
            <span>触发内容。</span>
        </ux-popover>
    </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'ux-up'

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
</script>

```

## Popover的内容可扩展
 可以在 `ux-popover` 中嵌套其它组件， 利用插槽取代 `content` 属性。
```vue
<template>
    <div>
        <ux-popover placement="right" :width="600" trigger="click">
            <template #reference>
                <ux-button>点击激活</ux-button>
            </template>
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
        </ux-popover>

        <ux-popover
            :width="300"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
            <template #reference>
                <ux-avatar :src="src" />
            </template>
            <template #default>
                <div>
                    <ux-avatar :size="60" :src="src" />
                    <div>
                        <p>ux-ui</p>
                        <p
                           
                            style="margin: 0; font-size: 14px; color: var(--ux-color-info)">
                            @你好
                        </p>
                    </div>

                    <p>
                        我们秉承
                        UED的设计价值观，延用规范设计原则，可以进一步提升你的工作效率。随着『设计者』的不断反馈。
                    </p>
                </div>
            </template>
        </ux-popover>
    </div>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/avatar-circle.png`
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

## Popover的嵌套操作
当然，你还可以嵌套操作，这相比 Dialog 更为轻量。

```vue
<template>
    <ux-popover :visible="visible" placement="top" :width="180">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div>
            <ux-button size="mini" text @click="visible = false">取消</ux-button>
            <ux-button size="mini" type="primary" @click="visible = false">确定</ux-button>
        </div>
        <template #reference>
            <ux-button @click="visible = true">删除</ux-button>
        </template>
    </ux-popover>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

```

## Popover的指令
使用指令 `v-popover` 方式弹出窗口，但这种方法**不再推荐** ，因为这使得应用程序变得复杂， 您可以参考虚拟触发来实现一样的效果。

```vue
<template>
    <div>
        <ux-button v-popover="popoverRef" v-click-outside="onClickOutside">点击激活</ux-button>

        <ux-popover ref="popoverRef" trigger="click" title="标题" virtual-triggering persistent>
            <span>触发内容。</span>
        </ux-popover>
    </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'ux-up'

const popoverRef = ref()
const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
</script>

```

