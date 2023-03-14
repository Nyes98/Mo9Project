import { createSlice } from "@reduxjs/toolkit";

export interface ClickState {
  registDropdown: boolean;
  registMordal: boolean;
  registPass: boolean;
}

const initialState: ClickState = {
  registDropdown: false,
  registMordal: false,
  registPass: false,
};

export const clickSlice = createSlice({
  name: "registClick",
  initialState,

  reducers: {
    registDropdown: (state) => {
      return { ...state, registDropdown: !state.registDropdown };
    },
    registMordal: (state) => {
      state.registMordal = !state.registMordal;
    },
    registPass: (state) => {
      state.registPass = !state.registPass;
    },
  },
});

export const { registDropdown, registMordal, registPass } = clickSlice.actions;
export default clickSlice.reducer;
