import { ICommentProps } from './interfaces/ICommentProps'
import { Entity } from '@/core/entities/entity'

export abstract class Comment<
  Props extends ICommentProps,
> extends Entity<Props> {
  get authorId() {
    return this.props.authorId
  }

  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
