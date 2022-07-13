import React from 'react';
import ReactMarkDown from 'react-markdown';
import Label from '../label/label.component';


interface MarkdownProps {
    text: string;
}

const MarkDown: React.FC<MarkdownProps> = ({ text }) =>  (
<article className='prose min-w-[36.6rem] grild-col row-span-2  prose-xl break-words'>
    <Label className='font-bold  text-lg col-span-2 uppercase'> Question Details preview: </Label>
    <ReactMarkDown children={text} />
</article>);

export default MarkDown;