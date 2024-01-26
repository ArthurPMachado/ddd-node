import { Either } from '@/core/either'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { ResourceNotFoundError } from '../@/core/errors/errors/resource-not-found-error'
import { NotAllowedError } from '../@/core/errors/errors/not-allowed-error'

export interface IChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export type IChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>
