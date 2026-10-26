# 时间格式规范 
在使用组件 `date-picker` 和 `time-picker` 时，必须制定 `value-format` 属性

## 时间格式转换映射

| 组件 | 日期 | value-format |
| --- | --- | --- |
| <ux-data-picker type="date" /> | 年-月-日 | yyyy-MM-dd |
| <ux-date-picker type="datatime" /> | 年-月-日 时:分:秒 | yyyy-MM-dd HH:mm:ss |
| <ux-time-picker /> | 时:分 | HH:mm |

## 示例

### date-picker 日期选择

:::bad
```vue
<ux-date-picker v-model="form.date" type="date" />
```

未指定 `value-format`，v-model 绑定的值为 Date 对象，提交到后端时格式不可控。
:::

:::good
```vue
<ux-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" />
```

指定 `value-format="yyyy-MM-dd"`，v-model 绑定值为 `"2026-06-04"` 字符串，格式明确可控。
:::

### date-picker 日期时间选择

:::bad
```vue
<ux-date-picker v-model="form.datetime" type="datetime" />
```

未指定 `value-format`，v-model 绑定值为 Date 对象，序列化后可能丢失秒数或时区偏移。
:::

:::good
```vue
<ux-date-picker v-model="form.datetime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" />
```

指定 `value-format="yyyy-MM-dd HH:mm:ss"`，v-model 绑定值为 `"2026-06-04 14:30:00"` 字符串，与后端格式一致。
:::

### time-picker 时间选择

:::bad
```vue
<ux-time-picker v-model="form.time" />
```

未指定 `value-format`，v-model 绑定值为 Date 对象，无法直接作为字符串提交。
:::

:::good
```vue
<ux-time-picker v-model="form.time" value-format="HH:mm" />
```

指定 `value-format="HH:mm"`，v-model 绑定值为 `"14:30"` 字符串，格式简洁明确。
:::
