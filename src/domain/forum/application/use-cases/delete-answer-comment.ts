import {
  IDeleteAnswerCommentUseCaseRequest,
  IDeleteAnswerCommentUseCaseResponse,
} from './interfaces/IDeleteAnswerCommentUseCase'
import { IAnswerCommentsRepository } from '../repositories/interfaces/answer-comments-repository'

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: IAnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: IDeleteAnswerCommentUseCaseRequest): Promise<IDeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      throw new Error('Answer comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return {}
  }
}
