const TextSize = (props) => {
  const { textSize, setTextSize } = props

  return (
    <>
      <label htmlFor="customRange1" className="form-label fw-bold mb-2">La taille de police</label>
      <input type="range" className="form-range" id="customRange1" min="8" max="48" step="1" value="20" />
    </>
  );
}

export default TextSize