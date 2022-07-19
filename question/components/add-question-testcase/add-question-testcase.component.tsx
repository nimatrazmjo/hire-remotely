import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { testCaseTypelist } from '../../enums/test-case-type.enum';
import { QuestionTestInterface } from '../../interface/question.interface';
import { addSnippet, addTest } from '../../redux/question/question.action';
import Button from '../button/button.component';
import Input from '../input/input.omponent';
import Label from '../label/label.component';
import Select from '../select/select.component';

interface AddQuestionTestcaseProps {
  setTestCase: (testCase: QuestionTestInterface) => void
}

const AddQuestionTestCase: React.FC = () => {
  const defaultTestCase: QuestionTestInterface = {
    text: '',
    testType: '',
    input: '',
    output: '',
    score: 0
  }
  const dispatch = useDispatch();
  const [testCaseValue, setTestCaseValue] = useState<QuestionTestInterface>(defaultTestCase);

  const addTestCaseValue = (value: string, key: string) => {
    setTestCaseValue({
      ...testCaseValue,
      [key]: value
    });
  }

  const saveTestCase = () => {
    setTestCaseValue(defaultTestCase);
    dispatch(addTest(testCaseValue));
  }

  return (
    <div>

      <div className='md:columns-2 min-w-full'>
        <Input
          label='Test Case'
          value={testCaseValue.text}
          onChange={(e) => { addTestCaseValue(e.target.value, 'text') }} />

        <Select
          label='Test Type'
          value={testCaseValue.testType}
          onChange={(e) => { addTestCaseValue(e.target.value, 'testType') }}
          className='w-full m-3'
          options={testCaseTypelist}
         />

        <Input
          label='Input'
          value={testCaseValue.input}
          onChange={(e) => { addTestCaseValue(e.target.value, 'input') }} />

        <Input
          label='Output'
          value={testCaseValue.output}
          onChange={(e) => { addTestCaseValue(e.target.value, 'output') }} />
        <Input
          label='Score'
          value={testCaseValue.score}
          onChange={(e) => { addTestCaseValue(e.target.value, 'score') }} />
      </div>
      <div className='mt-2 w-full flex justify-end'>

        <Button onClick={saveTestCase}>Add Test Case</Button>
      </div>
    </div>
  );
}

export default AddQuestionTestCase;