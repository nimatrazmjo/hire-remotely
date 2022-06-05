import { LanguageActionTypes } from "./language_id.types";


export const setLanguageId = id => ({
    type: LanguageActionTypes.SELECT_LANGUAGE,
    payload: id
});