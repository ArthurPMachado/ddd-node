import { IAnswerQuestionUseCaseRequest } from "./interfaces/IAnswerQuestionUseCase";
import { Answer } from "../entities/answer";
import { IAnswersRepository } from "../repositories/interfaces/answers-repository";

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: IAnswersRepository
  ) {}

  async execute({instructorId, questionId, content}: IAnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
