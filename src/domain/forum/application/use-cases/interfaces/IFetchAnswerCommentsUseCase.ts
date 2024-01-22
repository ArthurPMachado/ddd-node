import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export interface IFetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

export interface IFetchAnswerCommentsUseCaseResponse {
  answerComments: AnswerComment[]
}
