export default function Header({ isFormVisible, setIsFormVisible }) {
  console.log(isFormVisible);

  const handleFormVisible = () => setIsFormVisible(!isFormVisible);

  return (
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
  );
}
