import React from "react";
import { CheckCircleIcon } from '@heroicons/react/outline'

const testResultBasic = [
    {
        "text": "Simple Correctness Test 1",
        "input": "madam",
        "output": "madam\nada",
        "status": "Accepted"
    },
    {
        "text": "Simple Correctness Test 2",
        "input": "level",
        "output": "level\neve",
        "status": "Accepted"
    },
]

const SimpleTest = ({result}) => {
    const { text, input, output, stdout} = result
    return (
    <>
        <div className="text-xl pt-3">{text}</div>
        <div className="pt-5" key={input}>
            <CheckCircleIcon className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span className="pl-2">{text}</span>
            <p>Input</p>
            <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                <code>
                    {input}
                </code>
            </pre>
            <p>Must be output</p>
            <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                <code>
                    {output}
                </code>
            </pre>
            <p>actual output</p>
            <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                <code>
                    {stdout}
                </code>
            </pre>
        </div>
            
        
    </>
)};

export default SimpleTest