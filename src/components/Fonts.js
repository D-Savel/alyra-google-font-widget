import { useEffect, useState } from 'react'
import Font from './Font'

const Fonts = (props) => {
  const { select, url, setUrl, textPreview, setTextPreview, textSize } = props
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    let isCancelled = false
    const controller = new AbortController()
    setLoading(true);
    switch (select) {
      case 'Les plus récentes':
        setUrl(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GFW_API_KEY}&sort=date`)
        break;
      case 'Les plus populaires':
        setUrl(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GFW_API_KEY}&sort=popularity`)
        break;
      case 'Top 10 trending':
        setUrl(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GFW_API_KEY}&sort=trending`)
        break;
      default:
        console.log('select error')
    }
    fetch(url)

      .then((response) => {
        console.log("don't forget me here!!!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 100);
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire les polices status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("I get data")
        if (!isCancelled) {
          console.log("I will update component")
          setFonts(() => [])
          for (let index = 0; index < 10; index++) {
            setFonts((f) => [...f, data.items[index]])
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (!isCancelled) {
          setError(error.message);
          setLoading(false);
        }
      });
    return () => {
      isCancelled = true
      controller.abort()
    }
    // eslint-disable-next-line
  }, [select, url]);

  return (
    <div className="col-lg-9">
      <section className="d-flex row mb-5">
        <h2 className="my-3">
          <span className="badge bg-danger">{select}</span>
        </h2>
        {fonts.map((font) => {
          return <Font textSize={textSize} textPreview={textPreview} setTextPreview={setTextPreview} key={font.family} font={font} />
        })}
        {loading && <p className="text-center">loading...</p>}
        {error && <p className="alert alert-danger">{error}</p>}
      </section>
    </div>
  );
}


export default Fonts