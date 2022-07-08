
import { QuestionActionType } from './question.type';
import { QuestionInterface } from '../../interface/question.interface';

export const setQuestion =( Question: QuestionInterface) => ({
    type: QuestionActionType.GET_QUESTION,
    payload: Question
});
