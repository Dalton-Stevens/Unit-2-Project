import MovieCard from "./MovieCard";

const MovieScreen = ({
  list,
  page,
  setPage,
  movieList,
  addMovie,
  removeMovie,
}) => {
  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        list={list}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
    );
  });

  const decrement = () => {
    setPage(page - 1);
  };

  const increment = () => {
    setPage(page + 1);
  };

  return (
    <div className="page">
      <h1>Dalton's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        {page !== 1 && <button onClick={decrement}>Previous</button>}
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
