const TextSize = (props) => {
  const { textSize, setTextSize } = props

  return (
    <>
      <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
      <input id="range" type="range" className="form-range" min="8" max="48" step="1" value="20" />
    </>
  );
}

export default TextSize