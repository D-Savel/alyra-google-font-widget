const Select = (props) => {
  const { select, setSelect } = props
  return (
    <form className="input-group-text mb-3">
      <label className="input-group-text" htmlFor="select">Afficher les polices</label>
      <select
        className="form-select"
        id="select" aria-label="select"
        //value={select}
        onChange={(event) => setSelect(event.target.value)}
      >
        <option defaultValue='recent'>Les plus récentes</option>
        <option value='popularity'>Les plus populaires</option>
        <option value='trending'>Top 10 trending</option>
      </select>
    </form>
  )
}

export default Select