import searchSlice from "./search/slice";

import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./exercises/exercisesApi";
import { filtersApi } from "./filters/filtersApi";
import { quoteApi } from "./quote/quoteApi";
import { subscriptionApi } from "./subscription/subscriptionApi";

export const store = configureStore({
  reducer: {
    [filtersApi.reducerPath]: filtersApi.reducer,
    [exercisesApi.reducerPath]: exercisesApi.reducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(filtersApi.middleware)
      .concat(exercisesApi.middleware)
      .concat(quoteApi.middleware)
      .concat(subscriptionApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
