import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';
import { Event } from '../types/event';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: baseAPIQuery,
  endpoints: (builder) => ({
    getEvent: builder.query<Event[], null>({
      query: () => ({
        url: 'events',
      }),
    }),
    getEventById: builder.query<Event, string>({
      query: (eventId) => `Events/${eventId}`,
    }),
  }),
});

export const { useGetEventQuery, reducer, useLazyGetEventQuery, useGetEventByIdQuery } = eventApi;
