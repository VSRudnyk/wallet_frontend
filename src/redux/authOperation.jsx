import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU1OTYzNWI3ODZkYzI3NDA5OTk3YTMiLCJzaWQiOiI2MmU2YzkwMDNmZTkzOTBmYjY0Y2Y5NmMiLCJpYXQiOjE2NTkyOTE5MDQsImV4cCI6MTY1OTI5NTUwNH0.34NaN64et7aKrddRvSg4cY31qZ0GRHvTAwITQafvXJ4';

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
