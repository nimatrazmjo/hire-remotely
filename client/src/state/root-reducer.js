
import { combineReducers } from 'redux';
import languageReducer from './language/language.reducer';
import testReducer from './test/test.reducer';


const rootReducer =  combineReducers({
    language: languageReducer,
    test: testReducer
});

export default rootReducer;