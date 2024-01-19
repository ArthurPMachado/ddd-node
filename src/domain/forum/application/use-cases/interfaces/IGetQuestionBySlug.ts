import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IGetQuestionBySlugRequest {
  slug: string
}

export interface IGetQuestionBySlugResponse {
  question: Question
}
