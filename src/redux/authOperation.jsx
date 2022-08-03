import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const authOperation = createApi({
  reducerPath: 'authOperation',
  baseQuery: baseQueryWithReauth,

  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => '/auth/logout',
    }),
    refresh: builder.mutation({
      query: credentials => ({
        url: '/auth/refresh',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});


export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useRefreshMutation } =
  authOperation;
