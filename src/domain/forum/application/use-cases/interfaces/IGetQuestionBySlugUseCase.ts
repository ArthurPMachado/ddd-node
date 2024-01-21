import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IGetQuestionBySlugUseCaseRequest {
  slug: string
}

export interface IGetQuestionBySlugUseCaseResponse {
  question: Question
}
