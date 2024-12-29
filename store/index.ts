import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./slices/habitSlice";

export const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
