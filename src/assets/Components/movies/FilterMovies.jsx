import { useEffect, useState } from "react";

export default function FilterMovies({ movies, setMovies }) {
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    let filteredMovies = movies;

    if (filterCategory != "") {
      filteredMovies = movies.filter(
        (movie) => movie.category === filterCategory
      );
    }

    setMovies(filteredMovies);
  }, [filterCategory, movies]);

  const categories = movies.map((movie) => movie.category);
  const filteredCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );

  return (
    <div className="card d-flex">
      <div>Seleziona una categoria:</div>
      <select
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
        name="category"
        id=""
      >
        <option value="">All</option>
        {filteredCategories.map((category, i) => (
          <option value={category} key={i}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
