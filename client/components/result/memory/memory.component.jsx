import React from "react";

const memoryTestResult = [
    {
      "text": "Memory Test 1",
      "isCorrect": "1",
      "status": "Time Limit Exceeded"
    },
    {
      "text": "Memory Test 2",
      "isCorrect": "1",
      "status": "Time Limit Exceeded"
    }
  ]
const Memory = () => (
    <>
        <div className="text-xl pt-3">Memory Test Cases</div>
        {memoryTestResult.map(i => <div className="pt-5" key={Math.random(3)}>
            <CheckCircleIcon className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span className="pl-2">{i.text}</span>
            <pre>
                {i.status}
            </pre>
        </div>
        )}
    </>
);

export default Memory;