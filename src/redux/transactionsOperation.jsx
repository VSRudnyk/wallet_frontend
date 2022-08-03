import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const transactionsOperation = createApi({
  reducerPath: 'transactionsOperation',
  baseQuery: baseQueryWithReauth,

  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => `/transactions`,
    }),
  }),
});


export const { useGetAllTransactionsQuery } =
  transactionsOperation;
