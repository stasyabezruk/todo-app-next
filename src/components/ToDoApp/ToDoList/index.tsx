import React from 'react';
import styled from 'styled-components';
import ToDoItem from 'components/ToDoApp/ToDoItem';
import { useAppSelector } from 'app/hooks';
import { getTodos } from 'features/todos/selector';

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const ToDoList = () => {
  const todos = useAppSelector(getTodos);

  return (
    <ToDoListBlock>
      {todos.map((item) => {
        return <ToDoItem key={item.id} id={item.id} text={item.title} done={item.completed} />;
      })}
    </ToDoListBlock>
  );
};

export default ToDoList;
