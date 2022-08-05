import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const transactionsOperation = createApi({
  reducerPath: 'transactionsOperation',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => `/transactions`,
    }),
    addTransaction: builder.mutation({
      query: credentials => ({
        url: '/transactions',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});


export const { useGetAllTransactionsQuery, useAddTransactionMutation } =
  transactionsOperation;
