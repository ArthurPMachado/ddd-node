import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export interface IQuestionsCommentRepository {
  create(questionComment: QuestionComment): Promise<void>
}
