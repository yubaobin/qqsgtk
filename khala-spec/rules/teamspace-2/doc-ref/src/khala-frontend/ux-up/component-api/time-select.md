## TimeSelect的 API
### TimeSelect 属性

|属性名|说明|类型|默认值|
|-----------------------|--------------|---------------------|-----------|
|model-value/v-model|选中项绑定值|string|—|
|disabled|禁用状态|boolean|false|
|editable|文本框可输入|boolean|true|
|clearable|是否显示清除按钮|boolean|true|
|include-end-time|是否在选项中包含end|boolean|false|
|size|输入框尺寸|'large'\|'default'\|'small'\|'mini'|default|
|placeholder|非范围选择时的占位内容|string|—|
|name|原生属性|string|—|
|effect|Tooltip主题，内置了`dark`/`light`两种主题|string/'dark'\|'light'|light|
|prefix-icon|自定义前缀图标|string/Component|Clock|
|clear-icon|自定义清除图标|string/Component|CircleClose|
|start|开始时间|string|09:00|
|end|结束时间|string|18:00|
|step|间隔时间|string|00:30|
|min-time|最早时间点，早于该时间的时间段将被禁用|string|—|
|max-time|最晚时间点，晚于该时间的时间段将被禁用|string|—|
|format|设置时间格式|string见[日期格式](/zh-CN/component/date-picker#日期格式)|HH:mm|
|empty-values|组件的空值配置[参考config-provider](/zh-CN/component/config-provider#空值配置)|array|—|
|value-on-clear|清空选项的值[参考config-provider](/zh-CN/component/config-provider#空值配置)|string/number/boolean/Function|—|

### TimeSelect 事件

|事件名|说明|类型|
|--------------|--------------------|------------------|
|change|用户确认选定的值时触发|(value:string)=>void|
|blur|在组件Input失去焦点时触发|(event:FocusEvent)=>void|
|focus|在组件Input获得焦点时触发|(event:FocusEvent)=>void|
|clear|可清空的单选模式下用户点击清空按钮时触发|()=>void|

### TimeSelect 暴露方法/属性

|方法名|说明|类型|
|-----|------------|-|
|focus|使input获取焦点|()=>void|
|blur|使input失去焦点|()=>void|
