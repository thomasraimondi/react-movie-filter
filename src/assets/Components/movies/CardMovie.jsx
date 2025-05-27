export default function CardMovie({ movie, index, handleDeleteItem }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="title">
            #{movie.id} - {movie.title}
          </div>
          <button
            onClick={() => handleDeleteItem(index)}
            className="btn btn-danger"
          >
            x
          </button>
        </div>
        <div className="card-body">{movie.category}</div>
      </div>
    </div>
  );
}
