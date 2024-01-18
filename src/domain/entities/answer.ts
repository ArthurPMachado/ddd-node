import { Optional } from "@/core/types/optional"
import { IAnswerProps } from "./interfaces/IAnswerProps"
import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export class Answer extends Entity<IAnswerProps> {
  static create(
    props: Optional<IAnswerProps, 'createdAt'>, 
    id?: UniqueEntityID
  ) {
    const answer = new Answer({
      ...props,
      createdAt: new Date()
    }, id)

    return answer
  }

  get content() {
    return this.props.content
  }
}
