import React from 'react';
import Producto from './Producto';
import './productos.css'

const Productos = ({productos}) => {
  return (
    <div className='productos'>
      <h2>Nuestros productos</h2>
      <ul className="lista-productos">
        {productos.map((producto) => <Producto infoproducto={producto} />)}
      </ul>      
    </div>
  );
};

export default Productos;