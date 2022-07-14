import React, { useState } from 'react';
import { QuestionTestInterface } from '../../interface/question.interface';

interface QuestionTestcaseProps {
  testCase: {},
  setTestCase: (testCase: QuestionTestInterface) => void
}

const QuestionTestCase: React.FC<QuestionTestcaseProps> = ({
  testCase,
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
  return (
    <div className='md:columns-2 min-w-full'>
      <div className='m-3 inline-block w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Test Case
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Test Case'
          value={testCaseValue.text}
          onChange={(e) => {
            setTestCaseValue({
              ...testCaseValue,
              text: e.target.value
            })
          }
          }
        />
      </div>
      <div className='m-3 inline-block w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Test Type
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'

          placeholder='Test Type'
          value={testCaseValue.testType}
          onChange={(e) => {
            setTestCaseValue({
              ...testCaseValue,
              testType: e.target.value
            })
          }

          }
        />
      </div>
      <div className='m-3 inline-block w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Input
        </label>
        <input

          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Input'
          value={testCaseValue.input}
          onChange={(e) => {
            setTestCaseValue({
              ...testCaseValue,
              input: e.target.value
            })
          }
          }
        />
      </div>
      
      <div className='m-3 inline-block w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Output
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Output'
          value={testCaseValue.output}
          onChange={(e) => {
            setTestCaseValue({  
              ...testCaseValue,
              output: e.target.value
            })
          }
          
          }
        />
      </div>
      <div className='m-3 inline-block w-full'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Score
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Score'
          value={testCaseValue.score}
          onChange={(e) => {
            setTestCaseValue({
              ...testCaseValue,
              score: parseInt(e.target.value)
            })
          }
          
          }
        />

        </div>
    </div>
  );
}

export default QuestionTestCase;