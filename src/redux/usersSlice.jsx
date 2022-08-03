import { createSlice } from '@reduxjs/toolkit';
import { usersOperation } from './usersOperation';

const initialState = {
  currentUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      usersOperation.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.user;
      },
    );
  },
});

export default usersSlice.reducer;
