import { useState } from "react";

import originalMovies from "./data/movies";
const initialAddForm = {
  title: "",
  category: "",
};

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [movies, setMovies] = useState(originalMovies);
  const [formData, setFormData] = useState(initialAddForm);

  const handleFormVisible = () => setIsFormVisible(!isFormVisible);
  const handleFieldChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log(e);
    const newMovies = [...movies, formData];
    console.log(newMovies);
    setMovies(newMovies);

    setFormData(initialAddForm);
  };

  const handleDeleteItem = (index) => {
    console.log(index);

    const filteredItem = movies.filter((movie, i) => i != index);
    console.log(filteredItem);
    setMovies(filteredItem);
  };

  return (
    <div className="container">
      <div className="header d-flex justify-content-between p-3">
        <div className="title">
          <h1>Movies List</h1>
        </div>
        <div className="function">
          <button className="btn btn-primary" onClick={handleFormVisible}>
            {isFormVisible ? "x" : "+"}
          </button>
        </div>
      </div>
      <div className="main">
        {isFormVisible ? (
          <div className="col-4">
            <form
              onSubmit={handleSubmitform}
              className="form-control my-4 d-flex flex-column gap-3"
            >
              <div className="field-1">
                <label className="col-3  me-3" htmlFor="title">
                  Titolo:
                </label>
                <input
                  value={formData.title}
                  onChange={handleFieldChange}
                  className="grow-1"
                  type="text"
                  name="title"
                  id="title"
                />
              </div>
              <div className="field-2">
                <label className="col-3 me-3" htmlFor="category">
                  Descrizione
                </label>
                <input
                  value={formData.description}
                  onChange={handleFieldChange}
                  type="text"
                  name="category"
                  id="category"
                />
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
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
    </div>
  );
}

export default App;
