import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IFetchRecentQuestionsUseCaseRequest,
  IFetchRecentQuestionsUseCaseResponse,
} from './interfaces/IFetchRecentQuestions'

export class FetchRecentQuestionsUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    page,
  }: IFetchRecentQuestionsUseCaseRequest): Promise<IFetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return {
      questions,
    }
  }
}
