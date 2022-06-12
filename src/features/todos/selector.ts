import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/RootState';
import { TodosState } from './interface';

const getTodosReducer = ({ todos }: RootState): TodosState => todos;
export const getTodos = (state: RootState): TodosState['items'] => getTodosReducer(state).items;
export const getErrors = (state: RootState): TodosState['errors'] => getTodosReducer(state).errors;

export const getIsLoading = createSelector(getTodosReducer, (obj) => obj.status === 'loading');

export const getTodosByUserId = (userId?: number) =>
  createSelector(getTodos, (items) => (userId ? items.filter((item) => item.userId === userId) : items));

export const getTodosNotCompletedLength = (userId?: number) =>
  createSelector(getTodosByUserId(userId), (items) => items.filter((item) => !item.completed)?.length);
