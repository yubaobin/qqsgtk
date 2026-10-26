# Affix 固钉
将页面元素固定在特定可视区域。

## Affix的基础用法
 固钉默认固定在页面顶部。通过设置 `offset` 属性来改变吸顶距离，默认值为 0。
```vue
<template>
    <ux-affix :offset="120">
        <ux-button type="primary">距离顶部120px</ux-button>
    </ux-affix>
</template>

```

## Affix的指定容器
通过设置 `target` 属性，让固钉始终保持在容器内， 超过范围则隐藏。请注意容器避免出现滚动条。

 
```vue
<template>
    <div>
        <ux-affix target=".affix-container" :offset="80">
            <ux-button type="primary">在容器内</ux-button>
        </ux-affix>
    </div>
</template>
```

## Affix的固定位置
 通过设置 `position` 属性来改变固定位置，Affix 组件提供 2 个固定的位置参数 `top` 和 `bottom`，默认值为 `top` 。
```vue
<template>
    <ux-affix position="bottom" :offset="20">
        <ux-button type="primary">距离底部20px</ux-button>
    </ux-affix>
</template>

```

