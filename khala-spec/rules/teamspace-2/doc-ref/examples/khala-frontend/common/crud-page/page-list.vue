<template>
    <div class="common-page">
        <div class="query-form">
            <ux-form inline>
                <ux-form-item label="应用名称">
                    <ux-input v-model="query.name" placeholder="请输入应用名称" />
                </ux-form-item>
                <ux-form-item>
                    <ux-button type="primary" @click="getList(1)">查询</ux-button>
                    <ux-button plain @click="resetQuery">重置</ux-button>
                </ux-form-item>
            </ux-form>
        </div>
        <div class="table-wrapper">
            <div class="operate-wrapper">
                <ux-button @click="onAdd" type="primary" :icon="Plus">添加</ux-button>
            </div>
            <ux-table :data="list" v-loading="loadingList">
                <!-- 表格列 -->
                <!-- 操作按钮 -->
                <ux-table-column label="操作" align="center" width="260px" fixed="right">
                    <template v-slot="{ row }">
                        <ux-button is-link type="primary" @click="onEdit(row)">修改</ux-button>
                        <ux-button is-link type="danger" @click="onDel(row)">删除</ux-button>
                        <table-more-tools :key="row.id">
                            <ux-dropdown-item @click="onResetSecret(row)">重置秘钥</ux-dropdown-item>
                            <ux-dropdown-item @click="onResetCrypto(row)">重置加密信息</ux-dropdown-item>
                        </table-more-tools>
                    </template>
                </ux-table-column>
            </ux-table>
            <ux-pagination v-bind="pagination" @current-change="getList" />
        </div>
        <AddEditDialg @close="getList" :cur-row="curRow" v-model:visible="showEdit" />
    </div>
</template>

<script setup>
import { usePageListHook } from '@/hooks/web/use-page-list.js'
import { UxMessage, UxMessageBox } from 'ux-up'
const { 
    query, 
    pagination, 
    loadingList, 
    list, 
    getList, 
    resetQuery, 
    showEdit, 
    onAdd, 
    onEdit, 
    curRow, 
    confirm
} = usePageListHook({
    getListApi: api.getList,
    query: {
        name: ''
    }
})

function handleDelete(row) {
    confirm('确定要删除该栏目吗？删除后不可恢复。').then(() => {
        api.deleteCategory({
            id: row.id
        }).then(() => {
            UxMessage.success('删除成功')
            getList(1)
        })
    })
}
</script>

<style lang="scss" scoped>
/* 样式 */
</style>