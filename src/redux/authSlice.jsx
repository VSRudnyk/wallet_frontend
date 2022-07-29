import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation'

const initialState = {
  user: { name: null, email: null, password: null },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authOperation.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = false;
      }
    );
  },
});

export default authSlice.reducer;
