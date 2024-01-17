import { Slug } from "../value-objects/slug"

export interface IQuestionProps {
  title: string
  slug: Slug
  content: string
  authorId: string
}
