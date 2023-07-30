import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false }; // initial state for store

export const navbarSlice = createSlice({
  name: "opener",
  initialState: initialState,
  reducers: {
    toggleOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { toggleOpen } = navbarSlice.actions;
export const navbarReducer = navbarSlice.reducer;
