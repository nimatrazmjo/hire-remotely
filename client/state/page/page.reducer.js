import { PageActionType } from './page.types';


const INITIAL_STATE = 1;

const pageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PageActionType.SET_PAGE:
            return {
                ...state,
                page:action.payload
            }
        default:
            return state;
    }
}

export default pageReducer