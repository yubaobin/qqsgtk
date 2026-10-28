<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Camera, Loading } from '@element-plus/icons-vue'
import { useOCR } from '../composables/useOCR'
import { useAnswer } from '../composables/useAnswer'

const { recognize } = useOCR()
const { searchAnswer, results, loading: answerLoading, error: answerError } = useAnswer()

const questionText = ref('')
const imagePreview = ref<string | null>(null)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

function cleanPunctuation(text: string): string {
  return text.replace(/[\u3000-\u303F\uFF00-\uFFEF<>|,\u2026\u2014\-~·]/g, ' ')
}

function onPaste(e: ClipboardEvent) {
  const clipboardData = e.clipboardData
  if (!clipboardData) return

  for (const file of clipboardData.files) {
    if (file.type.startsWith('image/')) {
      handleImageFile(file)
      e.preventDefault()
      return
    }
  }

  for (const item of clipboardData.items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        handleImageFile(file)
        e.preventDefault()
        return
      }
    }
  }
}

async function handleImageFile(file: File) {
  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value)
  }
  imagePreview.value = URL.createObjectURL(file)

  try {
    const result = await recognize(file)
    questionText.value = cleanPunctuation(result.text)
  } catch {
    // error 已在 composable 中设置
  }
}

watch(questionText, (newText) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  debounceTimer = setTimeout(() => {
    searchAnswer(newText)
  }, 300)
})

onMounted(() => {
  window.addEventListener('paste', onPaste)
})

onUnmounted(() => {
  window.removeEventListener('paste', onPaste)
  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value)
  }
})
</script>

<template>
  <div class="search-bar">
    <el-input
      v-model="questionText"
      class="search-input"
      placeholder="请输入您的问题..."
      clearable
    >
      <template #prefix>
        <el-icon><Camera /></el-icon>
      </template>
    </el-input>
  </div>

  <div v-if="imagePreview" class="preview-section">
    <el-tag type="info" size="small">已选择图片</el-tag>
    <img :src="imagePreview" class="preview-img" alt="预览" />
  </div>

  <div class="results-section">
    <h2 class="section-title">搜索结果</h2>

    <div v-if="answerLoading" class="loading-state">
      <el-icon class="is-loading" :size="24"><Loading /></el-icon>
      <span>查找答案中...</span>
    </div>

    <el-alert
      v-else-if="answerError"
      :title="answerError"
      type="error"
      :closable="false"
      show-icon
    />

    <el-table
      v-else-if="results.length > 0"
      :data="results"
      style="width: 100%"
      border
      stripe
    >
      <el-table-column prop="question" label="问题" min-width="300" />
      <el-table-column prop="answer" label="答案" min-width="400">
        <template #default="{ row }">
          <div class="answer-cell">{{ row.answer }}</div>
        </template>
      </el-table-column>
    </el-table>

    <el-empty
      v-else-if="questionText.trim()"
      description="未找到匹配的答案"
      :image-size="80"
    />

    <el-empty
      v-else
      description="输入问题或粘贴图片开始查找"
      :image-size="80"
    />
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.search-input {
  flex: 1;
}

.preview-section {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.preview-section img {
  max-width: 200px;
  max-height: 150px;
  border-radius: 6px;
  margin-top: 8px;
}

.results-section {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1em;
  font-weight: 600;
  color: #303133;
  margin: 0 0 16px 0;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;
  color: #909399;
}

.answer-cell {
  white-space: pre-wrap;
  line-height: 1.6;
}
</style>
