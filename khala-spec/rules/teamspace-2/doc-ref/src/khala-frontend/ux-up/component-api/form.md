## Form的 API
### Form 属性

|属性名|说明|类型|默认值|
|--------|--------------------|------------------------|-----|
|model|表单数据对象|Record<string,any>|—|
|rules|表单验证规则|FormRules|—|
|inline|行内表单模式|boolean|false|
|label-position|表单域标签的位置，当设置为`left`或`right`时，则也需要设置`label-width`属性|'left'\|'right'\|'top'|right|
|label-width|标签的长度，例如`'50px'`。作为Form直接子元素的form-item会继承该值。可以使用`auto`。|string/number|''|
|label-suffix|表单域标签的后缀|string|''|
|hide-required-asterisk|是否隐藏必填字段标签旁边的红色星号。|boolean|false|
|require-asterisk-position|星号的位置。|'left'\|'right'|left|
|show-message|是否显示校验错误信息|boolean|true|
|inline-message|是否以行内形式展示校验信息|boolean|false|
|status-icon|是否在输入框中显示校验结果反馈图标|boolean|false|
|validate-on-rule-change|是否在`rules`属性改变后立即触发一次验证|boolean|true|
|size|用于控制该表单内组件的尺寸|''\|'large'\|'default'\|'small'|—|
|disabled|是否禁用该表单内的所有组件。如果设置为`true`,它将覆盖内部组件的`disabled`属性|boolean|false|
|scroll-to-error|当校验失败时，滚动到第一个错误表单项|boolean|false|
|scroll-into-view-options|当校验有失败结果时，滚动到第一个失败的表单项目可通过[scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)配置|ScrollIntoViewOptions/boolean|true|

### Form 事件

|名称|说明|类型|
|--------|-----------|----|
|validate|任一表单项被校验后触发|(prop:FormItemProp,isValid:boolean,message:string)=>void|

### Form 插槽

|事件名|说明|子标签|
|-------|-------|--------|
|default|自定义默认内容|FormItem|

### Form 暴露方法/属性

|名称|说明|类型|
|---------------|------------|---------------|
|validate|对整个表单的内容进行验证。接收一个回调函数，或返回`Promise`。|(callback?:FormValidateCallback)=>Promise<void>|
|validateField|验证具体的某个字段。|(props?:Arrayable<FormItemProp>\|undefined,callback?:FormValidateCallback\|undefined)=>FormValidationResult|
|resetFields|重置该表单项，将其值重置为初始值，并移除校验结果|(props?:Arrayable<FormItemProp>\|undefined)=>void|
|scrollToField|滚动到指定的字段|(prop:FormItemProp)=>void|
|clearValidate|清理某个字段的表单验证信息。|(props?:Arrayable<FormItemProp>\|undefined)=>void|
|fields|获取所有字段的context|array`FormItemContext[]`|
|getField|获取字段的context。|(prop:FormItemProp)=>FormItemContext\|undefined|
## Form的Item API
### FormItem 属性

|属性名|说明|类型|默认值|
|-----------------------|----|----|-------|
|prop|`model`的键名。它可以是一个属性的值(如`a.b.0`或`['a','b','0']`)。在使用了`validate`、`resetFields`的方法时，该属性是必填的。|string/^[string&#91;&#93;]|—|
|label|标签文本|string|—|
|label-position|表单域标签的位置，当设置为`left`或`right`时，则也需要设置`label-width`属性默认会继承`Form`的`label-position`|'left'\|'right'\|'top'|''|
|label-width|标签宽度，例如`'50px'`。可以使用`auto`。|string/number|''|
|required|是否为必填项，如不设置，则会根据校验规则确认|boolean|—|
|rules|表单验证规则,具体配置见[下表](#formitemrule),更多内容可以参考[async-validator](https://github.com/yiminghe/async-validator)|Arrayable<FormItemRule>|—|
|error|表单域验证错误时的提示信息。设置该值会导致表单验证状态变为error，并显示该错误信息。|string|—|
|show-message|是否显示校验错误信息|boolean|true|
|inline-message|是否在行内显示校验信息|string/boolean|''|
|size|用于控制该表单域下组件的默认尺寸|''\|'large'\|'default'\|'small'|—|
|for|和原生标签相同能力|string|—|
|validate-status|formitem校验的状态|''\|'error'\|'validating'\|'success'|—|

#### FormItemRule

|名称|说明|类型|默认值|
|-------|---------|---|---|
|trigger|验证逻辑的触发方式|'blur'\|'change'|—|

:::info primary

如果您不想根据输入事件触发验证器， 在相应的输入类型组件上设置 `validate-event` 属性为 `false` (`<ux-input>`, `<ux-radio>`, `<ux-select>`, . ……).

:::

### FormItem 插槽

|插槽名|说明|类型|
|-------|-----------|---|
|default|表单的内容。|—|
|label|标签位置显示的内容|{label:string}|
|error|验证错误信息的显示内容|{error:string}|

### FormItem 暴露方法/属性

|名称|说明|类型|
|---------------|-|----|
|size|表单项大小|ComputedRef<''\|'large'\|'default'\|'small'>|
|validateMessage|校验消息|Ref<string>|
|validateState|校验状态|Ref<''\|'error'\|'validating'\|'success'>|
|validate|验证表单项|(trigger:string,callback?:FormValidateCallback\|undefined)=>FormValidationResult|
|resetField|对该表单项进行重置，将其值重置为初始值并移除校验结果|()=>void|
|clearValidate|移除该表单项的校验结果|()=>void|

