import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = 'zg+rIAbxaCj/PizrUkK9wA==ssz8mQa5YBgMxYom';

const CAT_ENDPOINT_IMAGE_URL = `https://api.api-ninjas.com/v1/cats?name=${'abyssinian'}`;
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

const App = () => {
  const [fact, setFact] = useState('');
  const [image, setImage] = useState(null);

  const getFact = async () => {
    // TODO: handle error if we have error
    const result = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await result.json();
    const { fact } = data;
    setFact(fact);
  };

  const getImageRandon = async () => {
    // TODO: handle error if we have error

    const firstWord = fact.split(' ')[0];
    // fact.split(' ').slice(0, 3).join(' ')
    // fact.split(' ', 3)

    const imageResult = await fetch(
      `https://api.api-ninjas.com/v1/cats?name=${'abyssinian'}`,
      {
        headers: {
          'X-Api-Key': API_KEY,
        },
      }
    );

    const imageData = await imageResult.json();
    setImage(imageData[0].image_link);
  };

  useEffect(() => {
    getFact();
  }, []);

  useEffect(() => {
    if (!fact) {
      return;
    }
    getImageRandon();
  }, [fact]);

  return (
    <main>
      <h1>Cats App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && (
          <img
            src={image}
            alt={`Image extraced using the first word for ${fact}`}
          />
        )}
      </section>
    </main>
  );
};

export default App;
