
import { QuestionActionType } from './question.type';
import { QuestionInterface, QuestionSnippetInterface, QuestionTestInterface } from '../../interface/question.interface';

export const setQuestion =( Question: QuestionInterface) => ({
    type: QuestionActionType.ADD_QUESTION,
    payload: Question
});

export const deleteSnippet =( index: number) => ({
    type: QuestionActionType.DELETE_SNIPPET,
    payload: index
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