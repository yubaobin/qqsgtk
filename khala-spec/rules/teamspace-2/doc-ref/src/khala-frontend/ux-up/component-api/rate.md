## Rate的 API
### Rate 属性

|属性名|说明|类型|默认值|
|--|---------------------|-------|----------------|
|model-value/v-model|选中项绑定值|number|0|
|max|最大分值|number|5|
|size|尺寸|'large'\|'default'\|'small'\|'mini'|—|
|disabled|是否为只读|boolean|false|
|allow-half|是否允许半选|boolean|false|
|low-threshold|低分和中等分数的界限值，值本身被划分在低分中|number|2|
|high-threshold|高分和中等分数的界限值，值本身被划分在高分中|number|4|
|colors|icon的颜色。若传入数组，共有3个元素，为3个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色|object`string[]\|Record<number,string>`|['#f7ba2a','#f7ba2a','#f7ba2a']|
|void-color|未选中icon的颜色|string|#c6d1de|
|disabled-void-color|只读时未选中icon的颜色|string|#eff2f7|
|icons|图标组件若传入数组，则需要传入3个元素，分别为3个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名|object`string[]\|Component[]\|Record<number,string\|Component>`|[StarFilled,StarFilled,StarFilled]|
|void-icon|未被选中的图标组件|string/Component|Star|
|disabled-void-icon|禁用状态的未选择图标|string/Component|StarFilled|
|show-text|是否显示辅助文字，若为真，则会从texts数组中选取当前分数对应的文字内容|boolean|false|
|show-score|是否显示当前分数，show-score和show-text不能同时为真|boolean|false|
|text-color|辅助文字的颜色|string|''|
|texts|辅助文字数组|array`string[]`|['Extremelybad','Disappointed','Fair','Satisfied','Surprise']|
|score-template|分数显示模板|string|{value}|
|clearable|是否可以重置值为`0`|boolean|false|
|id|原生`id`属性|string|—|
|aria-label|和Rate的`aria-label`属性保持一致|string|—|
|label|和Rate的`aria-label`属性保持一致|string|—|

### Rate 事件

|事件名|说明|类型|
|------|-------|--------------|
|change|分值改变时触发|(value:number)=>void|

### Rate 暴露方法/属性

|名称|说明|类型|
|-----------------|-----|--------------|
|setCurrentValue|设置当前值|(value:number)=>void|
|resetCurrentValue|重置当前值|()=>void|
