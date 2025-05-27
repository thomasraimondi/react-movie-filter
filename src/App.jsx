import { useState } from "react";

import originalMovies from "./data/movies";
import Header from "./assets/Components/layout/Headers";
import Main from "./assets/Components/layout/main";

const initialAddForm = {
  title: "",
  category: "",
};

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [movies, setMovies] = useState(originalMovies);
  const [formData, setFormData] = useState(initialAddForm);

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
      <Header
        isAddVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
      />
      <Main
        isFormVisible={isFormVisible}
        handleSubmitform={handleSubmitform}
        formData={formData}
        handleFieldChange={handleFieldChange}
        movies={movies}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
