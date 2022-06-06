import { createSelector } from "reselect";

const languageId = state => state.languageId;


export const selectLanguageId = createSelector(
    [languageId],
    (languageId)=> languageId
)