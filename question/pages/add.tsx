import { useState } from 'react';
import Label from '../components/label/label.component';
import MarkdownEditor from '../components/markdown-editor/markdown-editor.component';
import Button from '../components/button/button.component';
import AddQuestionTestCase from '../components/add-question-testcase/add-question-testcase.component';
import { QuestionInterface, QuestionSnippetInterface, QuestionTestInterface } from '../interface/question.interface';
import AddQuestionSnippet from '../components/add-question-snippet/add-question-snippet.component';
import ListQuestionTestCases from '../components/list-qeustion-testcase/list-question-testcase.component';
import ListQuestionSnippet from '../components/list-question-snippet/list-question-snippet.component';



const AddQuestion = () => {
  const defaultQuestion: QuestionInterface = {
    question: '',
    snippets: [],
    tests: []
  }

  const [question, setQuestion] = useState<QuestionInterface>(defaultQuestion);

  const addQuestion = (value: string, key: string) => {
    setQuestion({
      ...question,
      [key]: value
    });
  }

  const addTestCase = (testCase: QuestionTestInterface) => {
    setQuestion({
      ...question,
      tests: [...question.tests, testCase]
    })

  }

  const addSnippet = (snippet: QuestionSnippetInterface) => {
    setQuestion({
      ...question,
      snippets: [...question.snippets, snippet]
    })
  }

  const saveQuestion = () => {
    console.log(question, 'Question');
  }


  return (
    <div className="md:w-4/5 mx-auto flex flex-col  shadow-xl bg-white p-10 my-10">
      <Label className='font-bold text-lg uppercase'> Add Question </Label>
      <div className='min-w-max my-5' data-color-mode="light">
        <MarkdownEditor value={question.question} onChange={(value) => addQuestion(value!, 'question')} />
      </div>
      <hr className='my-5' />
      <div className='flex flex-col'>
        <ListQuestionSnippet />
        <Label className='font-bold text-lg mt-8'>Add Question snippet</Label>
        <AddQuestionSnippet setQuestionSnippets={addSnippet} />
      </div>
      <hr className='my-5' />
      <div className="flex flex-col">
        <Label>Test Cases</Label>
        <ListQuestionTestCases />
        <AddQuestionTestCase setTestCase={addTestCase} />
      </div>
      <hr className='my-5' />
      <div className="flex flex-col items-end">
        <Button className='bg-primary text-white border-none' onClick={saveQuestion}>Save Question</Button>
      </div>
    </div>
  );
}
export default AddQuestion;