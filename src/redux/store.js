import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authOperation } from './authOperation';
import { usersOperation } from './usersOperation';
import { transactionsOperation } from './transactionsOperation';
import { categoriesOperation } from './categoriesOperation';
import globalReducer from './global/globalReducer';
import authReducer from './authSlice';
import transactionReducer from './transactionsSlice';
import categoriesReducer from './categoriesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const transactionPersistConfig = {
  key: 'transaction',
  storage,
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
};

export const store = configureStore({
  reducer: {
    [authOperation.reducerPath]: authOperation.reducer,
    [usersOperation.reducerPath]: usersOperation.reducer,
    [transactionsOperation.reducerPath]: transactionsOperation.reducer,
    [categoriesOperation.reducerPath]: categoriesOperation.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    transaction: persistReducer(transactionPersistConfig, transactionReducer),
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
    global: globalReducer,
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
    categoriesOperation.middleware,
  ],
});

export const persistor = persistStore(store);
