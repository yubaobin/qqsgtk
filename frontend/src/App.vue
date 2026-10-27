<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Loading, Camera, Picture } from '@element-plus/icons-vue'
import { useOCR } from './composables/useOCR'
import { useAnswer } from './composables/useAnswer'

const { recognize, loading: ocrLoading, error: ocrError } = useOCR()
const { searchAnswer, results, loading: answerLoading, error: answerError } = useAnswer()

const questionText = ref('')
const imagePreview = ref<string | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

// 触发文件选择
function triggerFileInput() {
  fileInputRef.value?.click()
}

// 中英文标点符号替换为空格
function cleanPunctuation(text: string): string {
  return text.replace(/[<|《》,,。.!！?？;；:：、""''（）()\[\]【】{}…—\-~～·']/g, ' ')
}

// 粘贴图片：全局监听 paste 事件
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
    // 自动触发搜索
    searchAnswer(questionText.value)
    ElMessage.success('图片识别完成')
  } catch {
    ElMessage.error(ocrError.value || '图片识别失败')
  }
}

// 手动点击搜索
function handleSearch() {
  if (questionText.value.trim()) {
    searchAnswer(questionText.value)
  }
}

// 输入框变化防抖查询（可选，保留自动搜索）
watch(questionText, (newText) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  debounceTimer = setTimeout(() => {
    searchAnswer(newText)
  }, 500)
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
  <div class="app">
    <!-- 顶部标题 -->
    <header class="page-header">
      <h1>问题答案搜索</h1>
    </header>

    <!-- 搜索栏 -->
    <div class="search-bar">
      <el-input
        v-model="questionText"
        class="search-input"
        placeholder="请输入您的问题..."
        clearable
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          <el-icon><Camera /></el-icon>
        </template>
      </el-input>
      <el-button
        type="primary"
        :loading="answerLoading || ocrLoading"
        @click="handleSearch"
      >
        <el-icon><Search /></el-icon>
        搜索
      </el-button>
      <el-button @click="triggerFileInput">
        <el-icon><Picture /></el-icon>
        上传图片
      </el-button>
    </div>

    <!-- 图片预览（如果有） -->
    <div v-if="imagePreview" class="preview-section">
      <el-tag type="info" size="small">已选择图片</el-tag>
      <img :src="imagePreview" class="preview-img" alt="预览" />
    </div>

    <!-- 搜索结果区域 -->
    <div class="results-section">
      <h2 class="section-title">搜索结果</h2>

      <!-- 加载中 -->
      <div v-if="answerLoading" class="loading-state">
        <el-icon class="is-loading" :size="24"><Loading /></el-icon>
        <span>查找答案中...</span>
      </div>

      <!-- 错误 -->
      <el-alert
        v-else-if="answerError"
        :title="answerError"
        type="error"
        :closable="false"
        show-icon
      />

      <!-- 结果表格 -->
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

      <!-- 空状态 -->
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

    <!-- 隐藏的上传 input -->
    <input
      ref="fileInputRef"
      type="file"
      accept="image/*"
      style="display: none"
      @change="(e: Event) => {
        const target = e.target as HTMLInputElement
        if (target.files?.[0]) {
          handleImageFile(target.files[0])
        }
      }"
    />
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 1.5em;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

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
