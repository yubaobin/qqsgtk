# Loading 加载
加载数据时显示动效。

## Loading的区域加载
在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。

  提供了两种调用 `Loading` 的方法：指令和服务。 对于自定义指令 `v-loading`，只需要绑定 `boolean` 值即可。 默认状况下，`Loading` 遮罩会插入到绑定元素的子节点。 通过添加 `body` 修饰符，可以使遮罩插入至 Dom 中的 `body` 上。
```vue
<template>
    <ux-table v-loading="loading" :data="tableData">
        <ux-table-column type="index" label="序号" align="center" width="60" />
        <ux-table-column prop="pName" label="项目名称" />
        <ux-table-column prop="dName" label="部门" />
        <ux-table-column prop="contact" label="联系人" />
        <ux-table-column prop="photo" label="联系手机" />
        <ux-table-column prop="date" label="日期" />
        <ux-table-column prop="status" label="状态">
            <template #default="{ row }">
                <ux-button :type="statusMap[row.status].color" is-link>
                                    </ux-button>
                {{ statusMap[row.status].text }}
            </template>
        </ux-table-column>
    </ux-table>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>
```

## Loading的自定义加载中组件内容
可自定义加载文案、图标和背景色。

 在绑定了 `v-loading` 指令的元素上添加`element-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。 类似地，`element-loading-spinner`、`element-loading-background` 和 `element-loading-svg` 属性分别用来设定 svg 图标、背景色值、加载图标。
```vue
<template>
    <div>
        <ux-table
            v-loading="loading"
           
            element-loading-text="Loading..."
            :element-loading-spinner="svg"
            element-loading-svg-view-box="0, 0, 100, 100"
            element-loading-background="rgba(122, 122, 122, 0.8)"
            :data="tableData"
           >
            <ux-table-column type="index" label="序号" align="center" width="60" />
            <ux-table-column prop="pName" label="项目名称" />
            <ux-table-column prop="dName" label="部门" />
            <ux-table-column prop="contact" label="联系人" />
            <ux-table-column prop="photo" label="联系手机" />
            <ux-table-column prop="date" label="日期" />
            <ux-table-column prop="status" label="状态">
                <template #default="{ row }">
                    <ux-button :type="statusMap[row.status].color" is-link>
                                            </ux-button>
                    {{ statusMap[row.status].text }}
                </template>
            </ux-table-column>
        </ux-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)
const svg = `
        <path d="
           M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const tableData = [
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 0
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 1
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 2
    },
    {
        pName: '低代码开发平台',
        dName: '公共研发部',
        contact: '张三',
        photo: '18988888888',
        date: '2023-02-08',
        status: 3
    }
]

const statusMap = [
    { color: 'primary', text: '待处理' },
    { color: 'success', text: '已通过' },
    { color: 'warning', text: '待审核' },
    { color: 'danger', text: '不通过' }
]
</script>
```

:::info warning

虽然 `element-loading-spinner / element-loading-svg` 属性支持传入的 HTML 片段，但是动态在网站上渲染任意的 HTML 是非常危险的，因为很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 请确保 `element-loading-spinner / element-loading-svg`的内容是可信的， **不要**将用户提交的内容赋值给 `element-loading-spinner / element-loading-svg` 属性。

:::
## Loading的整页加载
加载数据时显示全屏动画。

 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上） 此时若需要锁定屏幕的滚动，可以使用 `lock` 修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置。
```vue
<template>
    <div>
        <ux-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">
            指令方式
        </ux-button>
        <ux-button type="primary" @click="openFullScreen2">服务方式</ux-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxLoading } from 'ux-up'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
    fullscreenLoading.value = true
    setTimeout(() => {
        fullscreenLoading.value = false
    }, 2000)
}

const openFullScreen2 = () => {
    const loading = UxLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}
</script>

```

## Loading的以服务的方式来调用
`Loading` 还可以以服务的方式调用。 你可以像这样引入 `Loading` 服务：

```ts
import { UxLoading } from 'ux-up'
```

在你需要的时候通过下面的方式调用：

```ts
UxLoading.service(options)
```

其中`options`参数为 Loading 的配置项，具体见下表。 `LoadingService` 会返回一个 Loading 实例，可通过调用该实例的 `close` 方法来关闭它：

```ts
const loadingInstance = UxLoading.service(options)
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close()
})
```

需要注意的是，以服务的方式调用的全屏 `Loading` 是单例的。 若在前一个全屏 `Loading` 关闭前再次调用全屏 `Loading`，并不会创建一个新的 `Loading` 实例，而是返回现有全屏 `Loading` 的实例：

```ts
const loadingInstance1 = UxLoading.service({ fullscreen: true })
const loadingInstance2 = UxLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2) // true
```

此时调用它们中任意一个的 `close` 方法都能关闭这个全屏 `Loading`。

如果完整引入了 ux-up，那么 `app.config.globalProperties` 上会有一个全局方法`$loading`， 它的调用方式为：`this.$loading(options)`，同样会返回一个 `Loading` 实例。
## Loading的应用程序上下文 ^(1.1.4)
现在 `Loading` 接受 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 `Loading` 中，这将允许你继承应用程序的所有属性。

你可以像这样使用它：

:::tip

如果您全局注册了 `UxLoading` 组件，它将自动继承应用的上下文环境。

:::

```ts
import { getCurrentInstance } from 'vue'
import { UxLoading } from 'ux-up'

// in your setup method
const { appContext } = getCurrentInstance()!
UxLoading.service({}, appContext)
```
