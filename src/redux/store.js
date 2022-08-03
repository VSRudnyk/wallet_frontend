import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authOperation } from './authOperation';
import authReducer from './authSlice';
import { loginOperation } from './loginOperation';
import loginReducer from './loginSlice.jsx';
import modalReducer from './modal/modalReducer';
import { transactionOperation } from './transactionsOperation';
import transactionReducer from './transactionsSlice.jsx';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const loginPersistConfig = {
  key: 'login',
  storage,
};

const transactionPersistConfig = {
  key: 'transaction',
  storage,
};

export const store = configureStore({
  reducer: {
    [authOperation.reducerPath]: authOperation.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    [loginOperation.reducerPath]: loginOperation.reducer,
    login: persistReducer(loginPersistConfig, loginReducer),
    modal: modalReducer,
    [transactionOperation.reducerPath]: transactionOperation.reducer,
    transaction: persistReducer(transactionPersistConfig, transactionReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authOperation.middleware,
  ],
});

export const persistor = persistStore(store);
