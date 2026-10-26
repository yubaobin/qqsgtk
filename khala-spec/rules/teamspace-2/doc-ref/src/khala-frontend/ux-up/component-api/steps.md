## Steps的 API
### Steps 属性

|属性名|说明|类型|默认值|
|--------------|----|------------------|----------|
|space|每个step的间距，不填写将自适应间距。支持百分比。|number/string|''|
|direction|显示方向|'vertical'\|'horizontal'|horizontal|
|active|设置当前激活步骤|number|0|
|process-status|设置当前步骤的状态|'wait'\|'process'\|'finish'\|'error'\|'success'|process|
|finish-status|设置结束步骤的状态|'wait'\|'process'\|'finish'\|'error'\|'success'|finish|
|align-center|进行居中对齐|boolean|—|
|simple|是否应用简洁风格|boolean|—|

### Steps 插槽

|插槽名|说明|子标签|
|-------|----|----|
|default|默认插槽|Step|
## Steps的Step API
### Step 属性

|属性名|说明|类型|默认值|
|-----------|---|-------------------------|--|
|title|标题|string|''|
|description|描述文案|string|''|
|icon|Step组件的自定义图标。也支持slot方式写入|string/Component|—|
|status|设置当前步骤的状态，不设置则根据steps确定状态|''\|'wait'\|'process'\|'finish'\|'error'\|'success'|''|

### Step 插槽

|插槽名|说明|
|-----------|-------|
|icon|自定义图标|
|title|自定义标题|
|description|自定义描述文案|
