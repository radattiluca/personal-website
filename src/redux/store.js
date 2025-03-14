import { configureStore } from "@reduxjs/toolkit";
import { extendNavbarReducer } from "./slices/extendNavbar.slice";

export default configureStore({
  reducer: {
    extendNavbar: extendNavbarReducer,
  },
});
