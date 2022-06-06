import { createSelector } from "reselect";

const setTest = state => state;

export const selectTest = createSelector(
    [setTest],
    (test) => test
)