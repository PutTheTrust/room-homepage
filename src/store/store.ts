import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./slice/navbar-slice";
import { heroReducer } from "./slice/hero-slice";

export const store = configureStore({
  reducer: {
    navbarStore: navbarReducer,
    heroStore: heroReducer,
  },
});
