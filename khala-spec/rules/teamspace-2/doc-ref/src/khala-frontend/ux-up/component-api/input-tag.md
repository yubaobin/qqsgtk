## InputTag的 API
### InputTag 属性

|名称|说明|类型|默认值|
|------------|-----------|-------------------------|-----|
|model-value/v-model|绑定值|array`string[]`|—|
|max|可添加标签的最大数量|number|—|
|tag-type|标签类型|''\|'success'\|'info'\|'warning'\|'danger'|info|
|tag-effect|标签效果|''\|'light'\|'dark'\|'plain'|light|
|trigger|触发输入标签的按键|'Enter'\\|'Space'|Enter|
|draggable|是否可以拖动标签|boolean|false|
|delimiter|在匹配分隔符时添加标签|string/regex|—|
|size|输入框尺寸|'large'\|'default'\|'small'\|'mini'|—|
|save-on-blur|当输入失去焦点时是否保存输入值|boolean|true|
|clearable|是否显示清除按钮|boolean|false|
|disabled|是否禁用|boolean|false|
|validate-event|是否触发表单验证|boolean|true|
|readonly|等价于原生<code>readonly</code>属性|boolean|false|
|autofocus|等价于原生<code>autofocus</code>属性|boolean|false|
|id|等价于原生input<code>id</code>属性|string|—|
|tabindex|等价于原生<code>tabindex</code>属性|string/number|—|
|maxlength|等价于原生<code>maxlength</code>属性|string/number|—|
|minlength|等价于原生<code>minlength</code>属性|string/number|—|
|placeholder|输入框占位文本|string|—|
|autocomplete|等价于原生<code>autocomplete</code>属性|string|off|
|aria-label|等价于原生`aria-label`属性|string|—|

### InputTag 事件

|名称|说明|类型|
|----------|---------------|-----------------|
|change|绑定值变化时触发的事件|Function`(value:string[])=>void`|
|input|在Input值改变时触发|(value:string)=>void|
|add-tag|tag被添加时触发|Function`(value:string\|string[])=>void`|
|remove-tag|tag被移除时触发|(value:string)=>void|
|focus|在Input获得焦点时触发|(event:FocusEvent)=>void|
|blur|在Input失去焦点时触发|(event:FocusEvent)=>void|
|clear|点击清除图标时触发|()=>void|

### InputTag 插槽

|名称|说明|类型|
|------|-------------|--------------------|
|tag|作为tag的内容|{value:string,index:number}|
|prefix|InputTag头部内容|—|
|suffix|InputTag尾部内容|—|

### InputTag 暴露方法/属性

|名称|说明|类型|
|-----|------------|-------------------------|
|focus|使input获取焦点|()=>void|
|blur|使input失去焦点|()=>void|
