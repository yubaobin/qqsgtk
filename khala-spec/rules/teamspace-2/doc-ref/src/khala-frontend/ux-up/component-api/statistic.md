## Statistic的 API
### Statistic 属性

|属性|说明|类型|默认值|
|-----------------|--------|-------------------|---|
|value|数字内容|number|0|
|decimal-separator|设置小数点符号|string|.|
|formatter|自定义数字格式化|(value:number)=>string\|number|—|
|group-separator|设置千分位标识符|string|,|
|precision|数字精度|number|0|
|prefix|设置数字的前缀|string|—|
|suffix|设置数字的后缀|string|—|
|title|数字标题|string|—|
|value-style|数字样式|string/object`CSSProperties\|CSSProperties[]\|string[]`|—|

### Statistic 插槽

|插槽名|说明|
|------|-----|
|prefix|数字区之前|
|suffix|数字区之后|
|title|数字标题|

### Statistic 暴露方法/属性

|名称|说明|类型|
|------------|-----|--------------|
|displayValue|当前显示值|Ref<string\|number>|
## Statistic的Countdown API
### Countdown 属性

|属性|说明|类型|默认值|
|-----------|--------|-------------------|--------|
|value|目标时间|number/Dayjs|—|
|format|格式化倒计时|string|HH:mm:ss|
|prefix|设置倒计时前缀|string|—|
|suffix|设置倒计时的后缀|string|—|
|title|倒计时标题|string|—|
|value-style|倒计时值的样式|string/object`CSSProperties\|CSSProperties[]\|string[]`|—|

### Countdown 事件

|方法|说明|类型|
|------|-------|--------------|
|change|时间差改变事件|(value:number)=>void|
|finish|倒计时结束事件|()=>void|

### Countdown 插槽

|事件名|说明|
|------|------|
|prefix|倒计时值前缀|
|suffix|倒计时后缀|
|title|倒计时标题|

### Countdown 暴露方法/属性

|名称|说明|类型|
|------------|-----|---|
|displayValue|当前显示值|Ref<string>|
