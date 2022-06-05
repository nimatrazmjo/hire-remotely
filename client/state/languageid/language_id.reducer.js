import { LanguageIDActionTypes } from './language_id.types';
const INITIAL_STATE = null;

const languageIdReducer = (state= INITIAL_STATE,action) => {
    switch(action.type) {
        case LanguageIDActionTypes.SET_LANGUAGES_ID:
            return {
                ...state,
                langguageId: {...action.payload}
            }
        default:
            return state;
    }
}

export default languageIdReducer;