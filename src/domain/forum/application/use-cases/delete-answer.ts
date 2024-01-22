import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import {
  IDeleteAnswerUseCaseRequest,
  IDeleteAnswerUseCaseResponse,
} from './interfaces/IDeleteAnswerUseCase'

export class DeleteAnswerUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: IDeleteAnswerUseCaseRequest): Promise<IDeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.answersRepository.delete(answer)

    return {}
  }
}
