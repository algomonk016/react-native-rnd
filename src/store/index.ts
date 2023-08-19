import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '@/screens/Home/slices/counter.slice';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import logger from 'redux-logger';
import createDebugger from 'redux-flipper';

// apis
import {pokemonApi} from '@/screens/Home/services/pokemon';
import {loginApi} from '@/screens/Login/services/login';
import authReducer from '@/screens/Login/slices/auth.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const middlewares = [pokemonApi.middleware, loginApi.middleware, createDebugger()];

if (__DEV__) {
  // middlewares.push(createDebugger()); // Add redux-flipper debugger
  middlewares.push(logger); // Add redux-logger
}

export const store = configureStore({
  reducer: {
    counter: persistedReducer, // Use the persisted reducer here
    auth: authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([...middlewares]),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
