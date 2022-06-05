import { LanguageIDActionTypes } from './language_id.types';

export const setLanguageId = id => ({
    type: LanguageIDActionTypes.SET_LANGUAGE_ID,
    payload: id
});