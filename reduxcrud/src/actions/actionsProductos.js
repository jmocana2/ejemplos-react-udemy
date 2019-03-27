import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, NUEVO_PRODUCTO } from './types'

import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get('http://localhost:5000/productos');
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}

export const borrarProducto = (id)  => async dispatch => {
  await axios.delete(`http://localhost:5000/productos/${id}`);
  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id 
  })  
}

export const agregarProducto = (post) => async dispatch => {
  const respuesta = await axios.post(`http://localhost:5000/productos/`, post);
  dispatch({
    type: NUEVO_PRODUCTO,
    payload: respuesta.data 
  }) 
}