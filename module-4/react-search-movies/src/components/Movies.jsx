function ListMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <li className="movie" key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.poster} />
            <p>{movie.year}</p>
          </li>
        );
      })}
    </ul>
  );
}

function NoMoviesResult() {
  return <p>Not found movies</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListMovies movies={movies} /> : <NoMoviesResult />;
}
