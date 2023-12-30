import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

import './App.css';
function App() {
  const [sort, setSort] = useState(false);
  const { error, query, updateQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search: query, sort });
  // const inputRef = useRef();

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log(search);
      getMovies({ search });
    }, 1000),
    [getMovies]
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // This the form not controller
    // const value = inputRef.current.value;
    // const fields = new FormData(event.target);
    // const query = fields.get('query');
    // for (const [key, value] of fields.entries()) {
    //   console.log(key, value);
    // }

    //  const fields2 = Object.fromEntries(new FormData(event.target));

    getMovies({ search: query });
  };

  // This the form controller
  const handleChangeQuery = (event) => {
    const newQuery = event.target.value;

    if (newQuery.startsWith(' ')) {
      return;
    }
    // console.log(newQuery);
    updateQuery(newQuery);

    debouncedGetMovies(newQuery);

    // if (newQuery === '') {
    //   setError('Please enter a movie title');
    //   return;
    // }
    // if (newQuery.length < 3) {
    //   setError('Please enter at least 3 characters');
    //   return;
    // }

    // setError(null);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Movies Search</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            onChange={handleChangeQuery}
            value={query}
            name="query"
            type="text"
            placeholder="Search..."
          />

          <input type="checkbox" onChange={handleSort} checked={sort} />

          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
