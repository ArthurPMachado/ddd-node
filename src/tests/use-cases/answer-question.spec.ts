/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question'
import { IAnswersRepository } from '@/domain/repositories/interfaces/answers-repository'
import { Answer } from '@/domain/entities/answer'

const fakeAnswersRepository: IAnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
