## Cascader的 API
### Cascader 属性

|属性名|说明|类型|默认值|
|----------|-----|-------|------------|
|model-value/v-model|选中项绑定值|string/number/object`string[]\|number[]\|any`|—|
|options|选项的数据源，`value`和`label`可以通过`CascaderProps`自定义.|object`Record<string,unknown>[]`|—|
|[props](#cascaderprops)|配置选项,请参阅下面`CascaderProps`表。|CascaderProps|—|
|size|尺寸|'large'\|'default'\|'small'\|'mini'|—|
|placeholder|输入框占位文本|string|—|
|disabled|是否禁用|boolean|—|
|clearable|是否支持清空选项|boolean|—|
|clear-icon|自定义清除图标|string/Component|CircleClose|
|show-all-levels|输入框中是否显示选中值的完整路径|boolean|true|
|collapse-tags|多选模式下是否折叠Tag|boolean|—|
|collapse-tags-tooltip|当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此属性，`collapse-tags`属性必须设定为true|boolean|false|
|max-collapse-tags-tooltip-height|collapsetags的最大高度|string/number|—|
|separator|用于分隔选项的字符|string|'/'|
|filterable|该选项是否可以被搜索|boolean|—|
|filter-method|自定义搜索逻辑，第一个参数是`node`，第二个参数是`keyword`，返回的布尔值表示是否保留该选项|(node:CascaderNode,keyword:string)=>boolean|—|
|debounce|搜索关键词正在输入时的去抖延迟，单位为毫秒|number|300|
|before-filter|过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是`false`或者是一个被拒绝的`Promise`，那么接下来的过滤逻辑便不会执行。|(value:string)=>boolean|—|
|popper-class|弹出内容的自定义类名|string|''|
|popper-style|Cascader下拉菜单和标签提示的自定义样式|string/object|—|
|teleported|弹层是否使用teleport|boolean|true|
|effect|`tooltip`主题，内置了`dark`/`light`两种|'dark'\|'light'/string|light|
|tag-type|标签类型|'success'\|'info'\|'warning'\|'danger'|info|
|tag-effect|tageffect|'light'\|'dark'\|'plain'|light|
|validate-event|输入时是否触发表单的校验|boolean|true|
|max-collapse-tags|需要显示的Tag的最大数量只有当`collapse-tags`设置为true时才会生效。|number|1|
|empty-values|组件的空值配置[参考config-provider](/zh-CN/component/config-provider#empty-values-configurations)|array|—|
|value-on-clear|清空选项的值[参考config-provider](/zh-CN/component/config-provider#empty-values-configurations)|string/number/boolean/Function|—|
|persistent|当下拉框未被激活并且`persistent`设置为`false`，下拉框容器会被删除。|boolean|true|
|fallback-placements|Tooltip可用的positions请查看[popper.js文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)|arrary`Placement[]`|—|
|placement|下拉框出现的位置|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|bottom-start|
|popper-append-to-body|是否将弹出的内容直接插入到body元素。在弹出内容的边框定位出现问题时，可将该属性设置为false|boolean|true|
|show-checked-strategy|多选模式下已选节点的展示策略。当你想让显示更简洁时，使用`parent`。当你想显示每个子项时，使用`child`|'parent'\|'child'|child|

### Cascader 事件

|事件名|说明|类型|
|--------------|--------------------|------------|
|change|当绑定值变化时触发的事件|(value:CascaderValue)=>void|
|expand-change|当展开节点发生变化时触发|(value:CascaderValue)=>void|
|blur|当失去焦点时触发|(event:FocusEvent)=>void|
|focus|当获得焦点时触发|(event:FocusEvent)=>void|
|clear|可清空的单选模式下用户点击清空按钮时触发|()=>void|
|visible-change|下拉框出现/隐藏时触发|(value:boolean)=>void|
|remove-tag|在多选模式下，移除Tag时触发|Function`(value:CascaderNode['valueByOption'])=>void`|

### Cascader 插槽

|插槽名|说明|作用域|
|-------|------|----------|
|default|自定义备选项的节点内容，分别为当前节点的Node对象和数据|{node:any,data:any}|
|empty|无匹配选项时的内容|—|
|prefix|输入框头部内容|—|
|suggestion-item|搜索时自定义建议项内容|{item:CascaderNode}|
|tag|自定义`tag`样式|object`{data:Tag[],deleteTag:(tag:Tag)=>void}`|
|header|下拉列表顶部的内容|—|
|footer|下拉列表底部的内容|—|

### Cascader 暴露方法/属性

|属性名|说明|类型|
|----|--------------------|-----------------|
|getCheckedNodes|获取一个当前选中节点的数组。(仅仅是传单)是否只返回叶选中的节点，默认是`false`|Function`(leafOnly:boolean)=>CascaderNode[]\|undefined`|
|cascaderPanelRef|cascader面板的ref|ComputedRef<any>|
|togglePopperVisible|切换popper可见状态|(visible?:boolean)=>void|
|contentRef|cascader内容的ref|ComputedRef<any>|
|presentText|选中的内容文本|ComputedRef<string>|
|focus|使input获取焦点|()=>void|
|blur|使input失去焦点|()=>void|
## Cascader的Panel API
### CascaderPanel 属性

|属性名|说明|类型|默认值|
|---------------------|--------------------------|----------|---|
|model-value/v-model|选中项绑定值|string/number/object`string[]\|number[]\|any`|—|
|options|选项的数据源，`value`和`label`可以通过`CascaderProps`自定义.|object`Record<string,unknown>[]`|—|
|[props](#cascaderprops)|配置选项,请参阅下面`CascaderProps`表。|CascaderProps|—|

### CascaderPanel 事件

|事件名|说明|类型|
|-------------|-----|----|
|change|当选中节点变化时触发|(value:CascaderValue)=>void|
|update:modelValue|当绑定值变化时触发的事件|(value:CascaderValue\|undefined)=>void|
|expand-change|当展开节点发生变化时触发|(value:CascaderNodePathValue)=>void|
|close|面板的关闭事件，提供给Cascader以便做更好的判断。|()=>void|

### CascaderPanel 插槽

|插槽名|说明|Scope|
|--------------|---|----------|
|default|下级节点的自定义内容，它们分别是当前节点对象和节点数据。|{node:any,data:any}|
|empty|没有数据时面板的内容。|—|

### CascaderPanel 暴露方法/属性

|属性名|说明|类型|
|-----------------|--------------------|-----------------|
|getCheckedNodes|获取一个当前选中节点的数组。(仅仅是传单)是否只返回叶选中的节点，默认是`false`|Function`(leafOnly:boolean)=>CascaderNode[]\|undefined`|
|clearCheckedNodes|清空选中的节点|()=>void|
## Cascader的Props
|属性|说明|类型|默认值|
|--------------|--|----|--------|
|expandTrigger|次级菜单的展开方式|'click'\|'hover'|click|
|multiple|是否多选|boolean|false|
|checkStrictly|是否严格的遵守父子节点不互相关联|boolean|false|
|emitPath|在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置false，则只返回该节点的值|boolean|true|
|lazy|是否动态加载子节点，需与lazyLoad方法结合使用|boolean|false|
|lazyLoad|加载动态数据的方法，仅在lazy为true时有效|(node:Node,resolve:Resolve)=>void|—|
|value|指定选项的值为选项对象的某个属性值|string|value|
|label|指定选项标签为选项对象的某个属性值|string|label|
|children|指定选项的子选项为选项对象的某个属性值|string|children|
|disabled|指定选项的禁用为选项对象的某个属性值|string|disabled|
|leaf|指定选项的叶子节点的标志位为选项对象的某个属性值|string|leaf|
|hoverThreshold|hover时展开菜单的灵敏度阈值|number|500|
|checkOnClickNode|点击节点时是否选中或取消选中该节点|boolean|false|
|checkOnClickLeaf|点击叶子节点（最后一级子节点）时，是否选中或取消选中该节点|boolean|true|
|showPrefix|是否显示单选框或复选框的前缀（图标）|boolean|true|

