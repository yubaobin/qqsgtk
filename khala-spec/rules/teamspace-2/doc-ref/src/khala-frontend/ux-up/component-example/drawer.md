# Drawer 抽屉
有些时候, ux-dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, ux-drawer 拥有和 ux-dialog 几乎相同的 API, 在 UI 上带来不一样的体验.

:::info primary

在 Vue 3 之后的版本 v-model 可以用于任何一个组件，`visible.sync` 已被移除，请使用 `v-model="visibilityBinding"` 来控制抽屉组件的显示和隐藏状态。

:::

## Drawer的基础用法
呼出一个临时的侧边栏, 可以从多个方向呼出。

 为 `ux-drawer` 设置 `model-value` 属性来控制 `ux-drawer` 的显示与隐藏状态，该属性接受一个 `boolean` 类型。 `ux-drawer` 包含三部分: `title`, `body` 和 `footer`, 其中 `title` 是一个具名 slot, 你还可以通过 `title` 属性来设置标题, 默认情况下它是一个空字符串, 其中 `body` 部分是 `ux-drawer` 组件的主区域, 它包含了用户定义的主要内容. `footer` 和 `title` 用法一致, 用来显示页脚信息. 当 `ux-drawer` 打开时，默认设置是**从右至左**打开。 你可以通过传入对应的 `direction` 属性来修改这一默认行为。 下面一个示例将展示如何使用 `before-close` API，更多详细用法请参考页面底部的 API 部分。
```vue
<template>
    <div>
        <ux-radio-group v-model="direction">
            <ux-radio label="ltr">从左往右开</ux-radio>
            <ux-radio label="rtl">从右往左开</ux-radio>
            <ux-radio label="ttb">从上往下开</ux-radio>
            <ux-radio label="btt">从下往上开</ux-radio>
        </ux-radio-group>

        <ux-button type="primary" @click="drawer = true">点我打开</ux-button>
        <ux-button type="primary" @click="drawer2 = true">打开包含底部</ux-button>

        <ux-drawer v-model="drawer" title="我是标题" :direction="direction" :before-close="handleClose">
            <span>我来啦!</span>
        </ux-drawer>
        <ux-drawer v-model="drawer2" :direction="direction">
            <template #header>
                <h4>使用 header-slot</h4>
            </template>
            <template #default>
                <div>
                    <ux-radio v-model="radio1" value="1" size="small">选项1</ux-radio>
                    <ux-radio v-model="radio1" value="2" size="small">选项2</ux-radio>
                </div>
            </template>
            <template #footer>
                <div>
                    <ux-button @click="cancelClick">取消</ux-button>
                    <ux-button type="primary" @click="confirmClick">确定</ux-button>
                </div>
            </template>
        </ux-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessageBox } from 'ux-up'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('1')
const handleClose = (done) => {
    UxMessageBox.confirm('确定要关闭?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
function cancelClick() {
    drawer2.value = false
}
function confirmClick() {
    UxMessageBox.confirm(`确定要选择 ${radio1.value} ?`)
        .then(() => {
            drawer2.value = false
        })
        .catch(() => {
            // catch error
        })
}
</script>

```

## Drawer的不添加标题
当你不需要标题的时候，可以将它移除。

 通过设置 `with-header` 属性为 **false** 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 `title`。
```vue
<template>
    <div>
        <ux-button type="primary" @click="drawer = true">点我打开</ux-button>

        <ux-drawer v-model="drawer" title="我是标题" :with-header="false">
            <span>我来啦!</span>
        </ux-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

```

## Drawer的自定义内容

```vue
<template>
    <div>
        <ux-button type="primary" @click="table = true">打开嵌套表格的 Drawer</ux-button>
        <ux-button type="primary" @click="dialog = true">打开嵌套表单的 Drawer</ux-button>
        <ux-drawer v-model="table" title="我嵌套了表格!" direction="rtl" size="50%">
            <ux-table :data="gridData">
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
        </ux-drawer>

        <ux-drawer
            v-model="dialog"
            title="我嵌套了表单!"
            :before-close="handleClose"
            direction="ltr"
           >
            <div>
                <ux-form :model="form" size="small">
                    <ux-form-item label="活动名称" :label-width="formLabelWidth">
                        <ux-input v-model="form.name" autocomplete="off" />
                    </ux-form-item>
                    <ux-form-item label="活动区域" :label-width="formLabelWidth">
                        <ux-select v-model="form.region" placeholder="请选择活动区域">
                            <ux-option label="区域一" value="shanghai" />
                            <ux-option label="区域二" value="beijing" />
                        </ux-select>
                    </ux-form-item>
                </ux-form>
                <div>
                    <ux-button @click="cancelForm">取 消</ux-button>
                    <ux-button type="primary" :loading="loading" @click="onClick">
                        {{ loading ? '提交中 ...' : '确 定' }}
                    </ux-button>
                </div>
            </div>
        </ux-drawer>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessageBox } from 'ux-up'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const gridData = [
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

const onClick = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        dialog.value = false
    }, 400)
}

const handleClose = (done) => {
    if (loading.value) {
        return
    }
    UxMessageBox.confirm('确定要提交表单吗？')
        .then(() => {
            loading.value = true
            timer = setTimeout(() => {
                done()
                // 动画关闭需要一定的时间
                setTimeout(() => {
                    loading.value = false
                }, 400)
            }, 2000)
        })
        .catch(() => {
            // catch error
        })
}

const cancelForm = () => {
    loading.value = false
    dialog.value = false
    clearTimeout(timer)
}
</script>

```

## Drawer的自定义头部
`header` 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 `title` 属性，或使用 `titleId` 插槽属性来指定哪些元素应该读取为抽屉标题。

```vue
<template>
    <div>
        <ux-button type="primary" @click="visible = true">打开自定义头部</ux-button>
        <ux-drawer v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
                <h4 :id="titleId" :class="titleClass">这是自定义头部!</h4>
                <ux-button type="danger" size="mini" @click="close">
                    <ux-icon><CircleCloseFilled /></ux-icon>
                    关闭
                </ux-button>
            </template>
            抽屉内容。
        </ux-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@ux-up/icons-vue'

const visible = ref(false)
</script>

```

## Drawer的多层嵌套
 如果需要嵌套多层 `ux-Drawer` 请一定要设置 `append-to-body` 属性为 **true**
```vue
<template>
    <div>
        <ux-button type="primary" @click="drawer = true">点我打开</ux-button>

        <ux-drawer v-model="drawer" title="我是外面的 Drawer" size="50%">
            <div>
                <ux-button @click="innerDrawer = true">打开里面的!</ux-button>
                <ux-drawer v-model="innerDrawer" title="我是里面的" :append-to-body="true" :before-close="handleClose">
                    <p>_(:зゝ∠)_</p>
                </ux-drawer>
            </div>
        </ux-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessageBox } from 'ux-up'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done) => {
    UxMessageBox.confirm('还有未保存的工作哦确定关闭吗?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
</script>

```

:::info primary

`ux-drawer` 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::

:::info primary

`ux-drawer` 还提供一个 `destroy-on-close` 的 API，用来控制是否在 `ux-drawer` 隐藏之后把 `ux-drawer` 的默认插槽内的内容销毁。 当你需要每次打开抽屉都要调用 ` mounted ` 生命周期时，可以使用此 API。

:::
