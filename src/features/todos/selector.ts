import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { TodosState } from './interface';

const getTodosReducer = ({ todos }: RootState): TodosState => todos;
export const getFetchedData = (state: RootState): TodosState['fetchedData'] => getTodosReducer(state).fetchedData;
export const getFetchedDataByUserId = (userId?: number) =>
  createSelector(getFetchedData, (items) => (userId ? items.filter((item) => item.userId === userId) : items));
export const getIsLoading = createSelector(getTodosReducer, (obj) => obj.status === 'loading');

export const getErrors = (state: RootState): TodosState['errors'] => getTodosReducer(state).errors;

export const getTodos = (state: RootState): TodosState['items'] => getTodosReducer(state).items;
export const getTodosByUserId = (userId?: number) =>
  createSelector(getTodos, (items) => (userId ? items.filter((item) => item.userId === userId) : items));

export const getTodosNotCompletedLength = (userId?: number) =>
  createSelector(getTodosByUserId(userId), (items) => items.filter((item) => !item.completed)?.length);
