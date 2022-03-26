import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import Result from '../components/result/result.component';
import Question from '../components/question/question.component';
import Answer from '../components/answer/answer.component';
import { setTest } from '../state/test/test.actions';

const Test = ({addTestToState}) => {
  const router = useRouter()
  const { hash } = router.query;
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    if (!hash) return;
    setLoading(true)
    fetch(`/api/tests/${hash}`)
      .then((res) => res.json())
      .then((data) => {
        addTestToState(data)
        setLoading(false)
      })
  }, [hash])
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

const mapDispatchToProps = dispatch => {
  return ({
    addTestToState: test => dispatch(setTest(test))
  })
}

export default connect(null, mapDispatchToProps)(Test)