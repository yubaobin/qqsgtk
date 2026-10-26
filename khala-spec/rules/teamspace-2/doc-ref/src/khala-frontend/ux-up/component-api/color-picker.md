## ColorPicker的 API
### ColorPicker 属性

|属性名|说明|类型|默认值|
|--|--|-----------------|-----|
|model-value/v-model|选中项绑定值|string|—|
|disabled|是否禁用|boolean|false|
|clearable|是否显示清除按钮|boolean|true|
|size|尺寸|'large'\|'default'\|'small'|—|
|show-alpha|是否支持透明度选择|boolean|false|
|color-format|写入v-model的颜色的格式|'hsl'\|'hsv'\|'hex'\|'rgb'\|'hex'(whenshow-alphaisfalse)\|'rgb'(whenshow-alphaistrue)|—|
|popper-class|ColorPicker下拉框的类名|string|—|
|popper-style|ColorPicker下拉面板的自定义样式|string/object|—|
|predefine|预定义颜色|object`string[]`|—|
|validate-event|输入时是否触发表单的校验|boolean|true|
|tabindex|ColorPicker的tabindex|string/number|0|
|aria-label|ColorPicker的aria-label|string|—|
|empty-values|组件的空值配置,[参考config-provider](./config-provider.html#空值配置)|array|—|
|value-on-clear|清空选项的值,[参考config-provider](./config-provider.html#空值配置)|string/number/boolean/Function|—|
|id|ColorPicker的id|string|—|
|teleported|是否将popover的下拉列表渲染至body下|boolean|true|
|label|ColorPicker的aria-label|string|—|
|persistent|当颜色选择器未激活且persistent为false时，颜色面板将被销毁|boolean|true|
|append-to|挂载到哪个DOM元素|CSSSelector/HTMLElement|-|

### ColorPicker 事件

|事件名|说明|类型|
|--------------|-----------------|------------------|
|change|当绑定值变化时触发|(value:string)=>void|
|active-change|面板中当前显示的颜色发生改变时触发|(value:string)=>void|
|focus|当获得焦点时触发|(event:FocusEvent)=>void|
|blur|当失去焦点时触发|(event:FocusEvent)=>void|
|clear|当点击清除按钮时触发|()=>void|

### ColorPicker 暴露方法/属性

|名称|说明|类型|
|---------------|-------------|-|
|color|当前色彩对象|Color|
|show|手动显示颜色选择器|()=>void|
|hide|手动隐藏颜色选择器|()=>void|
|focus|使picker获得焦点|()=>void|
|blur|使picker失去焦点|()=>void|
