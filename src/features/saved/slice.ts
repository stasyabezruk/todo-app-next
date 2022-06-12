import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from 'features/todos/interface';
import { initialState } from './interface';

export const slice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    setSavedTodos(state, { payload }: PayloadAction<ITodo[]>) {
      state.savedTodos = payload;
    },

    resetSavedTodos(state) {
      state.savedTodos = [];
    },
  },
});

export const { setSavedTodos, resetSavedTodos } = slice.actions;

export default slice.reducer;
