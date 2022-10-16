import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '2b38e3ef0bmsh880c9d5ff3ea11bp1bd563jsnc9337f2dd175');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
