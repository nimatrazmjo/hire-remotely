import { ResultActionType } from "./result.types";


const INITIAL_STATE = [];

const resultReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ResultActionType.SET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state;
    }
}

export default resultReducer