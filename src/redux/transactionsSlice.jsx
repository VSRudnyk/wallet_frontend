import { createSlice } from '@reduxjs/toolkit';
import { transactionsOperation } from './transactionsOperation';


const initialState = {
  transaction: [],
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      transactionsOperation.endpoints.getAllTransactions.matchFulfilled,
      (state, { payload }) => {
        state.transaction = payload;
      },
    );
  },
});

export default transactionSlice.reducer;
