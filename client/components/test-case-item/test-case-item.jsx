import React from "react";
import { CheckCircleIcon } from '@heroicons/react/outline'

const TestCaseItem = ({text, input, output, stdout}) => (
    <>
    <CheckCircleIcon className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span className="pl-2">{text}</span>
    <p>Input</p>
            <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                <code>
                    {input}
                </code>
            </pre>
            <p>Output</p>
            <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                <code>
                    {output}
                </code>
            </pre>
    </>
)
export default TestCaseItem;