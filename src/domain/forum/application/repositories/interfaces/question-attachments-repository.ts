import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export interface IQuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
}
