import { RootState } from 'app/RootState';
import { SavedState } from './interface';

export const getSavedReducer = ({ saved }: RootState): SavedState => saved;
export const getSavedTodos = (state: RootState): SavedState['savedTodos'] => getSavedReducer(state).savedTodos;
