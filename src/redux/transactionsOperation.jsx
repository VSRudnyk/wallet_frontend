import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const transactionsOperation = createApi({
  reducerPath: 'transactionsOperation',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 10,
  tagTypes: ['Transactions'],
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => `/transactions`,
      providesTags: ['Transactions'],
    }),
    addTransaction: builder.mutation({
      query: credentials => ({
        url: '/transactions',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Transactions'],
    }),
    deleteTransaction: builder.mutation({
      query: transactionId => ({
        url: `/transactions/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Transactions'],
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsOperation;
