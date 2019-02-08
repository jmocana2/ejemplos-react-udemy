import {MOSTRAR_CITAS, AGREGAR_CITAS, BORRAR_CITAS} from '../actions/types'

const initialState = {
  citas: [
    {
      id: 0,
      fecha: "10/07/2019",
      hora: "10:30",
      nombreMascota: "gato",
      nombreDueno: "Juan",
      sintoma: "migrañas"
    }
  ]
}

export default function (state = initialState, action){
  switch(action.type){
    case MOSTRAR_CITAS: 
      return {
        ...state
      } 
    case AGREGAR_CITAS:
    return {
      ...state,
      citas: [...state.citas, action.payload]
    }  
    default: 
      return state;  
  }
}