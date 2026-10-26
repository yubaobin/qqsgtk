import { useAppStore } from &#39;@/store/modules/app&#39;
import { cloneDeep } from &#39;lodash-es&#39;
import { UxMessage, UxMessageBox } from &#39;ux-up&#39;
import { computed, getCurrentInstance, isRef, onActivated, onMounted, reactive, ref } from &#39;vue&#39;
import { useRouter } from &#39;vue-router&#39;

/**
 * @typedef {object} PageListOption
 * @property {() =&gt; Promise&lt;any&gt;} getListApi 请求接口
 * @property {Record&lt;string, any&gt;} query 查询参数
 * @property {boolean} autoLoad 是否自动加载列表数据，默认为 true
 */

/**
 *
 * @param {PageListOption} state
 */
export function usePageListHook (state) {
    const instance = getCurrentInstance()
    const router = useRouter()
    const appStore = useAppStore()
    // 配置请求接口
    const getListApi = state.getListApi ? state.getListApi : () =&gt; Promise.resolve()
    const query = isRef(state.query) ? state.query : ref(cloneDeep(state.query))
    const pagination = reactive({
        currentPage: 1,
        pageSize: 10,
        total: 0,
        layout: &#39;-&gt;, total, prev, pager, next, jumper&#39;
    })
    const loadingList = ref(false)
    const list = ref([])
    const selectedRows = ref([])
    const showEdit = ref(false)
    const curRow = ref({})

    onActivated(() =&gt; {
        getList()
    })

    onMounted(() =&gt; {
        if (state.autoLoad !== false) {
            search()
        }
    })

    function onAdd () {
        curRow.value = {}
        showEdit.value = true
    }
    function onEdit (row) {
        curRow.value = row
        showEdit.value = true
    }
    function resetQuery () {
        query.value = cloneDeep(state.query)
        getList(1)
    }
    function getList (page) {
        if (page) {
            pagination.currentPage = page
        }
        loadingList.value = true
        getListApi({
            page: pagination.currentPage,
            size: pagination.pageSize,
            ...query.value
        }).then((data) =&gt; {
            list.value = data.records
            pagination.total = data.total
        }).finally(() =&gt; {
            loadingList.value = false
        })
    }
    function confirm (text, apiMethod, isBack = false) {
        return UxMessageBox.confirm(text,
            &#39;提示&#39;, {
                confirmButtonText: &#39;确定&#39;,
                cancelButtonText: &#39;取消&#39;,
                dangerouslyUseHTMLString: true,
                type: &#39;warning&#39;,
                beforeClose: (action, instance, done) =&gt; {
                    if (action === &#39;confirm&#39;) {
                        instance.confirmButtonLoading = true
                        apiMethod().then(() =&gt; {
                            UxMessage.success(&#39;操作成功&#39;)
                            if (isBack) {
                                router.back()
                            } else {
                                getList()
                            }
                        }).finally(() =&gt; {
                            instance.confirmButtonLoading = false
                            done()
                        })
                    } else {
                        done()
                    }
                }
            })
    }
    function onSelectionChange (val) {
        selectedRows.value = val
    }
    function onSortChange ({ prop, order }) {
        if (!query.value.sorts) {
            query.value.sorts = {}
        }
        query.value.sorts.column = prop
        query.value.sorts.order = order
        getList(1)
    }
    function search (searchQuery) {
        if (searchQuery) {
            query.value = { ...query.value, ...searchQuery }
        }
        getList(1)
    }
    function indexMethod (index) {
        const { pageSize = 10, currentPage: pageNum = 1 } = pagination
        return index + pageSize * (pageNum - 1) + 1
    }
    function toPage (path, query = {}) {
        if (instance &amp;&amp; instance.type.name) {
            appStore.setCacheView([instance.type.name])
        }
        router.push({
            path: path,
            query: query
        })
    }

    const isSelected = computed(() =&gt; !!selectedRows.value.length)

    return {
        query,
        pagination,
        loadingList,
        list,
        selectedRows,
        showEdit,
        curRow,
        isSelected,
        onAdd,
        onEdit,
        resetQuery,
        getList,
        confirm,
        onSelectionChange,
        onSortChange,
        indexMethod,
        toPage,
        search
    }
}
