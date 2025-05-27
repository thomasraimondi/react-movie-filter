export default function AddForm({
  handleSubmitform,
  formData,
  handleFieldChange,
}) {
  return (
    <div className="card">
      <div className="card-header">Add New Movie:</div>
      <form
        onSubmit={handleSubmitform}
        className="my-4 d-flex flex-column gap-3"
      >
        <div className="field-1">
          <label className="col-3  me-3 form-label" htmlFor="title">
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
            Categoria:
          </label>
          <input
            value={formData.category}
            onChange={handleFieldChange}
            type="text"
            name="category"
            id="category"
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
