import { createApi } from "@reduxjs/toolkit/query/react";
import { FilterKey } from "helpers/filterKey";
import { axiosBaseQuery } from "services/api";
import { FilterResponseData } from "types/responseData";

type FiltersQuery = {
  filterKey: FilterKey;
  page: number;
  limit: number;
};

export const filtersApi = createApi({
  reducerPath: "filters",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getFilters: builder.query<FilterResponseData, FiltersQuery>({
      query: ({ filterKey, page, limit }) => ({
        url: "/filters",
        method: "GET",
        params: {
          filter: filterKey,
          page,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetFiltersQuery } = filtersApi;
