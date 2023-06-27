import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice";

export const store = configureStore({
  reducer: {
    nav: navslice
  }
})