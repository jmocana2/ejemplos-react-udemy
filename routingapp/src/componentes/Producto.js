import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({infoproducto}) => {
  const {imagen, nombre, precio, id} = infoproducto;

  return (
    <li>
      <img src={`img/${imagen}.png`} alt={nombre}/>
      <p>{nombre} <span>$ {precio}</span> </p>
      <Link to={`/producto/${id}`}>Más información</Link>
    </li>
  );
};

export default Producto;