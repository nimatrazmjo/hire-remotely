import { TestActionTypes } from "./test.types";

export const setTest = test => ({
    type: TestActionTypes.SET_TEST,
    payload: test
})