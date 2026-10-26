# Dropdown 下拉菜单
将动作或菜单折叠到下拉菜单中。
## Dropdown的基础用法
悬停在下拉菜单上以展开更多操作。

 通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。
```vue
<template>
    <ux-dropdown>
        <span>
            下拉菜单
            <ux-svg-icon icon-name="ux-icon-ArrowDown" />
        </span>
        <template #dropdown>
            <ux-dropdown-menu>
                <ux-dropdown-item>回到顶部</ux-dropdown-item>
                <ux-dropdown-item>面包屑</ux-dropdown-item>
                <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                <ux-dropdown-item divided>菜单</ux-dropdown-item>
            </ux-dropdown-menu>
        </template>
    </ux-dropdown>
</template>

```

## Dropdown的位置
 设置 ` placement ` 属性，使下拉菜单出现在不同位置，支持 6 个位置。
```vue
<template>
    <div>
        <ux-dropdown placement="top-start">
            <ux-button>top-start</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown placement="top">
            <ux-button>top</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown placement="top-end">
            <ux-button>top-end</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown placement="bottom-start">
            <ux-button>bottom-start</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown placement="bottom">
            <ux-button>bottom</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown placement="bottom-end">
            <ux-button>bottom-end</ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
    </div>
</template>

```

## Dropdown的触发对象
可使用按钮触发下拉菜单。

 设置 `split-button` 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 `true` 即可。 如果你想要在选项之间添加一个分隔符，只需要为后面的选项添加一个 `divided` 属性即可。
```vue
<template>
    <div>
        <ux-dropdown>
            <ux-button type="primary">
                更多菜单<ux-svg-icon icon-name="ux-icon-ArrowDown" />
            </ux-button>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
        <ux-dropdown split-button type="primary" @click="handleClick">
            更多菜单
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item divided>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
    </div>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const handleClick = () => {
    UxMessage('点击')
}
</script>

```

## Dropdown的触发方式
可以配置点击激活或者悬停激活。

 将 `trigger` 属性设置为 click 即可， 默认为 `hover`。
```vue
<template>
    <div>
        <div>
            <div>hover 激活</div>
            <ux-dropdown>
                <span>
                    下拉菜单<ux-svg-icon icon-name="ux-icon-ArrowDown" />
                </span>
                <template #dropdown>
                    <ux-dropdown-menu>
                        <ux-dropdown-item :icon="Plus">回到顶部</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlusFilled">面包屑</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlus">下拉菜单</ux-dropdown-item>
                        <ux-dropdown-item :icon="Check">菜单</ux-dropdown-item>
                    </ux-dropdown-menu>
                </template>
            </ux-dropdown>
        </div>
        <div>
            <div>点击激活</div>
            <ux-dropdown trigger="click">
                <span>
                    下拉菜单<ux-svg-icon icon-name="ux-icon-ArrowDown" />
                </span>
                <template #dropdown>
                    <ux-dropdown-menu>
                        <ux-dropdown-item :icon="Plus">回到顶部</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlusFilled">面包屑</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlus">下拉菜单</ux-dropdown-item>
                        <ux-dropdown-item :icon="Check">菜单</ux-dropdown-item>
                    </ux-dropdown-menu>
                </template>
            </ux-dropdown>
        </div>
        <div>
            <div>点击右键激活</div>
            <ux-dropdown trigger="contextmenu">
                <span>
                    下拉菜单<ux-svg-icon icon-name="ux-icon-ArrowDown" />
                </span>
                <template #dropdown>
                    <ux-dropdown-menu>
                        <ux-dropdown-item :icon="Plus">回到顶部</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlusFilled">面包屑</ux-dropdown-item>
                        <ux-dropdown-item :icon="CirclePlus">下拉菜单</ux-dropdown-item>
                        <ux-dropdown-item :icon="Check">菜单</ux-dropdown-item>
                    </ux-dropdown-menu>
                </template>
            </ux-dropdown>
        </div>
    </div>
</template>

<script setup>
import { Check, CirclePlus, CirclePlusFilled, Plus } from '@ux-up/icons-vue'
</script>

```

