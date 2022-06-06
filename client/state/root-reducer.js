
import { combineReducers } from 'redux';
import languageIdReducer from './languageid/language_id.reducer';
import languageReducer from './languages/languages.reducer';

import resultReducer from './result/result.reducer';
import testReducer from './test/test.reducer';


const rootReducer =  combineReducers({
    languages: languageReducer,
    languageId: languageIdReducer,
    test: testReducer,
    result: resultReducer
});

export default rootReducer;