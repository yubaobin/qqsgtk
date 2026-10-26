## Radio的 API
### Radio 属性

|属性名|说明|类型|默认值|
|---------------------|-------------------|-----------------|-----|
|model-value/v-model|选中项绑定值|string/number/boolean|—|
|value|单选框的值|string/number/boolean|—|
|label|单选框的label如果`value`没有值，`label`则作为`value`使用|string/number/boolean|—|
|disabled|是否禁用单选框|boolean|false|
|border|是否显示边框|boolean|false|
|size|单选框的尺寸|'large'\|'default'\|'small'\|'mini'|—|
|name|原始`name`属性|string|—|

### Radio 事件

|事件名|说明|类型|
|------|-----------|------------|
|change|绑定值变化时触发的事件|(value:string\|number\|boolean)=>void|

### Radio 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
## Radio的Group API
### RadioGroup 属性

|属性名|说明|类型|默认值|
|--|--------|---------|-------|
|model-value/v-model|绑定值|string/number/boolean|—|
|size|单选框按钮或边框按钮的大小|'large'\|'default'\|'small'\|'mini'|default|
|disabled|是否禁用|boolean|false|
|text-color|按钮形式的Radio激活时的文本颜色|string|#ffffff|
|fill|按钮形式的Radio激活时的填充色和边框色|string|#409eff|
|validate-event|输入时是否触发表单的校验|boolean|true|
|aria-label|与RadioGroup中的`aria-label`属性相同|string|—|
|name|原生`name`属性|string|—|
|id|原生`id`属性|string|—|
|label|与RadioGroup中的`aria-label`属性相同|string|—|

### RadioGroup 事件

|事件名|说明|类型|
|------|-----------|------------|
|change|绑定值变化时触发的事件|(value:string\|number\|boolean)=>void|

### RadioGroup 插槽

|插槽名|说明|子标签|
|-------|-------|-------------------|
|default|自定义默认内容|Radio/RadioButton|
## Radio的Button API
### RadioButton 属性

|属性名|说明|类型|默认值|
|--------------|-----------------|---------|-----|
|value|单选框的值|string/number/boolean|—|
|label|单选框的label如果没有value，`label`则作为`value`使用|string/number/boolean|—|
|disabled|是否禁用单选框|boolean|false|
|name|原生name属性|string|—|

### RadioButton 插槽

|插槽名|说明|
|-------|------|
|default|默认插槽内容|
