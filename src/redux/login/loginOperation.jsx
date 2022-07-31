import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginOperation = createApi({
  reducerPath: 'loginOperation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-backend-1.herokuapp.com/api/login',

  }),
  
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
   
  }),
});

export const {
  useLoginMutation,
} = loginOperation;