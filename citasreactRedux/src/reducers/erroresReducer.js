import {VALIDAR_ERRORES, MOSTRAR_ERROR} from '../actions/types'

const initialState = {
  error: false
}

export default function (state = initialState, action){
  switch(action.type){
    case VALIDAR_ERRORES: 
      return {
        error: action.payload
      }    
    default: 
      return state;  
  }
}