import faker from '@faker-js/faker';
import { IQuestionAttrs } from '../interfaces/question/question.interface';
const QuestionMocks: IQuestionAttrs[] = [{
  question: "Create Function which returs 1 if passed parameter is a palindrome and returns 0 if parameter is not palindrome.",
  snippets: [
    {
      language: "javascript",
      snippet: "function isPalindrom (str) { //YOUR CODE ANSWER } const fs = require('fs'); const stdinBuffer = fs.readFileSync(0); const str = stdinBuffer.toString(); console.log(isPalindrom(str));",
    },
  ],
  tests: [
    {
      text: "Simple Correctness Test 1",
      input: "aba",
      output: "1",
    },
    {
      text: "Simple Correctness Test 2",
      input: "aa",
      output: "1",
    },
    {
      text: "Simple Correctness Test 3",
      input: "kayak",
      output: "1",
    },
    {
      text: "Simple Correctness Test 4",
      input: "abbaa",
      output: "0",
    },
    {
      text: "Simple Correctness Test 5",
      input: "aabb",
      output: "0",
    },
  ]
}];

export { QuestionMocks }