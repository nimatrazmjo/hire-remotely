import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import NProgress from "nprogress"

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';
import { setTest } from '../state/test/test.actions';

const Test = () => {

  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const { hash } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    NProgress.start();
    if (!hash) return;
    setLoading(true)
    fetch(`/api/tests/${hash}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.docs.length > 0) {
          data.data = data.docs[0];
          data.languages = data.docs[0].snippets.map(snippet => snippet.language); // list all language id to filter the dropdown
        }
        dispatch(setTest(data));
        setLoading(false);
        NProgress.done();
      })
  }, [hash])
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='font-medium py-10 text-3xl'>Test Overview</h1>
      <div className='flex bg-white rounded-xl shadow-xl px-10 py-20'>
        <div className='h-full p-5'>
          <Question />
        </div>
        <div className='h-full p-4 flex-shrink'>
          <Answer />
          <hr />
          <div className='bg-gray-200 py-10 px-10 rounded-lg'>
            <svg viewBox="0 0 36 36" class="circular-chart green">
              <path class="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path class="circle"
                stroke-dasharray="60, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" class="percentage">60%</text>
              <text x="18" y="20.35" class="score">97/103</text>
            </svg>
          </div>
          <hr />
          <Result />
        </div>
      </div>
    </div>
  )
}

export default Test;