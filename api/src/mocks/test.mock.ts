import faker from '@faker-js/faker';
import { QuestionMocks } from '../mocks/question.mock'

const TestMock = {
    hash: faker.random.alphaNumeric(30),
    question: QuestionMocks[0].question
}

export { TestMock }