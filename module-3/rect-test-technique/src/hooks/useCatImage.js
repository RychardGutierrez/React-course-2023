import { useEffect, useState } from 'react';

import { getRandomImage } from '../services/facts';

export function useCatImage({ fact }) {
  const [imageUrl, setImage] = useState(null);

  useEffect(() => {
    if (!fact) {
      return;
    }

    getRandomImage().then((url) => setImage(url));
  }, [fact]);

  return { imageUrl };
}
