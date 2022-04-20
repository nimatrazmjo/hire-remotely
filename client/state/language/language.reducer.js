import { LanguageActionTypes } from "./language.types";

const INITIAL_STATE = 63;

const languageReducer = (state= INITIAL_STATE,action) => {
    switch(action.type) {
        case LanguageActionTypes.SELECT_LANGUAGE:
            return action.payload
        default:
            return state;
    }
}

export default languageReducer;