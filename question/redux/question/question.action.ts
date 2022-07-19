
import { QuestionActionType } from './question.type';
import { QuestionInterface, QuestionSnippetInterface, QuestionTestInterface } from '../../interface/question.interface';

export const addQuestionToState =( Question: string) => ({
    type: QuestionActionType.ADD_QUESTION,
    payload: Question
});

export const deleteSnippet =( index: number) => ({
    type: QuestionActionType.DELETE_SNIPPET,
    payload: index
});

export const setEditSnippet =( index: number, snippet: QuestionSnippetInterface) => ({
    type: QuestionActionType.EDIT_SNIPPET,
    payload: {
        index,
        snippet
    }
});

export const addSnippet = (snippet: QuestionSnippetInterface) => ({
    type: QuestionActionType.ADD_SNIPPET,
    payload: snippet
});

export const addTest = (test: QuestionTestInterface) => ({
    type: QuestionActionType.ADD_TEST,
    payload: test
});

export const deleteTest = (index: number) => ({
    type: QuestionActionType.DELETE_TEST,
    payload: index
});

export const clearState = () => ({
    type: QuestionActionType.CLEAR_STATE
});