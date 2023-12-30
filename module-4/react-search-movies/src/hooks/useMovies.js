import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (previusSearch.current === search) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;

      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    // console.log('memo sort movies');
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;

  return { movies: sortedMovies, getMovies, loading, error };
}
