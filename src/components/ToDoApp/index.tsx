/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchTodosData, setTodos } from 'features/todos/slice';
import ToDoTemplate from 'components/ToDoApp/ToDoTemplate';
import ToDoList from 'components/ToDoApp/ToDoList';
import ToDoHead from 'components/ToDoApp/ToDoHead';
import ToDoCreate from 'components/ToDoApp/ToDoCreate';
import { getFetchedDataByUserId } from 'features/todos/selector';
import useUserId from 'hooks/useUserId';
import { getIsSavedTodos, getSavedTodos } from 'features/saved/selector';
import ToggleSave from './ToggleSave';

const Todos = () => {
  const dispatch = useAppDispatch();
  const userId = useUserId();
  const fetchedData = useAppSelector(getFetchedDataByUserId(userId));
  const savedTodos = useAppSelector(getSavedTodos);
  const isSavedTodos = useAppSelector(getIsSavedTodos);

  useEffect(() => {
    dispatch(fetchTodosData());
  }, []);

  useEffect(() => {
    if (isSavedTodos) {
      dispatch(setTodos(savedTodos));
    } else {
      dispatch(setTodos(fetchedData));
    }
  }, [isSavedTodos]);

  return (
    <ToDoTemplate>
      <ToggleSave />
      <ToDoHead />
      <ToDoList />
      <ToDoCreate />
    </ToDoTemplate>
  );
};

export default Todos;
