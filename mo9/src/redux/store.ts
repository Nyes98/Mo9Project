import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "../redux/move";
import clickReducer from "../redux/click";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    registDropdown: clickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
