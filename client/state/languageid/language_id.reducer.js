import { LanguageIDActionTypes } from './language_id.types';
const INITIAL_STATE = null;

const languageIdReducer = (state= INITIAL_STATE,action) => {
    switch(action.type) {
        case LanguageIDActionTypes.SET_LANGUAGE_ID:
            return {
                ...state,
                languageId:action.payload
            }
        default:
            return state;
    }
}

export default languageIdReducer;