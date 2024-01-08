import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./exercises/exercisesApi";
import { filtersApi } from "./filters/filtersApi";

export const store = configureStore({
  reducer: {
    [filtersApi.reducerPath]: filtersApi.reducer,
    [exercisesApi.reducerPath]: exercisesApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(filtersApi.middleware)
      .concat(exercisesApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
