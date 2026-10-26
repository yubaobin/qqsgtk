## Tree的 API
### Tree 属性

|属性名|说明|类型|默认值|
|---------------------|-------------------|-------|-----|
|data|展示数据|object`Array<{[key:string]:any}>`|—|
|empty-text|内容为空的时候展示的文本|string|—|
|node-key|每个树节点用来作为唯一标识的属性，整棵树应该是唯一的|string|—|
|[props](#props)|配置选项，具体看下表|object|—|
|render-after-expand|是否在第一次展开某个树节点后才渲染其子节点|boolean|true|
|load|加载子树数据的方法，仅当lazy属性为true时生效|(node,resolve,reject)=>void|—|
|render-content|树节点的内容区的渲染Function|(h,{node,data,store})=>void|—|
|highlight-current|是否高亮当前选中节点，默认值是false。|boolean|false|
|default-expand-all|是否默认展开所有节点|boolean|false|
|expand-on-click-node|是否在点击节点的时候展开或者收缩节点，默认值为true，如果为false，则只有点箭头图标的时候才会展开或者收缩节点。|boolean|true|
|check-on-click-node|是否在点击节点的时候选中节点，默认值为false，即只有在点击复选框时才会选中节点。|boolean|false|
|check-on-click-leaf|点击叶节点(最后一个子节点)时是否检查或取消节点|boolean|true|
|auto-expand-parent|展开子节点的时候是否自动展开父节点|boolean|true|
|default-expanded-keys|默认展开的节点的key的数组|Array<string\|number>|—|
|show-checkbox|节点是否可被选择|boolean|false|
|check-strictly|在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为false|boolean|false|
|set-strictly|在显示复选框的情况下，调用`setCheckedNodes`和`setCheckedKeys`是否严格的遵循父子不互相关联的做法，默认为false|boolean|false|
|default-checked-keys|默认勾选的节点的key的数组|Array<string\|number>|—|
|current-node-key|当前选中的节点|string/number|—|
|filter-node-method|对树节点进行筛选时执行的方法，返回`false`则表示这个节点会被隐藏|(value,data,node)=>boolean|—|
|accordion|是否每次只打开一个同级树节点展开|boolean|false|
|indent|相邻级节点间的水平缩进，单位为像素|number|18|
|icon|自定义树节点图标组件|string/Component|—|
|lazy|是否懒加载子节点，需与load方法结合使用|boolean|false|
|draggable|是否开启拖拽节点功能|boolean|false|
|allow-drag|判断节点能否被拖拽如果返回`false`，节点不能被拖动|(node)=>boolean|—|
|allow-drop|拖拽时判定目标节点能否成为拖动目标位置。如果返回`false`，拖动节点不能被拖放到目标节点。`type`参数有三种情况：'prev'、'inner'和'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后|(draggingNode,dropNode,type)=>boolean|—|

### props

|属性名|说明|类型|默认值|
|--------|------|--------------------------|---|
|label|指定节点标签为节点对象的某个属性值|string/(data,node)=>string|—|
|children|指定子树为节点对象的某个属性值|string|—|
|disabled|指定节点选择框是否禁用为节点对象的某个属性值|string/(data,node)=>boolean|—|
|isLeaf|指定节点是否为叶子节点，仅在指定了lazy属性的情况下生效|string/(data,node)=>boolean|—|
|class|自定义节点类名|string/(data,node)=>string|—|

### Tree 方法

`Tree` 组件有以下方法，均返回当前选中的节点数组
|方法名|说明|参数|
|-------------------|-------|------|
|filter|过滤所有树节点，过滤后的节点将被隐藏|接收一个参数并指定为`filter-node-method`属性的第一个参数|
|updateKeyChildren|为节点设置新数据，只有当设置`node-key`属性的时候才可用|`(key,data)`接收两个参数:1.节点的key2.新的数据据|
|getCheckedNodes|如果节点可以被选中，(`show-checkbox`为`true`),本方法将返回当前选中节点的数组|`(leafOnly,includeHalfChecked)`接收两个布尔类型参数:1.默认值为`false`.若参数为`true`,它将返回当前选中节点的子节点。2.默认值为`false`.如果参数为`true`,返回值包含半选中节点数据|
|setCheckedNodes|设置目前勾选的节点，使用此方法必须提前设置`node-key`属性|要选中的节点构成的数组|
|getCheckedKeys|若节点可用被选中(`show-checkbox`为`true`),它将返回当前选中节点key的数组|`(leafOnly,includeHalfChecked)`接收两个布尔类型参数，1.默认为`false`.如果参数是`true`,它只返回当前选择的子节点数组。2.默认值为`false`.如果参数为`true`,返回值包含半选中节点数据|
|setCheckedKeys|设置目前选中的节点，使用此方法必须设置`node-key`属性|`(keys,leafOnly)`接收两个参数:1.一个需要被选中的多节点key的数组2.布尔类型的值如果设置为`true`，将只设置选中的叶子节点状态。默认值是`false`.|
|setChecked|设置节点是否被选中,使用此方法必须设置`node-key`属性|`(key/data,checked,deep)`接收三个参数:1.要选中的节点的key或者数据2.一个布尔类型参数表明是否选中.3.一个布尔类型参数表明是否递归选中子节点|
|getHalfCheckedNodes|如果节点可用被选中(`show-checkbox`为`true`),它将返回当前半选中的节点组成的数组|—|
|getHalfCheckedKeys|若节点可被选中(`show-checkbox`为`true`)，则返回目前半选中的节点的key所组成的数组|—|
|getCurrentKey|返回当前被选中节点的数据(如果没有则返回null)|—|
|getCurrentNode|返回当前被选中节点的数据(如果没有则返回null)|—|
|setCurrentKey|通过key设置某个节点的当前选中状态，使用此方法必须设置`node-key`属性|`(key,shouldAutoExpandParent=true)`1.待被选节点的key，如果为`null`,取消当前选中的节点2.是否展开父节点|
|setCurrentNode|设置节点为选中状态，使用此方法必须设置`node-key`属性|`(node,shouldAutoExpandParent=true)`1.待被选中的节点2.是否自动展开父节点|
|getNode|根据data或者key拿到Tree组件中的node|`(data)`节点的data或key|
|remove|删除Tree中的一个节点，使用此方法必须设置node-key属性|`(data)`要删除的节点的data或者node对象|
|append|为Tree中的一个节点追加一个子节点|`(data,parentNode)`1.要追加的子节点的data2.父节点的data,key或node|
|insertBefore|在Tree中给定节点前插入一个节点|`(data,refNode)`接收两个参数，1.要增加的节点的data2.参考节点的data,key或node|
|insertAfter|在Tree中给定节点后插入一个节点|`(data,refNode)`1.要增加的节点的data2.参考节点的data,key或node|

### Tree 事件

|事件名|说明|回调参数|
|----------------|-------|-----------|
|node-click|当节点被点击的时候触发|四个参数：`对应于节点点击的节点对象`，`TreeNode`的`node`属性,`TreeNode`和`event`|
|node-contextmenu|当某一节点被鼠标右键点击时会触发该事件|四个参数，`event`、`传递给data属性的数组中该节点所对应的对象`、`节点对应的Node`、`节点组件本身`。|
|check-change|当复选框被点击的时候触发|三个参数，`传递给data属性的数组中该节点所对应的对象`、`节点本身是否被选中`、`节点的子树中是否有被选中的节点`|
|check|点击节点复选框之后触发|两个参数，`传递给data属性的数组中该节点所对应的对象`、`树目前的选中状态对象，包含checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys四个属性`|
|current-change|当前选中节点变化时触发的事件|两个参数，`当前节点的数据`，`当前节点的Node对象`|
|node-expand|节点被展开时触发的事件|三个参数，`传递给data属性的数组中该节点所对应的对象`、`节点对应的Node`、`节点组件本身`|
|node-collapse|节点被关闭时触发的事件|三个参数，`传递给data属性的数组中该节点所对应的对象`、`节点对应的Node`、`节点组件本身`|
|node-drag-start|节点开始拖拽时触发的事件|两个参数，`被拖拽节点对应的Node`、`event`|
|node-drag-enter|拖拽进入其他节点时触发的事件|三个参数，`被拖拽节点对应的Node`、`所进入节点对应的Node`、`event`|
|node-drag-leave|拖拽离开某个节点时触发的事件|三个参数，`被拖拽节点对应的Node`、`所离开节点对应的Node`、`event`|
|node-drag-over|在拖拽节点时触发的事件（类似浏览器的mouseover事件）|三个参数，`被拖拽节点对应的Node`、`当前进入节点对应的Node`、`event`|
|node-drag-end|拖拽结束时（可能未成功）触发的事件|四个参数，`被拖拽节点对应的Node`、`结束拖拽时最后进入的节点（可能为空）`、`被拖拽节点的放置位置（before、after、inner）`、`event`|
|node-drop|拖拽成功完成时触发的事件|共四个参数，`被拖拽节点对应的Node`、`结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）`、`event`|

### Tree 插槽

|插槽名|说明|作用域|
|--------------|------------------|----|
|default|自定义树节点的内容|{node,data}|
|empty|当数据为空时自定义的内容|-|
