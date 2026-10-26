# Badge 标记
按钮和图标上的数字或状态标记。

## Badge的基础用法
可以用来展示新消息的数量。

 定义 `value` 属性，它接受 `Number` 或者 `String`。
```vue
<template>
    <div>
        <ux-badge :value="12">
            <ux-button size="small">评论</ux-button>
        </ux-badge>
        <ux-badge :value="3">
            <ux-button size="small">回复</ux-button>
        </ux-badge>
        <ux-badge :value="1" type="primary">
            <ux-button size="small">评论</ux-button>
        </ux-badge>
        <ux-badge :value="2" type="warning">
            <ux-button size="small">回复</ux-button>
        </ux-badge>
        <ux-badge :value="1" color="#FFD7D9">
            <ux-button size="small">自定义背景</ux-button>
        </ux-badge>
        <ux-dropdown trigger="click">
            <span style="cursor: pointer; color: var(--ux-color-primary)">
                点我查看
                <ux-svg-icon icon-name="ux-icon-CaretBottom" />
            </span>
            <template #dropdown>
                <ux-dropdown-menu>
                    <ux-dropdown-item>
                        评论
                        <ux-badge :value="12" />
                    </ux-dropdown-item>
                    <ux-dropdown-item>
                        回复
                        <ux-badge :value="3" />
                    </ux-dropdown-item>
                </ux-dropdown-menu>
            </template>
        </ux-dropdown>
    </div>
</template>

```

## Badge的最大值
你还可以自定义最大值

::: demo 由 `max` 属性定义，它接受一个 `Number`，需要注意的是，只有当 `value` 为 `Number` 时，它才会生效。

badge/max

:::
## Badge的自定义内容
可以展示除数字以外你想要展示的任何值。 或者您可以使用 `content` 栏位自定义内容。

 当 value 是 String 时，可以显示自定义文字。 或者使用 `content` 插槽。
```vue
<template>
    <div>
        <ux-badge value="new">
            <ux-button size="small">评论</ux-button>
        </ux-badge>
        <ux-badge value="hot">
            <ux-button size="small">回复</ux-button>
        </ux-badge>
        <ux-badge value="99">
            <ux-button size="small">分享</ux-button>
            <template #content="{ value }">
                <div>
                    <ux-svg-icon icon-name="ux-icon-Message" />
                    <span>{{ value }}</span>
                </div>
            </template>
        </ux-badge>
    </div>
</template>

```

## Badge的小红点
通过一个小红点标记来告知用户有新内容。

 使用 `is-dot` 属性，是个 `Boolean`。
```vue
<template>
    <div>
        <ux-badge is-dot>数据查询</ux-badge>
        <ux-badge is-dot>
            <ux-button
               
                :icon="Share"
                type="primary"
                size="small"
                />
        </ux-badge>
    </div>
</template>

<script setup>
import { Share } from '@ux-up/icons-vue'
</script>

```

## Badge的偏移量
 设置徽章点的偏移，格式是[left，top]， 代表状态点从左侧和默认位置顶部的偏移。
```vue
<template>
    <ux-badge :value="1" :offset="[10, 5]">
        <ux-button size="small">偏移[10, 5]</ux-button>
    </ux-badge>
</template>

```

