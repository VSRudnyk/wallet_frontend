import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersOperation = createApi({
  reducerPath: 'transactionsOperation',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    },
  ),

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `users/current`,
    }),
  }),
});


export const { useGetCurrentUserQuery } =
  usersOperation;
