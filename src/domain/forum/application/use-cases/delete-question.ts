import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IDeleteQuestionUseCaseRequest,
  IDeleteQuestionUseCaseResponse,
} from './interfaces/IDeleteQuestionUseCase'

export class DeleteQuestionUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    questionId,
  }: IDeleteQuestionUseCaseRequest): Promise<IDeleteQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    await this.questionRepository.delete(question)

    return {}
  }
}
