import faker from '@faker-js/faker';
import { IQuestionAttrs } from '../interfaces/question/question.interface';
import questions from '../seeder/data/questions.json';
const QuestionMocks: IQuestionAttrs[] = questions;

export { QuestionMocks }