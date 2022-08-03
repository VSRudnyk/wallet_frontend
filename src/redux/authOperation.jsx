import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmVhYjUwNTU1NWVhMmQ2ZDc4NjlkZTUiLCJzaWQiOiI2MmVhZDIyYjU1NWVhMmQ2ZDc4NjlmMTciLCJpYXQiOjE2NTk1NTYzOTUsImV4cCI6MTY1OTU1OTk5NX0.wfuUNeoX9X23e-IBQ6qWzjSEILJso85IuBbdaAQV54w';

      headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    getAllTransactions: builder.query({
      query: () => `/transactions`,
    }),
  }),
});

export const { useRegisterMutation, useGetAllTransactionsQuery } =
  authOperation;
