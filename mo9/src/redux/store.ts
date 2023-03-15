import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "../redux/move";
import clickReducer from "../redux/click";
import mordalReducer from "../redux/mordal";
import userReducer from "../redux/user";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    registDropdown: clickReducer,
    registMordal: clickReducer,
    registPass: clickReducer,

    ErrorMsg: mordalReducer,
    curUser: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
