import React from 'react';

import { selectResult } from '../../state/result/result.reselector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Overview from './overview/overview.component';
import TestCase from '../test-case/test-case.component';

const Result = ({ results }) => {
  return (
    <div>
      <div className="grid grid-cols-12 grid-rows-1 place-items-start ">
        <div className="col-span-4">
          {Object.keys(results).map((text) => (
            <div className='mb-10'>
            <TestCase text={text} value={results[text]} />
            </div>
          ))}
        </div>
        <div>
          {/* <Overview memory={result.memory} time={result.time} /> */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  results: selectResult
})

export default connect(mapStateToProps)(Result);