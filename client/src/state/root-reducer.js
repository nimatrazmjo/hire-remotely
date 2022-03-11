
import { combineReducers } from 'redux';
import languageReducer from './language/language.reducer';


const rootReducer =  combineReducers({
    language: languageReducer
});

export default rootReducer;