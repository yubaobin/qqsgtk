## Autocomplete API
### Autocomplete 属性

|属性名|说明|类型|默认值|
|----------|------------|-------------------|------------|
|model-value/v-model|选中项绑定值|string|—|
|placeholder|占位文本|string|—|
|clearable|是否可清空|boolean|false|
|disabled|自动补全组件是否被禁用|boolean|false|
|value-key|输入建议对象中用于显示的键名|string|value|
|debounce|获取输入建议的防抖延时，单位为毫秒|number|300|
|placement|菜单弹出位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'|bottom-start|
|fetch-suggestions|获取输入建议的方法，仅当你的输入建议数据resolve时，通过调用`callback(data:[])`来返回它|Array/(queryString:string,callback:callbackfn)=>void|—|
|trigger-on-focus|输入框获取焦点时是否显示建议|boolean|true|
|select-when-unmatched|在输入没有任何匹配建议的情况下，按下回车是否触发`select`事件|boolean|false|
|name|等价于原生input`name`属性|string|—|
|aria-label|原生`aria-label`属性|string|—|
|hide-loading|是否隐藏远程加载时的加载图标|boolean|false|
|popper-class|下拉列表的类名|string|—|
|teleported|是否将下拉列表元素插入`append-to`指向的元素下|boolean|true|
|append-to|下拉框挂载到哪个DOM元素|CSSSelector/HTMLElement|—|
|highlight-first-item|是否默认高亮远程搜索结果的第一项|boolean|false|
|fit-input-width|下拉框的宽度是否与输入框相同|boolean|false|
|popper-append-to-body|是否将下拉列表插入至body元素。在下拉列表的定位出现问题时，可将该属性设置为false|boolean|false|
|[input属性](./input.html#input-属性)|包括`input`的所有属性|—|—|

### Autocomplete 事件

|事件名|说明|类型|
|------|----|-------|
|blur|当选择器的输入框失去焦点时触发|(event:FocusEvent)=>void|
|focus|当选择器的输入框获得焦点时触发|(event:FocusEvent)=>void|
|input|在Input值改变时触发|(value:string\|number)=>void|
|clear|在点击由`clearable`属性生成的清空按钮时触发|()=>void|
|select|点击选中建议项时触发|(item:typeofmodelValue\|any)=>void|
|change|在Input值改变时触发|(value:string\|number)=>void|

### Autocomplete 插槽

|插槽名|说明|类型|
|----------------|-------------------|---------------------|
|default|自定义输入建议的内容。|{item:Record<string,any>}|
|header|下拉列表顶部的内容|-|
|footer|下拉列表底部的内容|-|
|prefix|输入框头部内容|-|
|suffix|输入框尾部内容|-|
|prepend|输入框前置内容，在prefix之前|-|
|append|输入框后置内容，在suffix之后|-|
|loading|修改加载区域内容|-|

### Autocomplete 暴露方法/属性

|名称|说明|类型|
|----------------|----------------|-------------------------|
|activated|自动补全输入框是否被激活|Ref<boolean>|
|blur|使input失去焦点|()=>void|
|close|折叠建议列表|()=>void|
|focus|使input获取焦点|()=>void|
|handleSelect|手动触发选中建议事件|(item:any)=>promise<void>|
|handleKeyEnter|手动触发键盘回车事件|()=>promise<void>|
|highlightedIndex|当前高亮显示选项的索引|Ref<number>|
|highlight|在建议中高亮显示一个项目|(itemIndex:number)=>void|
|inputRef|ux-input组件实例|Ref<UxInputInstance>|
|loading|远程获取提示内容的加载状态指示器|Ref<boolean>|
|popperRef|ux-tooltip组件实例|Ref<UxTooltipInstance>|
|suggestions|获取自动补全结果|Ref<record<string,any>>|
|getData|加载建议列表|(queryString:string)=>void|
