import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU1OTYzNWI3ODZkYzI3NDA5OTk3YTMiLCJzaWQiOiI2MmU3YzBiOTg0Mjk3ODVlNGU2MWRlMWIiLCJpYXQiOjE2NTkzNTUzMjEsImV4cCI6MTY1OTM1ODkyMX0.Olrrhp0QIqP1y3X6q1D5g7FN5a_W70aFzetFGufhDuU';

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
