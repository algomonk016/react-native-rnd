import {NativeModules} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import logger from 'redux-logger';
import createDebugger from 'redux-flipper';

// apis
import {pokemonApi} from '@/screens/Home/services/pokemon';
import {loginApi} from '@/screens/Login/services/login';

// reducers
import counterReducer from '@/screens/Home/slices/counter.slice';
import authReducer from '@/screens/Login/slices/auth.slice';

const persistConfig = {
  key: 'counter',
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const middlewares = [pokemonApi.middleware, loginApi.middleware, createDebugger()];

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
  // middlewares.push(createDebugger()); // Add redux-flipper debugger
  middlewares.push(logger); // Add redux-logger
}

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer, // Use the persisted reducer here
    auth: persistedAuthReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }).concat([...middlewares]),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
