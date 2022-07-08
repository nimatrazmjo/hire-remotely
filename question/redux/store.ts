import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root.reducers';
import localStorage from 'redux-persist/es/storage';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const middlewares = [logger];

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares
});

let persistor = persistStore(store);

export { store, persistor };