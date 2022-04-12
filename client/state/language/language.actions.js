import { LanguageActionTypes } from "./language.types";


export const setLanguageId = id => ({
    type: LanguageActionTypes.SELECT_LANGUAGE,
    payload: id
});