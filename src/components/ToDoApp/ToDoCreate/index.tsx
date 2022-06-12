import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdAdd } from 'react-icons/md';
import useInput from 'hooks/useInput';
import useTodoActions from 'hooks/useTodoActions';
import { ITodo } from 'features/todos/interface';
import useUserId from 'hooks/useUserId';

interface OpenProps {
  open: boolean;
}

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;

  border: none;
  outline: none;
  transition: 0.125 s all ease-in;
  ${(props: OpenProps) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg); ;
    `};
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box; /* If the box sizing border box is not set, padding is ignored and applied. */
`;

function ToDoCreate() {
  const userId = useUserId();

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const [todo, setTodo, resetTodo] = useInput('');
  const { addTodo } = useTodoActions();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo,
      completed: false,
      userId,
    };
    addTodo(newTodo);
    resetTodo();
    setOpen(false);
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input placeholder="After entering the task, press Enter" autoFocus onChange={setTodo} value={todo} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default ToDoCreate;
