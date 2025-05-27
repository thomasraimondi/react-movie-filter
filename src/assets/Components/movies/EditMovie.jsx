export default function SearchMovie({ movies }) {
  return (
    <>
      <h1>Edit Movie</h1>
      <div className="card">
        <select name="movies" id="">
          {movies.map((movie) => (
            <option value={movie.title}>{movie.title}</option>
          ))}
        </select>
      </div>
    </>
  );
}
