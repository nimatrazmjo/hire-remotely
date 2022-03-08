import produce from "immer"
import { ActionTpe } from "../action-creators"

const initialState = {}

const questionReducer = produce((state = initialState, action) => {
    switch (action.type) {
        case ActionTpe.ADD_QUESTION:
            state.question = action.payload;
            return;
        default:
            return state
    }
});

export default questionReducer;