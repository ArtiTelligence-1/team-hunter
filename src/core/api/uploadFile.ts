import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseAPIQuery from './baseData';
import { Event } from '../types/event';

// export const fileApi = createApi({
//   reducerPath: 'fileApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://tmpfiles.org/api/v1/',
//   }),
//   endpoints: (builder) => ({
//     upload: builder.query<File, null>({
//       query: (file) => ({
//         url: 'upload',
//         body: {

//         }
//       }),
//     }),
//   }),
// });

// export const {  } = fileApi;
