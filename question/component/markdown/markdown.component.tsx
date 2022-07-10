import React from 'react';
import ReactMarkDown from 'react-markdown';

interface MarkdownProps {
    text: string;
}

const MarkDown: React.FC<MarkdownProps> = ({ text }) =>  <ReactMarkDown children={text} />;

export default MarkDown;