
import mongoose, { Document, Model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ITestCase } from 'src/interfaces/test/test-case.interface';
import { ITest } from 'src/interfaces/test/test.interface';
import { IAnswer, IFormattedResult, IJudge0Result, IResult } from '../interfaces/test/answer.interface';

interface TestCaseDocument extends ITestCase, Document { }

interface TestDocument extends ITest, Document { }

interface TestCaseResultDocument extends IJudge0Result, Document { }

interface AnswerDocument extends IAnswer, Document { }

const TestCaseSchema = new mongoose.Schema<TestCaseDocument>({
  text: String,
  input: String,
  output: String,
  testType: String,
  score: Number
});

const testCaseResult = new mongoose.Schema({
  text: String,
  input: String,
  expected_output: String,
  testType: String,
  stdout: String,
  time: Number,
  memory: String,
  stderr: String,
  message: String,
  status: {
    id: Number,
    description: String
  },
  score: Number
});

const testCaseOutput = new mongoose.Schema({
  text: String,
  input: String,
  stdout: String,
  output: String,
  status: String,
  message: String,
  totalScore: Number,
  takenScore: Number,
  time: Number,
});

const ResultSchema = new mongoose.Schema<IFormattedResult>({
  testType: String,
  totalScore: Number,
  takenScore: Number,
  languageId: String,
  results: [testCaseOutput]
});

const AnswerSchema = new mongoose.Schema<AnswerDocument>({
  totalScore: Number,
  takenScore: Number,
  code: String,
  results: [ResultSchema],
  languageId: String
}, { timestamps: true });




const TestSchema = new mongoose.Schema<TestDocument, PaginateModel<TestDocument>>({
  hash: {
    type: String,
    required: true
  },
  question: String,
  snippets: [{
    language: String,
    snippet: String
  }],
  testCases: [TestCaseSchema],
  submissions: [AnswerSchema],
}, {
  toJSON: {
    transform(doc, ret) {
      delete ret.__v
    }
  }
});

TestSchema.plugin(paginate);

const Test = mongoose.model<TestDocument, PaginateModel<TestDocument>>('Test', TestSchema);

export default Test;