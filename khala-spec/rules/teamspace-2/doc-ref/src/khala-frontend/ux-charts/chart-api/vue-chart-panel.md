## ChartPanel API

### ChartPanel 属性

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 图表容器宽度，支持数字（px）或 CSS 字符串，空值由父容器决定 | ^[number] / ^[string] | — |
| height | 图表容器高度，支持数字（px）或 CSS 字符串 | ^[number] / ^[string] | `'100%'` |
| chartOption | ECharts 图表配置项，变化时自动更新图表 | ^[object] | `{}` |
| autoResize | 是否自动响应容器尺寸变化并 resize 图表 | ^[boolean] / ^[object]`{ throttle: number; onResize: () => void }` | `true` |
| renderer | 渲染模式 | ^[enum]`'canvas' \| 'svg'` | `'canvas'` |
| theme | ECharts 主题名称 | ^[string] | `'UX_CHART_DEFAULT_THEME'` |

### ChartPanel 事件

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| click | 图表系列被点击时触发 | ^[Function]`(series: object, ...rest: any[]) => void` |
| outside-click | 点击图表空白区域时触发 | ^[Function]`(event: MouseEvent) => void` |

### ChartPanel 暴露方法/属性

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| setOptions | 更新图表配置项（先清空再 resize 再设置新配置） | ^[Function]`(option: Record<string, any>) => void` |
| refresh | 使用当前 `chartOption` 重新渲染图表 | ^[Function]`() => void` |
| clearChart | 清空图表内容 | ^[Function]`() => void` |
| getChart | 获取 ECharts 实例，用于直接调用 ECharts API | ^[Function]`() => EChartsType` |
| resizeChart | 手动触发图表 resize | ^[Function]`() => void` |
