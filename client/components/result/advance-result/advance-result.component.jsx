import React from "react";

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'

const testResultAdvanced = [
    {
      "text": "Advanced Test 1",
      "isCorrect": "0",
      "status": "Wrong Answer"
    },
    {
      "text": "Advanced Test 2",
      "isCorrect": "1",
      "status": "Accepted"
    },
    {
      "text": "Advanced Test 2",
      "isCorrect": "0",
      "status": "Time Limit Exceeded"
    },
    {
      "text": "Advanced Test 3",
      "isCorrect": "0",
      "status": "Runntime Error"
    }
  ]

const AdvanceResult = () => (
    <>
        <div className="text-xl pt-5">Advanced Test Cases</div>
        {testResultAdvanced.map(i => <div className="pt-5" key={Math.random(3)}>
            <XCircleIcon className="inline h-5 w-5 text-danger" /><span className="text-danger pl-2">{i.text}</span>
            <pre>
                {i.status}
            </pre>
        </div>
        )}
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

export default AdvanceResult;