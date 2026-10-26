<!-- khala-spec:path-scope: user-project -->
# Vue Bus 使用规范

Vue Bus 基于 mitt 实现，用于跨组件事件通信，使用时必须遵循以下规范。

## 基本信息

- **Bus 文件位置**: `src/vue-bus.js`
- **导入方式**: `import vueBus from '@/vue-bus'`

## 核心方法

| 方法 | 说明 | 使用示例 |
|------|------|----------|
| $emit | 发送事件 | `vueBus.$emit('eventName', payload)` |
| $on | 监听事件 | `vueBus.$on('eventName', handler)` |
| $off | 移除监听 | `vueBus.$off('eventName', handler)` |

## 事件名称 (EventName) 规范

### 命名规范
1. 必须使用 kebab-case (短横线连接) 命名方式，禁止使用 camelCase 或 PascalCase
2. 命名必须语义化，清晰表达事件含义，格式为：`[模块名]-[动作]`
3. 禁止使用过于通用的名称（如 `update`、`change`），必须明确业务场景
4. 新增事件必须先在 `src/vue-bus.js` 的 `Events` 接口中声明类型定义

### 新增事件流程
1. 打开 `src/vue-bus.js` 文件
2. 在 `Events` 类型定义中添加新事件名称和注释说明
3. 事件名作为属性名，值为事件携带的参数类型说明
4. 完成示例：[vue-bus.js](/doc-ref/examples/khala-frontend/event-bus/vue-bus.js)

### 广播
通过 `$emit` 方法广播事件
- 完整示例代码：[broadcast.js](/doc-ref/examples/khala-frontend/event-bus/broadcast.js)

### 订阅
通过 `$on` 方法订阅事件，页面销毁时需要通过 `$off` 方法取消订阅
- 完整示例代码：[subscribe.vue](/doc-ref/examples/khala-frontend/event-bus/subscribe.vue)

### 命名示例
✅ 正确示例：
- `user-login` - 用户登录事件
- `menu-collapsed` - 菜单折叠状态变更事件
- `form-submit-success` - 表单提交成功事件
- `table-refresh` - 表格刷新事件

❌ 错误示例：
- `login` - 过于通用，无模块前缀
- `userLogin` - 使用了camelCase命名
- `update` - 含义不明确
- `onUserChange` - 使用了前缀和camelCase

## 生命周期规范

- 必须在 `onMounted` 生命周期钩子中注册事件监听器
- 必须在 `onUnmounted` 生命周期钩子中移除事件监听器
- 禁止在其他生命周期中注册/移除监听器，避免内存泄漏
- 处理函数必须是具名函数，禁止使用匿名函数，否则无法正常移除监听
