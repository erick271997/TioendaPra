import React from "react";

const Buscador = () => {
   const busquedaRef = React.createRef();


   const handleObtenerdatos=(e)=>{
e.preventDefault();

console.log(busquedaRef)
   }

  return (
    <form onSubmit={handleObtenerdatos}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
             ref={busquedaRef} type= "text"
            className="form-control
             form-control-lg"
            placeholder="Busca tu Imagen. Ejemplo: Futbol"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar..."
          />
        </div>
      </div>
    </form>
  );
};

export default Buscador;
