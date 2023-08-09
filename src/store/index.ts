import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/screens/Home/slices/counter.slice';
import {pokemonApi} from '@/screens/Home/services/pokemon';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
