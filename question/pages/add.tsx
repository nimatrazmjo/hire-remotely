import { useState } from 'react';


import dynamic from 'next/dynamic';

import { languages } from '@codemirror/language-data';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';





import CodeEditor from '../components/codemirror/codemirror.component';
import MarkDown from '../components/markdown/markdown.component';
import Label from '../components/label/label.component';
import Select from '../components/select/select.component';

import MarkdownEditor from '../components/markdown-editor/markdown-editor.component';



const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [snippet, setSnippet] = useState('');

  return (
    <div className="md:w-4/5 mx-auto grid grid-cols-2 grid-rows-[3rem_minmax(12rem, 1fr)] gap-10  shadow-xl bg-white p-10 my-10">
      <Label className='font-bold text-lg col-span-2 uppercase'> Add Question </Label>
      <div className='min-w-max col-span-2' data-color-mode="light">
        <MarkdownEditor value={question} onChange={(e)=>setQuestion(e!)} />
      </div>
      <hr className='col-span-2' />
      <div className='col-span-2 flex '>
        <Label className=''>Question snippet</Label>

      </div>
    </div>

  );
}
export default AddQuestion;