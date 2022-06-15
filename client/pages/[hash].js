import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import NProgress from "nprogress"

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';
import { setTest } from '../state/test/test.actions';
import Score from '../components/score/score.component';
import { filterTitle } from '../utils/title';

import { setLanguages } from '../state/languages/languages.actions';
import ResultList from '../components/result/result-accordian.component';
import { setResult } from '../state/result/result.actions';
import Compile from '../components/compile/compile.component';
import { setCompileResult } from '../state/compile-result/compile-result.actions';


const Test = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { page } = useSelector(state => state.page);

  const [isLoading, setLoading] = useState(false);
  const [question, setQuestion] = useState(null);

  const { hash } = router.query;

  useEffect(() => {
    dispatch(setResult([]));
    dispatch(setCompileResult({}));
  }, [dispatch, hash]);
  useEffect(() => {
    NProgress.start();
    if (!hash || !page) return;
    setLoading(true)
    fetch(`/api/tests/${hash}?page=${page}`)
      .then((res) => res.json())
      .then(({ test, languages }) => {
        if (test && test.docs.length > 0) {
          setQuestion(test.docs[0].question);
          const { submissions } = test.docs[0];
          if (submissions && submissions.length > 0) {
            dispatch(setCompileResult(submissions[submissions.length-1]));
            if (submissions.length >1) {
              dispatch(setResult(test.docs[0].submissions.slice(0,-1)));
            }
          }
          test.data = test.docs[0];
          dispatch(setTest(test));
          dispatch(setLanguages(languages));

        } else {
          setQuestion("test not found")
        }

        setLoading(false);
        NProgress.done();
      })
  }, [hash, page])
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
          <Compile />

          <Result />
        </div>
        <hr />

      </div>
    </>
  )
}

export default Test;