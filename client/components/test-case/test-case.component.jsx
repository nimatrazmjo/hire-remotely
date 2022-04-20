import React from "react";
import { TestCaseAdvance } from '../test-case-advance/test-case-advance.component';

import TestCaseItem from "../test-case-item/test-case-item";

const TestCase = ({ text, value }) => {
    const advanceTestCase = ['ADVANCED', 'TIME', 'PERFORMANCE', 'MEMORY'];
    console.log(text, advanceTestCase.includes(text));
    return (
        <>
            <div className="text-xl pt-3">{text} TESTS</div>
            <div className="pt-5" key={text}>
                { !advanceTestCase.includes(text)? value.map(item => (
                    <div className="mb-5">
                        <TestCaseItem text={item.text} input={item.input} status={item.status} stdout={item.stdout} />
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