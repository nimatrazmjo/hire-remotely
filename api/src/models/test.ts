
import mongoose, { Document } from 'mongoose';
import { ITestCase } from 'src/interfaces/test/test-case.interface';
import { ITest } from 'src/interfaces/test/test.interface';

export interface TestDocument extends ITest, Document { }

export interface TestCaseDocument extends ITestCase, Document { }

const TestCaseSchema = new mongoose.Schema<TestCaseDocument>({
  name: {
    type: String,
    required: true
  },
  input: {
    type: String,
    required: true
  },
  expectedOutput: {
    type: String,
    required: true
  },
  status: {
    id: {
      type: Number, // 3: Accepted, 4: Wrong answer
      required: true,
    },
    description: {
      type: String, // Accepted, Wrong Answer
      required: true
    }
  },
  time: {
    type: String,
    required: true
  },
  memory: {
    type: String,
    required: true
  },
  givenOutput: String
});

const TestSchema = new mongoose.Schema<TestDocument>({
  hash: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  result: {
    language_id: {
      type: Number,
      required: true
    },
    answer: {
      type: Number,
      required: true
    },
    testCase: [TestCaseSchema]
  }
 
},{
  toJSON:{
    transform (doc, ret) {
      delete ret.__v
    }
  }
});

const Test = mongoose.model<TestDocument>('Test', TestSchema);

export default Test;