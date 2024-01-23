import {
  ICreateQuestionUseCaseRequest,
  ICreateQuestionUseCaseResponse,
} from './interfaces/ICreateQuestionUseCase'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { right } from '@/core/either'

export class CreateQuestionUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

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

    await this.questionsRepository.create(question)

    return right({
      question,
    })
  }
}
