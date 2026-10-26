## DatePickerPanel的API
### Attributes

|Name|Description|Type|Default|
|---------------------|------------------------|--------|----------|
|model-value/v-model|bindingvalue,ifitisan`range`picker,thelengthofthearrayshouldbe2|number/string/Date/array`number[]\|string[]\|Date[]`|''|
|border|whetherthedatepickerisbordered|boolean|true|
|disabled|whetherDatePickerisdisabled|boolean|false|
|clearable|whethertoshowclearbutton|boolean|true|
|editable|whethertheinputiseditable|boolean|true|
|type|typeofthepicker|'year'\|'years'\|'month'\|'months'\|'date'\|'dates'\|'datetime'\|'week'\|'datetimerange'\|'daterange'\|'monthrange'\|'yearrange'|date|
|default-value|optional,defaultdateofthecalendar|object`Date\|[Date,Date]`|—|
|default-time|optional,thetimevaluetousewhenselectingdaterange|object`Date\|[Date,Date]`|—|
|value-format|optional,formatofbindingvalue.Ifnotspecified,thebindingvaluewillbeaDateobject|string|—|
|date-format|optional,formatofthedatedisplayedininput'sinnerpanel|stringsee[dateformats](https://day.js.org/docs/en/display/format)|YYYY-MM-DD|
|time-format|optional,formatofthetimedisplayedininput'sinnerpanel|stringsee[dateformats](https://day.js.org/docs/en/display/format)|HH:mm:ss|
|unlink-panels|unlinktwodate-panelsinrange-picker|boolean|false|
|disabled-date|afunctiondeterminingifadateisdisabledwiththatdateasitsparameter.ShouldreturnaBoolean|(data:Date)=>boolean|—|
|shortcuts|anobjectarraytosetshortcutoptions|array`Array<{text:string,value:Date\|Function}>`|[]|
|cell-class-name|setcustomclassName|(data:Date)=>string|—|
|show-footer|whethertoshowfooterwherethedatepickerisone'dates'\|'months'\|'years'\|'datetime'\|'datetimerange'|boolean|false|
|show-confirm|whethertoshowtheconfirmbutton|boolean|false|
|show-week-number|showtheweeknumberbesidestheweek|boolean|false|

### Events

|Name|Description|Type|
|---------------|-------------------|--------------|
|calendar-change|triggerswhenthecalendarselecteddateischanged.Onlyfor`range`|Function`(val:[Date,null\|Date])=>void`|
|panel-change|triggerswhenthenavigationbuttonclick.|Function`(date:Date\|[Date,Date],mode:'month'\|'year',view?:string)=>void`|
|clear|triggerswhenaclearbuttonisclicked|()=>void|

### Slots

|Name|Description|
|----------|-------------------|
|default|customcellcontent|
|prev-month|prevmonthicon|
|next-month|nextmonthicon|
|prev-year|prevyearicon|
|next-year|nextyearicon|
