import { CompileResultActionType } from "./compile-result.types";

export const setCompileResult = result => ({
    type: CompileResultActionType.SET_COMPILE_RESULT,
    payload: result
})