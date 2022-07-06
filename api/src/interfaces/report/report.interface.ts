import { IAnswer } from './../test/answer.interface';
export interface IReport {
  hash: string;
  question: string;
  submissions: IAnswer | {};
}