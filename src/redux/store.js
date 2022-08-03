import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authOperation } from './authOperation';
import { usersOperation } from './usersOperation';
import { transactionsOperation } from './transactionsOperation';
import authReducer from './authSlice';
import { loginOperation } from './loginOperation';
import loginReducer from './loginSlice.jsx';
import modalReducer from './modal/modalReducer';
import { transactionOperation } from './transactionsOperation';
import transactionReducer from './transactionsSlice.jsx';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};


const transactionPersistConfig = {
  key: 'transaction',
  storage,
};

export const store = configureStore({
  reducer: {
    [authOperation.reducerPath]: authOperation.reducer,
    [usersOperation.reducerPath]: usersOperation.reducer,
    [transactionsOperation.reducerPath]: transactionsOperation.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authOperation.middleware,
    usersOperation.middleware,
    transactionsOperation.middleware,
  ],
});

export const persistor = persistStore(store);
