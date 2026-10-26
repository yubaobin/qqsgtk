## Transfer的 API
### Transfer 属性

|属性名|说明|类型|默认值|
|---------------------|-------------|-------------------------|--------|
|model-value/v-model|选中项绑定值|Array<string\|number>|[]|
|data|Transfer的数据源|object`Record<string,any>[]`|[]|
|filterable|是否可搜索|boolean|false|
|filter-placeholder|搜索框占位符|string|—|
|filter-method|自定义搜索方法|(query:string,item:Record<string,any>)=>boolean|—|
|target-order|右侧列表元素的排序策略：若为`original`，则保持与数据源相同的顺序；若为`push`，则新加入的元素排在最后；若为`unshift`，则新加入的元素排在最前|'original'\|'push'\|'unshift'|original|
|titles|自定义列表标题|object`[string,string]`|[]|
|button-texts|自定义按钮文案|object`[string,string]`|[]|
|render-content|自定义数据项渲染函数|renderContent|—|
|format|列表顶部勾选状态文案|TransferFormat|{}|
|[props](#类型声明)|数据源的字段别名|TransferPropsAlias|—|
|left-default-checked|初始状态下左侧列表的已勾选项的key数组|Array<string\|number>|[]|
|right-default-checked|初始状态下右侧列表的已勾选项的key数组|Array<string\|number>|[]|
|validate-event|是否触发表单验证|boolean|true|
|button-size|中间操作按钮的尺寸|'large'\|'default'\|'small'\|'mini'|mini|

### Transfer 事件

|事件名|说明|类型|
|------------------|---------------------|---------------------------|
|change|右侧列表元素变化时触发|Function`(value:TransferKey[],direction:TransferDirection,movedKeys:TransferKey[])=>void`|
|left-check-change|左侧列表元素被用户选中/取消选中时触发|Function`(value:TransferKey[],movedKeys?:TransferKey[])=>void`|
|right-check-change|右侧列表元素被用户选中/取消选中时触发|Function`(value:TransferKey[],movedKeys?:TransferKey[])=>void`|

### Transfer 插槽

|插槽名|说明|
|--------------------|----|
|default|自定义数据项的内容，参数为`{option}`|
|left-footer|左侧列表底部的内容|
|right-footer|右侧列表底部的内容|
|left-empty|左侧面板为空或没有数据符合筛选条件时的内容|
|right-empty|右侧面板为空或没有数据符合筛选条件时的内容|

### Transfer 暴露方法/属性

|名称|说明|类型|
|----------|------------|-------------------------|
|clearQuery|清空某个面板的搜索关键词|(which:TransferDirection)=>void|
|leftPanel|左侧面板ref|Ref<TransferPanelInstance>|
|rightPanel|右侧面板ref|Ref<TransferPanelInstance>|
## Transfer的Panel API
### TransferPanel 暴露方法/属性

|名称|说明|类型|
|-----|-----|---------|
|query|过滤关键词|string|

