import { createSlice } from "@reduxjs/toolkit";

const initialState = { current: 0 }; // initial state for store

export const heroSlice = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: {
    slide: (state, action) => {
      if (
        !(state.current + action.payload > 2) &&
        !(state.current + action.payload < 0)
      ) {
        state.current += action.payload;
      }
    },
  },
});

export const { slide } = heroSlice.actions;
export const heroReducer = heroSlice.reducer;
