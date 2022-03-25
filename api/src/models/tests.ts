
import mongoose, { Document, Model } from 'mongoose';
import { ITestCase } from 'src/interfaces/test/test-case.interface';
import { ITest } from 'src/interfaces/test/test.interface';

interface TestCaseDocument extends ITestCase, Document { }

interface TestDocument extends ITest, Document { }

const TestCaseSchema = new mongoose.Schema<TestCaseDocument>({
  text: String,
  input: String,
  output: String
})

const TestSchema = new mongoose.Schema<TestDocument>({
  hash: {
    type: String,
    required: true
  },
  question: String,
  testCases: [TestCaseSchema]
}, {
  toJSON: {
    transform(doc, ret) {
      delete ret.__v
    }
  }
});

const Test = mongoose.model('Test', TestSchema);

export default Test;