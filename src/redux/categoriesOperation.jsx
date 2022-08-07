import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './customFetch';

export const categoriesOperation = createApi({
  reducerPath: 'categoriesOperation',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 10,

  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => `/categories`,
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesOperation;
