import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  status: null,
  accessToken: null,
  sid: null,
  isLoggedIn: false,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, ...credentials } = action.payload;
      state.user = user;
      state.accessToken = credentials.accessToken || credentials.newAccessToken;
      state.refreshToken = credentials.refreshToken || credentials.newRefreshToken;
      state.sid = credentials.sid || credentials.newSid;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authOperation.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
        state.isLoggedIn = true;
        state.status = payload.status;

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
        state.user = null;
        state.sid = null;
        state.isLoggedIn = false;
        state.refreshToken = null;
        state.status = null;
      },
    );
  },
});
export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
