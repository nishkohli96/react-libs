import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import bankInfoReducer from './bankInfo.slice';
import { apiSlice } from './api.slice';

export default configureStore({
    reducer: {
        /*  Keys in reducer object must be the same as "name" in their 
            respective slice */
        bank: bankInfoReducer,
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
