import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildUrl } from 'components/utils/common';
const BASE_URL = `https://64da70cce947d30a260b45a1.mockapi.io`;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Cars'],
  endpoints: builder => ({
    getProduct: builder.query({
      query: ({ id }) => `/cars/${id}`,
      providesTags: ['Cars'],
    }),
    getProducts: builder.query({
      query: params => buildUrl('/cars', params),
      providesTags: ['Cars'],
    }),
  }),
});

export const { useGetCarQuery, useGetCarsQuery } = apiSlice;
