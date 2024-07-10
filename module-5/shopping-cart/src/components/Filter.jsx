import { useEffect, useId, useState } from 'react';
import './filters.css';
import { useFilters } from '../hooks/useFilters';

const Filter = () => {
  const { updateFilter, filters } = useFilters();

  const minPriceFilterID = useId();
  const categoryFilterID = useId();

  const handleChangePrice = (event) => {
    updateFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    updateFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterID}>Price</label>
        <input
          type="range"
          id={minPriceFilterID}
          min="0"
          max="1000"
          onChange={handleChangePrice}
          value={filters.minPrice}
        />

        <p>${filters.minPrice}</p>
      </div>

      <div>
        <label htmlFor={categoryFilterID}>Category</label>
        <select id={categoryFilterID} onChange={handleChangeCategory}>
          <option value="all"> All </option>
          <option value="laptops"> Laptops </option>
          <option value="smartphones"> Smartphones </option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
