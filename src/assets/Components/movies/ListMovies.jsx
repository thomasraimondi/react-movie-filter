import CardMovie from "./CardMovie";

export default function ListMovies({ movies, handleDeleteItem }) {
  return (
    <div className="row row-cols-3 g-3">
      {movies.map((movie, index) => (
        <CardMovie
          movie={movie}
          index={index}
          handleDeleteItem={handleDeleteItem}
          key={index}
        />
      ))}
    </div>
  );
}
