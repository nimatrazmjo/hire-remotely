import { IQuestionAttrs } from "./../interfaces/question/question.interface";
import faker from '@faker-js/faker';
const QuestionMocks: IQuestionAttrs = {
  question: faker.lorem.lines(5),
  snippets: [
    {
      language: "php",
      snippet: faker.lorem.paragraph(),
    },
    {
      language: "javascript",
      snippet: faker.lorem.paragraph(),
    },

  ],
  tests: [
    {
      text: faker.lorem.lines(),
      input: faker.random.alphaNumeric(),
      output: faker.random.alphaNumeric(),
    },
    {
      text: faker.lorem.lines(),
      input: faker.random.alphaNumeric(),
      output: faker.random.alphaNumeric(),
    },
    {
      text: faker.lorem.lines(),
      input: faker.random.alphaNumeric(),
      output: faker.random.alphaNumeric(),
    }
  ]
};

export { QuestionMocks }