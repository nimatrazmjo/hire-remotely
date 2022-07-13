import { stat } from 'fs';
import { QuestionInterface } from '../../interface/question.interface';
import { QuestionActionType } from './question.type';

const INITIAL_STATE: QuestionInterface = {
    question: '',
    snippets: [],
    tests: []
};
export function questionReducer(state = INITIAL_STATE, action: { type: string, payload: any }) {
    switch (action.type) {
        case QuestionActionType.ADD_QUESTION:
            return { ...state, question: action.payload};
        case QuestionActionType.ADD_SNIPPET:
            return {...state, snippets: state.snippets.push(action.payload)}
        case QuestionActionType.ADD_TEST:
            return {...state, tests: state.tests.push(action.payload)}
        default:action
            return state;
    }
}
