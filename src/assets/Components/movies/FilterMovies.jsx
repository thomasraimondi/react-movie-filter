import { useEffect, useState } from "react";
import originalMovies from "../../../data/movies";

export default function FilterMovies({ movies, setMovies }) {
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    let filteredMovies = originalMovies;

    if (filterCategory != "") {
      filteredMovies = originalMovies.filter(
        (movie) => movie.category === filterCategory
      );
    }

    setMovies(filteredMovies);
  }, [filterCategory]);

  const categories = originalMovies.map((movie) => movie.category);
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
