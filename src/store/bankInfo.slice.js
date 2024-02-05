import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
    createSlice supports only synchronous fns, so for async fns
    we need createAsyncThunk

    createAsyncThunk accepts two arguments:

    1. A string that will be used as the prefix for the generated action types
    2. A "payload creator" callback function that should return a Promise
       containing some data, or a rejected Promise with an error.
*/

/*
    Can pass a string or an object in payload
    Can similarly pass more functions for other HTTP methods
*/
export const fetchBankInfo = createAsyncThunk(
  'bank/fetchBankInfo',
  async payload => {
    const response = await axios.get(
      `https://ifsc.razorpay.com/${payload.ifsc}`,
    );
    return response.data;
  },
);

export const bankInfoSlice = createSlice({
  name: 'bank',
  initialState: { bankInfo: {} },
  reducers: {},
  extraReducers(builder) {
    /*  Cases to handle for Pending, Resolved or Rejected state of
            a Promise */
    builder
      .addCase(fetchBankInfo.pending, (state, action) => {
        console.log('fetching');
      })
      .addCase(fetchBankInfo.fulfilled, (state, action) => {
        console.log('succeeded');
        state.bankInfo = action.payload;
        /*  Can do sth like this for an array -
                    -> state.posts.push(action.payload)
                */
      })
      .addCase(fetchBankInfo.rejected, (state, action) => {
        console.log('failed');
      });
  },
});

export default bankInfoSlice.reducer;
