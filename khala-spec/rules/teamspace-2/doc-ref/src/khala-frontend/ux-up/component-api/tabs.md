## Tabs的 API
### Tabs 属性

|属性名|说明|类型|默认值|
|---------------------|---------|------|----------|
|model-value/v-model|绑定值，选中选项卡的name，默认值是第一个tab的name|string/number|—|
|type|风格类型|''\|'card'\|'border-card'|''|
|closable|标签是否可关闭|boolean|false|
|addable|标签是否可增加|boolean|false|
|editable|标签是否同时可增加和关闭|boolean|false|
|tab-position|选项卡所在位置|'top'\|'right'\|'bottom'\|'left'|top|
|stretch|标签的宽度是否自撑开|boolean|false|
|before-leave|切换标签之前的钩子函数，若返回`false`或者返回被reject的`Promise`，则阻止切换。|(activeName:TabPaneName,oldActiveName:TabPaneName)=>Awaitable<void\|boolean>|()=>true|

### Tabs 事件

|事件名|说明|回调参数|
|----------|------------------|--------------|
|tab-click|tab被选中时触发|(pane:TabsPaneContext,ev:Event)=>void|
|tab-change|`activeName`改变时触发|(name:TabPaneName)=>void|
|tab-remove|点击tab移除按钮时触发|(name:TabPaneName)=>void|
|tab-add|点击tab新增按钮时触发|()=>void|
|edit|点击tab的新增或移除按钮后触发|(paneName:TabPaneName\|undefined,action:'remove'\|'add')=>void|

### Tabs 插槽

|插槽名|说明|子标签|
|-----|---------|--------|
|default|默认插槽|TabPane|
|add-icon|自定义添加按钮图标|—|
|addIcon|自定义添加按钮图标|—|

### Tabs 暴露方法/属性

|名称|说明|类型|
|-------------------|-|------------------|
|currentName|当前活动的面板名称|Ref<TabPaneName>|
|tabNavRef|tab-nav组件实例|Ref<TabNavInstance\|undefined>|
## Tabs的TabNav API
### TabNav 暴露方法/属性

|名称|说明|类型|
|--------------------|--|------------------|
|scrollToActiveTab|滚动到活动标签|()=>Promise<void>|
|removeFocus|移除聚焦状态|()=>boolean|
|tabListRef|ux_tabs\_\_navhtml元素|Ref<HTMLDivElement\|undefined>|
|tabBarRef|ux_tabs\_\_navbar实例|Ref<TabBarInstance\|undefined>|
## Tabs的TabPane API
### TabPane 属性

|属性名|说明|类型|默认值|
|--------|-----|---------------------|-----|
|label|选项卡标题|string|''|
|disabled|是否禁用|boolean|false|
|name|与选项卡绑定值value对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个tab是0|string/number|—|
|closable|标签是否可关闭|boolean|false|
|lazy|标签是否延迟渲染|boolean|false|

### TabPane 插槽

|插槽名|说明|
|-------|--------------|
|default|TabPane的内容|
|label|TabPane的标题内容|

