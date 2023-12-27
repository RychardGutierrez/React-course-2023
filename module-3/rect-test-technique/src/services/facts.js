const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

const API_KEY = 'zg+rIAbxaCj/PizrUkK9wA==ssz8mQa5YBgMxYom';

const CAT_ENDPOINT_IMAGE_URL = 'https://api.api-ninjas.com/v1/cats?name=';

export const getRandomFact = async () => {
  // TODO: handle error if we have error
  const result = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await result.json();
  const { fact } = data;
  return fact;
};

export const getRandomImage = async (fact) => {
  const imageResult = await fetch(`${CAT_ENDPOINT_IMAGE_URL}${'abyssinian'}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });

  const imageData = await imageResult.json();

  return imageData[0].image_link;
};
