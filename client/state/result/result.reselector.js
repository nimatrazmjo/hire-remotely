import { createSelector } from "reselect";

const setResult = state => state.result;

export const selectResult = createSelector(
    [setResult],
    (result) => result
)