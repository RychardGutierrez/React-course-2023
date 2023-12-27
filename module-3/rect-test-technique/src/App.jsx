import './App.css';

import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

const App = () => {
  const { fact, getFactAndUpdateState } = useCatFact();
  const { imageUrl } = useCatImage({ fact: fact.split(' ')[0] });

  const refreshRandomFact = async () => {
    getFactAndUpdateState();
  };

  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={refreshRandomFact}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extraced using the first word for ${fact}`}
          />
        )}
      </section>
    </main>
  );
};

export default App;
