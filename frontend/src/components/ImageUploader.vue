<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:file': [file: File | null]
}>()

const selectedFile = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const isDragging = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)

function handleFile(file: File | null) {
  if (!file) return
  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件')
    return
  }
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
  selectedFile.value = file
  previewUrl.value = URL.createObjectURL(file)
  emit('update:file', file)
}

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  handleFile(target.files?.[0] ?? null)
}

function onDrop(e: DragEvent) {
  isDragging.value = false
  handleFile(e.dataTransfer?.files?.[0] ?? null)
}

function onDragOver() {
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onPaste(e: ClipboardEvent) {
  if (props.disabled) return

  const clipboardData = e.clipboardData
  if (!clipboardData) return

  // 优先从 files 中查找图片
  for (const file of clipboardData.files) {
    if (file.type.startsWith('image/')) {
      handleFile(file)
      e.preventDefault()
      return
    }
  }

  // 从 items 中查找图片（某些浏览器只暴露 items）
  for (const item of clipboardData.items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        handleFile(file)
        e.preventDefault()
        return
      }
    }
  }
}

function clearFile() {
  selectedFile.value = null
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  }
  emit('update:file', null)
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="uploader">
    <div
      class="drop-zone"
      :class="{ dragging: isDragging, disabled: props.disabled }"
      tabindex="0"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @paste="onPaste"
      @click="!props.disabled && fileInput?.click()"
    >
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        class="file-input"
        :disabled="props.disabled"
        @change="onInputChange"
      />
      <div v-if="!previewUrl" class="placeholder">
        <p>点击、拖拽或粘贴图片到此处</p>
        <p class="hint">支持 PNG / JPG / JPEG · Ctrl+V 粘贴</p>
      </div>
      <img v-else :src="previewUrl" class="preview" alt="预览" />
    </div>
    <button
      v-if="selectedFile"
      class="clear-btn"
      :disabled="props.disabled"
      @click="clearFile"
    >
      清除
    </button>
  </div>
</template>

<style scoped>
.uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.drop-zone {
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s;
  background: #fafafa;
  outline: none;
}

.drop-zone:focus-visible {
  border-color: #4a90d9;
  background: #e8f0fe;
}

.drop-zone.dragging {
  border-color: #4a90d9;
  background: #e8f0fe;
}

.drop-zone.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.file-input {
  display: none;
}

.placeholder {
  text-align: center;
  color: #999;
}

.placeholder .hint {
  font-size: 0.85em;
  margin-top: 4px;
}

.preview {
  max-width: 100%;
  max-height: 300px;
  border-radius: 6px;
}

.clear-btn {
  padding: 6px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.clear-btn:hover:not(:disabled) {
  background: #f0f0f0;
}

.clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
