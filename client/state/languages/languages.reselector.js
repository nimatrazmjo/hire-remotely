import { createSelector } from "reselect";

const languages = state => state.languages;


export const selectLanguages = createSelector(
    [languages],
    (languages)=> languages
)