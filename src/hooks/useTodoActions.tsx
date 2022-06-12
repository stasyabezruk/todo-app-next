import { useAppDispatch } from 'app/hooks';
import { ITodo } from 'features/todos/interface';
import { addTodoDispatch, removeTodoDispatch, toggleTodoDispatch } from 'features/todos/slice';

/* export function todoReducer(state: ITodo[], action): ITodo[] {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo: ITodo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
} */

function useTodoActions() {
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

  return {
    toggleTodo,
    removeTodo,
    addTodo,
  };
}

export default useTodoActions;
