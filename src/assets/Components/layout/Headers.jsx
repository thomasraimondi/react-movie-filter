import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header({ isAddVisible, setIsFormVisible }) {
  const handleFormVisible = () => setIsFormVisible(!isAddVisible);
  const handleFilterVisible = () => alert("ciao");

  return (
    <div className="header d-flex justify-content-between p-3">
      <div className="title">
        <h1>Movies List</h1>
      </div>
      <div className="function d-flex align-items-center gap-2">
        <button className="btn btn-primary" onClick={handleFilterVisible}>
          <i className="bi bi-funnel"></i>
        </button>
        <button className="btn btn-primary" onClick={handleFormVisible}>
          {isAddVisible ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-plus"></i>
          )}
        </button>
      </div>
    </div>
  );
}
