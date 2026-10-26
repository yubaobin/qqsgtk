<template>
    <ux-dialog :title="isAdd ? `编辑应用` : `添加应用`" v-model="bindVisible" width="600px" top="10vh">
        <ux-form ref="formRef" label-width="120px" :model="form" :rules="rules" class="edit-form__wrapper">
            <!-- 表单内容 -->
            <ux-form-item label="应用名称" prop="field1">
                <ux-input v-model="form.field1" />
            </ux-form-item>
             <ux-form-item label="负责人电话号码" prop="field2">
                <ux-input v-model="form.field2" />
            </ux-form-item>
        </ux-form>
        <template #footer>
            <div class="dialog-footer">
                <ux-button @click="bindVisible = false">取消</ux-button>
                <ux-button type="primary" @click="onSubmit" :loading="submitting">确定</ux-button>
            </div>
        </template>
    </ux-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { dialogComponentProps, dialogComponentEmit, useDialogComponentHook } from '@/hooks/web/dialog-component.js'
import api from '@/api/modules/banner/index.js'
// 从rules.js 获取公共校验规则
import { checkPhone } from '@/utils/rules.js'

const props = defineProps({
    ...dialogComponentProps,
    // 组件额外props
})
const emit = defineEmits([...dialogComponentEmit])
const formRef = ref()

const { bindVisible, form, submitting, validate, isAdd } = useDialogComponentHook(props, emit, {
    formRef,
    form: {
        field1: '',
        field2: ''
    },
    getDetailApi: api.getDetail
})

// 校验规则
const rules = reactive({
    field1: [{ required: true, message: '不能为空', trigger: 'blur' }],
    field2: [{ validator: checkPhone }]
})
function onSubmit() {
    validate(() => {
        const req = isAdd.value ? api.addBanner : api.editBanner
        return req(form.value)
    })
}
</script>

<style lang="scss" scoped>
// styles
</style>