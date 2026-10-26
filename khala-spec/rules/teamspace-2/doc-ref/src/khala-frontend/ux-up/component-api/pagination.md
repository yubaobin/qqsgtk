## Pagination的 API
### Pagination 属性

|属性名|说明|类型|默认值|
|----------|-----------|---------|-----------|
|size|分页大小|'large'\|'default'\|'small'\'mini'|'default'|
|background|是否为分页按钮添加背景色|boolean|false|
|page-size/v-model:page-size|每页显示条目个数|number|—|
|default-page-size|每页默认的条目个数，不设置时默认为10|number|—|
|total|总条目数|number|—|
|page-count|总页数，`total`和`page-count`设置任意一个就可以达到显示页码的功能；如果要支持`page-sizes`的更改，则需要使用`total`属性|number|—|
|pager-count|设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠|number`5\|7\|9\|11\|13\|15\|17\|19\|21`|7|
|current-page/v-model:current-page|当前页数|number|—|
|default-current-page|当前页数的默认初始值，不设置时默认为1|number|—|
|layout|组件布局，子组件名用逗号分隔|string`string(consistsofsizes,prev,pager,next,jumper,->,total,slot)`|prev,pager,next,jumper,->,total|
|page-sizes|每页显示个数选择器的选项设置|object`number[]`|[10,20,30,40,50,100]|
|append-size-to|下拉框挂载到哪个DOM元素|string|—|
|popper-class|每页显示个数选择器的下拉框类名|string|''|
|prev-text|替代图标显示的上一页文字|string|''|
|prev-icon|上一页的图标，比`prev-text`优先级更高|string/Component|ArrowLeft|
|next-text|替代图标显示的下一页文字|string|''|
|next-icon|下一页的图标，比`next-text`优先级更低|string/Component|ArrowRight|
|disabled|是否禁用分页|boolean|false|
|teleported|是否将下拉菜单teleport至body|boolean|true|
|hide-on-single-page|只有一页时是否隐藏|boolean|false|
|small|是否使用小型分页样式|boolean|false|

:::info warning

如果发现分页器未显示，可以核对是否违反以下情形：

- `total` 和 `page-count` 必须传一个，不然组件无法判断总页数；优先使用 `page-count`;
- 如果传入了 `current-page`，必须监听 `current-page` 变更的事件（`@update:current-page`），否则分页切换不起作用；
- 如果传入了 `page-size`，且布局包含 page-size 选择器（即 `layout` 包含 `sizes`），必须监听 `page-size` 变更的事件（`@update:page-size`），否则分页大小的变化将不起作用。

:::

### Pagination 事件

|名称|说明|类型|
|---------------|---------|-------------|
|size-change|`page-size`改变时触发|(value:number)=>void|
|current-change|`current-page`改变时触发|(value:number)=>void|
|change|`current-page`或`page-size`更改时触发|(currentPage:number,pageSize:number)=>void|
|prev-click|用户点击上一页按钮改变当前页时触发|(value:number)=>void|
|next-click|用户点击下一页按钮改变当前页时触发|(value:number)=>void|

:::info warning

如果要监听 current-page 和 page-size 的改变，使用 `v-model` 双向绑定是个更好的选择。

:::

### Pagination 插槽

|名称|说明|
|-------|---------|
|default|自定义内容设置文案，需要在`layout`中列出`slot`|
