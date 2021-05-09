import { useEffect, useState } from "react"

const DarkMode = ({ children }) => {
  const [darkModes, setDarkModes] = useState(() => JSON.parse(localStorage.getItem("darkmode")) || false)


  // eslint-disable-next-line
  const modeClasses = darkModes ? document.body.className = 'bg-dark text-white min-vh-100' : document.body.className = 'bg-white text-dark min-vh-100'


  const handleChange = () => {
    setDarkModes(!darkModes)

  }
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkModes))
  }, [darkModes])
  return (

    <section>
      <div className="form-check form-switch">
        <input checked={darkModes} className="form-check-input" type="checkbox" id="activate" onChange={handleChange} />
        <label className="text-white form-check-label" htmlFor="activate"> Mode Sombre </label>
      </div>
      {children}
    </section>
  )
}

export default DarkMode