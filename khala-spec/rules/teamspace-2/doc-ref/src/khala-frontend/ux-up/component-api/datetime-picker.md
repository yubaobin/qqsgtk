## DateTimePicker的DatetimePicker API
### DatetimePicker 属性

|属性名|说明|类型|默认值|
|-----------------------|--------------|-------------------------|-------------------|
|model-value/v-model|绑定值，如果它是数组，长度应该是2|number/string/object`Date\|[Date,Date]\|[string,string]`|—|
|readonly|只读|boolean|false|
|disabled|禁用|boolean|false|
|editable|文本框可输入|boolean|true|
|clearable|是否显示清除按钮|boolean|true|
|size|输入框尺寸|'large'\|'default'\|'small'\|'mini'|default|
|placeholder|非范围选择时的占位内容|string|—|
|start-placeholder|范围选择时开始日期的占位内容|string|—|
|end-placeholder|范围选择时结束日期的占位内容|string|—|
|arrow-control|是否使用箭头进行时间选择|boolean|false|
|type|显示类型|'year'\|'month'\|'date'\|'datetime'\|'week'\|'datetimerange'\|'daterange'|date|
|format|显示在输入框中的格式|string见[日期格式](/zh-CN/component/date-picker#日期格式)|YYYY-MM-DDHH:mm:ss|
|popper-class|DateTimePicker下拉框的类名|string|—|
|range-separator|选择范围时的分隔符|string|'-'|
|default-value|可选，选择器打开时默认显示的时间|object`Date\|[Date,Date]`|—|
|default-time|选择日期后的默认时间值。如未指定则默认时间值为`00:00:00`|object`Date\|[Date,Date]`|—|
|value-format|可选，绑定值的格式。不指定则绑定值为Date对象|string见[日期格式](/zh-CN/component/date-picker#日期格式)|—|
|date-format|可选，时间选择器下拉列表中显示的日期格式|string见[日期格式](/zh-CN/component/date-picker#日期格式)|—|
|time-format|可选，时间选择器下拉列表中显示的时间格式|string见[日期格式](/zh-CN/component/date-picker#日期格式)|—|
|id|等价于原生input`id`属性|string/object`[string,string]`|—|
|name|等价于原生input`name`属性|string|—|
|unlink-panels|在范围选择器里取消两个日期面板之间的联动|boolean|false|
|prefix-icon|自定义前缀图标组件|string/`Component`|Date|
|clear-icon|自定义清除图标|string/`Component`|CircleClose|
|shortcuts|设置快捷选项，需要传入数组对象|Array<{text:string,value:Date\|Function}>|—|
|disabled-date|一个用来判断该日期是否被禁用的函数，接受一个Date对象作为参数。应该返回一个Boolean值。|(data:Date)=>boolean|—|
|disabled-hours|禁止选择部分小时选项|Function`(role:string,comparingDate?:Dayjs)=>number[]`|—|
|disabled-minutes|禁止选择部分分钟选项|Function`(hour:number,role:string,comparingDate?:Dayjs)=>number[]`|—|
|disabled-seconds|禁止选择部分秒选项|Function`(hour:number,minute:number,role:string,comparingDate?:Dayjs)=>number[]`|—|
|cell-class-name|设置自定义类名|(data:Date)=>string|—|
|teleported|是否将datetime-picker的下拉列表插入至body元素|boolean|true|
|empty-values|组件的空值配置[参考config-provider](./config-provider#空值配置)|array|—|
|value-on-clear|清空选项的值[参考config-provider](./config-provider#空值配置)|string/number/boolean/Function|—|
|show-now|是否显示`此刻`按钮|boolean|true|
|show-footer|是否显示footer|boolean|true|
|show-week-number|显示周数(除周外)|`boolean`|false|

### DatetimePicker 事件

|事件名|说明|回调参数|
|---------------|-----------|-|
|change|当用户确认值或点击外部时触发|value|
|blur|在组件Input失去焦点时触发|`(e:FocusEvent)`|
|focus|在组件Input获得焦点时触发|`(e:FocusEvent)`|
|clear|可清空的模式下用户点击清空按钮时触发|()=>void|
|calendar-change|如果用户没有选择日期，那默认展示当前日的月份。仅用于`range`	|Function`(val:[Date,null\|Date])=>void`|
|panel-change|当日期面板改变时触发。|Function`(date:Date\|[Date,Date],mode:'month'\|'year',view?:string)=>void`|
|visible-change|当`DateTimePicker`的下拉列表出现/消失时触发|(visibility:boolean)=>void|

### DatetimePicker 插槽

|插槽名|说明|
|-------------------|----------|
|default|自定义单元格内容|
|range-separator|自定义范围分割符内容|
|prev-month|上个月的图标|
|next-month|下个月的图标|
|prev-year|上一年图标|
|next-year|下一年图标|

### DatetimePicker 暴露方法/属性

|方法名|说明|类型|
|-------------|-------|-|
|focus|使组件获取焦点|()=>void|
|blur|使组件失去焦点|()=>void|
