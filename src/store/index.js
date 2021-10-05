import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter.slice';
import bankInfoReducer from './bankInfo.slice';
import { apiSlice } from './api.slice';

const rootReducer = combineReducers({
    /*  Keys in reducer object must be the same as "name" in their 
        respective slice */
    bank: bankInfoReducer,
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
