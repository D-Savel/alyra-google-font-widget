const TextSize = (props) => {
  const { textSize, setTextSize } = props

  const handleOnChange = (event) => { setTextSize(event.target.value) }

  return (
    <>
      <label htmlFor="customRange1" className="form-label fw-bold mb-3">La taille de police</label>
      <input onChange={handleOnChange} type="range" className="form-range" id="customRange1" min="8" max="48" step="1" value={textSize} />
    </>
  );
}


export default TextSize