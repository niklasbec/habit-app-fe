import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

type HabitHistoryPoint = {
  date: string;
  checked: boolean;
};

export type Habit = {
  title: string;
  history: { [key: string]: HabitHistoryPoint };
  id: string;
};

interface CheckOffHabitPayload {
  habitId: string;
  date: string;
}

interface InitialState {
  habits: Habit[];
}

const initialState: InitialState = {
  habits: [],
};

export const fetchUserHabits = createAsyncThunk(
  "habit/fetchHabits",
  async (userId: number, thunkAPI) => {
    await axios
      .get(`${process.env.EXPO_PUBLIC_API_URL_DEVELOPMENT}/test`)
      .then((res) => {
        thunkAPI.dispatch(setHabits(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    checkOffHabit: (state, action: PayloadAction<CheckOffHabitPayload>) => {
      const foundIndex = state.habits.findIndex(
        (habit) => habit.id === action.payload.habitId
      );
      if (foundIndex !== -1) {
        const habit = state.habits[foundIndex];
        if (!habit.history[action.payload.date]) {
          habit.history[action.payload.date] = {
            date: action.payload.date,
            checked: true,
          };
        } else {
          habit.history[action.payload.date].checked =
            !habit.history[action.payload.date].checked;
        }
      }
    },
    setHabits: (state, action: PayloadAction<Habit[]>) => {
      console.log({ lel: action.payload });
      state.habits = action.payload;
    },
  },
});

export const { addHabit, checkOffHabit, setHabits } = habitSlice.actions;

export const selectHabits = (state: RootState) => state.habit.habits;

export default habitSlice.reducer;
