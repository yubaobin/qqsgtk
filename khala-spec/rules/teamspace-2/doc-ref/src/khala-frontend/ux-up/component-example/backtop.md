# Backtop 回到顶部
返回页面顶部的操作按钮。

## Backtop的基础用法
通过滑动来查看容器右下角的按钮。

```vue
<template>
    滚动页面可以在页面右下角看到的向上的箭头按钮。
    <ux-backtop />
</template>

```

## Backtop的自定义内容
显示区域被固定为 40px \* 40px 的区域, 其中的内容可支持自定义。

```vue
<template>
    滚动页面可以在页面右下角看到写着UP的按钮。
    <ux-backtop :bottom="100">
        <div
            style="
                height: 100%;
                width: 100%;
                background-color: var(--ux-bg-color-overlay);
                box-shadow: var(--ux-box-shadow-lighter);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            ">
            UP
        </div>
    </ux-backtop>
</template>

```

