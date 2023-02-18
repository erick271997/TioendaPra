/* eslint-disable no-undef */
import React from "react";
import Buscador from "./componete/Buscador";



function App() {



  const datosBusquedas=(termino)=>{
    console.log(termino)
  }
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagen</p>
      <Buscador datosBusquedas={datosBusquedas}/>


      </div>
    </div>
  );
}

export default App;
