import {
  IDeleteAnswerCommentUseCaseRequest,
  IDeleteAnswerCommentUseCaseResponse,
} from './interfaces/IDeleteAnswerCommentUseCase'
import { IAnswerCommentsRepository } from '../repositories/interfaces/answer-comments-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { left, right } from '@/core/either'
import { NotAllowedError } from './errors/not-allowed-error'

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: IAnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: IDeleteAnswerCommentUseCaseRequest): Promise<IDeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left(new ResourceNotFoundError())
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
