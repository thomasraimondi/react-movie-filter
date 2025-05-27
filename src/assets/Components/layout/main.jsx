import AddForm from "../movies/AddForm";

export default function Main({
  isFormVisible,
  handleSubmitform,
  formData,
  handleFieldChange,
  movies,
}) {
  return (
    <div className="main">
      {isFormVisible ? (
        <div className="col-4">
          <AddForm
            handleSubmitform={handleSubmitform}
            formData={formData}
            handleFieldChange={handleFieldChange}
          />
        </div>
      ) : (
        ""
      )}

      <div className="row row-gap-3">
        {movies.map((movie, index) => (
          <div className="col-4" key={index}>
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
        ))}
      </div>
    </div>
  );
}
