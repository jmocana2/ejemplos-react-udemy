import {VALIDAR_ERRORES, MOSTRAR_ERROR} from '../actions/types'

export const validarErrores = (estado) => {
  return {
    type: VALIDAR_ERRORES,
    payload: estado
  }
}
