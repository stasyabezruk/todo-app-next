import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import getTodosApi from '../../pages/api/todos';
import { EFetchStatus } from '../../utils/types';
import { ITodo, initialState } from './interface';

export const fetchTodos = createAsyncThunk<ITodo[]>('totos/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getTodosApi();
    return data;
  } catch (err: unknown) {
    return err instanceof Error ? rejectWithValue(err.message) : rejectWithValue(err.toString());
  }
});

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodoDispatch(state, { payload }: PayloadAction<number>) {
      state.items = state.items.map((todo: ITodo) => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo));
    },
    removeTodoDispatch(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter((todo: ITodo) => todo.id !== payload);
    },
    addTodoDispatch(state, { payload }: PayloadAction<ITodo>) {
      state.items.unshift(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = EFetchStatus.LOADING;
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.status = EFetchStatus.IDLE;
      state.errors = null;
      state.items = payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = EFetchStatus.FAILED;
      state.errors = action.error.message || '';
      state.items = [];
    });
  },
});

export const { toggleTodoDispatch, removeTodoDispatch, addTodoDispatch } = slice.actions;

export default slice.reducer;
