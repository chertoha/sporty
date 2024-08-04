import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",

  initialState: {
    value: "",
  },

  reducers: {
    updateSearch: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice;
