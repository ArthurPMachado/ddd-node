import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface IQuestionCommentProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}
