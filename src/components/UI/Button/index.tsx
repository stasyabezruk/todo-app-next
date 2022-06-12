import styled from 'styled-components';

const SubmitButton = styled.button`
  color: #42a5f5;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  display: inline-block;
`;

const ResetButton = styled.button`
  color: tomato;
  border-color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  display: inline-block;
`;

const CancelButton = styled(SubmitButton)`
  color: #757575;
  border-color: #757575;
`;

export { SubmitButton, ResetButton, CancelButton };
