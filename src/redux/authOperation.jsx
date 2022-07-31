import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api/auth',
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authOperation;
