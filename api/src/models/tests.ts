
import mongoose, { Document, Model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ITestCase } from 'src/interfaces/test/test-case.interface';
import { ITest } from 'src/interfaces/test/test.interface';
import { IResult } from '../interfaces/test/answer.interface';

interface TestCaseDocument extends ITestCase, Document { }

interface TestDocument extends ITest, Document { }

interface TestCaseResultDocument extends IResult, Document { }

const testCaseResult = new mongoose.Schema<TestCaseResultDocument>({
  text: String,
  input: String,
  output: String,
  testType: String,
  stdout: String,
  time: String,
  memory: String,
  stderr: String,
  message: String,
  status: {
    id: Number,
    description: String
  }
})

const TestCaseSchema = new mongoose.Schema<TestCaseDocument>({
  text: String,
  input: String,
  output: String,
  testType: String
});




const TestSchema = new mongoose.Schema<TestDocument, PaginateModel<TestDocument>>({
  hash: {
    type: String,
    required: true
  },
  question: String,
  snippets:[ {
    language: String,
    snippet: String
  }],
  testCases: [TestCaseSchema],
  answer: {
    code : String,
    testResult: [testCaseResult]
  }
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