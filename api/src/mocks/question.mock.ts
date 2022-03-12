import { IQuestionAttrs } from "./../interfaces/question/question.interface";
const QuestionMocks: IQuestionAttrs = {
  question: "what is your first name",
  snippets: [
    {
      language: "php",
      snippet: "snippet for php",
    },
    {
      language: "php",
      snippet: "snippet for php",
    },

  ],
  tests: [
    {
      text: "text of test",
      input: "input of test",
      output: "output of test",
    },
    {
      text: "text of test",
      input: "input of test",
      output: "output of test",
    },
    {
      text: "text of test",
      input: "input of test",
      output: "output of test",
    },
  ]
};

export { QuestionMocks }