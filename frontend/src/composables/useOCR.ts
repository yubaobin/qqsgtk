import { ref } from 'vue'
import type { OCRResponse } from '../types/ocr'
import { request } from '../utils/request'

export function useOCR() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function recognize(file: File): Promise<OCRResponse> {
    loading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('file', file)

      return await request<OCRResponse>('/ocr', {
        method: 'POST',
        body: formData,
      })
    } catch (e) {
      error.value = e instanceof Error ? e.message : '未知错误'
      throw e
    } finally {
      loading.value = false
    }
  }

  return { recognize, loading, error }
}
