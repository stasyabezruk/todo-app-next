import React, { useState } from 'react';

function useInput(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
    setState((e.target as HTMLInputElement)?.value);
  };

  const reset = () => {
    setState('');
  };

  return [state, handleChange, reset];
}

export default useInput;
