import {
  ICreateQuestionUseCaseRequest,
  ICreateQuestionUseCaseResponse,
} from './interfaces/ICreateQuestionUseCase'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class CreateQuestionUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: ICreateQuestionUseCaseRequest): Promise<ICreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    })

    await this.questionRepository.create(question)

    return {
      question,
    }
  }
}
