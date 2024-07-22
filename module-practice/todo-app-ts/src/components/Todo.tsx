/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { TodoId, Todo as TodoType } from '../types/types';

interface Props extends TodoType {
  onRemove: (id: string) => void;
  onCompleted: (id: string, completed: boolean) => void;
  setTitle: (params: { id: string; title: string }) => void;
  isEditing: string;
  setIsEditing: (completed: string) => void;
  removeTodo: (id: string) => void;
}

const Todo: React.FC<Props> = ({
  completed,
  id,
  title,
  onRemove,
  onCompleted,
  setTitle,
  isEditing,
  setIsEditing,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter') {
      setEditedTitle(editedTitle.trim());

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle });
      }

      if (editedTitle === '') {
        onRemove(id);
      }

      setIsEditing('');
    }

    if (event.key === 'Escape') {
      setEditedTitle(title);
      setIsEditing('');
    }
  };

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(event) => onCompleted(id, event.target.checked)}
      />

      <label>{title}</label>

      <button className="destroy" onClick={() => onRemove(id)}></button>

      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setIsEditing('')}
        ref={inputEditTitle}
      />
    </div>
  );
};

export default Todo;
