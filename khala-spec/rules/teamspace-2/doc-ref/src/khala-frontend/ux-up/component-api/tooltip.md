## Tooltip的 API
### Tooltip 属性

|名称|说明|类型|默认值|
|-------------------------|-----|-------|-----------------|
|append-to|指示Tooltip的内容将附加在哪一个网页元素上|CSSSelector/HTMLElement|—|
|effect|Tooltip主题，内置了`dark`/`light`两种|'dark'\|'light'|dark|
|content|显示的内容，也可被`slot#content`覆盖|string|''|
|raw-content|`content`中的内容是否作为HTML字符串处理|boolean|false|
|placement|Tooltip组件出现的位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|bottom|
|fallback-placements|Tooltip可用的positions请查看[popper.js文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)|array`Placement[]`|—|
|visible/v-model:visible|Tooltip组件可见性|boolean|—|
|disabled|Tooltip组件是否禁用|boolean|—|
|offset|出现位置的偏移量|number|12|
|transition|动画名称|string|—|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|object|{}|
|arrow-offset|控制`Tooltip`的箭头相对于弹出窗口的偏移(添加)。|number|5|
|show-after|在触发后多久显示内容，单位毫秒|number|0|
|show-arrow|tooltip的内容是否有箭头|boolean|true|
|hide-after|延迟关闭，单位毫秒|number|200|
|auto-close|tooltip出现后自动隐藏延时，单位毫秒|number|0|
|popper-class|为Tooltip的popper添加类名|string|—|
|enterable|鼠标是否可进入到tooltip中|boolean|true|
|teleported|是否使用teleport。设置成`true`则会被追加到`append-to`的位置|boolean|true|
|trigger|如何触发Tooltip|'hover'\|'click'\|'focus'\|'contextmenu'|hover|
|virtual-triggering|用来标识虚拟触发是否被启用|boolean|—|
|virtual-ref|标识虚拟触发时的触发元素|HTMLElement|—|
|trigger-keys|当鼠标点击或者聚焦在触发元素上时，可以定义一组键盘按键并且通过它们来控制Tooltip的显示|Array|['Enter','Space']|
|persistent|当tooltip组件长时间不触发且`persistent`属性设置为`false`时,popconfirm将会被删除|boolean|—|
|aria-label|和`aria-label`属性保持一致|string|—|

### Tooltip 插槽

|插槽名|说明|
|-------|------------------|
|default|Tooltip触发&引用的元素|
|content|自定义内容|

### Tooltip 暴露方法/属性

|名称|说明|类型|
|--------------------|---------|--------|
|popperRef|ux-popper组件实例|Ref<PopperInstance\|undefined>|
|contentRef|ux-tooltip-content组件实例|Ref<TooltipContentInstance\|undefined>|
|isFocusInsideContent|验证当前焦点事件是否在ux-tooltip-content中触发|()=>boolean\|undefined|
|updatePopper|更新ux-popper组件实例|()=>void|
|onOpen|onOpen方法控制ux-tooltip显示状态|(event?:Event\|undefined)=>void|
|onClose|onClose方法控制ux-tooltip显示状态|(event?:Event\|undefined)=>void|
|hide|提供hide方法|(event?:Event\|undefined)=>void|
## Tooltip的FAQ
#### 如何在嵌套了 tooltip 的情况下允许输入框输入空格？
```vue
<template>
  <ux-tooltip content="tooltip content" placement="top" :trigger-keys="[]">
    <ux-input v-model="value" placeholder="" />
  </ux-tooltip>
</template>
```
