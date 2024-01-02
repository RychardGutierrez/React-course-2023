import { createContext, useState } from 'react';

// 0 initial state
const INITIAL_STATE = { category: 'all', minPrice: 0 };

// 1 create the context
export const FilterContext = createContext();

// 2 create the provider, to proviert the context

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(INITIAL_STATE);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
