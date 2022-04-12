import { IQuestionSnippet } from './question-snippet.interface';
import { Document, Model } from "mongoose";
import { IQuestionTest } from "./question-test.interface";


export interface IQuestionAttrs {
  question: string;
  snippets:IQuestionSnippet[],
  tests: IQuestionTest[],
}

export interface IQuestionDocs extends Document {
  question: string;
  tests: [IQuestionTest],
  snippets:[IQuestionSnippet],
  _id: string
}

export interface IQuestionModel extends Model<IQuestionDocs> {
  build(attrs: IQuestionAttrs): IQuestionDocs
}