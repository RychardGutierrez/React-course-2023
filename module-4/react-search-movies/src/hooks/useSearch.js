import { useEffect, useRef, useState } from 'react';

export function useSearch() {
  const [query, updateQuery] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === '';
      return;
    }
    if (query === '') {
      setError('Please enter a movie title');
      return;
    }
    if (query.length < 3) {
      setError('Please enter at least 3 characters');
      return;
    }

    setError(null);
  }, [query]);

  return {
    query,
    updateQuery,
    error,
  };
}
