import { IAnswerProps } from "./interfaces/IAnswerProps"
import { Entity } from "@/core/entities/entity"

export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content
  }
}
