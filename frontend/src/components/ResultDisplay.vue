<script setup lang="ts">
import { ref } from 'vue'
import type { OCRResponse } from '../types/ocr'

const props = defineProps<{
  result: OCRResponse | null
  loading: boolean
  error: string | null
}>()

const copied = ref(false)

async function copyText() {
  if (!props.result?.text) return
  await navigator.clipboard.writeText(props.result.text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="result-display">
    <div v-if="props.loading" class="loading">
      识别中...
    </div>

    <div v-else-if="props.error" class="error">
      <p>识别失败</p>
      <p class="error-detail">{{ props.error }}</p>
    </div>

    <div v-else-if="props.result" class="result">
      <div class="result-header">
        <h3>识别结果</h3>
        <button
          v-if="props.result.text"
          class="copy-btn"
          @click="copyText"
        >
          {{ copied ? '已复制' : '复制' }}
        </button>
      </div>
      <div v-if="props.result.lines.length === 0" class="empty">
        未识别到文本
      </div>
      <div v-else class="text-output">
        <p
          v-for="(line, index) in props.result.lines"
          :key="index"
          class="text-line"
        >
          {{ line }}
        </p>
      </div>
    </div>

    <div v-else class="idle">
      上传图片后点击"识别"按钮
    </div>
  </div>
</template>

<style scoped>
.result-display {
  width: 100%;
  max-width: 500px;
  min-height: 150px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}

.loading {
  text-align: center;
  color: #666;
  padding: 40px 0;
}

.error {
  color: #d32f2f;
}

.error-detail {
  font-size: 0.9em;
  margin-top: 4px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result-header h3 {
  margin: 0;
  font-size: 1.1em;
}

.copy-btn {
  padding: 4px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 0.85em;
}

.copy-btn:hover {
  background: #f0f0f0;
}

.empty {
  color: #999;
  text-align: center;
  padding: 20px 0;
}

.text-output {
  margin-top: 12px;
}

.text-line {
  margin: 4px 0;
  line-height: 1.6;
}

.idle {
  text-align: center;
  color: #aaa;
  padding: 40px 0;
}
</style>
