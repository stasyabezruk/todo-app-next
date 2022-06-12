import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetSavedTodos, setSavedTodos } from 'features/saved/slice';
import { ITodo } from 'features/todos/interface';
import { getTodos } from 'features/todos/selector';
import { addTodoDispatch, removeTodoDispatch, toggleTodoDispatch } from 'features/todos/slice';

function useTodoActions() {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  const toggleTodo = (id: number) => {
    dispatch(toggleTodoDispatch(id));
  };

  const removeTodo = (id: number) => {
    dispatch(removeTodoDispatch(id));
  };

  const addTodo = (todo: ITodo) => {
    dispatch(addTodoDispatch(todo));
  };

  const saveTodos = () => {
    dispatch(setSavedTodos(todos));
  };

  const removeTodos = () => {
    dispatch(resetSavedTodos());
  };

  return {
    toggleTodo,
    removeTodo,
    addTodo,
    saveTodos,
    removeTodos,
  };
}

export default useTodoActions;
