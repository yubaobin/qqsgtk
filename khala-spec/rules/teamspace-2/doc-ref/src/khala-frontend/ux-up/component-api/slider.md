## Slider的 API
### Slider 属性

|属性名|说明|类型|默认值|
|--|---------|-------|-------|
|model-value/v-model|选中项绑定值|number/object`number[]`|0|
|min|最小值|number|0|
|max|最大值|number|100|
|disabled|是否禁用|boolean|false|
|step|步长|number|1|
|show-input|是否显示输入框，仅在非范围选择时有效|boolean|false|
|show-input-controls|在显示输入框的情况下，是否显示输入框的控制按钮|boolean|true|
|size|slider包装器的大小，垂直模式下该属性不可用|''\|'large'\|'default'\|'small'\|'mini'|default|
|input-size|输入框的大小，如果设置了`size`属性，默认值自动取`size`|''\|'large'\|'default'\|'small'\|'mini'|default|
|show-stops|是否显示间断点|boolean|false|
|show-tooltip|是否显示提示信息|boolean|true|
|format-tooltip|格式化提示信息|(value:number)=>number\|string|—|
|range|是否开启选择范围|boolean|false|
|vertical|垂直模式|boolean|false|
|height|滑块高度，垂直模式必填|string|—|
|aria-label|原生`aria-label`属性|string|—|
|range-start-label|当`range`为true时，屏幕阅读器标签开始的标记|string|—|
|range-end-label|当`range`为true时，屏幕阅读器标签结尾的标记|string|—|
|format-value-text|显示屏幕阅读器的`aria-valuenow`属性的格式|(value:number)=>string|—|
|debounce|输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效|number|300|
|tooltip-class|tooltip的自定义类名|string|—|
|placement|Tooltip出现的位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|top|
|marks|标记，key的类型必须为`number`且取值在闭区间`[min,max]`内，每个标记可以单独设置样式|SliderMarks|—|
|validate-event|输入时是否触发表单的校验|boolean|true|
|persistent|当`slider`的`tooltip`处于非活动状态且`persistent`为`false`时，`tooltip`将被销毁。当`show-tooltip`为`false`时，`persistent`将始终为`false`。|boolean|true|
|label|原生`aria-label`属性|string|—|

### Slider 事件

|事件名|说明|类型|
|------|-------------------------|---------|
|change|值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）|(value:Arrayable<number>)=>boolean|
|input|数据改变时触发（使用鼠标拖曳时，活动过程实时触发）|(value:Arrayable<number>)=>boolean|

