import { IQuestionDocs, IQuestionAttrs, IQuestionModel } from './../interfaces/question.interface';
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: String,
  snippets: [
    {
      language: String,
      snippet: String
    }
  ],
  tests:[
    {
      text: String,
      input:String,
      output:String
    }
  ]
},{
  toJSON:{
    transform (doc, ret) {
      delete ret.__v
    }
  }
});

QuestionSchema.statics.build = (attrs: IQuestionAttrs) => {
  return new Question(attrs);
}

const Question = mongoose.model<IQuestionDocs, IQuestionModel>('Question', QuestionSchema);

export default Question;