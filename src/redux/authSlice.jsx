import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authOperation.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      authOperation.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.data.accessToken;
        state.refreshToken = payload.data.refreshToken;
        state.user = payload.data.user;
        state.sid = payload.data.sid;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      authOperation.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.sid = null;
        state.isLoggedIn = false;
      },
    );
  },
});


export default authSlice.reducer;


