import { Optional } from '@/core/types/optional'
import { IAnswerCommentProps } from './interfaces/ICommentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Comment } from '@/domain/forum/enterprise/entities/comment'

export class AnswerComment extends Comment<IAnswerCommentProps> {
  static create(
    props: Optional<IAnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return answerComment
  }

  get answerId() {
    return this.props.answerId
  }
}
