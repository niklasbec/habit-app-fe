import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

type User = {
  userID: number;
  username: string;
};

interface LoginData {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: LoginData, thunkAPI) => {
    await axios
      .post(`${process.env.EXPO_PUBLIC_API_URL_DEVELOPMENT}/login`, loginData)
      .then((res) => {
        thunkAPI.dispatch(setUser(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
