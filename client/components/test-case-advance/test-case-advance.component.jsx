import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import React from 'react';

export const TestCaseAdvance = ({text, status, message}) => (
    <>
    { status === "success" 
        ? <CheckCircleIcon className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /> 
        : <XCircleIcon className="inline h-5 w-5 text-red-200" /> }
    
    <span className={`pl-2 ${status !== 'success'? 'text-red-400' :'text-emerald-500'}`}>{text}</span>

    <pre className={`px-4 pb-5 pt-2 italic ${status !== 'success'? 'text-red-300 ' :'text-emerald-500'}`}>
        <code>
            {message}
        </code>
    </pre>
    </>
)