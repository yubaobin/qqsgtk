## Switch的 API
### Switch 属性

|属性名|说明|类型|默认值|
|----|---------|-------|-------|
|model-value/v-model|绑定值，必须等于`active-value`或`inactive-value`，默认为`Boolean`类型|boolean/string/number|false|
|disabled|是否禁用|boolean|false|
|loading|是否显示加载中|boolean|false|
|size|switch的尺寸|''\|'large'\|'default'\|'small'\|'mini'|''|
|width|switch的宽度|number/string|''|
|inline-prompt|无论图标或文本是否显示在点内，只会呈现文本的第一个字符|boolean|false|
|active-icon|switch状态为`on`时所显示图标，设置此项会忽略`active-text`|string/Component|—|
|inactive-icon|switch状态为`off`时所显示图标，设置此项会忽略`inactive-text`|string/Component|—|
|active-action-icon|`on`状态下显示的图标组件|string/Component|—|
|inactive-action-icon|`off`状态下显示的图标组件|string/Component|—|
|active-text|switch打开时的文字描述|string|''|
|inactive-text|switch的状态为`off`时的文字描述|string|''|
|active-value|switch状态为`on`时的值|boolean/string/number|true|
|inactive-value|switch的状态为`off`时的值|boolean/string/number|false|
|name|switch对应的name属性|string|''|
|validate-event|是否触发表单验证|boolean|true|
|before-change|switch状态改变前的钩子，返回`false`或者返回`Promise`且被reject则停止切换|boolean/()=>Promise<boolean>|—|
|id|input的id|string|—|
|tabindex|input的tabindex|string/number|—|
|aria-label|等价于原生input`aria-label`属性|string|—|
|active-color|当在`on`状态时的背景颜色(推荐使用CSSvar`--ux-switch-on-color`)|string|''|
|inactive-color|`off`状态时的背景颜色(推荐使用CSSvar`--ux-switch-off-color`)|string|''|
|border-color|开关的边框颜色(推荐使用CSSvar`--ux-switch-border-color`)|string|''|
|label|等价于原生input`aria-label`属性|string|—|

### Switch 事件

|事件名|说明|类型|
|------|-------------------|----------|
|change|switch状态发生变化时的回调函数|(val:boolean\|string\|number)=>void|

### Switch 插槽

|名称|说明|
|------------------------|---------------|
|active-action|自定义active行为|
|inactive-action|自定义inactive行为|

### Switch 暴露方法/属性

|方法|说明|类型|
|-----|--------------------|-|
|focus|手动focus到switch组件|()=>void|
