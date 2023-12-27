import { useEffect, useState } from 'react';

import { getRandomFact } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState('');

  const getFactAndUpdateState = () => {
    getRandomFact().then((fact) => setFact(fact));
  };

  useEffect(getFactAndUpdateState, []);

  return { getFactAndUpdateState, fact };
}
