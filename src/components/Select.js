const Select = (props) => {
  const { setSelect } = props
  return (
    <div className="mt-3">
      <label className="fw-bold mb-2 mt-2" htmlFor="sort">Afficher des polices</label>
      <select id="sort" className="form-select mb-1" aria-label="select"
        onChange={(event) => setSelect(event.target.value)}>
        <option value='Les plus récentes'>Les plus récentes</option>
        <option value='Les plus populaires'>Les plus populaires</option>
        <option value='Top 10 trending'>Top 10 trending</option>
      </select>
    </div>
  )
}

export default Select