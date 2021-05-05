
const FontPreview = (props) => {
  const { textPreview, textSize, font } = props

  return (
    <div>
      <p
        style={{
          fontSize: `${textSize}px`,
          fontWeight: 'bold',
          fontFamily: `${font.family}`,
        }}
      >{textPreview}</p>
    </div>
  );
}

export default FontPreview