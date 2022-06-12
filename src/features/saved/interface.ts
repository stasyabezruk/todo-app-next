import { ITodo } from 'features/todos/interface';

export interface SavedState {
  savedTodos: ITodo[];
}

export const initialState: SavedState = {
  savedTodos: [],
};
