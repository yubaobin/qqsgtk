## InputNumber的 API
### InputNumber 属性

|属性名|说明|类型|默认值|
|--|---|---------------------|---------|
|model-value/v-model|选中项绑定值|number/null|—|
|min|设置计数器允许的最小值|number|Number.MIN_SAFE_INTEGER|
|max|设置计数器允许的最大值|number|Number.MAX_SAFE_INTEGER|
|step|计数器步长|number|1|
|step-strictly|是否只能输入step的倍数|boolean|false|
|precision|数值精度|number|—|
|size|计数器尺寸|'large'\|'default'\|'small'\|'mini'|default|
|readonly|原生`readonly`属性，是否只读|boolean|false|
|disabled|是否禁用状态|boolean|false|
|controls|是否使用控制按钮|boolean|true|
|controls-position|控制按钮位置|''\|'right'|—|
|name|等价于原生input`name`属性|string|—|
|aria-label|等价于原生input`aria-label`属性|string|—|
|placeholder|等价于原生input`placeholder`属性|string|—|
|id|等价于原生input`id`属性|string|—|
|value-on-clear|当输入框被清空时显示的值|number/null/'min'\|'max'|—|
|validate-event|是否触发表单验证|boolean|true|
|label|等价于原生input`aria-label`属性|string|—|
|inputmode|等价于原生input`inputmode`属性|string|—|
|align|内部输入文本对齐|'left'\|'center'\|'right'|'center'|
|disabled-scientific|禁用科学计数法的输入（例如输入'e'）|boolean|false|

### InputNumber 插槽

|事件名|说明|
|----------------------|------------|
|decrease-icon|自定义输入框按钮减少图标|
|increase-icon|自定义输入框按钮增加图标|
|prefix|输入框头部内容|
|suffix|输入框尾部内容|

### InputNumber 事件

|名称|说明|类型|
|------|-----------------|-----------------|
|change|绑定值被改变时触发|(currentValue:number\|undefined,oldValue:number\|undefined)=>void|
|blur|在组件Input失去焦点时触发|(event:FocusEvent)=>void|
|focus|在组件Input获得焦点时触发|(event:FocusEvent)=>void|

### InputNumber 暴露方法/属性

|名称|说明|类型|
|-----|--------------|-|
|focus|使input组件获得焦点|()=>void|
|blur|使input组件失去焦点|()=>void|
