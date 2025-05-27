import AddForm from "../movies/AddForm";
import ListMovies from "../movies/ListMovies";

export default function Main({
  isFormVisible,
  handleSubmitform,
  formData,
  handleFieldChange,
  movies,
  handleDeleteItem,
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

      <ListMovies movies={movies} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}
