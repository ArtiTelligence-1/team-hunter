import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';
import { Profile } from '../types/profile';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseAPIQuery,
  endpoints: (builder) => ({
    getMe: builder.query<Profile[], null>({
      query: () => ({
        url: 'user',
      }),
    }),
    addMe: builder.mutation<Profile, any>({
      query: (body) => ({
        url: 'user',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  reducer,
  useAddMeMutation,
} = userApi;
