import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const baseAPIQuery = fetchBaseQuery({
  // baseUrl: 'https://team-hunter-back-staging.herokuapp.com/api/v1/',
  // baseUrl: 'http://localhost:5086/api/v1/',
  baseUrl: 'https://3834-185-17-127-253.ngrok.io/api/v1/',
  prepareHeaders: (headers: Headers, { getState }: { getState: () => unknown }) => {
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Type', 'application/json');
    // headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MzlmNGI2MmEzNWQ4MjZiNTNlNzA4NWEiLCJ0eXBlIjoiYXUiLCJuYmYiOjE2NzEzODQ0NjYsImV4cCI6MTY3MTczMDA2NiwiaWF0IjoxNjcxMzg0NDY2fQ.FiAN-CbTuhRvHAxo4xO9Ax6jGxfxPEPj0C1GUSnjA9RTH52PveIr4sjxlb3gg2pmplJ29scj1DsUpmU6rh8mwQ');
    return headers;
  },
});

export default baseAPIQuery;
