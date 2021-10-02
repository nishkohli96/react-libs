import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        /* Key must be the same as "name" key value in slice */
        counter: counterReducer,
    },
});
