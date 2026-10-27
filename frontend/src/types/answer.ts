export interface AnswerItem {
  id?: number
  question: string
  answer: string
  indexes?: string
}

export interface AnswerListResponse {
  results: AnswerItem[]
}
