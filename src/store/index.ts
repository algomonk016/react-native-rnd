import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '@/screens/Home/slices/counter.slice';
import {pokemonApi} from '@/screens/Home/services/pokemon';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer, // Use the persisted reducer here
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
