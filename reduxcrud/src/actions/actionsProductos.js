import { MOSTRAR_PRODUCTOS } from './types'

import { axios } from 'axios';

const mostrarRespuesta = () => async dispatch => {
  const respuesta = await axios.get('http://localhost:5000/productos');
  dispatch({
    action: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}