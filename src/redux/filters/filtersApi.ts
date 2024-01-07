import { createApi } from "@reduxjs/toolkit/query/react";
import { FilterValues } from "helpers/filterValues";
import { axiosBaseQuery } from "services/api";
import { Filter } from "types/dataTypes";

type FiltersQuery = {
  filter: FilterValues;
  page: number;
  limit: number;
};

export const filtersApi = createApi({
  reducerPath: "filters",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getFilters: builder.query<Filter[], FiltersQuery>({
      query: ({ filter, page, limit }) => ({
        url: "/filters",
        method: "GET",
        params: {
          filter,
          page,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetFiltersQuery } = filtersApi;
