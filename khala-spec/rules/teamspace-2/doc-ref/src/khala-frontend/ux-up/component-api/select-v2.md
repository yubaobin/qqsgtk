## SelectV2的 API
### SelectV2 属性

|属性名|说明|类型|默认值|
|----------|------|-------|---------------------|
|model-value/v-model|选中项绑定值|string/number/boolean/object/array|—|
|options|选项的数据源，`value`的key和`label`可以通过`props`自定义.|array|—|
|[props](#selectv2-props)|配置选项，具体看下表|object|—|
|multiple|是否多选|boolean|false|
|disabled|是否禁用|boolean|false|
|value-key|作为value唯一标识的键名，绑定值为对象类型时必填|string|value|
|size|组件大小|''\|'large'\|'default'\|'small'\|'mini'|''|
|clearable|是否可以清空选项|boolean|false|
|clear-icon|自定义清除图标|string/Component|CircleClose|
|collapse-tags|多选时是否将选中值按文字的形式展示|boolean|false|
|multiple-limit|多选时可被选择的最大数目。当被设置为0时，可被选择的数目不设限。|number|0|
|id|原生input的id|string|—|
|name|选择器的原生name属性|string|—|
|effect|tooltip主题，内置了`dark`/`light`两种|'dark'\|'light'/string|light|
|autocomplete|自动完成选择输入|string|off|
|placeholder|占位文字|string|Pleaseselect|
|filterable|Select组件是否可筛选|boolean|false|
|allow-create|是否允许创建新条目，当使用该属性时，`filterable`必须设置为`true`|boolean|false|
|filter-method|自定义筛选方法的第一个参数是当前输入的值。当`filterable`设置为`true`时才会生效|(query:string)=>void|—|
|loading|是否从远程加载数据|boolean|false|
|loading-text|从服务器加载数据时显示的文本，默认为“加载中”|string|—|
|reserve-keyword|筛选时，是否在选择选项后保留关键字|boolean|true|
|default-first-option|是否在输入框按下回车时，选择第一个匹配项。需配合`filterable`或`remote`使用|boolean|false|
|no-match-text|搜索条件无匹配时显示的文字，也可以使用`empty`插槽设置，默认是“无匹配数据”|string|—|
|no-data-text|当在没有数据时显示的文字，你同时可以使用empty插槽进行设置，默认默认是“无数据”。|string|NoData|
|popper-class|选择器下拉菜单的自定义类名|string|''|
|teleported|是否使用teleport。设置成`true`则会被追加到`append-to`的位置|boolean|true|
|append-to|下拉框挂载到哪个DOM元素|CSSSelector/HTMLElement|—|
|persistent|当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。|boolean|true|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|objectdoc|{}|
|automatic-dropdown|对于不可搜索的Select，是否在输入框获得焦点后自动弹出选项菜单|boolean|false|
|fit-input-width|下拉框的宽度是否与输入框相同,如果`fit-input-width`的值为一个数字，则宽度将被固定|boolean/number|true|
|suffix-icon|自定义后缀图标组件|string/Component|ArrowDown|
|height|下拉菜单的高度，每一个选项为34px|number|274|
|item-height|下拉项的高度|number|34|
|scrollbar-always-on|是否总是展示滚动条|boolean|false|
|remote|是否从服务器获取数据|boolean|false|
|remote-method|当输入值发生变化时触发的函数。它的参数就是当前的输入值。当`filterable`设置为true时才会生效|(keyword:string)=>void|—|
|validate-event|是否触发表单验证|boolean|true|
|offset|下拉面板偏移量|number|12|
|show-arrow|下拉菜单的内容是否有箭头|boolean|true|
|placement|下拉框出现的位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|bottom-start|
|fallback-placements|dropdown可用的positions,更多请参考[popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)|array`Placement[]`|['bottom-start','top-start','right','left']|
|collapse-tags-tooltip|当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。只有当`collapse-tags`设置为true时才会生效。|boolean|false|
|max-collapse-tags|需要显示的Tag的最大数量。只有当`collapse-tags`设置为true时才会生效。|number|1|
|tag-type|标签类型|''\|'success'\|'info'\|'warning'\|'danger'|info|
|tag-effect|标签效果|''\|'light'\|'dark'\|'plain'|light|
|aria-label|等价于原生input`aria-label`属性|string|—|
|empty-values|组件的空值配置[参考config-provider](/zh-CN/component/config-provider.html#空值配置)|array|—|
|value-on-clear|清空选项的值[参考config-provider](/zh-CN/component/config-provider.html#空值配置)|string/number/boolean/Function|—|
|popper-append-to-body|是否将弹出框插入至body元素当弹出框的位置出现问题时，你可以尝试将该属性设置为false。|boolean|false|
|tabindex|input的tabindex|string/number|—|

### SelectV2 props

|属性|说明|类型|默认值|
|---------|-------------------|---------|--------|
|value|指定选项的值为选项对象的某个属性值|string|value|
|label|指定节点标签为节点对象的某个属性值|string|label|
|options|指定选项的子选项为选项对象的某个属性值|string|options|
|disabled|指定选项的禁用为选项对象的某个属性值|string|disabled|

### SelectV2 事件

|名称|说明|类型|
|--------------|-----------------------|------------------|
|change|当所选值更改时触发，参数是当前选中的值|(val:any)=>void|
|visible-change|当下拉菜单出现/消失时触发器,当它出现时,参数将是`true`,否则将是`false`|(visible:boolean)=>void|
|remove-tag|当一个标签在多个模式下被移除时触发，参数将被移除标签值|(tagValue:any)=>void|
|clear|可清空的单选模式下用户点击清空按钮时触发|()=>void|
|blur|当选择器的输入框失去焦点时触发|(event:FocusEvent)=>void|
|focus|当选择器的输入框获得焦点时触发|(event:FocusEvent)=>void|

### SelectV2 插槽

|名称|说明|类型|
|----------------|----------------------|------------------|
|default|自定义Option模板|-|
|header|下拉列表顶部的内容|-|
|footer|下拉列表底部的内容|-|
|empty|自定义当选项为空时的内容|-|
|prefix|输入框的前缀|-|
|tag|作为`Select`组件的内容时，子标签`data`、`selectDisabled`和`deleteTag`是在版本^(1.1.5)中新增的。|object`{data:Option[],selectDisabled:boolean,deleteTag:(event:MouseEvent,option:Option)=>void}`|
|loading|`select`组件自定义loading内容|-|
|label|`select`组件自定义标签内容|-|

### SelectV2 暴露方法/属性

|名称|说明|类型|
|----------------------|-------------------|------------------------|
|focus|使选择器的输入框获取焦点|()=>void|
|blur|使选择器的输入框失去焦点，并隐藏下拉框|()=>void|
|selectedLabel|获取当前选中的标签|object`ComputedRef<string\|string[]>`|
