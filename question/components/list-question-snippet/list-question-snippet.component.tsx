import React from 'react';
import { useSelector } from 'react-redux';
import { QuestionSnippetInterface } from '../../interface/question.interface';

const ListQuestionSnippet = () => {
    const { snippets } = useSelector((state: any) => state.question);
    return (
        <div>
            <label className="block text-slate-400 mb-2 "> Question snippet List</label>
            {snippets && snippets.length > 0 && snippets.map((snippet: QuestionSnippetInterface, index: number) => {
                return (
                    <div key={index} className="flex items-center flex-col">
                        <div className="flex-1">
                            <span className="text-sm">{snippet.snippet}</span>
                        </div>
                        <div className="flex-1">
                            <span className="text-sm">{snippet.language}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ListQuestionSnippet;