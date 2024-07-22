import React, { useState } from 'react';

interface Props {
  saveTodo: (title: string) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter' && inputValue !== '') {
      saveTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="What want you need to do"
      autoFocus
    />
  );
};

export default CreateTodo;
