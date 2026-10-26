# Form 表单
表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

:::info primary

Form 组件已经从 Float 布局升级为 Flex 布局。

:::

## Form的典型表单
最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

 在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。
```vue
<template>
    <ux-form :model="form" label-width="auto">
        <ux-form-item label="作品标题">
            <ux-input v-model="form.name" placeholder="作品标题" />
        </ux-form-item>
        <ux-form-item label="所属栏目">
            <ux-select v-model="form.region" placeholder="请选择所属栏目">
                <ux-option label="栏目一" value="sub1" />
                <ux-option label="栏目二" value="sub2" />
            </ux-select>
        </ux-form-item>
        <ux-form-item label="发布日期">
            <ux-col :span="11">
                <ux-date-picker v-model="form.date1" type="date" placeholder="选择日期" />
            </ux-col>
            <ux-col :span="2">-</ux-col>
            <ux-col :span="11">
                <ux-time-picker v-model="form.date2" placeholder="选择时间" />
            </ux-col>
        </ux-form-item>
        <ux-form-item label="是否原创">
            <ux-switch v-model="form.delivery" />
        </ux-form-item>
        <ux-form-item label="作品标签">
            <ux-checkbox-group v-model="form.type">
                <ux-checkbox value="case" name="type">案例</ux-checkbox>
                <ux-checkbox value="component" name="type">组件</ux-checkbox>
                <ux-checkbox value="resources" name="type">资源</ux-checkbox>
                <ux-checkbox value="doc" name="type">文档</ux-checkbox>
            </ux-checkbox-group>
        </ux-form-item>
        <ux-form-item label="作品类型">
            <ux-radio-group v-model="form.resource">
                <ux-radio value="设计资源">设计资源</ux-radio>
                <ux-radio value="文档">文档</ux-radio>
            </ux-radio-group>
        </ux-form-item>
        <ux-form-item label="作品简介">
            <ux-input v-model="form.desc" type="textarea" placeholder="请输入作品简介" />
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="onSubmit">立即创建</ux-button>
            <ux-button>取消</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive } from 'vue'

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

const onSubmit = () => {
    console.log('submit!')
}
</script>

```

:::info primary

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) 标准定义：

> <i>当一个表单中只有一个单行文本输入字段时， 浏览器应当将在此字段中按下 <kbd>Enter</kbd> （回车键）的行为视为提交表单的请求。</i>
如果希望阻止这一默认行为，可以在 `<ux-form>` 标签上添加 `@submit.prevent`。

:::
## Form的行内表单
当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

 通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。
```vue
<template>
    <ux-form :inline="true" :model="formInline">
        <ux-form-item label="审批人">
            <ux-input v-model="formInline.user" placeholder="请输入审批人" clearable />
        </ux-form-item>
        <ux-form-item label="审批结果">
            <ux-select v-model="formInline.region" placeholder="审批结果" clearable>
                <ux-option label="通过" value="pass" />
                <ux-option label="不通过" value="nopass" />
            </ux-select>
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="onSubmit">查询</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
    user: '',
    region: '',
    date: ''
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
```

## Form的对齐方式
根据你们的设计情况，来选择最佳的标签对齐方式。

您可以分别设置 `ux-form-item` 的`label-position` . 如果值为空, 则会使用 `ux-form`的`label-position`。

 通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`, 当设为 `top` 时标签会置于表单域的顶部
```vue
<template>
    <ux-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign">
        <ux-form-item label="表单对齐属性" label-position="right">
            <ux-radio-group v-model="labelPosition" aria-label="label position">
                <ux-radio-button value="left">左对齐</ux-radio-button>
                <ux-radio-button value="right">右对齐</ux-radio-button>
                <ux-radio-button value="top">顶部对齐</ux-radio-button>
            </ux-radio-group>
        </ux-form-item>
        <ux-form-item label="表单项对齐属性" label-position="right">
            <ux-radio-group v-model="itemLabelPosition" aria-label="item label position">
                <ux-radio-button value="">空</ux-radio-button>
                <ux-radio-button value="left">左对齐</ux-radio-button>
                <ux-radio-button value="right">右对齐</ux-radio-button>
                <ux-radio-button value="top">顶部对齐</ux-radio-button>
            </ux-radio-group>
        </ux-form-item>
        <ux-form-item label="作品标题" :label-position="itemLabelPosition">
            <ux-input v-model="formLabelAlign.name" placeholder="请输入作品标题" />
        </ux-form-item>
        <ux-form-item label="所属栏目" :label-position="itemLabelPosition">
            <ux-select v-model="formLabelAlign.region" placeholder="请选择所属栏目">
                <ux-option label="栏目一" value="sub1" />
                <ux-option label="栏目二" value="sub2" />
            </ux-select>
        </ux-form-item>
        <ux-form-item label="作品简介" :label-position="itemLabelPosition">
            <ux-input v-model="formLabelAlign.type" placeholder="请输入作品简介" />
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')
const itemLabelPosition = ref('')
const formLabelAlign = reactive({
    name: '',
    region: '',
    type: ''
})
</script>

