import { IQuestionsCommentRepository } from '@/domain/forum/application/repositories/interfaces/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionsCommentRepository
  implements IQuestionsCommentRepository
{
  public items: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }
}
