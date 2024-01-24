import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from '../value-objects/slug'
import { QuestionAttachment } from '../question-attachment'

export interface IQuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  slug: Slug
  content: string
  attachments: QuestionAttachment[]
  createdAt: Date
  updatedAt?: Date
}
