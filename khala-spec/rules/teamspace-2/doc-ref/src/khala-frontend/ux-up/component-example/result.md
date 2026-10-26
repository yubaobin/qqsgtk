# Result 结果
用于对用户的操作结果或者异常状态做反馈。

## Result的基础用法
 `primary` 已被添加到 ^(1.1.4)。
```vue
<template>
    <ux-row>
        <ux-col :sm="12" :lg="6" :xl="4">
            <ux-result icon="primary" title="主要提示" sub-title="请根据提示进行操作">
                <template #extra>
                    <ux-button type="primary">返回</ux-button>
                </template>
            </ux-result>
        </ux-col>
        <ux-col :sm="12" :lg="6" :xl="4">
            <ux-result icon="success" title="成功提示" sub-title="请根据提示进行操作">
                <template #extra>
                    <ux-button type="primary">返回</ux-button>
                </template>
            </ux-result>
        </ux-col>
        <ux-col :sm="12" :lg="6" :xl="4">
            <ux-result icon="warning" title="警告提示" sub-title="请根据提示进行操作">
                <template #extra>
                    <ux-button type="primary">返回</ux-button>
                </template>
            </ux-result>
        </ux-col>
        <ux-col :sm="12" :lg="6" :xl="4">
            <ux-result icon="error" title="错误提示" sub-title="请根据提示进行操作">
                <template #extra>
                    <ux-button type="primary">返回</ux-button>
                </template>
            </ux-result>
        </ux-col>
        <ux-col :sm="12" :lg="6" :xl="4">
            <ux-result icon="info" title="信息提示">
                <template #sub-title>
                    <p>使用 subtitle 插槽</p>
                </template>
                <template #extra>
                    <ux-button type="primary">返回</ux-button>
                </template>
            </ux-result>
        </ux-col>
    </ux-row>
</template>

```

## Result的自定义内容

```vue
<template>
    <ux-result title="404" sub-title="无法访问">
        <template #icon>
            <ux-image :src="src" />
        </template>
        <template #extra>
            <ux-button type="primary">返回</ux-button>
        </template>
    </ux-result>
</template>

<script setup>
const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const src = `${props.baseUrl}images/demo/demo1.png`
</script>

```

