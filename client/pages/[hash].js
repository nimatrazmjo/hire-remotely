import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import axios from 'axios';

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';

const Test = () => {
  const router = useRouter()
  const { hash } = router.query
  return (
    <div className=' bg-white flex-grow'>
      <div className='container flex mx-auto'>
        <div className='h-full'>
          <div className='grid grid-cols-2 h-full'>
            <div className='bg-gray-100 h-full p-5'>
              <Question />
            </div>
            <div className='h-full p-4'>
              <Answer />
              <hr />
              <Result />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test