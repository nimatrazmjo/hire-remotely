
import mongoose, { Document, Model } from 'mongoose';
import { ITestCase } from 'src/interfaces/test/test-case.interface';
import { ITest } from 'src/interfaces/test/test.interface';


const TestSchema = new mongoose.Schema<ITest, Model<ITest>>({
  hash: {
    type: String,
    required: true
  },
  questions: [String]
 
},{
  toJSON:{
    transform (doc, ret) {
      delete ret.__v
    }
  }
});

const Test = mongoose.model('Test', TestSchema);

export default Test;