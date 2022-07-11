import { useState } from 'react';
import CodeEditor from '../components/codemirror/codemirror.component';
import MarkDown from '../components/markdown/markdown.component';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import Label from '../components/label/label.component';


const AddQuestion = () => {
    const [question, setQuestion] = useState('');
    const [snippet, setSnippet] = useState('');
    return (
            <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-[3rem_minmax(12rem, 1fr)] gap-5  shadow-xl bg-white p-10 my-10">
                <Label className='font-bold text-lg col-span-2 uppercase'> Add Question </Label>
                <CodeEditor
                    minWidth='20rem'
                    basicSetup={{ lineNumbers: false}}
                    minHeight='10rem'
                    maxHeight='15rem'
                    extensions= {[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                    label='Question Details'
                    theme={'dark'}
                    placeholder='## example'
                    value={question}
                    onChange={(value) => setQuestion(value)}
                    />
                <MarkDown text={question}/>
                <CodeEditor
                    minWidth='20rem'
                    minHeight='10rem'
                    maxHeight='15rem'
                    label='Question Snippets'
                    className='col-span-2'
                    theme={'dark'}
                    placeholder='## example'
                    value={snippet}
                    onChange={(value) => setSnippet(value)}
                    />

            </div>

    );
}
export default AddQuestion;