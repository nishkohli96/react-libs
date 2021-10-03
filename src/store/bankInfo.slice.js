import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const bankInfoSlice = createSlice({
    name: 'bank',
    initialState: {
        bankInfo: {},
    },
    reducers: {
        printInfo: (state) => {
            console.log(state.bankInfo);
        },
    },
});

/*  
    createSlice supports only synchronous fns, so for async fns 
    we need createAsyncThunk 

    createAsyncThunk accepts two arguments:

    1. A string that will be used as the prefix for the generated action types
    2. A "payload creator" callback function that should return a Promise 
       containing some data, or a rejected Promise with an error.
*/

export const fetchBankInfo = createAsyncThunk(
    'bank/fetchBankInfo',
    async () => {
        const response = await axios.get(
            'https://ifsc.razorpay.com/KARB0000001'
        );
        return response.data;
    }
);

export const { printInfo } = bankInfoSlice.actions;

export default bankInfoSlice.reducer;
