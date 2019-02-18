import {MOSTRAR_CITAS, AGREGAR_CITAS, BORRAR_CITAS} from '../actions/types'

export const obtenerCitas = () => {
  return {
    type: MOSTRAR_CITAS
  }
}

export const agregarCita = (cita) => {
  return {
    type: AGREGAR_CITAS,
    payload: cita
  }
}

export const borrarCita = (id) => {
  return {
    type: BORRAR_CITAS,
    payload: id
  }
}