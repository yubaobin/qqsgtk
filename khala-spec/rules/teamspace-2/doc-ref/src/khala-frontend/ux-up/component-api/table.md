## Table的 API
### Table 属性

|属性名|说明|类型|默认值|
|------|---------------------|----------------------------|-------------------|
|data|表数据|array`any[]`|[]|
|height|`ux-table`的高度。默认为自动高度。如果height为number类型，单位px；如果height为string类型，则这个高度会设置为`ux-table`的style.height的值，`ux-table`的高度会受控于外部样式。|string/number|—|
|max-height|`ux-table`的最大高度。合法的值为数字或者单位为px的高度。|string/number|—|
|stripe|是否为斑马纹table|boolean|false|
|border|是否带有纵向边框|boolean|false|
|size|`ux-table`的尺寸|''\|'large'\|'default'\|'small'\|'mini'|—|
|fit|列的宽度是否自撑开|boolean|true|
|show-header|是否显示表头|boolean|true|
|highlight-current-row|是否要高亮当前行|boolean|false|
|current-row-key|当前行的key，只写属性|string/number|—|
|row-class-name|行的className的回调方法，也可以使用字符串为所有行设置一个固定的className。|(data:{row:any,rowIndex:number})=>string/string|—|
|row-style|行的style的回调方法，也可以使用一个固定的Object为所有行设置一样的Style。|(data:{row:any,rowIndex:number})=>CSSProperties/CSSProperties|—|
|cell-class-name|单元格的className的回调方法，也可以使用字符串为所有单元格设置一个固定的className。|(data:{row:any,column:TableColumnCtx<T>,rowIndex:number,columnIndex:number})=>string/string|—|
|cell-style|单元格的style的回调方法，也可以使用一个固定的Object为所有单元格设置一样的Style。|(data:{row:any,column:TableColumnCtx<T>,rowIndex:number,columnIndex:number})=>CSSProperties/CSSProperties|—|
|header-row-class-name|表头行的className的回调方法，也可以使用字符串为所有表头行设置一个固定的className。|(data:{row:any,rowIndex:number})=>string/string|—|
|header-row-style|表头行的style的回调方法，也可以使用一个固定的Object为所有表头行设置一样的Style。|(data:{row:any,rowIndex:number})=>CSSProperties/CSSProperties|—|
|header-cell-class-name|表头单元格的className的回调方法，也可以使用字符串为所有表头单元格设置一个固定的className。|(data:{row:any,column:TableColumnCtx<T>,rowIndex:number,columnIndex:number})=>string/string|—|
|header-cell-style|表头单元格的style的回调方法，也可以使用一个固定的Object为所有表头单元格设置一样的Style。|(data:{row:any,column:TableColumnCtx<T>,rowIndex:number,columnIndex:number})=>CSSProperties/CSSProperties|—|
|row-key|行数据的Key，用来优化`ux-table`的渲染；在使用`reserve-selection`功能与显示树形数据时，该属性是必填的。类型为String时，支持多层访问：`user.info.id`，但不支持`user.info[0].id`，此种情况请使用`Function`。|function`(row:any)=>string`/string|—|
|empty-text|空数据时显示的文本内容，也可以通过`#empty`设置|string|NoData|
|default-expand-all|是否默认展开所有行，当`ux-table`包含展开行存在或者为树形表格时有效|boolean|false|
|expand-row-keys|可以通过该属性设置`ux-table`目前的展开行，需要设置`row-key`属性才能使用，该属性为展开行的`keys`数组。|array`Array<string>`|—|
|default-sort|默认的排序列的prop和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序|Sort|如果设置了`prop`，但没有设置`order`，那么`order`将被默认设置为ascending|
|tooltip-effect|溢出的tooltip的`effect`|'dark'\|'light'|dark|
|tooltip-options|溢出tooltip的选项，[参见tooltip组件](/zh-CN/component/tooltip#tooltip-属性)|Pick<UxTooltipProps,'effect'\|'enterable'\|'hideAfter'\|'offset'\|'placement'\|'popperClass'\|'popperOptions'\|'showAfter'\|'showArrow'>|object`{enterable:true,placement:'top',showArrow:true,hideAfter:200,popperOptions:{strategy:'fixed'}}`|
|append-filter-panel-to|挂载到哪个DOM元素|string|—|
|show-summary|是否在表尾显示合计行|boolean|false|
|sum-text|显示摘要行第一列的文本|string|Sum|
|summary-method|自定义的合计计算方法|Function`(data:{columns:any[],data:any[]})=>(VNode\|string)[]`|—|
|span-method|合并行或列的计算方法|Function`(data:{row:any,column:TableColumnCtx<T>,rowIndex:number,columnIndex:number})=>number[]\|{rowspan:number,colspan:number}\|void`|—|
|select-on-indeterminate|在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为true，则选中所有行；若为false，则取消选择所有行|boolean|true|
|indent|展示树形数据时，树节点的缩进|number|16|
|lazy|是否懒加载子节点数据|boolean|false|
|load|加载子节点数据的函数，`lazy`为true时生效|Function`(row:any,treeNode:TreeNode,resolve:(data:any[])=>void)=>void`|—|
|tree-props|渲染嵌套数据的配置选项|{hasChildren?:string,children?:string,checkStrictly?:boolean}|{hasChildren:'hasChildren',children:'children',checkStrictly:false}|
|table-layout|设置表格单元、行和列的布局方式|'fixed'\|'auto'|fixed|
|scrollbar-always-on|总是显示滚动条|boolean|false|
|show-overflow-tooltip|是否隐藏额外内容并在单元格悬停时使用Tooltip显示它们。|boolean/object|—|
|flexible|确保主轴的最小尺寸，以便不超过内容|boolean|false|
|scrollbar-tabindex|body的滚动条的包裹容器tabindex|string/number|—|
|allow-drag-last-column|当`border`为`true`时有效,是否允许拖拽最后一行|boolean|true|
|tooltip-formatter|自定义`show-overflow-tooltip`时的tooltip内容|(data:{row:any,column:TableColumnCtx<T>,cellValue:any})=>VNode\|string|—|
|preserve-expanded-content|在折叠后是否在DOM中保留展开行内容|boolean|false|
|native-scrollbar|是否使用原生滚动条样式|boolean|false|

### Table 事件

|事件名|说明|类型|
|------------------|---------------------|---------------------------|
|select|当用户手动勾选数据行的Checkbox时触发的事件|Function`<T=any>(selection:T[],row:T)=>void`|
|select-all|当用户手动勾选全选Checkbox时触发的事件|Function`(selection:any[])=>void`|
|selection-change|当选择项发生变化时会触发该事件|Function`(newSelection:any[])=>void`|
|cell-mouse-enter|当单元格hover进入时会触发该事件|(row:any,column:TableColumnCtx<T>,cell:HTMLTableCellElement,event:Event)=>void|
|cell-mouse-leave|当单元格hover退出时会触发该事件|(row:any,column:TableColumnCtx<T>,cell:HTMLTableCellElement,event:Event)=>void|
|cell-click|当某个单元格被点击时会触发该事件|(row:any,column:TableColumnCtx<T>,cell:HTMLTableCellElement,event:Event)=>void|
|cell-dblclick|当某个单元格被双击击时会触发该事件|(row:any,column:TableColumnCtx<T>,cell:HTMLTableCellElement,event:Event)=>void|
|cell-contextmenu|当某个单元格被鼠标右键点击时会触发该事件|(row:any,column:TableColumnCtx<T>,cell:HTMLTableCellElement,event:Event)=>void|
|row-click|当某一行被点击时会触发该事件|(row:any,column:TableColumnCtx<T>,event:Event)=>void|
|row-contextmenu|当某一行被鼠标右键点击时会触发该事件|(row:any,column:TableColumnCtx<T>,event:Event)=>void|
|row-dblclick|当某一行被双击时会触发该事件|(row:any,column:TableColumnCtx<T>,event:Event)=>void|
|header-click|当某一列的表头被点击时会触发该事件|(column:TableColumnCtx<T>,event:Event)=>void|
|header-contextmenu|当某一列的表头被鼠标右键点击时触发该事件|(column:TableColumnCtx<T>,event:Event)=>void|
|sort-change|当表格的排序条件发生变化的时候会触发该事件|(data:{column:TableColumnCtx<T>,prop:string,order:any})=>void|
|filter-change|当表格的过滤条件发生变化的时候会触发该事件|(newFilters:any)=>void|
|current-change|当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的highlight-current-row属性|(currentRow:any,oldCurrentRow:any)=>void|
|header-dragend|当拖动表头改变了列的宽度的时候会触发该事件|(newWidth:number,oldWidth:number,column:TableColumnCtx<T>,event:MouseEvent)=>void|
|expand-change|当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为expandedRows；树形表格时第二参数为expanded）|Function`(row:any,expandedRows:any[])=>void&(row:any,expanded:boolean)=>void`|
|scroll|表格被用户滚动后触发|({scrollLeft:number,scrollTop:number})=>void|

### Table 插槽

|插槽名|说明|子标签|
|-------|------------------------|------------|
|default|自定义默认内容|TableColumn|
|append|插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个slot。若表格有合计行，该slot会位于合计行之上。|—|
|empty|当数据为空时自定义的内容|—|

### Table 暴露方法/属性

|方法名|说明|Type|
|-|--|----|
|clearSelection|用于多选表格，清空用户的选择|()=>void|
|getSelectionRows|返回当前选中的行|Function`()=>any[]`|
|toggleRowSelection|用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则可直接设置这一行选中与否|(row:any,selected?:boolean,ignoreSelectable=true)=>void|
|toggleAllSelection|用于多选表格，切换全选和全不选|()=>void|
|toggleRowExpansion|用于可扩展的表格或树表格，如果某行被扩展，则切换。使用第二个参数，您可以直接设置该行应该被扩展或折叠。|(row:any,expanded?:boolean)=>void|
|setCurrentRow|用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。|(row:any)=>void|
|clearSort|用于清空排序条件，数据会恢复成未排序的状态|()=>void|
|clearFilter|传入由`columnKey`组成的数组以清除指定列的过滤条件。如果没有参数，清除所有过滤器|Function`(columnKeys?:string[])=>void`|
|doLayout|对`ux-table`进行重新布局。当表格可见性变化时，您可能需要调用此方法以获得正确的布局|()=>void|
|sort|手动排序表格。参数`prop`属性指定排序列，`order`指定排序顺序。|(prop:string,order:string)=>void|
|scrollTo|滚动到一组特定坐标|(options:number\|ScrollToOptions,yCoord?:number)=>void|
|setScrollTop|设置垂直滚动位置|(top?:number)=>void|
|setScrollLeft|设置水平滚动位置|(left?:number)=>void|
|columns|获取表列的context|array`TableColumnCtx<T>[]`|
|updateKeyChildren|适用于lazyTable,需要设置`rowKey`,更新keychildren|Function`(key:string,data:T[])=>void`|
## Table的Column API
### TableColumn 属性

|属性名|说明|Type|默认值|
|-|---------------|-------|--------|
|type|对应列的类型。如果设置了`selection`则显示多选框；如果设置了`index`则显示该行的索引（从1开始计算）；如果设置了`expand`则显示为一个可展开的按钮|'default'\|'selection'\|'index'\|'expand'|default|
|index|如果设置了`type=index`，可以通过传递`index`属性来自定义索引|number/(index:number)=>number|—|
|label|显示的标题|string|—|
|column-key|column的key，column的key，如果需要使用filter-change事件，则需要此属性标识是哪个column的筛选条件|string|—|
|prop|字段名称对应列内容的字段名，也可以使用`property`属性|string|—|
|width|对应列的宽度|string/number|''|
|min-width|对应列的最小宽度，对应列的最小宽度，与`width`的区别是`width`是固定的，`min-width`会把剩余宽度按比例分配给设置了`min-width`的列|string/number|''|
|fixed|列是否固定在左侧或者右侧。`true`表示固定在左侧|'left'\|'right'/boolean|false|
|render-header|列标题Label区域渲染使用的Function|Function`(data:{column:TableColumnCtx<T>,$index:number})=>void`|—|
|sortable|对应列是否可以排序，如果设置为'custom'，则代表用户希望远程排序，需要监听`ux-table`的sort-change事件|boolean/string|false|
|sort-method|指定数据按照哪个属性进行排序，仅当`sortable`设置为`true`的时候有效。应该如同Array.sort那样返回一个Number|<T=any>(a:T,b:T)=>number|—|
|sort-by|指定数据按照哪个属性进行排序，仅当sortable设置为true且没有设置sort-method的时候有效。如果sort-by为数组，则先按照第1个属性排序，如果第1个相等，再按照第2个排序，以此类推|(row:any,index:number)=>string/string/object`string[]`|—|
|sort-orders|数据在排序时所使用排序策略的轮转顺序，仅当sortable为true时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序|object`('ascending'\|'descending'\|null)[]`|['ascending','descending',null]|
|resizable|对应列是否可以通过拖动改变宽度（需要在`ux-table`上设置border属性为真）|boolean|true|
|formatter|用来格式化内容|function`(row:any,column:TableColumnCtx<T>,cellValue:any,index:number)=>VNode\|string`|—|
|show-overflow-tooltip|当内容过长被隐藏时显示tooltip|boolean/object|-|
|align|对齐方式|'left'\|'center'\|'right'|left|
|header-align|表头对齐方式，若不设置该项，则使用表格的对齐方式|'left'\|'center'\|'right'|left|
|class-name|列的className|string|—|
|label-class-name|当前列标题的自定义类名|string|—|
|selectable|仅对type=selection的列有效，类型为Function，Function的返回值用来决定这一行的CheckBox是否可以勾选|(row:any,index:number)=>boolean|—|
|reserve-selection|数据刷新后是否保留选项，仅对`type=selection`的列有效，请注意，需指定`row-key`来让这个功能生效。|boolean|false|
|filters|数据过滤的选项，数组格式，数组中的元素需要有text和value属性。数组中的每个元素都需要有text和value属性。|array`Array<{text:string,value:string}>`|—|
|filter-placement|过滤弹出框的定位|'top'\|'top-start'\|'top-end'\|'bottom'\|'bottom-start'\|'bottom-end'\|'left'\|'left-start'\|'left-end'\|'right'\|'right-start'\|'right-end'|—|
|filter-class-name|过滤弹出框的className|string|—|
|filter-multiple|数据过滤的选项是否多选|boolean|true|
|filter-method|数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回true就会显示。|function`(value:any,row:any,column:TableColumnCtx<T>)=>void`|—|
|filtered-value|选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。|object`string[]`|—|
|tooltip-formatter|使用`show-overflow-tooltip`时自定义`tooltip`内容|(data:{row:any,column:TableColumnCtx<T>,cellValue:any})=>VNode\|string|—|

### TableColumn 插槽

|插槽名|说明|类型|
|--------------------|-------------|--|
|default|自定义列的内容|object`{row:any,column:TableColumnCtx<T>,$index:number}`|
|header|自定义表头的内容，|object`{column:TableColumnCtx<T>,$index:number}`|
|filter-icon|自定义filter图标|{filterOpened:boolean}|
|expand|展开列的自定义内容|{expanded:boolean}|

