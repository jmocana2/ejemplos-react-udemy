import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, NUEVO_PRODUCTO } from '../actions/types';

const initialState = {
  productos: []
};

export default function(state = initialState, action){
  switch(action.type){
    case MOSTRAR_PRODUCTOS: 
      return {
        ...state,
        productos: action.payload
      }
      case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== action.payload)
      }
      case NUEVO_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
     default:
      return state 
  }
}