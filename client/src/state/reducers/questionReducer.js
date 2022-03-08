import { ActionTpe } from "../action-creators"

const initialState = {}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTpe.ADD_QUESTION:
            return {
                ...state,
                question: action.payload
            }
        default:
            return state
    }
}

export default questionReducer;