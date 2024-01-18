import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { IQuestionProps } from "./interfaces/IQuestionProps"
import { Entity } from "@/core/entities/entity"
import { Optional } from "@/core/types/optional"

export class Question extends Entity<IQuestionProps> {
  static create(
    props: Optional<IQuestionProps, 'createdAt'>, 
    id?: UniqueEntityID
  ) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id)

    return question
  }
}