```

## Form的表单校验
Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

 `Form` 组件提供了表单验证的功能，只需为 `rules` 属性传入约定的验证规则，并将 `form-Item` 的 `prop` 属性设置为需要验证的特殊键值即可。 校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)
```vue
<template>
    <ux-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto">
        <ux-form-item label="作品标题" prop="name">
            <ux-input v-model="ruleForm.name" placeholder="作品标题" />
        </ux-form-item>
        <ux-form-item label="所属栏目" prop="region">
            <ux-select v-model="ruleForm.region" placeholder="请选择所属栏目">
                <ux-option label="栏目一" value="sub1" />
                <ux-option label="栏目二" value="sub2" />
            </ux-select>
        </ux-form-item>
        <ux-form-item label="发布日期" required>
            <ux-col :span="11">
                <ux-form-item prop="date1">
                    <ux-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" />
                </ux-form-item>
            </ux-col>
            <ux-col :span="2">-</ux-col>
            <ux-col :span="11">
                <ux-form-item prop="date2">
                    <ux-time-picker v-model="ruleForm.date2" placeholder="选择时间" />
                </ux-form-item>
            </ux-col>
        </ux-form-item>
        <ux-form-item label="是否原创" prop="delivery">
            <ux-switch v-model="ruleForm.delivery" />
        </ux-form-item>
        <ux-form-item label="作品标签" prop="type">
            <ux-checkbox-group v-model="ruleForm.type">
                <ux-checkbox value="case" name="type">案例</ux-checkbox>
                <ux-checkbox value="component" name="type">组件</ux-checkbox>
                <ux-checkbox value="resources" name="type">资源</ux-checkbox>
                <ux-checkbox value="doc" name="type">文档</ux-checkbox>
            </ux-checkbox-group>
        </ux-form-item>
        <ux-form-item label="作品类型" prop="resource">
            <ux-radio-group v-model="ruleForm.resource">
                <ux-radio value="设计资源">设计资源</ux-radio>
                <ux-radio value="文档">文档</ux-radio>
            </ux-radio-group>
        </ux-form-item>
        <ux-form-item label="作品简介" prop="desc">
            <ux-input v-model="ruleForm.desc" type="textarea" placeholder="请输入作品简介" />
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="submitForm(ruleFormRef)">立即创建</ux-button>
            <ux-button @click="resetForm(ruleFormRef)">重置</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessage } from 'ux-up'

const ruleFormRef = ref()
const ruleForm = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const rules = reactive({
    name: [
        {
            required: true,
            message: '请输入作品标题',
            trigger: 'blur'
        },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    region: [
        {
            required: true,
            message: '请选择所属栏目',
            trigger: 'change'
        }
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
        }
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
        }
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: '请至少选择一个标签',
            trigger: 'change'
        }
    ],
    resource: [
        {
            required: true,
            message: '请选择作品类型',
            trigger: 'change'
        }
    ],
    desc: [
        {
            required: true,
            message: '请填写作品简介',
            trigger: 'blur'
        }
    ]
})

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            UxMessage.success('提交成功!')
        } else {
            console.log('提交失败!', fields)
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

```

## Form的自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

 本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。
```vue
<template>
    <ux-form
        ref="ruleFormRef"
       
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
       >
        <ux-form-item label="密码" prop="pass">
            <ux-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
        </ux-form-item>
        <ux-form-item label="确认密码" prop="checkPass">
            <ux-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="再次确认密码" />
        </ux-form-item>
        <ux-form-item label="年龄" prop="age">
            <ux-input v-model.number="ruleForm.age" placeholder="请输入年龄" />
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="submitForm(ruleFormRef)">提交</ux-button>
            <ux-button @click="resetForm(ruleFormRef)">重置</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessage } from 'ux-up'

const ruleFormRef = ref()

const checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass')
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: ''
})

const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            UxMessage.success('提交成功!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

```

:::info primary

自定义的校验回调函数必须被调用。 校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

:::
## Form的添加/删除表单项
 除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。
```vue
<template>
    <ux-form
        ref="formRef"
       
        :model="dynamicValidateForm"
        label-width="auto"
       >
        <ux-form-item
            prop="email"
            label="邮箱"
            :rules="[
                {
                    required: true,
                    message: '请输入请输入邮箱',
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: '请输入正确的邮箱地址',
                    trigger: ['blur', 'change']
                }
            ]">
            <ux-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱" />
        </ux-form-item>
        <ux-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :key="domain.key"
            :label="'域名' + index"
            :prop="'domains.' + index + '.value'"
            :rules="{
                required: true,
                message: '域名不能为空',
                trigger: 'blur'
            }">
            <ux-input v-model="domain.value" placeholder="请输入域名" />
            <ux-button @click.prevent="removeDomain(domain)">删除</ux-button>
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="submitForm(formRef)">提交</ux-button>
            <ux-button @click="addDomain">新增域名</ux-button>
            <ux-button @click="resetForm(formRef)">重置</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessage } from 'ux-up'

