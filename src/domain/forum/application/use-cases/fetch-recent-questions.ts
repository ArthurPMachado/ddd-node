import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IFetchRecentQuestionsRequest,
  IFetchRecentQuestionsResponse,
} from './interfaces/IFetchRecentQuestions'

export class FetchRecentQuestions {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    page,
  }: IFetchRecentQuestionsRequest): Promise<IFetchRecentQuestionsResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return {
      questions,
    }
  }
}
