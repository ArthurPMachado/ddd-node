import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Slug } from "../value-objects/slug"

export interface IQuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  slug: Slug
  content: string
  createdAt: Date
  updatedAt?: Date
}
