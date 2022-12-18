import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';
import { Event } from '../types/event';
import { Comments } from '../types/discussion';

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
    addEvent: builder.mutation<Event, any>({
      query: (body) => ({
        url: 'events',
        method: 'POST',
        body,
      }),
    }),
    addComment: builder.mutation<Comment, any>({
      query: ({ eventId, ...body }) => ({
        url: `Events/${eventId as string}/comments`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetEventQuery,
  reducer,
  useLazyGetEventQuery,
  useGetEventByIdQuery,
  useAddEventMutation,
  useAddCommentMutation,
} = eventApi;
