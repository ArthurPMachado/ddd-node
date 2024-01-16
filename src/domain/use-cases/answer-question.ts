import { Answer } from "../entities/answer";
import { IAnswerQuestionUseCaseRequest } from "./interfaces/IAnswerQuestionUseCase";

export class AnswerQuestionUseCase {
  execute({instructorId, questionId, content}: IAnswerQuestionUseCaseRequest) {
    const answer = new Answer(content)

    return answer
  }
}
