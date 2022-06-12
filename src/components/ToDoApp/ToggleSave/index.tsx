import { CancelButton, SubmitButton } from 'components/UI/Button';
import useTodoActions from 'hooks/useTodoActions';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleSave: React.FC = () => {
  const { saveTodos, removeTodos } = useTodoActions();
  return (
    <Wrapper>
      <SubmitButton onClick={saveTodos}>Save tasks</SubmitButton>
      <CancelButton onClick={removeTodos}>Remove tasks list</CancelButton>
    </Wrapper>
  );
};

export default ToggleSave;
