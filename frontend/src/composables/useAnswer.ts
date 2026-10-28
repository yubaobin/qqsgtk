import { ref } from 'vue'
import type { AnswerItem } from '../types/answer'
import { request } from '../utils/request'

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
      const data = await request<{ results: AnswerItem[] }>('/answer', {
        method: 'POST',
        body: { question },
      })
      results.value = data.results ?? []
    } catch (e) {
      error.value = e instanceof Error ? e.message : '未知错误'
      results.value = []
    } finally {
      loading.value = false
    }
  }

  return { searchAnswer, results, loading, error }
}
