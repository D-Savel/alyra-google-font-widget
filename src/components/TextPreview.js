const TextPreview = (props) => {
  const { textPreview, setTextPreview } = props

  const handleOnChange = (event) => { setTextPreview(event.target.value) };


  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre texte</label>
      <textarea onChange={handleOnChange} id="text" className="form-control" value={textPreview} />
    </div>
  );
}

export default TextPreview