import React from 'react';
import './buscador.css'



const leerDatos = (e, props) => {
    props.buscarProducto(e.target.value);
}

const Buscador = (props) => {
  return (
    <form className="buscador"><input type="text" placeholder="Busqueda" onChange={(e) => leerDatos(e, props)} /></form>
  );
};

export default Buscador;