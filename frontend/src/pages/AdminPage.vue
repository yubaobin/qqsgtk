<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Plus, Edit, Delete, Search } from '@element-plus/icons-vue'
import { useQuestions, type QuestionItem } from '../composables/useQuestions'
import { useAnswer } from '../composables/useAnswer'

const { loading, list, fetchList, create, update, remove } = useQuestions()
const { searchAnswer, results } = useAnswer()

// 搜索状态
const searchText = ref('')
let searchTimer: ReturnType<typeof setTimeout> | null = null

watch(searchText, (text) => {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    fetchList(text)
  }, 300)
})

// 表单状态
const dialogVisible = ref(false)
const editingId = ref<number | null>(null)
const form = ref({ question: '', answer: '', indexes: '' })

// 查重状态
const checkQuestion = ref('')
let checkTimer: ReturnType<typeof setTimeout> | null = null

watch(checkQuestion, (text) => {
  if (checkTimer) clearTimeout(checkTimer)
  if (!text.trim()) return
  checkTimer = setTimeout(() => {
    searchAnswer(text)
  }, 300)
})

function openCreate() {
  editingId.value = null
  form.value = { question: '', answer: '', indexes: '' }
  checkQuestion.value = ''
  dialogVisible.value = true
}

function openEdit(row: QuestionItem) {
  editingId.value = row.id
  form.value = { question: row.question, answer: row.answer, indexes: row.indexes }
  checkQuestion.value = row.question
  dialogVisible.value = true
}

async function handleSubmit() {
  if (!form.value.question.trim() || !form.value.answer.trim() || !form.value.indexes.trim()) return
  if (editingId.value) {
    await update(editingId.value, form.value)
  } else {
    await create(form.value)
  }
  dialogVisible.value = false
}

async function handleDelete(row: QuestionItem) {
  try {
    await ElMessageBox.confirm('确定删除该题目吗？', '提示', {
      type: 'warning',
      confirmButtonText: '删除',
      cancelButtonText: '取消',
    })
  } catch {
    return
  }
  await remove(row.id)
}

onMounted(() => {
  fetchList()
})
</script>

<template>
  <!-- 已录入题目列表 -->
  <div class="list-section">
    <div class="list-header">
      <h2 class="section-title">已录入题目（{{ list.length }}）</h2>
      <el-button type="primary" :icon="Plus" @click="openCreate">新增题目</el-button>
    </div>

    <el-input
      v-model="searchText"
      class="search-input"
      placeholder="搜索已录入的题目..."
      clearable
    >
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>

    <el-table
      v-loading="loading"
      :data="list"
      style="width: 100%"
      border
      stripe
    >
      <el-table-column prop="question" label="问题" min-width="300" />
      <el-table-column prop="answer" label="答案" min-width="200" />
      <el-table-column prop="indexes" label="索引（拼音首字母）" min-width="200" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="{ row }">
          <el-button size="small" :icon="Edit" @click="openEdit(row)">编辑</el-button>
          <el-button size="small" type="danger" :icon="Delete" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 新增/编辑弹窗 -->
  <el-dialog
    v-model="dialogVisible"
    :title="editingId ? '编辑题目' : '新增题目'"
    width="600px"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="问题" required>
        <el-input
          v-model="form.question"
          placeholder="输入问题"
          @input="checkQuestion = form.question"
        />
      </el-form-item>

      <!-- 查重提示 -->
      <el-form-item v-if="checkQuestion.trim() && results.length > 0" label=" ">
        <el-alert type="warning" :closable="false" show-icon>
          <template #title>
            发现 {{ results.length }} 条相似题目，请确认是否重复录入
          </template>
          <div v-for="r in results.slice(0, 5)" :key="r.id" class="dup-item">
            <span class="dup-q">{{ r.question }}</span>
            <span class="dup-a">→ {{ r.answer }}</span>
          </div>
        </el-alert>
      </el-form-item>

      <el-form-item v-if="checkQuestion.trim() && results.length === 0 && !loading" label=" ">
        <el-alert type="success" :closable="false" show-icon title="未发现重复题目" />
      </el-form-item>

      <el-form-item label="答案" required>
        <el-input v-model="form.answer" placeholder="输入答案" />
      </el-form-item>

      <el-form-item label="索引（拼音首字母）" required>
        <el-input v-model="form.indexes" placeholder="如 sgyyssdzz" />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button
        type="primary"
        :disabled="!form.question.trim() || !form.answer.trim() || !form.indexes.trim()"
        @click="handleSubmit"
      >
        确认
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
.list-section {
  background: var(--ds-bg-content);
  border-radius: var(--ds-radius-lg);
  padding: 20px;
  border: 2px solid var(--ds-border-lighter);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.search-input {
  margin-bottom: 16px;
}

.section-title {
  font-size: 1em;
  font-weight: 700;
  color: var(--ds-text);
  margin: 0;
}

.dup-item {
  padding: 4px 0;
  font-size: 13px;
  line-height: 1.4;
}

.dup-q {
  color: var(--ds-text-body);
}

.dup-a {
  color: var(--ds-primary);
  margin-left: 8px;
  font-weight: 600;
}
</style>
