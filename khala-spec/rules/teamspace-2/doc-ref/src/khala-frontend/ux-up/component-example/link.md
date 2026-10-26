# Link 文字链接
文字超链接。

## Link的基础用法
 基础的文字链接用法。
```vue
<template>
    <div>
        <ux-link href="http://10.18.96.24:8000/designportal/dashboard" target="_blank">默认链接</ux-link>
        <ux-link type="primary">默认链接</ux-link>
        <ux-link type="success">成功链接</ux-link>
        <ux-link type="warning">警告链接</ux-link>
        <ux-link type="danger">危险链接</ux-link>
        <ux-link type="info">信息链接</ux-link>
    </div>
</template>
```

## Link的禁用状态
 文字链接不可用状态。
```vue
<template>
    <div>
        <ux-link disabled>默认链接</ux-link>
        <ux-link type="primary" disabled>默认链接</ux-link>
        <ux-link type="success" disabled>成功链接</ux-link>
        <ux-link type="warning" disabled>警告链接</ux-link>
        <ux-link type="danger" disabled>危险链接</ux-link>
        <ux-link type="info" disabled>信息链接</ux-link>
    </div>
</template>
```

## Link的下划线
控制下划线是否出现

:::info warning

属性 `boolean` 值 **将在** ^(1.2.0) 版本中被 **移除**，请考虑切换至新的 API。

:::

:::info primary

从 ^(1.1.4) 开始，你可以使用 `'always' | 'hover' | 'never'` 来控制是否显示下划线。 文档中的示例将都使用这些值。 如果您使用的版本 低于 ^(1.1.4)，请参考：

:::

```vue
<template>
  <!-- 在 1.1.4 之前用法, 之后使用 'hover', 在 1.2.0 移除 -->
  <el-link underline>link</el-link>
  <!-- 在 1.1.4 之前用法, 之后使用 'never', 在 1.2.0 移除 -->
  <el-link :underline="false">link</el-link>
</template>
```

```vue
<template>
    <div>
        <ux-link>默认</ux-link>
        <ux-link underline="always">always</ux-link>
        <ux-link underline="hover">hover</ux-link>
        <ux-link underline="never">never</ux-link>
    </div>
</template>
```

## Link的图标
带图标的链接

:::info primary

使用 `icon` 属性来为按钮添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 ux-ui 提供了一组图标，您可以在 [icon component](/zh-CN/component/icon)

:::

```vue
<template>
    <div>
        <ux-link :icon="Edit">编辑</ux-link>
        <ux-link>查看<ux-svg-icon icon-name="ux-icon-View" /> </ux-link>
    </div>
</template>

<script setup>
import { Edit } from '@ux-up/icons-vue'
</script>
```

