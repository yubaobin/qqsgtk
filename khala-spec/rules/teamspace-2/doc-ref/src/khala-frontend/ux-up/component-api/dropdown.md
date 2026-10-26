## Dropdown的 API
### Dropdown 属性

|属性名|说明|类型|默认值|
|--------------------|--------------------------|---------------|------------------------|
|type|菜单按钮类型，同`Button`组件一样，仅在`split-button`为true的情况下有效。|''\|'default'\|'primary'\|'success'\|'warning'\|'info'\|'danger'\|'text'(deprecated)|''|
|size|菜单尺寸，在split-button为true的情况下也对触发按钮生效。|''\|'large'\|'default'\|'small'\|'mini'|''|
|button-props|按钮组件的props，参考[按钮属性](./button.html#button-属性)|object|—|
|max-height|菜单最大高度|string/number|''|
|split-button|下拉触发元素呈现为按钮组|boolean|false|
|disabled|是否禁用|boolean|false|
|placement|菜单弹出位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'|bottom|
|trigger|触发下拉的行为|'hover'\|'click'\|'contextmenu'|hover|
|trigger-keys|指定键盘上哪些按键可以触发操作|array`string[]`|`['Enter','Space','ArrowDown','NumpadEnter']`|
|hide-on-click|是否在点击菜单项后隐藏菜单|boolean|true|
|show-timeout|展开下拉菜单的延时，仅在trigger为hover时有效|number|150|
|hide-timeout|收起下拉菜单的延时（仅在trigger为hover时有效）|number|150|
|role|下拉菜单的ARIA属性。根据具体场景，您可能想要将此更改为“navigation”|'dialog'\|'grid'\|'group'\|'listbox'\|'menu'\|'navigation'\|'tooltip'\|'tree'|menu|
|tabindex|Dropdown组件的[tabindex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)|number/string|0|
|popper-class|自定义浮层类名|string|''|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|object|`{modifiers:[{name:'computeStyles',options:{gpuAcceleration:false}}]}`|
|teleported|是否将下拉列表插入至body元素|boolean|true|
|persistent|当下拉菜单处于非活动状态且`persistent`为`false`时，下拉菜单将被销毁|boolean|true|

### Dropdown 插槽

|插槽名|说明|子标签|
|--------|----------------|-------------|
|default|下拉菜单的内容。注意：必须是有效的htmlDOM元素（例如`<span>、<button>`等）或`ux-component`，以附加监听触发器|—|
|dropdown|下拉列表，通常是`<ux-dropdown-menu>`组件|Dropdown-Menu|

### Dropdown 事件

|事件名|说明|类型|
|--------------|-----------------------|---------------|
|click|`split-button`为true时，点击左侧按钮的回调|(e:MouseEvent)=>void|
|command|当下拉项被点击时触发，参数是从下拉菜单中发送的命令|Function`(...args:any[])=>void`|
|visible-change|当下拉菜单出现/消失时触发器,当它出现时,参数将是`true`,否则将是`false`|(val:boolean)=>void|

### Dropdown 暴露方法/属性

|方法名|说明|类型|
|-----------|------|-|
|handleOpen|打开下拉菜单|()=>void|
|handleClose|关闭下拉菜单|()=>void|
## Dropdown的Menu API
### DropdownMenu 插槽

|插槽名|说明|子标签|
|-------|-------|-------------|
|default|下拉菜单的内容|DropdownItem|
## Dropdown的Item API
### DropdownItem 属性

|属性名|说明|类型|默认值|
|--------|---------------------|--------|-----|
|command|派发到`command`回调函数的指令参数|string/number/object|—|
|disabled|是否禁用|boolean|false|
|divided|是否显示分隔符|boolean|false|
|icon|自定义图标|string/Component|—|

### DropdownItem 插槽

|插槽名|说明|
|-------|------------------|
|default|自定义DropdownItem内容|
