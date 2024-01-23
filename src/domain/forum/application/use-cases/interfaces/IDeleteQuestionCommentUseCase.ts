/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Either } from '@/core/either'

export interface IDeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

export type IDeleteQuestionCommentUseCaseResponse = Either<string, {}>
