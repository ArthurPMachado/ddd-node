import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IEditQuestionUseCaseRequest,
  IEditQuestionUseCaseResponse,
} from './interfaces/IEditQuestionUseCase'

export class EditQuestionUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
  }: IEditQuestionUseCaseRequest): Promise<IEditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.title = title
    question.content = content

    await this.questionsRepository.save(question)

    return {
      question,
    }
  }
}
