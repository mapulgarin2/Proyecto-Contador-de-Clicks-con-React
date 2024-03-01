import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './component/Boton';
import Contador from './component/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='container-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
        texto ='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/> 
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/> 
      </div>
    </div>
  );
}

export default App;
