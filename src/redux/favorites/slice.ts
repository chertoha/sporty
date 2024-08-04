import storage from "redux-persist/lib/storage";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Exercise } from "types/dataTypes";
import { persistReducer } from "redux-persist";

const initialState: { list: Exercise[] } = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (state, { payload }: PayloadAction<Exercise>) => {
      state.list.push(payload);
    },

    removeFavorite: (state, { payload }: PayloadAction<number | string>) => {
      state.list = state.list.filter(({ _id }) => payload !== _id);
    },
  },
});

const persistConfig = {
  key: "favorites_persist",
  storage,
};

export const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice;
