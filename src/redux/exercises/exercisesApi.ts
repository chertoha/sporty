import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";

export const exercisesApi = createApi({
  reducerPath: "exercises",

  //   baseQuery: axiosBaseQuery({
  //     baseUrl: BASE_URL as string,
  //   }),

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getExercises: builder.query<any, string>({
      query: () => ({
        url: "/exercises",
        method: "GET",
      }),
    }),

    // getSettlements: builder.query<any, string>({
    //   query: (search) => ({
    //     url: "",
    //     method: "POST",
    //     data: warehouseSettlementsRequest(search),
    //   }),
    // }),
    // getWarehouses: builder.query<WarehouseResponse, WarehouseRequest>({
    //   query: (request) => ({
    //     url: "",
    //     method: "POST",
    //     data: warehouseListRequest(request),
    //   }),
    // }),
  }),
});

export const {
  //   useGetSettlementsQuery,
  //   useGetWarehousesQuery,
  //   useLazyGetWarehousesQuery,
} = exercisesApi;
