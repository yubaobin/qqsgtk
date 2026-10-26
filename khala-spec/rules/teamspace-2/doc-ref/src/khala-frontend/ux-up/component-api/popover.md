## Popover的 API
### Popover 属性

|属性名|说明|类型|默认值|
|-------------------------|---------------------|-------|------------------------|
|trigger|触发方式|'click'\|'focus'\|'hover'\|'contextmenu'|hover|
|trigger-keys|当通过鼠标点击使触发元素获得焦点时，可以定义一组键盘按键代码，通过键盘控制气泡框的显示，在受控模式下无效。|Array|['Enter','Space']|
|title|标题|string|—|
|effect|Tooltip主题，ux-ui内置了`dark`/`light`两种主题|'dark'\|'light'/string|light|
|content|显示的内容，也可以通过写入默认`slot`修改显示内容|string|''|
|width|宽度|string/number|150|
|placement|出现位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|bottom|
|disabled|Popover是否可用|boolean|false|
|visible/v-model:visible|Popover是否显示|boolean/null|null|
|offset|浮层偏移量,`Popover`是在`Tooltip`,基础上开发的，`Popover`的offset是`undefined`,但`Tooltip`的offset是12|number|undefined|
|transition|定义渐变动画，默认是ux-fade-in-linear|string|—|
|show-arrow|是否显示Tooltip箭头|boolean|true|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|object|`{modifiers:[{name:'computeStyles',options:{gpuAcceleration:false}}]}`|
|popper-class|为popper添加类名|string|—|
|popper-style|为popper自定义样式|string/object|—|
|show-after|在触发后多久显示内容，单位毫秒|number|0|
|hide-after|延迟关闭，单位毫秒|number|200|
|auto-close|tooltip出现后自动隐藏延时，单位毫秒|number|0|
|tabindex|Popover组件的[tabindex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)|number/string|0|
|teleported|是否将popover的下拉列表插入至body元素|boolean|true|
|append-to|内容将附加在哪一个网页元素上|CSSSelector/HTMLElement|body|
|persistent|当popover组件长时间不触发且`persistent`属性设置为`false`时,popover将会被删除|boolean|true|
|virtual-triggering|是否启用虚拟触发器|boolean|—|
|virtual-ref|代表tooltip所要附加的参照元素	|HTMLElement|—|

### Popover 插槽

|插槽名|说明|
|---------|----------------------|
|default|Popover内嵌HTML文本|
|reference|触发Popover显示的HTML元素|

### Popover 事件

|事件名|说明|类型|
|------------|-----------|-|
|show|显示时触发|()=>void|
|before-enter|显示动画播放前触发|()=>void|
|after-enter|显示动画播放完毕后触发|()=>void|
|hide|隐藏时触发|()=>void|
|before-leave|隐藏动画播放前触发|()=>void|
|after-leave|隐藏动画播放完毕后触发|()=>void|

### Popover 暴露方法/属性

|名称|说明|类型|
|----|----------|-|
|hide|隐藏popover|()=>void|
