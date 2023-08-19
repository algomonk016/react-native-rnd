import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.value = state.value + payload;
    },
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value = Math.max(state.value - 1, 0);
    },
    clearCount: state => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, update, clearCount} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
