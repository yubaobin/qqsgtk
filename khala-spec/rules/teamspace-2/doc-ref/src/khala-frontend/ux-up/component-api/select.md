## Select的 API
### Select 属性

|属性名|说明|类型|默认值|
|------|------|-------|---------------------|
|model-value/v-model|选中项绑定值|string/number/boolean/object/array|—|
|multiple|是否多选|boolean|false|
|options|选项的数据源，`value`的`key`和`label`和`disabled`可以通过`props`自定义.|array`Array<{[key:string]:any}>`|—|
|props|`options`的配置|{value?:string,label?:string,disabled?:boolean}|`{value:'value',label:'label',disabled:'disabled'}`|
|disabled|是否禁用|boolean|false|
|value-key|作为value唯一标识的键名，绑定值为对象类型时必填|string|value|
|size|输入框尺寸|''\|'large'\|'default'\|'small'\|'mini'|—|
|clearable|是否可以清空选项|boolean|false|
|collapse-tags|多选时是否将选中值按文字的形式展示|boolean|false|
|collapse-tags-tooltip|当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此属性，`collapse-tags`属性必须设定为true|boolean|false|
|multiple-limit|`multiple`属性设置为`true`时，代表多选场景下用户最多可以选择的项目数，为0则不限制|number|0|
|id|原生input的id|string|—|
|name|Select输入框的原生name属性|string|—|
|effect|tooltip主题，内置了`dark`/`light`两种|'dark'\|'light'/string|light|
|autocomplete|Select输入框的原生autocomplete属性|string|off|
|placeholder|占位符，默认为“请选择”|string|—|
|filterable|Select组件是否可筛选|boolean|false|
|allow-create|是否允许用户创建新条目，只有当`filterable`设置为true时才会生效。|boolean|false|
|filter-method|自定义筛选方法的第一个参数是当前输入的值。只有当`filterable`设置为`true`时才会生效。|(query:string)=>void|—|
|remote|其中的选项是否从服务器远程加载|boolean|false|
|remote-method|自定义远程搜索方法|()=>void|—|
|remote-show-suffix|远程搜索方法显示后缀图标|boolean|false|
|loading|是否正在从远程获取数据|boolean|false|
|loading-text|从服务器加载数据时显示的文本，默认为“加载中”|string|—|
|no-match-text|搜索条件无匹配时显示的文字，也可以使用`empty`插槽设置，默认是“无匹配数据”|string|—|
|no-data-text|无选项时显示的文字，也可以使用`empty`插槽设置自定义内容，默认是“无数据”|string|—|
|popper-class|选择器下拉菜单的自定义类名|string|''|
|reserve-keyword|当`multiple`和`filterable`被设置为true时，是否在选中一个选项后保留当前的搜索关键词|boolean|true|
|default-first-option|是否在输入框按下回车时，选择第一个匹配项。需配合`filterable`或`remote`使用|boolean|false|
|teleported|是否使用teleport。设置成`true`则会被追加到`append-to`的位置|boolean|true|
|append-to|下拉框挂载到哪个DOM元素|CSSSelector/HTMLElement|—|
|persistent|当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。|boolean|true|
|automatic-dropdown|对于不可搜索的Select，是否在输入框获得焦点后自动弹出选项菜单|boolean|false|
|clear-icon|自定义清除图标|string/Component|CircleClose|
|fit-input-width|下拉框的宽度是否与输入框相同|boolean|false|
|suffix-icon|自定义后缀图标组件|string/Component|ArrowDown|
|tag-type|标签类型|''\|'success'\|'info'\|'warning'\|'danger'|info|
|tag-effect|标签效果|''\|'light'\|'dark'\|'plain'|light|
|validate-event|是否触发表单验证|boolean|true|
|offset|下拉面板偏移量|number|12|
|show-arrow|下拉菜单的内容是否有箭头|boolean|true|
|placement|下拉框出现的位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|bottom-start|
|fallback-placements|dropdown可用的positions请查看[popper.js文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)|array`Placement[]`|['bottom-start','top-start','right','left']|
|max-collapse-tags|需要显示的Tag的最大数量只有当`collapse-tags`设置为true时才会生效。|number|1|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|objectdoc|{}|
|aria-label|等价于原生input`aria-label`属性|string|—|
|empty-values|组件的空值配置[参考config-provider](/zh-CN/component/config-provider.html#空值配置)|array|—|
|value-on-clear|清空选项的值[参考config-provider](/zh-CN/component/config-provider.html#空值配置)|string/number/boolean/Function|—|
|suffix-transition|下拉菜单显示/消失时后缀图标的动画|boolean|true|
|tabindex|input的tabindex|string/number|—|

### Select 事件

|事件名|说明|类型|
|--------------|--------------------|------------------|
|change|选中值发生变化时触发|(value:any)=>void|
|visible-change|下拉框出现/隐藏时触发|(visible:boolean)=>void|
|remove-tag|多选模式下移除tag时触发|(tagValue:any)=>void|
|clear|可清空的单选模式下用户点击清空按钮时触发|()=>void|
|blur|当input失去焦点时触发|(event:FocusEvent)=>void|
|focus|当input获得焦点时触发|(event:FocusEvent)=>void|
|popup-scroll|下拉滚动时触发|(data:{scrollTop:number,scrollLeft:number})=>void|

### Select 插槽

|插槽名|说明|子标签|
|----------------|----------------------|---------------------|
|default|option组件列表|OptionGroup/Option|
|header|下拉列表顶部的内容|—|
|footer|下拉列表底部的内容|—|
|prefix|Select组件头部内容|—|
|empty|无选项时的列表|—|
|tag|作为`Select`组件的内容时，子标签`data`、`selectDisabled`和`deleteTag`是在版本^(1.1.5)中新增的。|object`{data:OptionBasic[],selectDisabled:boolean,deleteTag:(event:MouseEvent,tag:OptionPublicInstance\|OptionBasic)=>void}`|
|loading|`select`组件自定义loading内容|—|
|label|`select`组件自定义标签内容|—|

### Select 暴露方法/属性

|插槽名|说明|类型|
|----------------------|-------------------|------------------------|
|focus|使选择器的输入框获取焦点|()=>void|
|blur|使选择器的输入框失去焦点，并隐藏下拉框|()=>void|
|selectedLabel|获取当前选中的标签|object`ComputedRef<string\|string[]>`|
## Select的OptionGroup API
### OptionGroup 属性

|属性名|说明|类型|默认值|
|--------|---------------|----------|-------|
|label|分组的名称|string|—|
|disabled|是否将该分组下所有选项置为禁用|boolean|false|

### OptionGroup 插槽

|属性名|说明|子标签|
|-------|-------|-------|
|default|自定义默认内容|Option|
## Select的Option API
### Option 属性

|名称|说明|类型|默认值|
|--------|-----------------------|---------------------|-----|
|value|选项的值|string/number/boolean/object|—|
|label|选项的标签，若不设置则默认与`value`相同|string/number|—|
|disabled|是否禁用该选项|boolean|false|

### Option 插槽

|名称|说明|
|-------|------|
|default|默认插槽内容|
