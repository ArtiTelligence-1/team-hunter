import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';
import { Profile } from '../types/profile';
import { telegramOauth } from '../types/telegramOauth';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseAPIQuery,
  endpoints: (builder) => ({
    getMe: builder.query<Profile, null>({
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
    telegramOauth: builder.mutation<telegramOauth, any>({
      query: (body) => ({
        url: 'user/oauth/telegram',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  reducer,
  useAddMeMutation,
  useTelegramOauthMutation,
} = userApi;
