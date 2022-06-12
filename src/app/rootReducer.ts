import { combineReducers } from '@reduxjs/toolkit';
import todos from '../features/todos/slice';
import saved from '../features/saved/slice';

const rootReducer = combineReducers({
  todos,
  saved,
});

export default rootReducer;
