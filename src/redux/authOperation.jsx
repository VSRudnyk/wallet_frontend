import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU1OTYzNWI3ODZkYzI3NDA5OTk3YTMiLCJzaWQiOiI2MmU5NGNmMjRkZDI4MzZkMDU4ZjJjOTciLCJpYXQiOjE2NTk0NTY3NTQsImV4cCI6MTY1OTQ2MDM1NH0._I4sFu4A4aezN3Y9Fu_M1IxkWD3xPm51-QD7LZmZuTQ';

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
