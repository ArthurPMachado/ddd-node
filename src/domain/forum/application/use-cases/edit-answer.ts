import { left, right } from '@/core/either'
import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import {
  IEditAnswerUseCaseRequest,
  IEditAnswerUseCaseResponse,
} from './interfaces/IEditAnswerUseCase'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'

export class EditAnswerUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: IEditAnswerUseCaseRequest): Promise<IEditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return right({
      answer,
    })
  }
}
