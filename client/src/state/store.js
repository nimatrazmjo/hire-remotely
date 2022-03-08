import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from "next-redux-wrapper"
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const middleware = [thunk, logger];

const store = () => createStore(reducers,compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store); 