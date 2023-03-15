import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: "",
};

export const addressSlice = createSlice({
  name: "userInfo",
  initialState,

  reducers: {
    curUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { curUser } = addressSlice.actions;
export default addressSlice.reducer;
