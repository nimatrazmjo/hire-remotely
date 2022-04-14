import React from "react";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'

const TestCaseItem = ({text,input , status, stdout}) => (
    <>
    { status === 'success' 
        ? <CheckCircleIcon className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /> 
        : <XCircleIcon className="inline h-5 w-5 text-danger" /> }
    
    <span className={`pl-2 ${status !== 'success'? 'text-red-400' :'text-emerald-500'}`}>{text}</span>
    <p>Input</p>
    <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
        <code>
            {input}
        </code>
    </pre>
    <p>Output</p>
    <pre className="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
        <code>
            {stdout }
        </code>
    </pre>
    </>
)
export default TestCaseItem;