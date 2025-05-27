import AddForm from "../movies/AddForm";
import FilterMovies from "../movies/FilterMovies";
import ListMovies from "../movies/ListMovies";

export default function Main({
  isFormVisible,
  handleSubmitform,
  formData,
  handleFieldChange,
  movies,
  handleDeleteItem,
  isFilterVisible,
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
      {isFilterVisible ? (
        <div className="col-4">
          <FilterMovies movies={movies} />
        </div>
      ) : (
        ""
      )}

      <ListMovies movies={movies} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}
