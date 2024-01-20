import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IFetchRecentQuestionsRequest {
  page: number
}

export interface IFetchRecentQuestionsResponse {
  questions: Question[]
}
