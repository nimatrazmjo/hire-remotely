
import { combineReducers } from 'redux';
import languageReducer from './language/language.reducer';
import resultReducer from './result/result.reducer';
import testReducer from './test/test.reducer';


const rootReducer =  combineReducers({
    language: languageReducer,
    test: testReducer,
    result: resultReducer
});

export default rootReducer;