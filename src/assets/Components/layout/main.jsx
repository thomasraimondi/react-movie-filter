import AddForm from "../movies/AddForm";
import FilterMovies from "../movies/FilterMovies";
import ListMovies from "../movies/ListMovies";
import EditMovie from "../movies/EditMovie";

export default function Main({
  isFormVisible,
  handleSubmitform,
  formData,
  handleFieldChange,
  movies,
  handleDeleteItem,
  isFilterVisible,
  setMovies,
  isEditVisible,
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
      {isEditVisible ? (
        <div className="col">
          <EditMovie movies={movies} />
        </div>
      ) : (
        ""
      )}

      <ListMovies movies={movies} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}
