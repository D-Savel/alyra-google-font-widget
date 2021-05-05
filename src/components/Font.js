import FontPreview from './FontPreview'

const Font = ({ font }) => {
  //const { textPreview, setTextPreview } = { 
  const { family, variants, category } = font
  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{(family)}</span>
          <small>{variants.length} variant(s)</small>
        </h2>
        <p className="mb-0">
          <span className="badge bg-dark text-uppercase">{category}</span>
        </p>
        <FontPreview />
        <a className="text-danger" href={`https://fonts.google.com/specimen/${family}`}>Voir sur Goole Fonts</a>
      </div>
    </article>
  )
}

export default Font