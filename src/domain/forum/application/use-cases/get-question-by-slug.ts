import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IGetQuestionBySlugUseCaseRequest,
  IGetQuestionBySlugUseCaseResponse,
} from './interfaces/IGetQuestionBySlugUseCase'

export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    slug,
  }: IGetQuestionBySlugUseCaseRequest): Promise<IGetQuestionBySlugUseCaseResponse> {
    const question = await this.questionRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found')
    }

    return {
      question,
    }
  }
}
