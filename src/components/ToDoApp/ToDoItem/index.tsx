import React from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDone, MdDelete } from 'react-icons/md';
import useTodoActions from 'hooks/useTodoActions';

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

interface DoneProps {
  done: boolean;
}
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  /* If done exists, it will change the color, so we need a multiline style. */
  /* Let's load css from the top. */
  ${(props: DoneProps) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
      /* If there is a done value, change the border and color values. */
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props: DoneProps) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const ToDoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      /* In this way, you can select a component and give it properties. */
      opacity: 1;
    }
  }
`;

function ToDoItem({ id, done, text }) {
  const { toggleTodo, removeTodo } = useTodoActions();
  return (
    <ToDoItemBlock>
      <CheckCircle
        done={done}
        onClick={() => {
          toggleTodo(id);
        }}
      >
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove
        onClick={() => {
          removeTodo(id);
        }}
      >
        <MdDelete />
      </Remove>
    </ToDoItemBlock>
  );
}

export default ToDoItem;
