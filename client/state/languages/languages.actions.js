import { LanguagesActionTypes } from './languages.types';

export const setLanguages = languages => ({
    type: LanguagesActionTypes.SET_LANGUAGES,
    payload: languages
});