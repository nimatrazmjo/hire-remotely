import { snippets } from '@codemirror/lang-javascript';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { deleteSnippet } from '../../redux/question/question.action';
import { QuestionSnippetInterface } from '../../interface/question.interface';
import { LanguageNameById } from '../../utils/languageNameById';
import Button from '../button/button.component';

const ListQuestionSnippet = () => {
    const dispatch = useDispatch();
    const { snippets } = useSelector((state: any) => state.question);
    const [open, setOpen] = useState(0);

  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value);
  };

  const deleteSnippetByIndex = (index: number) => {
    dispatch(deleteSnippet(index));
  }
    return (
        <div className='grid lg:grid-cols-2 gap-2'>
        {snippets && snippets.length ? snippets.map((snippet: QuestionSnippetInterface, index: number) => {
            index = index+1;
            return (
        <Accordion className='pb-1 mx-1' open={open === index }>
        <AccordionHeader onClick={() => handleOpen(index)} className='bg-slate-200 text-state-800 px-5 d-flex text-slate-700'>
            <div className='flex-grow text-left text-sm'>{LanguageNameById(snippet.language)}</div>
        </AccordionHeader>
        <AccordionBody className='bg-slate-50 prose'>
          <pre className='block whitespace-pre overflow-x-scroll p-5'>
            {snippet.snippet}
          </pre>
          <div className="flex justify-end">

          <Button onClick={() => deleteSnippetByIndex(index-1)}   className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'> Delete </Button>
          </div>
        </AccordionBody>
      </Accordion>
        )}):
        <div className=' col-span-2 w-full text-center py-3 border border-slate-200 text-slate-500'>
          No snippets added
        </div>
        }
        </div>
    );
}

export default ListQuestionSnippet;