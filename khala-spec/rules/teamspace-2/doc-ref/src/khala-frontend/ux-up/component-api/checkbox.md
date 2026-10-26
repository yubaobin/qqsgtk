## Checkbox的 API
### Checkbox 属性

|属性名|说明|类型|默认值|
|-----|--------------|---------------------|-----|
|model-value/v-model|选中项绑定值|string/number/boolean|—|
|value|选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）|string/number/boolean/object|—|
|label|选中状态的值，只有在绑定对象类型为`array`时有效。如果没有value，`label`则作为`value`使用|string/number/boolean/object|—|
|true-value|选中时的值|string/number|—|
|false-value|没有选中时的值|string/number|—|
|disabled|是否禁用|boolean|false|
|border|是否显示边框|boolean|false|
|size|Checkbox的尺寸|'large'\|'default'\|'small'\|'mini'|—|
|name|原生name属性|string|—|
|checked|当前是否勾选|boolean|false|
|indeterminate|设置不确定状态，仅负责样式控制|boolean|false|
|validate-event|输入时是否触发表单的校验|boolean|true|
|tabindex|输入框的tabindex|string/number|—|
|id|inputid|string|—|
|aria-controls|与[aria-control](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/属性/aria-controls)一致,当`indeterminate`为`true`时生效|string|—|
|aria-label^(a11y)|原生`aria-label`属性|string|—|
|true-label|选中时的值|string/number|—|
|false-label|没有选中时的值|string/number|—|
|controls|和[aria-control](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/属性/aria-controls)一致。当`indeterminate`为`true`时生效|string|—|

### Checkbox 事件

|事件名|说明|类型|
|------|------------|------------|
|change|当绑定值变化时触发的事件|(value:string\|number\|boolean)=>void|

### Checkbox 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
## Checkbox的Group API
### CheckboxGroup 属性

|属性名|说明|类型|默认值|
|--|--------------------|-----------------|-------|
|model-value/v-model|绑定值|object`string[]\|number[]`|[]|
|size|多选框组尺寸|'large'\|'default'\|'small'|—|
|disabled|是否禁用|boolean|false|
|min|可被勾选的checkbox的最小数量|number|—|
|max|可被勾选的checkbox的最大数量|number|—|
|aria-label|原生`aria-label`属性|string|—|
|text-color|当按钮为活跃状态时的字体颜色|string|#ffffff|
|fill|当按钮为活跃状态时的边框和背景颜色|string|#409eff|
|tag|复选框组元素标签|string|div|
|validate-event|是否触发表单验证|boolean|true|
|label|原生`aria-label`属性|string|—|
<!-- | options ^(1.1.4)           | 选项的数据源，`value` 的 `key` 和 `label` 和  disabled可以通过 `props`自定义。 | array`Array<{[key: string]: any}>`                            | —                                                        |
| props ^(1.1.4)             | options 的配置                                                                      | { value?: string, label?: string, disabled?: boolean} | `{value: 'value', label: 'label', disabled: 'disabled'}` |
| type ^(1.1.4)              | 用于渲染选项的组件类型（例如 'button'）                               | 'checkbox' \| 'button'                                  | checkbox                                               | -->

### CheckboxGroup 事件

|事件名|说明|类型|
|------|------------|----|
|change|当绑定值变化时触发的事件|Function`(value:string[]\|number[])=>void`|

### CheckboxGroup 插槽

|插槽名|说明|子标签|
|-------|-------|-|
|default|自定义默认内容|Checkbox/Checkbox-button|
## Checkbox的Button API
### CheckboxButton 属性

|属性名|说明|类型|默认值|
|-------------------------|------------|---------------------|-----|
|value|选中状态的值，只有在绑定对象类型为`array`时有效。|string/number/boolean/object|—|
|label|选中状态的值，只有在绑定对象类型为`array`时有效。如果没有value，`label`则作为`value`使用|string/number/boolean/object|—|
|true-value|选中时的值|string/number|—|
|false-value|没有选中时的值|string/number|—|
|disabled|是否禁用|boolean|false|
|name|原生name属性|string|—|
|checked|当前是否勾选|boolean|false|
|true-label|选中时的值|string/number|—|
|false-label|没有选中时的值|string/number|—|

### CheckboxButton 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
