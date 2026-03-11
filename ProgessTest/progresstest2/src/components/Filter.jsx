function Filter({ category, setCategory }) {
  return (
    <div className="card p-3">

      <h6>Filter</h6>

      <label className="mb-1">Category</label>

      <select
        className="form-select"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>

    </div>
  );
}

export default Filter;