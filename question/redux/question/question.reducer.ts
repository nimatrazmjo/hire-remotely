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
            if (!state.snippets) {
                return { ...state, snippets: [action.payload] };
            } else {
                return { ...state, snippets: [...state.snippets, action.payload] };
            }
        case QuestionActionType.DELETE_SNIPPET:
            return { ...state, snippets: state.snippets.filter((_, index) => index !== action.payload) };
        case QuestionActionType.ADD_TEST:
            if (!state.tests) {
                return { ...state, tests: [action.payload] };
            } else {
            return {...state, tests: [...state.tests, action.payload]};
            }
        case QuestionActionType.DELETE_TEST:
            return { ...state, tests: state.tests.filter((_, index) => index !== action.payload) };

        case QuestionActionType.CLEAR_STATE:
            return INITIAL_STATE;
        default:action
            return state;
    }
}
