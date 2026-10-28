import { ref } from 'vue'
import { request } from '../utils/request'

export interface QuestionItem {
  id: number
  question: string
  answer: string
  indexes: string
}

export function useQuestions() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const list = ref<QuestionItem[]>([])

  async function fetchList(search: string = "") {
    loading.value = true
    error.value = null
    try {
      const query = search ? `?search=${encodeURIComponent(search)}` : ''
      const data = await request<{ results: QuestionItem[] }>(`/questions${query}`)
      list.value = data.results ?? []
    } catch (e) {
      error.value = e instanceof Error ? e.message : '未知错误'
    } finally {
      loading.value = false
    }
  }

  async function create(data: { question: string; answer: string; indexes: string }) {
    await request<QuestionItem>('/questions', { method: 'POST', body: data })
    await fetchList()
  }

  async function update(id: number, data: { question: string; answer: string; indexes: string }) {
    await request<QuestionItem>(`/questions/${id}`, { method: 'PUT', body: data })
    await fetchList()
  }

  async function remove(id: number) {
    await request<{ detail: string }>(`/questions/${id}`, { method: 'DELETE' })
    await fetchList()
  }

  return { loading, error, list, fetchList, create, update, remove }
}
