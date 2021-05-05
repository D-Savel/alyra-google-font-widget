import AppGFW from './components/AppGFW'
import './App.css';

function App() {


  return (
    <>
      <header className="p-5 bg-danger text-white text-center">
        <h1 className="display-1">Quoi de neuf, Google Fonts™ ?</h1>
        <p className="h4 fw-bold">Le plus récents, les plus <i>trendy</i> et les plus populaires polices Google.</p>
      </header>
      <div className="container min-vh-100">
        <div className="row my-2">
          <AppGFW />
          <footer className="p-3 tex-center bg-dark text-white">With Love & React for Alyra</footer>
        </div>
      </div>
    </>
  );
}

export default App;
