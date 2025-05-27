export default function FilterMovies({ movies }) {
  const categories = movies.map((movie) => movie.category);
  const filteredCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  console.log(categories);

  return (
    <div className="card d-flex">
      <div>Seleziona una categoria:</div>
      <select name="category" id="">
        <option value="">All</option>
        {filteredCategories.map((category) => (
          <option value="">{category}</option>
        ))}
        <option value=""></option>
      </select>
    </div>
  );
}
