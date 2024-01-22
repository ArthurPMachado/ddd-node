import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export interface IFetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

export interface IFetchQuestionCommentsUseCaseResponse {
  questionComments: QuestionComment[]
}
