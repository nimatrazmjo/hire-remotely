import { combineReducers } from 'redux';
import questionReducer from "./questionReducer";

const reducers = combineReducers({
    question: questionReducer
});

export default reducers;