import { createSlice } from '@reduxjs/toolkit';
import { loginOperation } from './loginOperation';

const initialState = {
  user: { email: null, password: null },
  isLoggedIn: false,
  token: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      loginOperation.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.token = payload.data.accessToken;
      }
    );
  },
});

export default loginSlice.reducer;
