import React from 'react';
import { useSelector } from 'react-redux';
import { selectResult } from '../../state/result/result.reselector';

import ResultList from './result-accordian.component';

const Result = () => {
    const {result}  = useSelector(selectResult);

    if (result && result.length === 0) {
        return null;
    }
    return (
        <div>
            {result && result.length && result.reverse().map((result, index) => <ResultList key={index} index={index} {...result} />)}
        </div>
    )
}
export default Result;