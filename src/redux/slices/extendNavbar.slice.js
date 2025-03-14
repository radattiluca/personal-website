import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const extendNavbarSlice = createSlice({
  name: "extendNavbar",
  initialState,
  reducers: {
    windowSize: (state) => {
      state.value = !state.value;
    },
  },
});

export const { windowSize } = extendNavbarSlice.actions;

export const extendNavbarReducer = extendNavbarSlice.reducer;
