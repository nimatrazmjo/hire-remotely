
import { combineReducers } from 'redux';

import compileResultReducer from './compile-result/compile-result.reducer';
import languageIdReducer from './languageid/language_id.reducer';
import languageReducer from './languages/languages.reducer';
import pageReducer from './page/page.reducer';
import resultReducer from './result/result.reducer';
import testReducer from './test/test.reducer';


const rootReducer =  combineReducers({
    languages: languageReducer,
    languageId: languageIdReducer,
    test: testReducer,
    result: resultReducer,
    compile: compileResultReducer,
    page: pageReducer
});

export default rootReducer;