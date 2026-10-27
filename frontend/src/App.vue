<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Picture, Loading } from '@element-plus/icons-vue'
import { useOCR } from './composables/useOCR'
import { useAnswer } from './composables/useAnswer'

const { recognize, loading: ocrLoading, error: ocrError } = useOCR()
const { searchAnswer, results, loading: answerLoading, error: answerError } = useAnswer()

const questionText = ref('')
const imagePreview = ref<string | null>(null)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

// 中英文标点符号替换为空格
function cleanPunctuation(text: string): string {
  return text.replace(/[<|《》,,。.!！?？;；:：、""''（）()\[\]【】{}…—\-~～·'']/g, ' ')
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
    ElMessage.success('图片识别完成')
  } catch {
    ElMessage.error(ocrError.value || '图片识别失败')
  }
}

// 文件选择
function onFileChange(file: { raw: File }) {
  handleImageFile(file.raw)
}

// 输入框变化防抖查询
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
    <el-card class="main-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon :size="24"><Picture /></el-icon>
          <span>OCR 图片识别 & 答案查找</span>
        </div>
      </template>

      <!-- 图片上传区域 -->
      <el-upload
        class="upload-area"
        drag
        :auto-upload="false"
        :show-file-list="false"
        accept="image/*"
        :on-change="onFileChange"
        :disabled="ocrLoading"
      >
        <el-icon v-if="!imagePreview && !ocrLoading" :size="48" class="upload-icon">
          <Picture />
        </el-icon>
        <el-icon v-if="ocrLoading" :size="48" class="upload-icon loading-icon">
          <Loading />
        </el-icon>
        <div v-if="imagePreview" class="preview-wrapper">
          <img :src="imagePreview" class="preview-img" alt="预览" />
        </div>
        <div v-else class="upload-text">
          <p class="upload-title">点击选择图片或直接粘贴 (Ctrl+V)</p>
          <p class="upload-hint">支持 PNG / JPG / JPEG</p>
        </div>
      </el-upload>

      <!-- 问题输入框 -->
      <div class="question-section">
        <el-input
          v-model="questionText"
          type="textarea"
          :rows="3"
          placeholder="输入问题、粘贴图片自动识别填入..."
          clearable
        >
        </el-input>
      </div>

      <!-- 答案列表 -->
      <div class="answer-section">
        <div v-if="answerLoading" class="answer-loading">
          <el-icon class="is-loading"><Loading /></el-icon>
          <span>查找答案中...</span>
        </div>

        <el-alert
          v-else-if="answerError"
          :title="answerError"
          type="error"
          :closable="false"
          show-icon
        />

        <div v-else-if="results.length > 0">
          <div class="answer-count">
            <el-tag type="success" size="small">找到 {{ results.length }} 条匹配</el-tag>
          </div>
          <div
            v-for="(item, index) in results"
            :key="index"
            class="answer-item"
          >
            <div class="answer-item-question">
              <el-icon :size="14"><Search /></el-icon>
              <span>{{ item.question }}</span>
            </div>
            <div class="answer-item-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>

        <el-empty
          v-else-if="questionText.trim()"
          description="未找到匹配的答案"
          :image-size="60"
        />

        <el-empty
          v-else
          description="输入问题或粘贴图片开始查找"
          :image-size="60"
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.app {
  max-width: 640px;
  margin: 0 auto;
  padding: 24px 16px;
  font-family: system-ui, -apple-system, sans-serif;
}

.main-card {
  border-radius: 12px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  font-weight: 600;
}

.upload-area {
  margin-bottom: 20px;
}

.upload-area :deep(.el-upload-dragger) {
  padding: 20px;
  border-radius: 8px;
}

.upload-icon {
  color: #c0c4cc;
}

.loading-icon {
  animation: rotating 1.5s linear infinite;
}

@keyframes rotating {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.preview-wrapper {
  display: flex;
  justify-content: center;
}

.preview-img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
}

.upload-text {
  text-align: center;
  color: #909399;
}

.upload-title {
  font-size: 1em;
  margin: 8px 0 4px;
}

.upload-hint {
  font-size: 0.85em;
  color: #c0c4cc;
}

.question-section {
  margin-bottom: 20px;
}

.answer-section {
  min-height: 120px;
}

.answer-loading {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  color: #909399;
  padding: 40px 0;
}

.answer-count {
  margin-bottom: 12px;
}

.answer-item {
  padding: 12px 16px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fafafa;
  transition: border-color 0.2s;
}

.answer-item:hover {
  border-color: #409eff;
}

.answer-item-question {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85em;
  color: #909399;
  margin-bottom: 6px;
}

.answer-item-answer {
  font-size: 1.15em;
  font-weight: 600;
  color: #303133;
}
</style>
