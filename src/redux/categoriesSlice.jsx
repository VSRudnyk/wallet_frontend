import { createSlice } from '@reduxjs/toolkit';
import { categoriesOperation } from './categoriesOperation';

const initialState = {
  categories: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      categoriesOperation.endpoints.getAllCategories.matchFulfilled,
      (state, { payload }) => {
        state.categories = payload.categories;
      }
    );
  },
});

export default categoriesSlice.reducer;
