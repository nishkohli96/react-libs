import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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

/* https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
        ],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
