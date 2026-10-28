import { ref } from 'vue'
import type { OCRResponse } from '../types/ocr'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${import.meta.env.BASE_URL}api`

export function useOCR() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function recognize(file: File): Promise<OCRResponse> {
    loading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${API_BASE_URL}/ocr`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `请求失败 (${response.status})`)
      }

      return await response.json() as OCRResponse
    } catch (e) {
      const message = e instanceof Error ? e.message : '未知错误'
      error.value = message
      throw e
    } finally {
      loading.value = false
    }
  }

  return { recognize, loading, error }
}
