## Input的 API
### Input 属性

|属性名|说明|类型|默认值|
|--|----------|----------------------|-----|
|type|类型|string`'text'\|'textarea'\|'password'\|'button'\|'checkbox'\|'file'\|'number'\|'radio'\|...`等[原生input类型](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)|text|
|model-value/v-model|绑定值|string/number|—|
|maxlength|同原生`maxlength`属性|string/number|—|
|minlength|原生属性，最小输入长度|string/number|—|
|show-word-limit|是否显示统计字数,只在`type`为'text'或'textarea'的时候生效|boolean|false|
|placeholder|输入框占位文本|string|—|
|clearable|是否显示清除按钮，只有当`type`不是textarea时生效|boolean|false|
|formatter|指定输入值的格式。(只有当`type`是"text"时才能工作)|(value:string\|number)=>string|—|
|parser|指定从格式化器输入中提取的值。(仅当`type`是"text"时才起作用)|(value:string)=>string|—|
|show-password|是否显示切换密码图标|boolean|false|
|disabled|是否禁用|boolean|false|
|size|输入框尺寸，只在`type`不为'textarea'时有效|'large'\|'default'\|'small'\|'mini'|—|
|prefix-icon|自定义前缀图标|string/Component|—|
|suffix-icon|自定义后缀图标|string/Component|—|
|rows|输入框行数，仅`type`为'textarea'时有效|number|2|
|autosize|textarea高度是否自适应，仅`type`为'textarea'时生效。可以接受一个对象，比如:`{minRows:2,maxRows:6}`|boolean/{minRows?:number,maxRows?:number}|false|
|autocomplete|原生`autocomplete`属性|string|off|
|name|等价于原生input`name`属性|string|—|
|readonly|原生`readonly`属性，是否只读|boolean|false|
|max|原生`max`属性，设置最大值|—|—|
|min|原生属性，设置最小值|—|—|
|step|原生属性，设置输入字段的合法数字间隔|—|—|
|resize|控制是否能被用户缩放|'none'\|'both'\|'horizontal'\|'vertical'|—|
|autofocus|原生属性，自动获取焦点|boolean|false|
|form|原生属性|`string`|—|
|aria-label|等价于原生input`aria-label`属性|string|—|
|tabindex|输入框的tabindex|string/number|—|
|validate-event|输入时是否触发表单的校验|boolean|true|
|input-style|input元素或textarea元素的style|string/object`CSSProperties\|CSSProperties[]\|string[]`|{}|
|label|等价于原生input`aria-label`属性|string|—|
|inputmode|等价于原生input`inputmode`属性|string|—|

### Input 事件

|事件名|说明|类型|
|------|-------------|-------------------------|
|blur|当选择器的输入框失去焦点时触发|(event:FocusEvent)=>void|
|focus|当选择器的输入框获得焦点时触发|(event:FocusEvent)=>void|
|change|仅当modelValue改变时，当输入框失去焦点或用户按Enter时触发|(value:string\|number)=>void|
|input|在Input值改变时触发|(value:string\|number)=>void|
|clear|在点击由`clearable`属性生成的清空按钮时触发|()=>void|
|keydown|按下键时触发|(event:KeyboardEvent\|Event)=>void|
|mouseleave|当鼠标离开输入元素时触发|(event:MouseEvent)=>void|
|mouseenter|当鼠标进入输入元素时触发|(event:MouseEvent)=>void|
|compositionstart|输入法输入开始时触发|(event:CompositionEvent)=>void|
|compositionupdate|输入法输入改变时触发|(event:CompositionEvent)=>void|
|compositionend|输入法输入完成时触发|(event:CompositionEvent)=>void|

### Input 插槽

|插槽名|说明|
|-------|-------|
|prefix|输入框头部内容，只对非`type="textarea"`有效|
|suffix|输入框尾部内容，只对非`type="textarea"`有效|
|prepend|输入框前置内容，只对非`type="textarea"`有效|
|append|输入框后置内容，只对非`type="textarea"`有效|

### Input 暴露方法/属性

|名称|说明|类型|
|--------------------|-----------------------|------------|
|blur|使input失去焦点|()=>void|
|clear|清除input值|()=>void|
|focus|使input获取焦点|()=>void|
|input|InputHTML元素|Ref<HTMLInputElement>|
|ref|HTML元素input或textarea|Ref<HTMLInputElement\|HTMLTextAreaElement>|
|resizeTextarea|改变textarea大小|()=>void|
|select|选中input中的文字|()=>void|
|textarea|HTMLtextarea元素|Ref<HTMLTextAreaElement>|
|textareaStyle|textarea的样式|Ref<StyleValue>|
|isComposing|是否是输入composing状态|Ref<boolean>|
