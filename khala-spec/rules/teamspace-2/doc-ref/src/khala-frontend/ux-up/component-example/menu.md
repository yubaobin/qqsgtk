# Menu 导航菜单
为网站提供导航功能的菜单。

:::info primary

如果您想要覆盖ux-menu的默认高度, 您可以使用下列CSS

```css
.ux-menu--horizontal {
  --ux-menu-horizontal-height: 100px;
}
```

:::

## Menu的顶栏
顶部栏菜单可以在各种场景中使用。

 导航菜单默认为垂直模式，通过将 `mode` 属性设置为 `horizontal` 来使导航菜单变更为水平模式。 另外，在菜单中通过 `ux-sub-menu` 组件可以生成二级菜单。 `ux-menu` 还提供了 `background-color`、`text-color` 和 `active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。
```vue
<template>
    <div>
        <div>
            <ux-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <ux-menu-item index="1">处理中心</ux-menu-item>
                <ux-sub-menu index="2">
                    <template #title>我的工作台</template>
                    <ux-menu-item index="2-1">选项1</ux-menu-item>
                    <ux-menu-item index="2-2">选项2</ux-menu-item>
                    <ux-menu-item index="2-3">选项3</ux-menu-item>
                    <ux-sub-menu index="2-4">
                        <template #title>选项4</template>
                        <ux-menu-item index="2-4-1">选项1</ux-menu-item>
                        <ux-menu-item index="2-4-2">选项2</ux-menu-item>
                        <ux-menu-item index="2-4-3">选项3</ux-menu-item>
                    </ux-sub-menu>
                </ux-sub-menu>
                <ux-menu-item index="3" disabled>消息中心</ux-menu-item>
                <ux-menu-item index="4"><a href="#">订单管理</a></ux-menu-item>
            </ux-menu>
        </div>
        <ux-menu
            :default-active="activeIndex2"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">
            <ux-menu-item index="1">处理中心</ux-menu-item>
            <ux-sub-menu index="2">
                <template #title>我的工作台</template>
                <ux-menu-item index="2-1">选项1</ux-menu-item>
                <ux-menu-item index="2-2">选项2</ux-menu-item>
                <ux-menu-item index="2-3">选项3</ux-menu-item>
                <ux-sub-menu index="2-4">
                    <template #title>选项4</template>
                    <ux-menu-item index="2-4-1">选项1</ux-menu-item>
                    <ux-menu-item index="2-4-2">选项2</ux-menu-item>
                    <ux-menu-item index="2-4-3">选项3</ux-menu-item>
                </ux-sub-menu>
            </ux-sub-menu>
            <ux-menu-item index="3" disabled>消息中心</ux-menu-item>
            <ux-menu-item index="4"><a href="#">订单管理</a></ux-menu-item>
        </ux-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

```

## Menu的水平位置
  通过添加css样式，可以将菜单项放置在左边或右边。
```vue
<template>
    <ux-menu
        :default-active="activeIndex"
       
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">
        <ux-menu-item index="0">
            <img src="/images/logo.svg" alt="logo" />
        </ux-menu-item>
        <ux-menu-item index="1">处理中心</ux-menu-item>
        <ux-sub-menu index="2">
            <template #title>我的工作台</template>
            <ux-menu-item index="2-1">选项1</ux-menu-item>
            <ux-menu-item index="2-2">选项2</ux-menu-item>
            <ux-menu-item index="2-3">选项3</ux-menu-item>
            <ux-submenu index="2-4">
                <template #title>选项4</template>
                <ux-menu-item index="2-4-1">选项1</ux-menu-item>
                <ux-menu-item index="2-4-2">选项2</ux-menu-item>
                <ux-menu-item index="2-4-3">选项3</ux-menu-item>
            </ux-submenu>
        </ux-sub-menu>
    </ux-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
