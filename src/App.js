import AppGFW from './components/AppGFW'
import Darkmode from './components/DarkMode'
function App() {


  return (
    <>
      <header className="p-5 bg-danger">
        <div className="text-white text-center">
          <h1 className="display-1">Quoi de neuf, Google Fonts™ ?</h1>
          <p className="h4 fw-bold">Le plus récents, les plus <i>trendy</i> et les plus populaires polices Google.</p>
        </div>
        <Darkmode />
      </header>

      <div className="container min-vh-100">
        <div className="row py-1">
          <AppGFW />
        </div>
      </div>
      <footer className="p-3 text-center bg-dark text-white">With <i className="text-danger fs-3">&hearts;</i> & React for Alyra</footer>
    </>
  );
}

export default App;