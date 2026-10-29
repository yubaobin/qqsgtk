<script setup lang="ts">
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import { useSettings } from '../composables/useSettings'

const { settings, updateSettings, resetSettings } = useSettings()

const dialogVisible = ref(false)

// 本地编辑副本，确认时才写入
const localThreshold = ref(settings.value.similarityThreshold)

function openDialog() {
  localThreshold.value = settings.value.similarityThreshold
  dialogVisible.value = true
}

function handleConfirm() {
  updateSettings({ similarityThreshold: localThreshold.value })
  dialogVisible.value = false
}

function handleReset() {
  resetSettings()
  localThreshold.value = settings.value.similarityThreshold
}
</script>

<template>
  <el-button
    class="settings-btn"
    :icon="Setting"
    circle
    @click="openDialog"
  />

  <el-dialog v-model="dialogVisible" title="全局配置" width="440px">
    <el-form label-width="90px">
      <el-form-item label="相似度阈值">
        <div class="threshold-row">
          <el-slider
            v-model="localThreshold"
            :min="0"
            :max="1"
            :step="0.05"
            :show-tooltip="false"
            class="threshold-slider"
          />
          <span class="threshold-value">{{ localThreshold.toFixed(2) }}</span>
        </div>
        <div class="threshold-hint">
          值越低匹配越宽松，越高越严格。默认 0.60
        </div>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="handleReset">恢复默认</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
.settings-btn {
  box-shadow: var(--ds-shadow-sm);
}

.threshold-row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.threshold-slider {
  flex: 1;
}

.threshold-value {
  font-weight: 700;
  color: var(--ds-text);
  min-width: 40px;
  text-align: right;
}

.threshold-hint {
  font-size: 12px;
  color: var(--ds-text-secondary);
  margin-top: 4px;
}
</style>
