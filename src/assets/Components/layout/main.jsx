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
  setMovies,
}) {
  return (
    <div className="main">
      {isFormVisible ? (
        <div className="col">
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
        <div className="col">
          <FilterMovies movies={movies} setMovies={setMovies} />
        </div>
      ) : (
        ""
      )}

      <ListMovies movies={movies} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}
