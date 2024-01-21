import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface IFetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

export interface IFetchQuestionAnswersUseCaseResponse {
  answers: Answer[]
}
