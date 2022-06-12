import { EFetchStatus } from 'utils/types';

export interface TodosState {
  status: EFetchStatus;
  items: ITodo[];
  errors?: string;
}

export const initialState: TodosState = {
  status: EFetchStatus.LOADING,
  items: [] as ITodo[],
};

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
