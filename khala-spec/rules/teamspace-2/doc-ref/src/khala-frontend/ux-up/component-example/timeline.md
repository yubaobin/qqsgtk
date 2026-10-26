# Timeline 时间线
可视化地呈现时间流信息。

## Timeline的基础用法
`ux-timeline` 可拆分成多个按照时间戳正序或倒序排列的 `activity`，时间戳是其区分于其他控件的重要特征，使⽤时注意与 `Steps` 步骤条等区分。

```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="size" aria-label="大小控制">
                <ux-radio-button value="large">large</ux-radio-button>
                <ux-radio-button value="normal">normal</ux-radio-button>
            </ux-radio-group>
        </div>
        <ux-timeline>
            <ux-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :size="size"
                :timestamp="activity.timestamp">
                {{ activity.content }}
            </ux-timeline-item>
        </ux-timeline>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('normal')
const activities = [
    {
        content: '活动按期开始',
        timestamp: '2024-06-15'
    },
    {
        content: '通过审核',
        timestamp: '2024-06-13'
    },
    {
        content: '创建成功',
        timestamp: '2024-06-11'
    }
]
</script>

```

## Timeline的⾃定义节点样式
可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

```vue
<template>
    <ux-timeline>
        <ux-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
        </ux-timeline-item>
    </ux-timeline>
</template>

<script setup>
import { MoreFilled } from '@ux-up/icons-vue'

const activities = [
    {
        content: '支持使用图标',
        timestamp: '2024-06-12 20:46',
        size: 'large',
        type: 'primary',
        icon: MoreFilled
    },
    {
        content: '支持自定义颜色',
        timestamp: '2024-06-03 20:46',
        color: '#FFD7D9'
    },
    {
        content: '支持自定义尺寸',
        timestamp: '2024-06-03 20:46',
        size: 'large'
    },
    {
        content: '默认样式的节点',
        timestamp: '2024-06-03 20:46'
    }
]
</script>

```

## Timeline的⾃定义时间戳
当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。

```vue
<template>
    <ux-timeline>
        <ux-timeline-item timestamp="2025/6/12" placement="top">
            <ux-card>
                <h4>完成计划第一步</h4>
                <p>小明 提交于 2025/6/12 20:46</p>
            </ux-card>
        </ux-timeline-item>
        <ux-timeline-item timestamp="2025/6/3" placement="top">
            <ux-card>
                <h4>完成计划第二步</h4>
                <p>小红 提交于 2025/6/3 20:46</p>
            </ux-card>
        </ux-timeline-item>
        <ux-timeline-item timestamp="2025/6/2" placement="top">
            <ux-card>
                <h4>完成计划第三步</h4>
                <p>小彬 提交于 2025/6/2 20:46</p>
            </ux-card>
        </ux-timeline-item>
    </ux-timeline>
</template>

```

## Timeline的垂直居中
垂直居中样式的 `ux-timeline-ttem`

```vue
<template>
    <ux-timeline>
        <ux-timeline-item center timestamp="2025/4/12" placement="top">
            <ux-card>
                <h4>完成计划第一步</h4>
                <p>小明 提交于 2025/6/12 20:46</p>
            </ux-card>
        </ux-timeline-item>
        <ux-timeline-item timestamp="2025/4/3" placement="top">
            <ux-card>
                <h4>完成计划第二步</h4>
                <p>小红 提交于 2025/6/3 20:46</p>
            </ux-card>
        </ux-timeline-item>
        <ux-timeline-item center timestamp="2025/4/2" placement="top">开始执行</ux-timeline-item>
        <ux-timeline-item timestamp="2025/4/2" placement="top">结束执行</ux-timeline-item>
    </ux-timeline>
</template>

```

