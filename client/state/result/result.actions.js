import { ResultActionType } from "./result.types";

export const setResult = result => ({
    type: ResultActionType.SET_RESULT,
    payload: result
})