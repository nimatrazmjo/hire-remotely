import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import NProgress from "nprogress"

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';
import { setTest } from '../state/test/test.actions';
import Score from '../components/score/score.component';

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
      <div className=' bg-white rounded-xl shadow-xl px-10 py-20'>
        <div className='flex'>
          <div className='h-full p-5'>
            <Question />
          </div>
          <div className='h-full p-4 flex-shrink'>
            <Answer />
            <hr />
            <Score />
          </div>
        </div>
        <Result />
      </div>
      <hr />

    </div>
  )
}

export default Test;