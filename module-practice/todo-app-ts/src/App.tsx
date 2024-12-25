/* eslint-disable react/react-in-jsx-scope */
import { Todos } from './components/Todos';
import Footer from './components/Footer';
import Header from './components/Header';
import { Copyright } from './components/Copyright';
import { useTodos } from './hooks/useTodoFirst';

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
