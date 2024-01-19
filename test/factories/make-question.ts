import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IQuestionProps } from '@/domain/forum/enterprise/entities/interfaces/IQuestionProps'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<IQuestionProps> = {}) {
  const question = Question.create({
    title: 'Example question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityID(),
    content: 'example question content',
    ...override,
  })

  return question
}
