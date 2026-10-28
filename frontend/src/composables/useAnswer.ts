import { ref } from 'vue'
import type { AnswerItem } from '../types/answer'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${import.meta.env.BASE_URL}api`

export function useAnswer() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const results = ref<AnswerItem[]>([])

  async function searchAnswer(question: string): Promise<void> {
    if (!question.trim()) {
      results.value = []
      error.value = null
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `请求失败 (${response.status})`)
      }

      const data = await response.json()
      results.value = data.results ?? []
    } catch (e) {
      const message = e instanceof Error ? e.message : '未知错误'
      error.value = message
      results.value = []
    } finally {
      loading.value = false
    }
  }

  return { searchAnswer, results, loading, error }
}
