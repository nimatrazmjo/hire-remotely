import React from 'react';
import { useSelector } from 'react-redux';
import ResultTable from './result-table.component';

const Result = () => {
    const { results={} } = useSelector(state => state.result);
    return (
        <div>
            {results.map((item, index) => <ResultTable key={index} {...item} /> )}
        </div>
    )
}
export default Result;