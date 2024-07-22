/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Todos } from './components/Todos';
import { ListOfTodos, TodoId } from './types/types';
import Footer from './components/Footer';
import Header from './components/Header';
import { Copyright } from './components/Copyright';
import { useTodos } from './hooks/useTodoFirst';

const mockTodo: ListOfTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true,
  },
];

const App = (): JSX.Element => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleCompleted,
    handleClearCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();

  return (
    <div className="todoapp">
      <Header saveTodo={handleSave} />
      <Todos
        todos={filteredTodos}
        onRemove={handleRemove}
        onCompleted={handleCompleted}
        setTitle={handleUpdateTitle}
      />
      <Footer
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        activeAcount={activeCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
      />
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default App;
