import { IAnswerQuestionUseCaseRequest } from "./interfaces/IAnswerQuestionUseCase";
import { Answer } from "../entities/answer";

export class AnswerQuestionUseCase {
  execute({instructorId, questionId, content}: IAnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    })

    return answer
  }
}
