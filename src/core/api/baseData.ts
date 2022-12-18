import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseAPIQuery = fetchBaseQuery({
    // baseUrl: 'https://team-hunter-back-staging.herokuapp.com/api/v1/',
    baseUrl: 'http://localhost:5086/api/v1/',
    prepareHeaders: (headers: Headers, { getState }: { getState: () => unknown }) => {
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Type', 'application/json');
    return headers;
    }
});
