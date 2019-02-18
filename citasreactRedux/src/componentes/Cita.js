import React, { Component } from 'react';
import { connect } from 'react-redux';
import { borrarCita } from '../actions/citasActions'

class Cita extends Component {

  eliminarCita = () => {
     this.props.borrarCita(this.props.info.id);
  }

  render() {
    const {id, nombreMascota, nombreDueno, fecha, hora, sintoma} = this.props.info
    
    return (
      <div id={id} className="media">
        <div className="media-body">
          <h3 className="mt-0">{nombreMascota}</h3>
          <p className="card-text">
            <span>Nombre mascota: {nombreMascota}</span>
          </p>
          <p className="card-text">
            <span>Nombre del dueño: {nombreDueno}</span>
          </p>
          <p className="card-text">
            <span>Fecha: {fecha}</span>
          </p>
          <p className="card-text">
            <span>Hora: {hora}</span>
          </p>
          <p className="card-text">
            <span>Sintomas: {sintoma}</span>
          </p>
          <button className="btn btn-danger" onClick={this.eliminarCita}>eliminar cita</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {borrarCita})(Cita);