import React from 'react';
import { FILTERS_BUTTONS, TODO_FILTERS } from '../consts';
import { FilterValue } from '../types/types';

interface Props {
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
  handleFilterChange: (filter: FilterValue) => void;
}

const Filter: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, filter }]) => {
        const isSelected = key === filterSelected;

        const className = isSelected ? 'selected' : '';
        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={handleClick(key as FilterValue)}
            >
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
