import { createSlice } from '@reduxjs/toolkit';
import { transactionOperation } from './transactionsOperation';


const initialState = {
    transaction: null,
}

export const transactionSlice = createSlice({
    name:'transaction',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(
            transactionOperation.endpoints.transaction.matchFulfilled,
          (state, { payload }) => {
            state.transaction = payload.transaction;
          }
        );
      }, 
})

export default transactionSlice.reducer;