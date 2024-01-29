import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { AnswerComment } from '../entities/answer-comment'

export class AnswerCommentedEvent implements DomainEvent {
  public ocurredAt: Date
  public answer: AnswerComment

  constructor(answer: AnswerComment) {
    this.answer = answer
    this.ocurredAt = new Date()
  }

  public getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
