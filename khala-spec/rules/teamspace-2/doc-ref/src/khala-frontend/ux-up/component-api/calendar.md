## Calendar的 API
### Calendar 属性

|属性名|说明|类型|默认值|
|---------------------|-----|----------------------|---|
|model-value/v-model|选中项绑定值|Date|—|
|range|时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。|array`[Date,Date]`|—|
<!-- | controller-type ^(1.1.4) | 日历头部的控制器类型                        | 'button' \| 'select'                        | button  |
| formatter ^(1.1.4)       | 当 `controller-type` 为 `select` 时的格式标签           | (value: number, type: 'year' \| 'month') => string \| number | —       | -->

### Calendar 插槽

|插槽名|说明|类型|
|---------|-----|--------------------------|
|date-cell|`type`表示该日期的所属月份，可选值有prev-month、current-month和next-month；`isSelected`标明该日期是否被选中；`day`是格式化的日期，格式为`yyyy-MM-dd`；`date`是单元格的日期|{data:{type:'prev-month'\|'current-month'\|'next-month',isSelected:boolean,day:string,date:Date}}|
|header|卡片标题内容|{date:string}|
### Calendar 暴露方法/属性

|Name|Description|Type|
|--|--------------------|------------------|
|selectedDay|当前已选日期|ComputedRef<Dayjs\|undefined>|
|pickDay|选择一个具体日期|Function`(day:dayjs.Dayjs)=>void`|
|selectDate|选择日期|(type:CalendarDateType)=>void|
|calculateValidatedDateRange|根据开始与结束日期计算验证日期范围|Function`(startDayjs:dayjs.Dayjs,endDayjs:dayjs.Dayjs)=>[dayjs.Dayjs,dayjs.Dayjs][]`|

