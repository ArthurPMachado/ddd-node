import {
  IDeleteQuestionCommentUseCaseRequest,
  IDeleteQuestionCommentUseCaseResponse,
} from './interfaces/IDeleteQuestionCommentUseCase'
import { IQuestionCommentsRepository } from '../repositories/interfaces/question-comments-repository'
import { left, right } from '@/core/either'

export class DeleteQuestionCommentUseCase {
  constructor(
    private questionCommentsRepository: IQuestionCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionCommentId,
  }: IDeleteQuestionCommentUseCaseRequest): Promise<IDeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      return left('Question comment not found.')
    }

    if (questionComment.authorId.toString() !== authorId) {
      return left('Not allowed')
    }

    await this.questionCommentsRepository.delete(questionComment)

    return right({})
  }
}
