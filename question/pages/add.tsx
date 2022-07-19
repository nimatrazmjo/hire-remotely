import { useState } from 'react';
import axios from 'axios';
import Label from '../components/label/label.component';
import MarkdownEditor from '../components/markdown-editor/markdown-editor.component';
import Button from '../components/button/button.component';
import AddQuestionTestCase from '../components/add-question-testcase/add-question-testcase.component';
import { QuestionInterface, QuestionSnippetInterface, QuestionTestInterface } from '../interface/question.interface';
import AddQuestionSnippet from '../components/add-question-snippet/add-question-snippet.component';
import ListQuestionTestCases from '../components/list-qeustion-testcase/list-question-testcase.component';
import ListQuestionSnippet from '../components/list-question-snippet/list-question-snippet.component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addQuestionToState } from '../redux/question/question.action';



const AddQuestion = () => {
  const stateQuestion: QuestionInterface = useSelector((state:any) => state.question);

  const [question, setQuestion] = useState<string>('');

  const addQuestion = (value: string, key: string) => {
    setQuestion(value);
  }

  const saveQuestion = async () => {
    const finalQuestion = {
      ...stateQuestion,
      question,
    }
    await axios.post('/api/question', finalQuestion);
  }


  return (
    <div className="md:w-4/5 mx-auto grid  shadow-xl bg-white p-10 my-10 relative">
      <Label className='font-bold text-lg uppercase'> Add Question </Label>
      <div className='my-5' data-color-mode="light">
        <MarkdownEditor value={question} onChange={(value) => addQuestion(value!, 'question')} />
      </div>
      <hr className='my-10' />
      <div className='flex flex-col'>
      <Label className='font-bold text-lg mt-8 mb-5'>Question snippet List</Label>
        <ListQuestionSnippet />
        <Label className='font-bold text-lg mt-8'>Add Question snippet</Label>
        <AddQuestionSnippet />
      </div>
      <hr className='my-10' />
      <div className="flex flex-col">
        <Label className='font-bold text-lg mt-8'>Test Cases</Label>
        <ListQuestionTestCases />
        <Label className='font-bold text-lg mt-8'>Add Test Cases</Label>
        <AddQuestionTestCase />
      </div>
      <hr className='my-5' />
      <div className="flex flex-col items-end">
        <Button className='' onClick={saveQuestion}>Save Question</Button>
      </div>
    </div>
  );
}
export default AddQuestion;