import React, { useState } from 'react';
import { QuestionTestInterface } from '../../interface/question.interface';
import Button from '../button/button.component';
import Input from '../input/input.omponent';
import Label from '../label/label.component';

interface QuestionTestcaseProps {
  setTestCase: (testCase: QuestionTestInterface) => void
}

const QuestionTestCase: React.FC<QuestionTestcaseProps> = ({
  setTestCase
}) => {
  const defaultTestCase: QuestionTestInterface = {
    text: '',
    testType: '',
    input: '',
    output: '',
    score: 0
  }
  const [testCaseValue, setTestCaseValue] = useState<QuestionTestInterface>(defaultTestCase);

  const addTestCaseValue = (value: string, key: string) => {
    setTestCaseValue({
      ...testCaseValue,
      [key]: value
    });
  }

  const saveTestCase = () => {
    setTestCase(testCaseValue);
    setTestCaseValue(defaultTestCase);
  }

  return (
    <div className='md:columns-2 min-w-full'>
      <Input
        label='Test Case'
        value={testCaseValue.text}
        onChange={(e) => { addTestCaseValue(e.target.value, 'text') }} />
      <Input
        label='Test Type'
        value={testCaseValue.testType}
        onChange={(e) => { addTestCaseValue(e.target.value, 'testType') }} />
      <Input
        label='Input'
        value={testCaseValue.input}
        onChange={(e) => { addTestCaseValue(e.target.value, 'input') }}/>

      <Input
        label='Output'
        value={testCaseValue.output}
        onChange={(e) => { addTestCaseValue(e.target.value, 'output')  }}/>
      <Input
        label='Score'
        value={testCaseValue.score}
        onChange={(e) => { addTestCaseValue(e.target.value, 'score') }}/>
      <div className='mt-2 w-full flex justify-end'>

      <Button onClick={() => { saveTestCase }}>Add Test Case</Button>
      </div>
    </div>
  );
}

export default QuestionTestCase;