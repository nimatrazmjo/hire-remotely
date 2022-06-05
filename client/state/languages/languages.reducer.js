import { LanguagesActionTypes } from './languages.types';


const INITIAL_STATE = [];

const languageReducer = (state= INITIAL_STATE,action) => {
    switch(action.type) {
        case LanguagesActionTypes.SET_LANGUAGES:
            return {
                ...state,
                languages:action.payload
            }
        default:
            return state;
    }
}

export default languageReducer;