## Dropdown的菜单隐藏方式
可以通过 `hide-on-click` 属性来配置。

 下拉菜单默认在点击菜单项后会被隐藏，将 `hide-on-click` 属性设置为 `false` 可以关闭此功能。
```vue
<template>
    <ux-dropdown :hide-on-click="false">
        <span>
            下拉菜单<ux-svg-icon icon-name="ux-icon-ArrowDown" />
        </span>
        <template #dropdown>
            <ux-dropdown-menu>
                <ux-dropdown-item>回到顶部</ux-dropdown-item>
                <ux-dropdown-item>面包屑</ux-dropdown-item>
                <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                <ux-dropdown-item divided>菜单</ux-dropdown-item>
            </ux-dropdown-menu>
        </template>
    </ux-dropdown>
</template>

```

## Dropdown的指令事件
点击菜单项后会触发事件，用户可以通过相应的菜单项 `key` 进行不同的操作。

```vue
<template>
    <ux-dropdown @command="handleCommand">
        <span>
            下拉菜单
            <ux-svg-icon icon-name="ux-icon-ArrowDown" />
        </span>
        <template #dropdown>
            <ux-dropdown-menu>
                <ux-dropdown-item command="回到顶部">回到顶部</ux-dropdown-item>
                <ux-dropdown-item command="面包屑">面包屑</ux-dropdown-item>
                <ux-dropdown-item command="导航菜单">导航菜单</ux-dropdown-item>
                <ux-dropdown-item command="下拉菜单" disabled>下拉菜单</ux-dropdown-item>
                <ux-dropdown-item command="菜单" divided>菜单</ux-dropdown-item>
            </ux-dropdown-menu>
        </template>
    </ux-dropdown>
</template>

<script setup>
import { UxMessage } from 'ux-up'

const handleCommand = (command) => {
    UxMessage(`点击了${command}菜单`)
}
</script>

```

## Dropdown的下拉方法
可以手动使用 `手动打开` 或 `手动关闭下拉菜单以打开或关闭`

```vue
<template>
    <div>
        <div>
            <p>打开(关闭) 第二个下拉菜单会 关闭(打开) 第一个下拉菜单。</p>
        </div>
        <div>
            <ux-button @click="showClick">打开第一个下拉菜单</ux-button>
        </div>
        <ux-dropdown ref="dropdown1" trigger="contextmenu">
            <span>第一个下拉菜单</span>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>

        <ux-dropdown trigger="contextmenu" @visible-change="handleVisible2">
            <span>第二个下拉菜单(右键打开)</span>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dropdown1 = ref()
function handleVisible2(visible) {
    if (!dropdown1.value) return
    if (visible) {
        dropdown1.value.handleClose()
    } else {
        dropdown1.value.handleOpen()
    }
}
function showClick() {
    if (!dropdown1.value) return
    dropdown1.value.handleOpen()
}
</script>

```

## Dropdown的尺寸
Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

 使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default`, `small` 或 `mini`
```vue
<template>
    <div>
        <ux-dropdown size="large" split-button type="primary" trigger="click">
            大尺寸
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>

        <ux-dropdown split-button type="primary" trigger="click">
            默认尺寸
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>

        <ux-dropdown size="small" split-button type="primary" trigger="click">
            小尺寸
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>

        <ux-dropdown size="mini" split-button type="primary" trigger="click">
            超小小尺寸
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>回到顶部</ux-dropdown-item>
                    <ux-dropdown-item>面包屑</ux-dropdown-item>
                    <ux-dropdown-item disabled>下拉菜单</ux-dropdown-item>
                    <ux-dropdown-item divided>菜单</ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
    </div>
</template>

```

