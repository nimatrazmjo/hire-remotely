import React from 'react';
import { useSelector } from 'react-redux';
import { selectCompileResult } from '../../state/compile-result/compile-result.reselector';
import ResultList from '../result/result-accordian.component';
import ResultTable from '../result/result-table.component';

const Compile = () => {
    const { compile = {} } = useSelector(selectCompileResult);
    if (!compile) {
        return null;
    }
    const { results } = compile;

    if (!results) {
        return null;
    }
    return (
        <div className='bg-slate-50'>
            {results && results.map((item, index) => <ResultTable key={index} {...item} />)}
        </div>
    );
}

export default Compile;