import React from 'react';
import styled from 'styled-components';
import ToDoItem from 'components/ToDoItem';
import { ITodo } from 'features/todos/interface';

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

type Props = {
  items: ITodo[];
};

const ToDoList: React.FC<Props> = ({ items }) => {
  return (
    <ToDoListBlock>
      {items.map((item) => {
        return <ToDoItem key={item.id} id={item.id} text={item.title} done={item.completed} />;
      })}
    </ToDoListBlock>
  );
};

export default ToDoList;
