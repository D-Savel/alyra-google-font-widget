const TextSize = (props) => {
  const { textSize, setTextSize } = props


  const handleOnChange = (event) => { setTextSize(event.target.value) }

  return (
    <>
      < label htmlFor="customRange1" className="form-label fw-bold mb-3 " > {`Taille de police (Px) : `}
        <span
          className="btn btn-danger btn-circle btn-md p-0"
          style={{ width: '30px', height: '30px', borderRadius: '15px', fontSize: '18px' }}>
          {textSize}</span>
      </label >
      <input onChange={handleOnChange} type="range" className="form-range" id="customRange1" min="8" max="48" step="1" value={textSize} />
    </>
  )
}

export default TextSize