import { createSelector } from "reselect";

const selectLanguage = state => state.language;


export const selectLanguageId = createSelector(
    [selectLanguage],
    (language)=> language
)