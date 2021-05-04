const Font = ({ font }) => {
  const { family, variants, category } = font
  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex justify-content-between">
          <span>{family}</span></h2>
        <small>
          variant(s)
            {variants.length}
        </small>
        <p className="mb-0">
          <span className=" badge bg-dark">{category}</span>
        </p>
        <div>Aperçu</div>

        <a href={`https://fonts.google.com/specimen/${family}`}>
          Voir sur Google Font</a>
      </div>
    </article>
  )
}

export default Font