import React from "react";

import TestCaseItem from "../test-case-item/test-case-item";

const TestCase = ({ text, value }) => {
    return (
        <>
            <div className="text-xl pt-3">{text}</div>
            <div className="pt-5" key={text}>
                {value.map(item => (
                    <div className="mb-5">
                        <TestCaseItem text={item.text} input={item.input} output={item.output} stdout={item.stdout} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default TestCase;