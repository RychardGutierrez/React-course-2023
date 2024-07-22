/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { ListOfTodos, Todo as TodoType } from '../types/types';
import Todo from './Todo';

interface Props {
  todos: ListOfTodos;
  onRemove: ({ id }: { id: string }) => void;
  onCompleted: ({ id, completed }: { id: string; completed: boolean }) => void;
  setTitle: (params: Omit<TodoType, 'completed'>) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemove,
  onCompleted,
  setTitle,
}) => {
  const [isEditing, setIsEditing] = useState('');
  return (
    <ul className="todo-list">
      {todos.map(({ completed, id, title }) => (
        <li
          key={id}
          onDoubleClick={() => {
            setIsEditing(id);
          }}
          className={`
            ${completed ? 'completed' : ''}
            ${isEditing === id ? 'editing' : ''}
          `}
        >
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            onRemove={onRemove}
            onCompleted={onCompleted}
            setTitle={setTitle}
          />
        </li>
      ))}
    </ul>
  );
};
