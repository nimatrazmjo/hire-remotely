import React from "react";
import { TestCaseAdvance } from '../test-case-advance/test-case-advance.component';

import TestCaseItem from "../test-case-item/test-case-item";

const TestCase = ({ text, value }) => {
    const advanceTestCase = ['ADVANCED', 'TIME', 'PERFORMANCE', 'MEMORY'];
    const scoreTotal = value.map(item => item.score).reduce((prev, next) => prev + next)
    const score = value.map(item => item.status === 'success' ? item.score : 0).reduce((prev, next) => prev + next)

    if(scoreTotal) {
        let scorePercentage;
        scorePercentage = score/scoreTotal*100
    }

    return (
        <>
            <div className="text-xl pt-3">{text} TESTS</div>
            {scoreTotal ? (<div className="text-l pt-3">Score: {scorePercentage}%</div>):('')}
            <div className="pt-5" key={text}>
                { !advanceTestCase.includes(text)? value.map(item => (
                    <div className="mb-5">
                        <TestCaseItem text={item.text} input={item.input} status={item.status} stdout={item.stdout} time={item.time} />
                    </div>
                ))
                :
                value.map(item => (<div className='md-5'>
                    <TestCaseAdvance {...item} />
                </div>))
                }
            </div>
        </>
    )
}

export default TestCase;