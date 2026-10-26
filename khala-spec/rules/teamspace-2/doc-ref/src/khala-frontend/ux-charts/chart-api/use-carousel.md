## useCarousel API

### useCarousel 属性

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| chartRef | ECharts 实例的 Ref，通常通过 `ChartPanel` 的 `@init` 事件获取 | ^[object]`Ref<EChartsType \| null>` | — |
| options | 轮播配置 | ^[object]`{ wait?: number }` | — |

### options 属性

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wait | 轮播间隔时间（毫秒） | ^[number] | `6000` |

### useCarousel 暴露方法/属性

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| start | 开始轮播 | ^[Function]`() => void` |
| stop | 停止轮播 | ^[Function]`() => void` |
