import { createSelector } from "reselect";

const setResult = state => state;

export const selectResult = createSelector(
    [setResult],
    (result) => result
)