import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IDeleteQuestionUseCaseRequest,
  IDeleteQuestionUseCaseResponse,
} from './interfaces/IDeleteQuestionUseCase'

export class DeleteQuestionUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: IDeleteQuestionUseCaseRequest): Promise<IDeleteQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.questionRepository.delete(question)

    return {}
  }
}
