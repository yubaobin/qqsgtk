## Splitter的 API
### Splitter 属性

|属性名|说明|类型|默认值|
|------|-------|----------|----------|
|layout|分隔面板的布局方向|'horizontal'\|'vertical'|horizontal|

### Splitter 事件

|事件名|说明|类型|
|------------|----------------------|---|
|resize-start|开始调整面板大小时触发，`index`是拖拽条的索引。|Function`(index:number,sizes:number[])=>void`|
|resize|调整面板大小时触发，`index`是拖拽条的索引。|Function`(index:number,sizes:number[])=>void`|
|resize-end|面板调整大小结束时触发，`index`是拖拽条的索引。|Function`(index:number,sizes:number[])=>void`|
|collapse|当面板折叠时触发，`index`是拖拽条的索引。|Function`(index:number,type:'start'\|'end',sizes:number[])=>void`|
## Splitter的Panel API
### SplitterPanel 属性

|属性名|说明|类型|默认值|
|-------------------|--------------------------|---------------------|-------|
|size/v-model:size|面板大小(像素或百分比)|string/number|-|
|min|面板最小尺寸(像素或百分比)|string/number|-|
|max|面板的最大尺寸(像素或百分比)|string/number|-|
|resizable|是否可以调整面板大小|boolean|true|
|collapsible|面板是否可折叠|boolean|false|

### SplitterPanel 事件

|事件名|说明|类型|
|-----------|--------|----------|
|update:size|当面板大小改变时触发|(size:number)=>void|

### SplitterPanel 插槽

|插槽名|说明|
|-----------------|----------------------|
|default|面板的默认内容|
|start-collapsible|自定义起始折叠按钮的内容|
|end-collapsible|结束可折叠按钮的自定义内容|
