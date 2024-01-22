import {
  ICommentOnQuestionUseCaseRequest,
  ICommentOnQuestionUseCaseResponse,
} from './interfaces/ICommentOnQuestionUseCase'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IQuestionsCommentRepository } from '../repositories/interfaces/question-comments-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export class CommentOnQuestionUseCase {
  constructor(
    private questionsRepository: IQuestionsRepository,
    private questionsCommentRepository: IQuestionsCommentRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: ICommentOnQuestionUseCaseRequest): Promise<ICommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionsCommentRepository.create(questionComment)

    return {
      questionComment,
    }
  }
}
