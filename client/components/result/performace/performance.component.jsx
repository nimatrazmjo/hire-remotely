import React from "react";
import { XCircleIcon } from '@heroicons/react/outline'
const performanceTestResult = [
    {
        "text": "Performance Test 1",
        "isCorrect": "0",
        "status": "Accepted"
    },
    {
        "text": "Performance Test 2",
        "isCorrect": "1",
        "status": "Accepted"
    }
]
const Performance = () => (
    <>
        <div className="text-xl pt-3">Performance Test Cases</div>
        {performanceTestResult.map(i => <div className="pt-5" key={Math.random(3)}>
            <XCircleIcon className="inline h-5 w-5 text-danger" /><span className="text-danger pl-2">{i.text}</span>
            <pre>
                {i.status}
            </pre>
        </div>
        )
        }
    </>
);

export default Performance;