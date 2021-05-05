
const FontPreview = (props) => {
  const { textPreview, textSize, setTextSize } = props

  return (
    <div>
      <p
        style={{
          fontSize: `${textSize}px`,
          fontWeight: 'bold',
          fontFamily: 'Karantina',
        }}
      >Essai</p>
    </div>
  );
}

export default FontPreview