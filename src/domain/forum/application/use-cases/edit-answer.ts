import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import {
  IEditAnswerUseCaseRequest,
  IEditAnswerUseCaseResponse,
} from './interfaces/IEditAnswerUseCase'

export class EditAnswerUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: IEditAnswerUseCaseRequest): Promise<IEditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return {
      answer,
    }
  }
}
