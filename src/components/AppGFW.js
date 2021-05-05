import { useState } from 'react'
import Select from './Select'
import TextPreview from './TextPreview'
import TextSize from './TextSize'
import Fonts from './Fonts'

const AppGFW = (props) => {
  const [select, setSelect] = useState('Les plus récentes')
  const [url, setUrl] = useState("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=date");

  return (
    <>
      <div className="row my-5">
        <Select setSelect={setSelect} />
        <TextPreview />
        <TextSize />
        <Fonts select={select} url={url} setUrl={setUrl} />
      </div >
    </>
  );
}

export default AppGFW
