import React, { useEffect, useState } from 'react';

const App = () => {
  const [fact, setFact] = useState('loream test ');

  const getFact = async () => {
    const result = await fetch('https://catfact.ninja/fact');
    const data = await result.json();
    console.log(data);
    setFact(data.fect);
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <h1>App Cats</h1>

      <p>{fact}</p>
    </>
  );
};

export default App;
