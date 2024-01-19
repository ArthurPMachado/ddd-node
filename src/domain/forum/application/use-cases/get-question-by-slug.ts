import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IGetQuestionBySlugRequest,
  IGetQuestionBySlugResponse,
} from './interfaces/IGetQuestionBySlug'

export class CreateQuestionUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    slug,
  }: IGetQuestionBySlugRequest): Promise<IGetQuestionBySlugResponse> {
    const question = await this.questionRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found')
    }

    return {
      question,
    }
  }
}
