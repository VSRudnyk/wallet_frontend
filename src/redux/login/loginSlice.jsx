import { createSlice } from '@reduxjs/toolkit';
import { loginOperation } from './loginOperation'

const initialState = {
  user: { email: null, password: null },
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      loginOperation.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        console.log(state);
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
});

export default loginSlice.reducer;
