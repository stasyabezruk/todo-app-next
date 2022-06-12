import { useAppSelector } from 'app/hooks';
import { getTodosNotCompletedLength } from 'features/todos/selector';
import useUserId from 'hooks/useUserId';
import React from 'react';
import styled from 'styled-components';

const ToDoHeadBlock = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868396;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function ToDoHead() {
  const userId = useUserId();
  const unDoneTotosLength = useAppSelector(getTodosNotCompletedLength(userId));
  const today = new Date();
  const dateString = today.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('en', {
    weekday: 'long',
  });

  return (
    <ToDoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">There are left {unDoneTotosLength} undone tasks</div>
    </ToDoHeadBlock>
  );
}

export default ToDoHead;
