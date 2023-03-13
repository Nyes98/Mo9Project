import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface ClickState {
  value: boolean;
}

const initialState: ClickState = {
  value: false,
};

export const clickSlice = createSlice({
  name: "registMordal",
  initialState,

  reducers: {
    registDropdown: (state) => {
      state.value = !state.value;
    },
  },
});

export const { registDropdown } = clickSlice.actions;
export default clickSlice.reducer;
