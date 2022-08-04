import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const usersOperation = createApi({
  reducerPath: 'usersOperation',
  baseQuery: baseQueryWithReauth,

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `users/current`,
    }),
  }),
});


export const { useGetCurrentUserQuery } =
  usersOperation;
