import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";
import { Exercise, ExerciseData } from "types/dataTypes";

type ExercisesQuery = {
  bodypart: string;
  muscles: string;
  equipment: string;
  keyword: string;
  page: number;
  limit: number;
};

type RateExerciseQuery = {
  id: string;
  rate: number;
  email: string;
  review: string;
};

export const exercisesApi = createApi({
  reducerPath: "exercises",

  //   baseQuery: axiosBaseQuery({
  //     baseUrl: BASE_URL as string,
  //   }),

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getExercises: builder.query<ExerciseData, ExercisesQuery>({
      query: ({ bodypart, equipment, muscles, keyword, limit, page }) => ({
        url: "/exercises",
        method: "GET",
        params: {
          bodypart,
          equipment,
          muscles,
          keyword:
            keyword && !bodypart && !muscles && !equipment ? "" : keyword,
          limit,
          page,
        },
      }),
    }),

    getExerciseById: builder.query<Exercise, string>({
      query: (id) => ({
        url: `/exercises/${id}`,
        method: "GET",
      }),
    }),

    rateExercise: builder.mutation<Exercise, RateExerciseQuery>({
      query: ({ id, rate, email, review }) => ({
        url: `/exercises/${id}/rating`,
        method: "PATCH",
        data: { rate, email, review },
      }),
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useGetExerciseByIdQuery,
  useRateExerciseMutation,
} = exercisesApi;
