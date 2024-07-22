/* eslint-disable react/prop-types */
import { FilterValue } from '../types/types';
import Filter from './Filter';

/* eslint-disable react/react-in-jsx-scope */
interface Props {
  handleFilterChange: (filter: FilterValue) => void;
  activeAcount: number;
  completedCount: number;
  onClearCompleted: () => void;
  filterSelected: FilterValue;
}

const Footer: React.FC<Props> = ({
  activeAcount,
  completedCount,
  onClearCompleted,
  filterSelected,
  handleFilterChange,
}) => {
  const singleActiveAcount = activeAcount === 1;

  const activetodoWord = singleActiveAcount ? 'task' : 'tasks';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeAcount}</strong> pending {activetodoWord}
      </span>

      <Filter
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
