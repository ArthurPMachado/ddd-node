import { IAnswerQuestionUseCaseRequest } from "./interfaces/IAnswerQuestionUseCase";
import { Answer } from "../entities/answer";
import { IAnswersRepository } from "../repositories/interfaces/answers-repository";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: IAnswersRepository
  ) {}

  async execute({instructorId, questionId, content}: IAnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId)
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
