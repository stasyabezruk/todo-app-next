import { EFetchStatus } from 'utils/types';

export interface TodosState {
  status: EFetchStatus;
  fetchedData: ITodo[];
  items: ITodo[];
  errors?: string;
}

export const initialState: TodosState = {
  status: EFetchStatus.LOADING,
  fetchedData: [],
  items: [],
};

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
