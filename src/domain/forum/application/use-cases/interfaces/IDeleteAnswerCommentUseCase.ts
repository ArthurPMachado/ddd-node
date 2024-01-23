/* eslint-disable @typescript-eslint/ban-types */
import { Either } from '@/core/either'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { NotAllowedError } from '../errors/not-allowed-error'

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IDeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

export type IDeleteAnswerCommentUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>
