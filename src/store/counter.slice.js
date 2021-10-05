import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: localStorage.getItem('count') ?? 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            localStorage.setItem('count', state.value);
        },
        decrement: (state) => {
            state.value -= 1;
        },
        decreaseAmt: (state, action) => {
            state.value -= action.payload.amt;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, decreaseAmt, incrementByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;
