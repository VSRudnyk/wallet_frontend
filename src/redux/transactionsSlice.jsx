import { createSlice } from '@reduxjs/toolkit';
import { transactionsOperation } from './transactionsOperation';


const initialState = {
  transaction: null,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      transactionsOperation.endpoints.addTransaction.matchFulfilled,
      (state, { payload }) => {
        state.transaction = payload.transaction;
      },
    );
  },
});

export default transactionSlice.reducer;
