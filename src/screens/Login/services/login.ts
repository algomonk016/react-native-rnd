import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TUserCredentials, TUserDetails} from './types';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/auth'}),
  endpoints: builder => ({
    login: builder.mutation<TUserDetails, TUserCredentials>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useLoginMutation} = loginApi;
