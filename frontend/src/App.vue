<script setup lang="ts">
import { ref } from 'vue'
import ImageUploader from './components/ImageUploader.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import { useOCR } from './composables/useOCR'
import type { OCRResponse } from './types/ocr'

const selectedFile = ref<File | null>(null)
const result = ref<OCRResponse | null>(null)

const { recognize, loading, error } = useOCR()

async function handleRecognize() {
  if (!selectedFile.value) return
  try {
    result.value = await recognize(selectedFile.value)
  } catch {
    // error is set in composable
  }
}
</script>

<template>
  <div class="app">
    <header>
      <h1>OCR 图片识别</h1>
      <p>上传图片，识别中文文本</p>
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
</style>
