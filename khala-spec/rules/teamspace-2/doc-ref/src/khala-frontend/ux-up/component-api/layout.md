## Layout的Row API
### Row 属性

|属性名|说明|类型|默认值|
|-------|---------------|----------------------|-----|
|gutter|栅格间隔|number|0|
|justify|flex布局下的水平排列方式|'start'\|'end'\|'center'\|'space-around'\|'space-between'\|'space-evenly'|start|
|align|flex布局下的垂直排列方式|'top'\|'middle'\|'bottom'|—|
|tag|自定义元素标签|string|div|

### Row 插槽

|插槽名|说明|子标签|
|-------|-------|---|
|default|自定义默认内容|Col|
## Layout的Col API
### Col 属性

|属性名|说明|类型|默认值|
|------|-|----------|---|
|span|栅格占据的列数|number|24|
|offset|栅格左侧的间隔格数|number|0|
|push|栅格向右移动格数|number|0|
|pull|栅格向左移动格数|number|0|
|xs|`<768px`响应式栅格数或者栅格属性对象|number/{span?:number,offset?:number,pull?:number,push?:number}|—|
|sm|`≥768px`响应式栅格数或者栅格属性对象|number/{span?:number,offset?:number,pull?:number,push?:number}|—|
|md|`≥992px`响应式栅格数或者栅格属性对象|number/{span?:number,offset?:number,pull?:number,push?:number}|—|
|lg|`≥1200px`响应式栅格数或者栅格属性对象|number/{span?:number,offset?:number,pull?:number,push?:number}|—|
|xl|`≥1920px`响应式栅格数或者栅格属性对象|number/{span?:number,offset?:number,pull?:number,push?:number}|—|
|tag|自定义元素标签|string|div|

### Col 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|

