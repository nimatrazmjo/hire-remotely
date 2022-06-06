import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import NProgress from "nprogress"

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';
import { setTest } from '../state/test/test.actions';
import Score from '../components/score/score.component';
import { filterTitle } from '../utils/title';

import { setLanguages } from '../state/languages/languages.actions';


const Test = () => {

  const router = useRouter()
  const [isLoading, setLoading] = useState(false);
  const [question, setQuestion] = useState(null);
  const { hash } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    NProgress.start();
    if (!hash) return;
    setLoading(true)
    fetch(`/api/tests/${hash}`)
      .then((res) => res.json())
      .then(({test, languages}) => {
        if (test && test.docs.length > 0) {
          setQuestion(test.docs[0].question)
          test.data = test.docs[0];
          dispatch(setTest(test));
          dispatch(setLanguages(languages));
        } else {
          setQuestion("test not found")
        }

        setLoading(false);
        NProgress.done();
      })
  }, [hash])
  return (
    <>
    <Head>
      <title>{filterTitle(question).title}</title>
      <meta name="description" content={filterTitle(question).description} />
      <meta name="title" content={filterTitle(question).title} />
    </Head>
      <div className='max-w-7xl mx-auto'>
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
    </>
  )
}

export default Test;