import { QuestionActionType } from './question.type';

const INITIAL_STATE = { };
export function questionReducer(state = INITIAL_STATE, action: { type: string, payload: any }) {
    switch (action.type) {
        case QuestionActionType.GET_QUESTION:
            return { ...state, ...action.payload };
        case QuestionActionType.GET_QUESTION_SUCCESS:
            return { ...state, ...action.payload };
        case QuestionActionType.GET_QUESTION_FAILURE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
