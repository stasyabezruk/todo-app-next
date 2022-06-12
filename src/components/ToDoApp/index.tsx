/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchTodos } from 'features/todos/slice';
import ToDoTemplate from 'components/ToDoTemplate';
import ToDoList from 'components/ToDoList';
import ToDoHead from 'components/ToDoHead';
import ToDoCreate from 'components/ToDoCreate';
import { getTodosByUserId } from 'features/todos/selector';
import useUserId from 'hooks/useUserId';
import { setSavedTodos } from 'features/saved/slice';

const Todos = () => {
  const dispatch = useAppDispatch();
  const userId = useUserId();
  const todos = useAppSelector(getTodosByUserId(userId));

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <ToDoTemplate>
      <button
        type="button"
        onClick={() => {
          dispatch(setSavedTodos(todos));
        }}
      >
        Add
      </button>
      <ToDoHead />
      <ToDoList items={todos} />
      <ToDoCreate />
    </ToDoTemplate>
  );
};

export default Todos;
