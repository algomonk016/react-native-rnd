import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {TPokemon} from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<TPokemon, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});

export const {useGetPokemonByNameQuery} = pokemonApi;
