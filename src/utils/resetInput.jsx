import { useState } from 'react';

export const resetInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return { name, setName, number, setNumber, reset };
};

const reset = () => {
  setName('');
  setNumber('');
};
