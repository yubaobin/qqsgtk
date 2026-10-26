## DatePicker的 API
### DatePicker 属性

|属性名|说明|类型|默认值|
|---|-----|-------------------|-------------|
|model-value/v-model|绑定值，如果它是数组，长度应该是2|number/string/object`Date\|[Date,Date]\|[string,string]`|''|
|readonly|只读|boolean|false|
|disabled|禁用|boolean|false|
|size|输入框尺寸|''\|'large'\|'default'\|'small'\|'mini'|—|
|editable|文本框可输入|boolean|true|
|clearable|是否显示清除按钮|boolean|true|
|placeholder|非范围选择时的占位内容|string|''|
|start-placeholder|范围选择时开始日期的占位内容|string|—|
|end-placeholder|范围选择时结束日期的占位内容|string|—|
|type|显示类型|'year'\|'years'\|'month'\|'months'\|'date'\|'dates'\|'datetime'\|'week'\|'datetimerange'\|'daterange'\|'monthrange'\|'yearrange'|date|
|format|显示在输入框中的格式|参见[dateformats](/zh-CN/component/date-picker#date-formats)|YYYY-MM-DD|
|popper-class|DatePicker下拉框的类名|string|—|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|Partial<PopperOptions>|{}|
|range-separator|选择范围时的分隔符|string|'-'|
|default-value|可选，选择器打开时默认显示的时间|object`Date\|[Date,Date]`|—|
|default-time|范围选择时选中日期所使用的当日内具体时刻|object`Date\|[Date,Date]`|—|
|value-format|可选，绑定值的格式。不指定则绑定值为Date对象|参见[dateformats](/zh-CN/component/date-picker#date-formats)|—|
|id|等价于原生input`id`属性|string/object`[string,string]`|—|
|name|等价于原生input`name`属性|string/object`[string,string]`|''|
|unlink-panels|在范围选择器里取消两个日期面板之间的联动|boolean|false|
|prefix-icon|自定义前缀图标如果`type`的值是`TimeLikeType`，那么就是`Clock`，不然就是`Calendar`|string/Component|''|
|clear-icon|自定义清除图标|string/Component|`CircleClose`|
|validate-event|是否触发表单验证|boolean|true|
|disabled-date|一个用来判断该日期是否被禁用的函数，接受一个Date对象作为参数。应该返回一个Boolean值。|(data:Date)=>boolean|—|
|shortcuts|设置快捷选项，需要传入数组对象|Array<{text:string,value:Date\|Function}>|[]|
|cell-class-name|设置自定义类名|(data:Date)=>string|—|
|teleported|是否将date-picker的下拉列表插入至body元素|boolean|true|
|empty-values|组件的空值配置[参考config-provider](./config-provider.html#空值配置)|array|—|
|value-on-clear|清空选项的值[参考config-provider](./config-provider.html#空值配置)|string/number/boolean/Function|—|
|fallback-placements|Tooltip可用的positions请查看[popper.js文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)|array`Placement[]`|—|
|placement|下拉框出现的位置|`Placement`|bottom|
|show-footer|是否显示footer|boolean|true|
|show-week-number|显示周数(除周外)|`boolean`|false|

### DatePicker 事件

|事件名|说明|类型|
|---------------|-|-------------------|
|change|当用户确认值或点击外部时触发|(val:typeofv-model)=>void|
|blur|在组件Input失去焦点时触发|(e:FocusEvent)=>void|
|focus|在组件Input获得焦点时触发|(e:FocusEvent)=>void|
|clear|可清空的模式下用户点击清空按钮时触发|()=>void|
|calendar-change|在日历所选日期更改时触发,仅用于`range`|Function`(val:[Date,null\|Date])=>void`|
|panel-change|当日期面板改变时触发。|Function`(date:Date\|[Date,Date],mode:'month'\|'year',view?:string)=>void`|
|visible-change|当DatePicker的下拉列表出现/消失时触发|(visibility:boolean)=>void|

### DatePicker 插槽

|名称|说明|
|-------------------|----------|
|default|自定义单元格内容|
|range-separator|自定义范围分割符内容|
|prev-month|上个月的图标|
|next-month|下个月的图标|
|prev-year|上一年图标|
|next-year|下一年图标|

### DatePicker 暴露方法/属性

|插槽名|说明|类型|
|---------------------|---------|-|
|focus|使组件获取焦点|()=>void|
|blur|使组件失去焦点|()=>void|
|handleOpen|打开日期选择器弹窗|()=>void|
|handleClose|关闭日期选择器弹窗|()=>void|

