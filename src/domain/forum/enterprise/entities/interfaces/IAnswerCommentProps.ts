import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface IAnswerCommentProps {
  authorId: UniqueEntityID
  answerId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}
