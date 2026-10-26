## TimePicker的 API
### TimePicker 属性

|属性名|说明|类型|默认值|
|--|--------------|-----------------------|-----------|
|model-value/v-model|绑定值，如果它是数组，长度应该是2|number/string/object`Date\|[Date,Date]\|[number,number]\|[string,string]`|''|
|readonly|完全只读|boolean|false|
|disabled|禁用|boolean|false|
|editable|文本框可输入|boolean|true|
|clearable|是否显示清除按钮|boolean|true|
|size|输入框尺寸|'large'\|'default'\|'small'|—|
|placeholder|非范围选择时的占位内容|string|''|
|start-placeholder|范围选择时开始日期的占位内容|string|—|
|end-placeholder|范围选择时结束日期的占位内容|string|—|
|is-range|是否为时间范围选择|boolean|false|
|arrow-control|是否使用箭头进行时间选择|boolean|false|
|popper-class|TimePicker下拉框的类名|string|''|
|range-separator|选择范围时的分隔符|string|'-'|
|format|显示在输入框中的格式|stringsee[dateformats](/zh-CN/component/date-picker#日期格式)|—|
|default-value|可选，选择器打开时默认显示的时间|Date/object`[Date,Date]`|—|
|value-format|可选，绑定值的格式。不指定则绑定值为Date对象|string见[日期格式](/zh-CN/component/date-picker#日期格式)|—|
|id|等价于原生input`id`属性|string/object`[string,string]`|—|
|name|等价于原生input`name`属性|string|''|
|aria-label|等价于原生input`aria-label`属性|string|—|
|prefix-icon|自定义前缀图标|string/Component|Clock|
|clear-icon|自定义清除图标|string/Component|CircleClose|
|disabled-hours|禁止选择部分小时选项|Function`(role:string,comparingDate?:Dayjs)=>number[]`|—|
|disabled-minutes|禁止选择部分分钟选项|Function`(hour:number,role:string,comparingDate?:Dayjs)=>number[]`|—|
|disabled-seconds|禁止选择部分秒选项|Function`(hour:number,minute:number,role:string,comparingDate?:Dayjs)=>number[]`|—|
|teleported|是否将popover的下拉列表镜像至body元素|boolean|true|
|tabindex|输入框的tabindex|string/number|0|
|empty-values|组件的空值配置[参考config-provider](/zh-CN/component/config-provider#empty-values-configurations)|array|—|
|value-on-clear|清空选项的值[参考config-provider](/zh-CN/component/config-provider#empty-values-configurations)|string/number/boolean/Function|—|
|label|等价于原生input`aria-label`属性|string|—|

### TimePicker 事件

|事件名|说明|类型|
|--------------|-|----------------|
|change|用户确认选定的值时触发|Function`(val:number\|string\|Date\|[number,number]\|[string,string]\|[Date,Date])=>void`|
|blur|在组件Input失去焦点时触发|(e:FocusEvent)=>void|
|focus|在组件Input获得焦点时触发|(e:FocusEvent)=>void|
|clear|可清空的模式下用户点击清空按钮时触发|()=>void|
|visible-change|当TimePicker的下拉列表出现/消失时触发|(visibility:boolean)=>void|

### TimePicker 暴露方法/属性

|名称|说明|类型|
|---------------------|---------|-|
|focus|使组件获取焦点|()=>void|
|blur|使组件失去焦点|()=>void|
|handleOpen|打开时间选择器弹窗|()=>void|
|handleClose|关闭时间选择器弹窗|()=>void|
