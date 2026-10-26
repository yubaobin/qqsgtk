## Menu的 API
### Menu 属性

|属性名|说明|类型|默认值|
|------|-------------|--------------|--------|
|mode|菜单展示模式|'horizontal'\|'vertical'|vertical|
|collapse|是否水平折叠收起菜单（仅在mode为vertical时可用）|boolean|false|
|ellipsis|是否省略多余的子项（仅在横向模式生效）|boolean|true|
|ellipsis-icon|自定义省略图标(仅在水平模式下可用)|string/Component|—|
|popper-offset|弹出层的偏移量(对所有子菜单有效)|number|6|
|default-active|页面加载时默认激活菜单的index|string|''|
|default-openeds|默认打开的sub-menu的index的数组|object`string[]`|[]|
|unique-opened|是否只保持一个子菜单的展开|boolean|false|
|menu-trigger|子菜单打开的触发方式，只在`mode`为horizontal时有效。|'hover'\|'click'|hover|
|router|是否启用`vue-router`模式。启用该模式会在激活导航时以index作为path进行路由跳转使用`default-active`来设置加载时的激活项。|boolean|false|
|collapse-transition|是否开启折叠动画|boolean|true|
|popper-effect|Tooltip主题，内置了`dark`/`light`两种主题，当菜单折叠时生效。|'dark'\|'light'/string|dark|
|close-on-click-outside|可选，单击外部时是否折叠菜单|boolean|false|
|popper-class|为popper添加类名|string|—|
|show-timeout|菜单出现前的延迟|number|300|
|hide-timeout|菜单消失前的延迟|number|300|
|background-color|菜单的背景颜色(十六进制格式)(推荐在样式类中使用`--ux-menu-bg-color`)|string|#ffffff|
|text-color|菜单的文字颜色(十六进制格式)(推荐在样式类中使用`--ux-menu-text-color`)|string|#303133|
|active-text-color|活动菜单项的文本颜色（十六进制格式）（推荐使用cssvar`--ux-menu-active-color`）|string|#409eff|
|persistent|当菜单处于非活动状态且`persistent`为`false`时，下拉菜单将被销毁|boolean|true|

### Menu 事件

|事件名|说明|类型|
|------|--------------|---|
|select|菜单激活回调|MenuSelectEvent|
|open|sub-menu展开的回调|MenuOpenEvent|
|close|sub-menu收起的回调|MenuCloseEvent|

### Menu 插槽

|插槽名|说明|子标签|
|-------|-------|------------|
|default|自定义默认内容|SubMenu/Menu-Item/Menu-Item-Group|

### Menu 暴露方法/属性

|属性名|说明|类型|
|-----|------------------------|--------------|
|open|打开一个特定的子菜单，参数是要打开的子菜单的索引|(index:string)=>void|
|close|关闭一个特定的子菜单，参数是要关闭子菜单的索引|(index:string)=>void|
|updateActiveIndex|通过索引激活指定菜单|(index:string)=>void|
## Menu的Sub API
### SubMenu 属性

|插槽名|说明|类型|默认值|
|-------------------|----------------------|------------------------|---------|
|index^(required)|唯一标志|string|—|
|popper-class|为popper添加类名|string|—|
|show-timeout|子菜单出现之前的延迟，(继承menu的`show-timeout`配置)|number|—|
|hide-timeout|子菜单消失之前的延迟，(继承menu的`hide-timeout`配置)|number|—|
|disabled|是否禁用|boolean|false|
|teleported|是否将弹出菜单挂载到body上，第一级SubMenu默认值为true，其他SubMenus的值为false|boolean|undefined|
|popper-offset|弹出窗口的偏移量(覆盖`popper`的菜单)|number|—|
|expand-close-icon|父菜单展开且子菜单关闭时的图标，`expand-close-icon`和`expand-open-icon`需要一起配置才能生效|string/Component|—|
|expand-open-icon|父菜单展开且子菜单打开时的图标，`expand-open-icon`和`expand-close-icon`需要一起配置才能生效|string/Component|—|
|collapse-close-icon|父菜单收起且子菜单关闭时的图标，`collapse-close-icon`和`collapse-open-icon`需要一起配置才能生效|string/Component|—|
|collapse-open-icon|父菜单收起且子菜单打开时的图标，`collapse-open-icon`和`collapse-close-icon`需要一起配置才能生效|string/Component|—|

### SubMenu 插槽

|属性名|说明|子标签|
|-------|-------|------------|
|default|自定义默认内容|SubMenu/MenuItem/MenuItemGroup|
|title|自定义标题内容|—|
## Menu的Item API
### MenuItem 属性

|事件名|说明|类型|默认值|
|--------|----------------|---------------------|-----|
|index|唯一标志|string/null|null|
|route|VueRoute路由位置参数|string/object|—|
|disabled|是否禁用|boolean|false|

### MenuItem 事件

|插槽名|说明|类型|
|-----|--------------------|-------------------------|
|click|点击菜单项时回调函数,参数为菜单项实例|(item:MenuItemRegistered)=>void|

### MenuItem 插槽

|属性名|说明|
|-------|-------|
|default|自定义默认内容|
|title|自定义标题内容|
## Menu的ItemGroup API
### MenuItemGroup 属性

|插槽名|说明|类型|默认值|
|-----|---|---------|---|
|title|组标题|string|—|

### MenuItemGroup 插槽

|名称|说明|子标签|
|-------|--------|---------|
|default|默认插槽内容|MenuItem|
|title|自定义组标题内容|—|

