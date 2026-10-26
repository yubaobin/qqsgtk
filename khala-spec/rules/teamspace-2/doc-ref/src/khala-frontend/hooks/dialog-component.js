import { cloneDeep } from &#39;lodash-es&#39;
import { UxMessage } from &#39;ux-up&#39;
import { computed, ref, watch } from &#39;vue&#39;

/**
 * @typedef {object} DialogComponentOption
 * @property {import(&#39;vue&#39;).Ref&lt;import(&#39;ux-up&#39;).FormInstance&gt;} formRef 表单实例
 * @property {Record&lt;string, any&gt;} form 提交表单数据
 */

export const dialogComponentEmit = [&#39;close&#39;, &#39;update:visible&#39;]

export const dialogComponentProps = {
    visible: Boolean,
    curRow: {
        type: Object,
        default: () =&gt; ({})
    }
}

/**
 * @param {typeof dialogComponentProps } props
 * @param {(event: &#39;close&#39; | &#39;update:visible&#39;, ...args: any[]) =&gt; void} emit
 * @param {DialogComponentOption} state
 */
export function useDialogComponentHook (props, emit, state = {}) {
    const getDetailApi = state.getDetailApi ? state.getDetailApi : null // 获取详情api
    const bindVisible = ref(false)
    const defaultForm = state.form ? state.form : {}

    const form = ref(cloneDeep(defaultForm))
    const submitting = ref(false)
    const loadingDetail = ref(false)

    const isAdd = computed(() =&gt; !props.curRow.id)

    function onAdd () {
        form.value = cloneDeep(defaultForm)
        resetFields()
    }
    function onEdit () {
        if (getDetailApi.value instanceof Function) {
            loadingDetail.value = true
            getDetailApi({ id: props.curRow.id }).then(data =&gt; {
                form.value = data
            }).finally(() =&gt; {
                loadingDetail.value = false
            })
        } else {
            form.value = cloneDeep(props.curRow)
        }
    }
    function beforeShow () {
        if (isAdd.value) {
            onAdd()
        } else {
            onEdit()
        }
    }
    function validate (apiMethod) {
        if (!state.formRef?.value) return
        state.formRef.value.validate().then(() =&gt; {
            submitting.value = true
            const re = apiMethod(form.value)
            if (re instanceof Promise) {
                re.then(() =&gt; {
                    UxMessage.success(&#39;成功&#39;)
                    bindVisible.value = false
                    emit(&#39;close&#39;)
                }).finally(() =&gt; {
                    submitting.value = false
                })
            }
        }, () =&gt; {
            UxMessage.warning(&#39;请检查输入&#39;)
        })
    }
    function resetFields () {
        if (state.formRef?.value) {
            state.formRef.value.resetFields()
        }
    }

    watch(() =&gt; props.visible, (val) =&gt; {
        if (bindVisible.value !== val) {
            bindVisible.value = val
            if (val) {
                beforeShow()
            }
        }
    }, {
        immediate: true
    })

    watch(() =&gt; bindVisible.value, (val) =&gt; {
        if (props.visible !== val) {
            emit(&#39;update:visible&#39;, val)
        }
    })

    return {
        bindVisible,
        form,
        submitting,
        loadingDetail,
        isAdd,
        onAdd,
        onEdit,
        validate,
        resetFields
    }
}
