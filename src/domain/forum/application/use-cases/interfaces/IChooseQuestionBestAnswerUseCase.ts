import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export interface IChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}
