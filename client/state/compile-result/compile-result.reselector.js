import { createSelector } from "reselect";

const setCompileResult = state => state.compile;

export const selectCompileResult = createSelector(
    [setCompileResult],
    (compile) => compile.compile
)