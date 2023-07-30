import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./slice/navbar-slice";

export const store = configureStore({
  reducer: {
    navbarStore: navbarReducer,
  },
});
