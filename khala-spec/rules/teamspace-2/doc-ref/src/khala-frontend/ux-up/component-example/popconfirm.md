# Popconfirm 气泡确认框
点击元素，弹出气泡确认框。

## Popconfirm的展示位置
`Popconfirm` 提供 9 种展示位置。

 使用 `title` 属性来设置点击参考元素时显示的信息。 由 `placement` 属性决定 `Popconfirm` 的位置。 该属性值格式为：`[方向]-[对齐位置]`，可供选择的四个方向分别是`top`、`left`、`right`、`bottom`，可供选择的三种对齐方式分别是`start`、`end`、`null`，默认的对齐方式为`null`。 以 `placement="left-end"` 为例，气泡确认框会显示在悬停元素的左侧，且提示信息的底部与悬停元素的底部对齐。
```vue
<template>
    <div>
        <div>
            <ux-popconfirm title="Top Left 提示信息" placement="top-start">
                <template #reference>
                    <ux-button>top-start</ux-button>
                </template>
            </ux-popconfirm>
            <ux-popconfirm title="Top Center 提示信息" placement="top">
                <template #reference>
                    <ux-button>top</ux-button>
                </template>
            </ux-popconfirm>
            <ux-popconfirm title="Top Right 提示信息" placement="top-end">
                <template #reference>
                    <ux-button>top-end</ux-button>
                </template>
            </ux-popconfirm>
        </div>
        <div>
            <ux-popconfirm title="Left Top 提示信息" placement="left-start">
                <template #reference>
                    <ux-button>left-start</ux-button>
                </template>
            </ux-popconfirm>
            <ux-popconfirm title="Right Top 提示信息" placement="right-start">
                <template #reference>
                    <ux-button>right-start</ux-button>
                </template>
            </ux-popconfirm>
        </div>
        <div>
            <ux-popconfirm title="Left Center 提示信息" placement="left">
                <template #reference>
                    <ux-button>left</ux-button>
                </template>
            </ux-popconfirm>
            <ux-popconfirm title="Right Center 提示信息" placement="right">
                <template #reference>
                    <ux-button>right</ux-button>
                </template>
            </ux-popconfirm>
        </div>
        <div>
            <ux-popconfirm title="Left Bottom 提示信息" placement="left-end">
                <template #reference>
                    <ux-button>left-end</ux-button>
                </template>
            </ux-popconfirm>
            <ux-popconfirm title="Right Bottom 提示信息" placement="right-end">
                <template #reference>
                    <ux-button>right-end</ux-button>
                </template>
            </ux-popconfirm>
        </div>
        <div>
            <ux-popconfirm title="Bottom Left 提示信息" placement="bottom-start">
                <template #reference> <ux-button>bottom-start</ux-button></template>
            </ux-popconfirm>
            <ux-popconfirm title="Bottom Center 提示信息" placement="bottom">
                <template #reference> <ux-button>bottom</ux-button></template>
            </ux-popconfirm>
            <ux-popconfirm title="Bottom Right 提示信息" placement="bottom-end">
                <template #reference>
                    <ux-button>bottom-end</ux-button>
                </template>
            </ux-popconfirm>
        </div>
    </div>
</template>

```

## Popconfirm的基础用法
`ux-popconfirm` 的属性与 Popover 很类似， 因此对于重复属性，请参考 [Popover 的文档](/zh-CN/component/popover)，在此文档中不做详尽解释。

 在 `ux-popconfirm` 中，只有 `title` 属性可用，`content` 属性会被忽略。
```vue
<template>
    <ux-popconfirm title="这是一段内容确定删除吗？">
        <template #reference>
            <ux-button>删除</ux-button>
        </template>
    </ux-popconfirm>
</template>

```

## Popconfirm的自定义弹出框的内容
可以在 `ux-popconfirm` 中自定义内容。

```vue
<template>
    <ux-popconfirm width="220" :icon="InfoFilled" icon-color="#626AEF" title="确定要删除吗?" @cancel="onCancel">
        <template #reference>
            <ux-button>删除</ux-button>
        </template>
        <template #actions="{ confirm, cancel }">
            <ux-button size="small" @click="cancel">不</ux-button>
            <ux-button type="danger" size="small" :disabled="!clicked" @click="confirm">是</ux-button>
        </template>
    </ux-popconfirm>
</template>

<script setup>
import { ref } from 'vue'
import { InfoFilled } from '@ux-up/icons-vue'

const clicked = ref(false)
function onCancel() {
    clicked.value = true
}
</script>

```

## Popconfirm的多种让  出现的方法
点击按钮触发事件

```vue
<template>
    <ux-popconfirm
        confirm-button-text="Yes"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="确定要删除吗?"
        @confirm="confirmEvent"
        @cancel="cancelEvent">
        <template #reference>
            <ux-button>删除</ux-button>
        </template>
    </ux-popconfirm>
</template>

<script setup>
import { InfoFilled } from '@ux-up/icons-vue'

const confirmEvent = () => {
    console.log('已删除!')
}
const cancelEvent = () => {
    console.log('已取消!')
}
</script>

```

