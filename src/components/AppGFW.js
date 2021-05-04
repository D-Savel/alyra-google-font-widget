import Fonts from './Fonts'
import Select from './Select'
import { useState } from "react"

const AppGFW = (props) => {
  const [select, setSelect] = useState('')
  const [url, setUrl] = useState("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=date");

  return (
    <div >
      < Select setSelect={setSelect} />
      <Fonts select={select} url={url} setUrl={setUrl} />
    </div>
  );
}

export default AppGFW
