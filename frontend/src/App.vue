<script setup lang="ts">
import { ref, watch } from 'vue'
import ImageUploader from './components/ImageUploader.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import { useOCR } from './composables/useOCR'
import { useAnswer } from './composables/useAnswer'
import type { OCRResponse } from './types/ocr'

const selectedFile = ref<File | null>(null)
const result = ref<OCRResponse | null>(null)

const { recognize, loading, error } = useOCR()
const { searchAnswer, answer, loading: answerLoading, error: answerError } = useAnswer()

// 输入框文本
const questionText = ref('')
// 防抖 timer
let debounceTimer: ReturnType<typeof setTimeout> | null = null

async function handleRecognize() {
  if (!selectedFile.value) return
  try {
    result.value = await recognize(selectedFile.value)
    // OCR 结果填入输入框
    questionText.value = result.value.text
  } catch {
    // error is set in composable
  }
}

// 输入框变化时防抖调用 /answer 接口
watch(questionText, (newText) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  debounceTimer = setTimeout(() => {
    searchAnswer(newText)
  }, 500)
})
</script>

<template>
  <div class="app">
    <header>
      <h1>OCR 图片识别</h1>
      <p>上传图片识别文字，自动匹配答案</p>
    </header>

    <main>
      <ImageUploader
        :disabled="loading"
        @update:file="selectedFile = $event"
      />

      <button
        class="recognize-btn"
        :disabled="!selectedFile || loading"
        @click="handleRecognize"
      >
        {{ loading ? '识别中...' : '识别' }}
      </button>

      <ResultDisplay
        :result="result"
        :loading="loading"
        :error="error"
      />

      <!-- 问题输入框 -->
      <div class="question-section">
        <label class="question-label">问题文本</label>
        <textarea
          v-model="questionText"
          class="question-input"
          placeholder="输入问题或识别图片后自动填入..."
          rows="3"
        ></textarea>
      </div>

      <!-- 答案展示 -->
      <div v-if="answerLoading" class="answer-box loading">
        查找答案中...
      </div>
      <div v-else-if="answerError" class="answer-box error">
        {{ answerError }}
      </div>
      <div v-else-if="answer" class="answer-box">
        <div class="answer-label">答案</div>
        <div class="answer-text">{{ answer.answer }}</div>
        <div class="answer-source">匹配问题：{{ answer.question }}</div>
      </div>
      <div v-else-if="questionText.trim()" class="answer-box empty">
        未找到匹配的答案
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  font-family: system-ui, -apple-system, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 32px;
}

header h1 {
  margin: 0;
  font-size: 1.8em;
}

header p {
  color: #666;
  margin: 8px 0 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.recognize-btn {
  padding: 10px 32px;
  border: none;
  border-radius: 6px;
  background: #4a90d9;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}

.recognize-btn:hover:not(:disabled) {
  background: #357abd;
}

.recognize-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.question-section {
  width: 100%;
  max-width: 500px;
}

.question-label {
  display: block;
  font-size: 0.9em;
  color: #555;
  margin-bottom: 6px;
}

.question-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.question-input:focus {
  border-color: #4a90d9;
}

.answer-box {
  width: 100%;
  max-width: 500px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.answer-box.loading {
  text-align: center;
  color: #666;
}

.answer-box.error {
  color: #d32f2f;
  border-color: #ffcdd2;
  background: #fff5f5;
}

.answer-box.empty {
  text-align: center;
  color: #999;
}

.answer-label {
  font-size: 0.85em;
  color: #4a90d9;
  font-weight: 600;
  margin-bottom: 6px;
}

.answer-text {
  font-size: 1.3em;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.answer-source {
  font-size: 0.8em;
  color: #888;
}
</style>
