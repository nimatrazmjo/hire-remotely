import { useState } from 'react';


import dynamic from 'next/dynamic';

import { languages } from '@codemirror/language-data';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';





import CodeEditor from '../components/codemirror/codemirror.component';
import MarkDown from '../components/markdown/markdown.component';
import Label from '../components/label/label.component';
import Select from '../components/select/select.component';

import MarkdownEditor from '../components/markdown-editor/markdown-editor.component';
import Button from '../components/button/button.component';



const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [snippet, setSnippet] = useState('');

  return (
    <div className="md:w-4/5 mx-auto flex flex-col  shadow-xl bg-white p-10 my-10">
      <Label className='font-bold text-lg uppercase'> Add Question </Label>
      <div className='min-w-max my-5' data-color-mode="light">
        <MarkdownEditor value={question} onChange={(e) => setQuestion(e!)} />
      </div>
      <hr className='my-5' />
      <div className='flex flex-col'>
        <Label className=''>Question snippet</Label>
        <Select />
        <CodeEditor theme={'dark'} minHeight="20rem" />
        <Button className='my-5 justify-end'> Add another snippet </Button>
      </div>
      <hr className='my-5' />
      <div className="flex">

      </div>
    </div>

  );
}
export default AddQuestion;