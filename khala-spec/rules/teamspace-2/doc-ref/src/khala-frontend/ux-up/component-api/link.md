## Link的 API
### Link 属性

|属性名|说明|类型|默认值|
|---------|---------------|---------|--------|
|type|类型|'primary'\|'success'\|'warning'\|'danger'\|'info'\|'default'|default|
|underline|控制下划线是否出现|'always'\|'hover'\|'never'\|boolean|hover|
|disabled|是否禁用状态|boolean|false|
|href|原生href属性|string|—|
|target|同原生`target`属性|enum`'_blank'\|'_parent'\|'_self'\|'_top'`|\_self|
|icon|图标组件|string/Component|—|

### Link 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
|icon|自定义图标组件|
