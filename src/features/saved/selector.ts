import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SavedState } from './interface';

export const getSavedReducer = ({ saved }: RootState): SavedState => saved;
export const getSavedTodos = (state: RootState): SavedState['savedTodos'] => getSavedReducer(state).savedTodos;
export const getIsSavedTodos = createSelector(getSavedTodos, (items) => items.length > 0);
