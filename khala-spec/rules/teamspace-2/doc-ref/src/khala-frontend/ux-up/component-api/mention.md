## Mention的 API
### Mention 属性

|名称|说明|类型|默认值|
|-----------|------------|-------|----------|
|options|提及选项列表|array`MentionOption[]`|`[]`|
|prefix|触发字段的前缀。字符串长度必须且只能为1|string\\|array`string[]`|`'@'`|
|split|用于拆分提及的字符。字符串长度必须且只能为1|string|`''`|
|filter-option|定制筛选器选项逻辑|false\\|(pattern:string,option:MentionOption)=>boolean|—|
|placement|设置弹出位置|string`'bottom'\\|'top'`|`'bottom'`|
|show-arrow|下拉菜单的内容是否有箭头|boolean|`false`|
|offset|下拉面板偏移量|number|`0`|
|whole|当退格键被按下做删除操作时，是否将提及部分作为整体删除|boolean|`false`|
|check-is-whole|当退格键被按下做删除操作时，检查是否将提及部分作为整体删除|(pattern:string,prefix:string)=>boolean|—|
|loading|提及的下拉面板是否处于加载状态|boolean|`false`|
|model-value/v-model|输入值|string|—|
|popper-class|自定义浮层类名|string|—|
|popper-options|自定义popper选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)|object|—|
|`inputprops`|[ux-input](/zh-CN/component/input#input-属性)属性|—|—|

### Mention 事件

|名称|说明|类型|
|--------|----------|------------|
|search|按下触发字段时触发|(pattern:string,prefix:string)=>void|
|select|当用户选择选项时触发|(option:MentionOption,prefix:string)=>void|
|whole-remove|当整个`mention`被移除，且`whole`为`true`或`check-is-whole`为`true`时触发。|(pattern:string,prefix:string)=>void|
|`inputevents`|[ux-input](/zh-CN/component/input#input-事件)事件|—|

### Mention 插槽

|名称|说明|类型|
|------|-------------|--------------------------|
|label|自定义标签内容|{item:MentionOption,index:number}|
|loading|自定义loading内容|—|
|header|下拉列表顶部的内容|—|
|footer|下拉列表底部的内容|—|
|`inputslots`|[ux-input](/zh-CN/component/input#input-插槽)插槽|—|

### Mention 暴露方法/属性

|名称|说明|类型|
|-------------------------|---------------|------------------|
|input|ux-input组件实例|Ref<InputInstance\\|null>|
|tooltip|ux-tooltip组件实例|Ref<TooltipInstance\\|null>|
|dropdownVisible|tooltip显示状态|ComputedRef<boolean>|

