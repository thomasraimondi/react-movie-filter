import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header({
  isAddVisible,
  setIsAddVisible,
  isFilterVisible,
  setIsFilterVisible,
  isEditVisible,
  setIsEditVisible,
}) {
  const handleAddVisible = () => setIsAddVisible(!isAddVisible);
  const handleFilterVisible = () => setIsFilterVisible(!isFilterVisible);
  const handleEditVisible = () => setIsEditVisible(!isEditVisible);

  return (
    <div className="header d-flex justify-content-between p-3">
      <div className="title">
        <h1>Movies List</h1>
      </div>
      <div className="function d-flex align-items-center gap-2">
        <button className="btn btn-primary" onClick={handleEditVisible}>
          <i className="bi bi-pencil"></i>
        </button>
        <button className="btn btn-primary" onClick={handleFilterVisible}>
          <i className="bi bi-funnel"></i>
        </button>
        <button className="btn btn-primary" onClick={handleAddVisible}>
          {isAddVisible ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-plus-lg"></i>
          )}
        </button>
      </div>
    </div>
  );
}
