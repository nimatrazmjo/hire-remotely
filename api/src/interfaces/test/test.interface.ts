import { IQuestionSnippet } from "../question/question-snippet.interface";
import { IAnswer } from './answer.interface';
import { ITestCase } from "./test-case.interface";

export interface ITest {
    hash: string; 
    question: string;
    snippets: IQuestionSnippet[]
    testCases: ITestCase[],
    answer: IAnswer
}