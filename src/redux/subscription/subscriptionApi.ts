import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";
import { Subscription } from "types/dataTypes";

type SubscriptionQuery = {
  email: string;
};

export const subscriptionApi = createApi({
  reducerPath: "subscription",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    subscribe: builder.mutation<Subscription, SubscriptionQuery>({
      query: ({ email }) => ({
        url: "/subscription",
        method: "POST",
        data: { email },
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscriptionApi;
