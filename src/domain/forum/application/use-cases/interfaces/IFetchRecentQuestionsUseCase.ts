import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IFetchRecentQuestionsUseCaseRequest {
  page: number
}

export interface IFetchRecentQuestionsUseCaseResponse {
  questions: Question[]
}
