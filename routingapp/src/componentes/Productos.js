import React from 'react';
import Producto from './Producto';
import './productos.css'
import Buscador from './Buscador';

const Productos = ({productos, buscarProducto}) => {
  return (
    <div className='productos'>
      <h2>Nuestros productos</h2>
      <Buscador buscarProducto={buscarProducto} />
      <ul className="lista-productos">
        {productos.map((producto) => <Producto infoproducto={producto} />)}
      </ul>      
    </div>
  );
};

export default Productos;