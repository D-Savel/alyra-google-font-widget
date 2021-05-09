import GoogleFontLoader from 'react-google-font-loader'

const Font = (props) => {
  const { font, textSize, textPreview } = props

  return (
    <>
      <GoogleFontLoader
        fonts={[{
          font: `${font.family}`
        }]}
      />
      <article className="col-lg-6 mb-4">
        <div className="shadow-sm border p-3 h-100">
          <h2 className="h6 d-flex aling-items-center justify-content-between">
            <span>{(font.family)}</span>
            <small>{font.variants.length} variant(s)</small>
          </h2>
          <p className="mb-0">
            <span className="badge border border-light bg-dark text-uppercase">{font.category}</span>
          </p>
          <p style={{ fontFamily: `${font.family}`, fontSize: `${textSize}px` }}>{textPreview}</p>

          <a className="text-danger" href={`https://fonts.google.com/specimen/${font.family}`}>Voir sur Goole Fonts</a>
        </div>
      </article>
    </>
  )

}

export default Font