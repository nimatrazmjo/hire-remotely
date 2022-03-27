import React from 'react';

import { selectResult } from '../../state/result/result.reselector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SimpleTest from './simple-result/simple-result.component';
import Overview from './overview/overview.component';

const Result = ({ results }) => {
  console.log(results,'resulllt');
  return (
    <div>
      {results.map(result => (
        <div className="grid grid-cols-12 grid-rows-1 place-items-start ">
          <div className="col-span-4">
            <SimpleTest result={result} />
          </div>
          <div>
            <Overview memory={result.memory} time= {result.time} />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  results: selectResult
})

export default connect(mapStateToProps)(Result);