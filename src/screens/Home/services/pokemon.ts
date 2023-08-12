import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {TPokemon} from './types';

const CACHE_TIME = 15; // minutes

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: builder => ({
    getPokemonByName: builder.query<TPokemon, string>({
      query: name => `pokemon/${name}`,
      keepUnusedDataFor: CACHE_TIME * 60,
    }),
  }),
});

export const {useGetPokemonByNameQuery} = pokemonApi;
