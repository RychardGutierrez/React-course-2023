const MOVIES_URL = ' https://www.omdbapi.com/?apikey=4287ad07&s='; // TODO: remove this

export const searchMovies = async ({ search }) => {
  if (search === '') {
    return null;
  }
  try {
    const response = await fetch(MOVIES_URL + search);
    const data = await response.json();

    const movies = data.Search;

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    return mappedMovies;
  } catch (error) {
    console.log(error);
    throw new Error('Error searching movies');
  }
};
