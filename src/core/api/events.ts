import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: baseAPIQuery,
  endpoints: (builder) => ({
    getEvent: builder.query<Event[], null>({
      query: () => ({
        url: 'events',
      }),
    }),
    getEventById: builder.query<Event, number>({
      query: (eventId) => `Event/getEvent/${eventId}`,
    }),
  }),
});

export const { useGetEventQuery, useLazyGetEventQuery } = eventApi;
