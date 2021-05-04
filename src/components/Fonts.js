import { useEffect, useState } from 'react'
import Font from './Font'

const Fonts = (props) => {
  const { select, url, setUrl } = props
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    let isCancelled = false
    const controller = new AbortController()
    setLoading(true);
    switch (select) {
      case 'recent':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=date")
        break;
      case 'popularity':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=popularity")
        break;
      case 'trending':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=trending")
        break;
      default:
        console.log(`Désolé, nous n'avons pas trouvé le groupe de police ' '${select}'.`);
    }
    fetch(url)

      .then((response) => {
        console.log("don't forget me here!!!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 2000);
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
          console.log(select);
          let fonts = []
          console.log(fonts);
          for (let index = 0; index < 10; index++) {
            fonts.push(data.items[index])
            setFonts(() => fonts)
          }
          setLoading(false);
        }
        console.log(fonts)
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

  }, [url, select]);




  return (
    <section className="row mb-5">
      <h2 className="mb-3">
        <span className="badge bg-danger">Les plus populaire</span>
      </h2>
      {fonts.map((font) => {
        return <Font key={font.family} font={font} />;
      })}
      {loading && <p className="text-center">loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

    </section>

  );
}


export default Fonts