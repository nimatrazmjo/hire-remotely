import { createSelector } from "reselect";

const languageId = state => state;


export const selectLanguageId = createSelector(
    [languageId],
    (languageId)=> languageId
)