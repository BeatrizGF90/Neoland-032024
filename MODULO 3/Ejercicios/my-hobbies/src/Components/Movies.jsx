export const Movies = ({ Movies }) => {
  const { movies } = Movies;
  return (
    <div className="containerMovies">
      <h2>Movies</h2> <hr /> {/*<hr /> añade un línea debajo del h2 */}
      {movies.map((movie, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {movie.name} <br />
            <strong>Type:</strong> {movie.type} <br />
            <strong>Gender:</strong> {movie.gender} <br />
            <strong>Vote:</strong> {movie.vote} <br />
          </p>
          {index !== movie.length - 1 && (
            <>
              <br />
            </>
          )}
          {/* Agrega un salto de línea si no es la última película/serie para diferenciar unas de otras */}
        </div>
      ))}
    </div>
  );
};
