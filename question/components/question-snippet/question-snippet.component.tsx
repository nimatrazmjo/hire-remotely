import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { QuestionSnippetInterface } from '../../interface/question.interface';
import { addSnippet } from '../../redux/question/question.action';
import Button from '../button/button.component';
import CodeEditor from '../codemirror/codemirror.component';
import Label from '../label/label.component';
import Select from '../select/select.component';

interface questionSnippetProps {
  setQuestionSnippets: (questionSnippets: QuestionSnippetInterface) => void;
}

const QuestionSnippet: React.FC<questionSnippetProps> = ({
  setQuestionSnippets,
}) => {
  const defaultSnippet: QuestionSnippetInterface = {
    language: '',
    snippet: '',
  };
  const dispatch = useDispatch();
  const [snippet, setSnippet] = useState<QuestionSnippetInterface>(defaultSnippet);

  const addQuestionSnippet = () => {
    setQuestionSnippets( snippet);
    setSnippet(defaultSnippet);
    dispatch(addSnippet(snippet));
  }

  return (
    <div className="question-snippet">
      <div className="question-snippet-language">
        <div className="flex items-center">
        <Select
          value={snippet.language}
          onChange={(e) => {
            setSnippet({ ...snippet, language: e.target.value });
          }
          }
          className="flex-auto"
          ></Select>
          <Button
        className=' my-5'
        onClick={addQuestionSnippet}>Add Snippet</Button>
        </div>

      </div>
      <div className="question-snippet-snippet">
        <CodeEditor
          theme="dark"
          minHeight='15rem'
          value={snippet.snippet} onChange={(e) => {
          setSnippet({ ...snippet, snippet: e });
        }}></CodeEditor>

      </div>
    </div>
  );
}

export default QuestionSnippet;

