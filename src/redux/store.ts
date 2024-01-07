import { configureStore } from "@reduxjs/toolkit";
import { filtersApi } from "./filters/filtersApi";

export const store = configureStore({
  reducer: {
    [filtersApi.reducerPath]: filtersApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(filtersApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