```

## Menu的侧栏
垂直菜单，可内嵌子菜单。

 通过 `ux-menu-item-group` 组件可以实现菜单进行分组，分组名可以通过 `title` 属性直接设定，也可以通过具名 `title` 来设定。
```vue
<template>
    <div>
        <div>
            <div>默认颜色</div>
            <div>
                <ux-menu default-active="2" @open="handleOpen" @close="handleClose">
                    <ux-sub-menu index="1">
                        <template #title>
                            <ux-icon><location /></ux-icon>
                            <span>导航一</span>
                        </template>
                        <ux-menu-item-group title="分组一">
                            <ux-menu-item index="1-1">选项1</ux-menu-item>
                            <ux-menu-item index="1-2">选项12</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-menu-item-group title="分组二">
                            <ux-menu-item index="1-3">选项3</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-sub-menu index="1-4">
                            <template #title>选项4</template>
                            <ux-menu-item index="1-4-1">选项1</ux-menu-item>
                        </ux-sub-menu>
                    </ux-sub-menu>
                    <ux-menu-item index="2">
                        <ux-icon><icon-menu /></ux-icon>
                        <span>导航二</span>
                    </ux-menu-item>
                    <ux-menu-item index="3" disabled>
                        <ux-icon><document /></ux-icon>
                        <span>导航三</span>
                    </ux-menu-item>
                    <ux-menu-item index="4">
                        <ux-icon><setting /></ux-icon>
                        <span>导航四</span>
                    </ux-menu-item>
                </ux-menu>
            </div>
        </div>
        <div>
            <div>自定义颜色</div>
            <div>
                <ux-menu
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    default-active="2"
                    text-color="#fff"
                    @open="handleOpen"
                    @close="handleClose">
                    <ux-sub-menu index="1">
                        <template #title>
                            <ux-icon><location /></ux-icon>
                            <span>导航一</span>
                        </template>
                        <ux-menu-item-group title="分组一">
                            <ux-menu-item index="1-1">选项1</ux-menu-item>
                            <ux-menu-item index="1-2">选项2</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-menu-item-group title="分组二">
                            <ux-menu-item index="1-3">选项3</ux-menu-item>
                        </ux-menu-item-group>
                        <ux-sub-menu index="1-4">
                            <template #title>item four</template>
                            <ux-menu-item index="1-4-1">选项1</ux-menu-item>
                        </ux-sub-menu>
                    </ux-sub-menu>
                    <ux-menu-item index="2">
                        <ux-icon><icon-menu /></ux-icon>
                        <span>导航二</span>
                    </ux-menu-item>
                    <ux-menu-item index="3" disabled>
                        <ux-icon><document /></ux-icon>
                        <span>导航三</span>
                    </ux-menu-item>
                    <ux-menu-item index="4">
                        <ux-icon><setting /></ux-icon>
                        <span>导航四</span>
                    </ux-menu-item>
                </ux-menu>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Document, Menu as IconMenu, Location, Setting } from '@ux-up/icons-vue'

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

```

## Menu的Collapse 折叠面板
垂直导航菜单可以被折叠。

```vue
<template>
    <div>
        <ux-radio-group v-model="isCollapse">
            <ux-radio-button :value="false">展开</ux-radio-button>
            <ux-radio-button :value="true">收起</ux-radio-button>
        </ux-radio-group>
        <ux-menu
            default-active="2"
           
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose">
            <ux-sub-menu index="1">
                <template #title>
                    <ux-icon><location /></ux-icon>
                    <span>导航一</span>
                </template>
                <ux-menu-item-group>
                    <template #title><span>分组一</span></template>
                    <ux-menu-item index="1-1">选项1</ux-menu-item>
                    <ux-menu-item index="1-2">选项1</ux-menu-item>
                </ux-menu-item-group>
                <ux-menu-item-group title="分组二">
                    <ux-menu-item index="1-3">选项3</ux-menu-item>
                </ux-menu-item-group>
                <ux-sub-menu index="1-4">
                    <template #title><span>选项4</span></template>
                    <ux-menu-item index="1-4-1">选项1</ux-menu-item>
                </ux-sub-menu>
            </ux-sub-menu>
            <ux-menu-item index="2">
                <ux-icon><icon-menu /></ux-icon>
                <template #title>导航二</template>
            </ux-menu-item>
            <ux-menu-item index="3" disabled>
                <ux-icon><document /></ux-icon>
                <template #title>导航三</template>
            </ux-menu-item>
            <ux-menu-item index="4">
                <ux-icon><setting /></ux-icon>
                <template #title>导航四</template>
            </ux-menu-item>
        </ux-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@ux-up/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
```

## Menu的弹出层偏移量
设置 `ux-menu` 的 `popper-offset` 配置，会覆盖 `ux-sub-men` 的 `popper-offset`.

```vue
<template>
    <ux-menu ellipsis mode="horizontal" :popper-offset="16">
        <ux-menu-item index="1">处理中心</ux-menu-item>
        <ux-sub-menu index="2">
            <template #title>我的工作台</template>
            <ux-menu-item index="2-1">选项1</ux-menu-item>
            <ux-menu-item index="2-2">选项2</ux-menu-item>
            <ux-menu-item index="2-3">选项3</ux-menu-item>
            <ux-sub-menu index="2-4">
                <template #title>选项4</template>
                <ux-menu-item index="2-4-1">选项1</ux-menu-item>
                <ux-menu-item index="2-4-2">选项2</ux-menu-item>
                <ux-menu-item index="2-4-3">选项3</ux-menu-item>
            </ux-sub-menu>
        </ux-sub-menu>
        <ux-sub-menu index="3" :popper-offset="8">
            <template #title>覆盖偏移</template>
            <ux-menu-item index="3-1">选项1</ux-menu-item>
            <ux-menu-item index="3-2">选项2</ux-menu-item>
            <ux-menu-item index="3-3">选项3</ux-menu-item>
            <ux-sub-menu index="3-4" :popper-offset="20">
                <template #title>覆盖偏移2</template>
                <ux-menu-item index="3-4-1">选项1</ux-menu-item>
                <ux-menu-item index="3-4-2">选项2</ux-menu-item>
                <ux-menu-item index="3-4-3">选项3</ux-menu-item>
            </ux-sub-menu>
        </ux-sub-menu>
        <ux-menu-item index="4" disabled>消息中心</ux-menu-item>
        <ux-menu-item index="5">订单管理</ux-menu-item>
    </ux-menu>
</template>

<script setup></script>

```

