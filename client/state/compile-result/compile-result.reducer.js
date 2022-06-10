import { CompileResultActionType } from './compile-result.types';

const INITIAL_STATE = [];

const compileResultReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CompileResultActionType.SET_COMPILE_RESULT:
            return {
                ...state,
                compile:action.payload
            }
        default:
            return state;
    }
}

export default compileResultReducer