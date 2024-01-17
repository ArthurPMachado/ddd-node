import { randomUUID } from "node:crypto"
import { IQuestionProps } from "./interfaces/IQuestionProps"
import { Slug } from "./value-objects/slug"

export class Question {
  public id?: string
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: IQuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.authorId = props.authorId
    this.slug = props.slug
    this.id = id ?? randomUUID()
  }
}
