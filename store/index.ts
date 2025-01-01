import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./slices/habitSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    habit: habitReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
