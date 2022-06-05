import { createSelector } from "reselect";

const languages = state => state;


export const selectLanguages = createSelector(
    [languages],
    (languages)=> languages
)