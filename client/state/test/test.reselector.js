import { createSelector } from "reselect";

const setTest = state => state.test;

export const selectTest = createSelector(
    [setTest],
    (test) => test.test
)