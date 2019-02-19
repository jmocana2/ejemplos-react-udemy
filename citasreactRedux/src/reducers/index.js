import {combineReducers} from 'redux';
import citasReducer from './citasReducer';
import erroresReducer from './erroresReducer';

export default combineReducers({
  citas: citasReducer,
  error: erroresReducer
});