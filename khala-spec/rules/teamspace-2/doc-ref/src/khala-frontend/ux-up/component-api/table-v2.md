## TableV2的 API
### TableV2 属性

|属性名|说明|类型|默认值|
|-------------------------|--------------------------|----|---------|
|cache|为了更好的渲染效果预先多加载的行数|`number`|2|
|estimated-row-height|渲染动态的单元格的预估高度|`number`|—|
|header-class|header部分的自定义class名|`string`/Function<[HeaderClassGetter](#类型声明)>|—|
|header-props|header部分的自定义props名|`object`/Function<[HeaderPropsGetter](#类型声明)>|—|
|header-cell-props|headercell部分的自定义props名|`object`/Function<[HeaderCellPropsGetter](#类型声明)>|—|
|header-height|Header的高度由`height`设置。如果传入数组，它会使headerrow等于数组长度|`number`/`number[]`|50|
|footer-height|Footer部分的高度，当传入值时，这部分将被计算入table的高度里|`number`|0|
|row-class|rowwrapper部分的自定义class名|`string`/Function<[RowClassGetter](#类型声明)>|—|
|row-key|每行的key值，如果不提供，将使用索引index代替|`string`/`Symbol`/`number`|id|
|row-props|rowcomponent部分的自定义class名|`object`/Function<[RowPropsGetter](#类型声明)>|—|
|row-height|每行的高度,用于计算表的总高度|`number`|50|
|row-event-handlers|当每行添加了一系列事件处理器时触发|`object`\<[RowEventHandlers](#类型声明)\>|-|
|cell-props|每个单元格cell的自定义props(除了headercell以外)|`object`/Function<[CellPropsGetter](#类型声明)>|—|
|columns|列column的配置数组|[Column[]](#column-attribute)|—|
|data|要在表中渲染的数据数组|[Data[]](#类型声明)|[]|
|data-getter|一个自定义方法从数据源获取数据|Function<[DataGetter\<T\>](#类型声明)>|—|
|fixed-data|渲染行在表格主内容上方和header下方区域的数据|`object`\<[Data](#类型声明)\>|—|
|expand-column-key|列的key来标记哪个行可以被展开|`string`|—|
|expanded-row-keys|存放行展开状态的key的数组，可以和`v-model`搭配使用|[KeyType[]](#类型声明)|—|
|default-expanded-row-keys|默认展开的行的key的数组,**这个数据不是响应式的**|[KeyType[]](#类型声明)|—|
|class|表格的类名称，将应用于表格的全部的三个部分(左、右、主)|`string`/`array`/`object`|—|
|fixed|单元格宽度是自适应还是固定|`boolean`|false|
|width^(required)|表格的宽度|`number`|—|
|height^(required)|表格的高度|`number`|—|
|max-height|表格的最大高度|`number`|—|
|indent-size|树形表的水平缩进|`number`|12|
|h-scrollbar-size|配置表格的水平滚动条大小，防止水平和垂直滚动条重叠。|`number`|6|
|v-scrollbar-size|配置表格的垂直滚动条大小，防止水平和垂直滚动条重叠。|`number`|6|
|scrollbar-always-on|如果开启，滚动条将一直显示，反之只会在鼠标经过时显示。|`boolean`|false|
|sort-by|排序方式|`object`\<[SortBy](#类型声明)\>|{}|
|sort-state|多个排序|`object`\<[SortState](#类型声明)\>|undefined|

### TableV2 插槽

|插槽名|参数|
|-----------|--------------------|
|cell|`object`\<[CellSlotProps](#类型声明)\>|
|header|`object`\<[HeaderSlotProps](#类型声明)\>|
|header-cell|`object`\<[HeaderCellSlotProps](#类型声明)\>|
|row|`object`\<[RowSlotProps](#类型声明)\>|
|footer|—|
|empty|—|
|overlay|—|

### TableV2 事件

|事件名|说明|参数|
|--------------------|-----------------|-------------------|
|column-sort|列排序时调用|`object`\<[ColumnSortParam](#类型声明)\>|
|expanded-rows-change|行展开状态改变时触发|[KeyType[]](#类型声明)|
|end-reached|到达表格末尾时触发。回调包含剩余距离，它通常是滚动条高度。|(remainDistance:number)=>void|
|scroll|表格被用户滚动后触发|`object`\<[ScrollParams](#类型声明)\>|
|rows-rendered|当行被渲染后触发|`object`\<[RowsRenderedParams](#类型声明)\>|
|row-expand|点击箭头图标展开/折叠树节点时触发|`object`\<[RowExpandParams](#类型声明)\>|

### TableV2 方法

|事件名|说明|参数|
|------------|---------------|-----------------|
|scrollTo|滚动到给定位置|(param:{scrollLeft?:number,scrollTop?:number})=>void|
|scrollToLeft|滚动到给定的水平位置|(scrollLeft:number)=>void|
|scrollToTop|滚动到给定的垂直位置|(scrollTop:number)=>void|
|scrollToRow|使用给定的滚动策略滚动至指定行|(row:number,strategy?:'center'\|'end'\|'start'\|'smart')=>void|

:::info primary

请注意：这些是 `JavaScript` 对象，所以您 **不能使用** 短横线命名法（kebab-case）来处理这些属性

:::
## TableV2的Column API
### TableV2Column 属性

|属性名|说明|类型|默认值|
|------------------|------|--------------|-----|
|align|表格单元格内容对齐方式|'left'\|'center'\|'right'|left|
|class|列的类名|`string`|—|
|key|唯一标志|[KeyType](#类型声明)|—|
|dataKey|data的唯一标志符|[KeyType](#类型声明)|—|
|fixed|固定列位置|`boolean`/'left'\|'right'/boolean|false|
|flexGrow|CSS属性flexgrow,仅当不是固定表时才生效|`number`|0|
|flexShrink|CSS属性flexshrink,仅当不是固定表时才生效|`number`|1|
|headerClass|自定义header头部类名|`string`|—|
|hidden|此列是否不可见|`boolean`|—|
|style|自定义列单元格的类名，将会与gird单元格合并|CSSProperties|—|
|sortable|设置列是否可排序|`boolean`|—|
|title|Header头部单元格中的默认文本|`string`|—|
|maxWidth|列的最大宽度|`number`|—|
|minWidth|列的最小宽度|`number`|—|
|width^(required)|列宽度|`number`|—|
|cellRenderer|自定义单元格渲染器|`VueComponent`/(props:[CellRenderProps](#类型声明))=>VNode|—|
|headerCellRenderer|自定义头部渲染器|`VueComponent`/(props:[HeaderRenderProps](#类型声明))=>VNode|—|

