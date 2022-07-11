import React from 'react';
import ReactMarkDown from 'react-markdown';


interface MarkdownProps {
    text: string;
}

const MarkDown: React.FC<MarkdownProps> = ({ text }) =>  (
<article className='prose min-w-[36.6rem] grild-col row-span-2  prose-xl break-words'>
    <h1 className='block text-gray-700 text-sm font-bold mb-2'> Question Details preview:</h1>
    <ReactMarkDown children={text} />
</article>);

export default MarkDown;