const formRef = ref()
const dynamicValidateForm = reactive({
    domains: [
        {
            key: 1,
            value: ''
        }
    ],
    email: ''
})

const removeDomain = (item) => {
    const index = dynamicValidateForm.domains.indexOf(item)
    if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1)
    }
}

const addDomain = () => {
    dynamicValidateForm.domains.push({
        key: Date.now(),
        value: ''
    })
}

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            UxMessage.success('提交成功!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

```

## Form的数字类型验证
 数字类型的验证需要在 `v-model` 处加上 `.number` 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。
```vue
<template>
    <ux-form
        ref="formRef"
       
        :model="numberValidateForm"
        label-width="auto"
       >
        <ux-form-item
            label="年龄"
            prop="age"
            :rules="[
                { required: true, message: '年龄不能为空' },
                { type: 'number', message: '年龄必须为数字值' }
            ]">
            <ux-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" placeholder="请输入年龄" />
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="submitForm(formRef)">提交</ux-button>
            <ux-button @click="resetForm(formRef)">重置</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessage } from 'ux-up'

const formRef = ref()

const numberValidateForm = reactive({
    age: ''
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            UxMessage.success('提交成功!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

```

:::info primary

当一个 `form-item` 嵌套在另一个 `form-item` 时，其标签宽度将是 `0`。 如果需要可以为 `form-item` 单独设置 `label-width` 属性。

:::
## Form的尺寸控制
表单中的所有子组件都继承了该表单的 `size` 属性。 同样，form-item 也有一个 `size` 属性。

 如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 `size` 属性，直接为这个表单项或表单组件设置自己的 size 属性即可。
```vue
<template>
    <div>
        <ux-form inline :size="size">
            <ux-form-item label="大小">
                <ux-radio-group v-model="size" aria-label="大小控制">
                    <ux-radio-button value="large">large</ux-radio-button>
                    <ux-radio-button value="default">default</ux-radio-button>
                    <ux-radio-button value="small">small</ux-radio-button>
                    <ux-radio-button value="mini">mini</ux-radio-button>
                </ux-radio-group>
            </ux-form-item>
            <ux-form-item label="位置">
                <ux-radio-group v-model="labelPosition" aria-label="位置控制">
                    <ux-radio-button value="left">Left</ux-radio-button>
                    <ux-radio-button value="right">Right</ux-radio-button>
                    <ux-radio-button value="top">Top</ux-radio-button>
                </ux-radio-group>
            </ux-form-item>
        </ux-form>
        <ux-form
           
            :model="sizeForm"
            label-width="auto"
            :label-position="labelPosition"
            :size="size">
            <ux-form-item label="作品标题">
                <ux-input v-model="sizeForm.name" placeholder="作品标题" />
            </ux-form-item>
            <ux-form-item label="所属栏目">
                <ux-select v-model="sizeForm.region" placeholder="请选择所属栏目">
                    <ux-option label="栏目一" value="sub1" />
                    <ux-option label="栏目二" value="sub2" />
                </ux-select>
            </ux-form-item>
            <ux-form-item label="发布日期">
                <ux-col :span="11">
                    <ux-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" />
                </ux-col>
                <ux-col :span="2">-</ux-col>
                <ux-col :span="11">
                    <ux-time-picker v-model="sizeForm.date2" placeholder="选择时间" />
                </ux-col>
            </ux-form-item>
            <ux-form-item label="是否原创">
                <ux-switch v-model="sizeForm.delivery" />
            </ux-form-item>
            <ux-form-item label="作品标签">
                <ux-checkbox-group v-model="sizeForm.type">
                    <ux-checkbox value="case" name="type">案例</ux-checkbox>
                    <ux-checkbox value="component" name="type">组件</ux-checkbox>
                    <ux-checkbox value="resources" name="type">资源</ux-checkbox>
                    <ux-checkbox value="doc" name="type">文档</ux-checkbox>
                </ux-checkbox-group>
            </ux-form-item>
            <ux-form-item label="作品类型">
                <ux-radio-group v-model="sizeForm.resource">
                    <ux-radio border value="设计资源">设计资源</ux-radio>
                    <ux-radio border value="文档">文档</ux-radio>
                </ux-radio-group>
            </ux-form-item>
            <ux-form-item label="作品简介">
                <ux-input v-model="sizeForm.desc" type="textarea" placeholder="请输入作品简介" />
            </ux-form-item>
            <ux-form-item>
                <ux-button type="primary" @click="onSubmit">立即创建</ux-button>
                <ux-button>取消</ux-button>
            </ux-form-item>
        </ux-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

function onSubmit() {
    console.log('submit!')
}
</script>

```

