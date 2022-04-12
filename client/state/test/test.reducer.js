import { TestActionTypes } from "./test.types";

const INITIAL_STATE = {};

const testReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TestActionTypes.SET_TEST:
            return {...state, test: action.payload}
        default:
            return state;
    }
}

export default testReducer