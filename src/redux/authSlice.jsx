import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  sid: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, ...credentials } = action.payload;
      state.user = user;
      state.accessToken = credentials.accessToken || credentials.newAccessToken;
      state.sid = credentials.sid || credentials.newSid;
    },
  },
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
      },
    );
  },
});
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
