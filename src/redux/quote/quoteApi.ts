import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";
import { Quote } from "types/dataTypes";

export const quoteApi = createApi({
  reducerPath: "quote",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getQuote: builder.query<Quote, unknown>({
      query: () => ({
        url: "/quote",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetQuoteQuery } = quoteApi;
