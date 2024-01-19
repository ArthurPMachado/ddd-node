import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface IAnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}
