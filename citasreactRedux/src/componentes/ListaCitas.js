import React, { Component } from 'react';
import Cita from './Cita';

import {connect} from 'react-redux';
import {obtenerCitas} from '../actions/citasActions';

class ListaCitas extends Component { 
  
  componentDidMount(){
    this.props.obtenerCitas();
  }

  render() {
    const {citas} = this.props

    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Nuevas citas'

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(citas).map(cita =>(
              <Cita key={cita} info={citas[cita]} eliminarCita={this.props.eliminarCita} />
            ))}            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  citas: state.citas.citas
})

export default connect(mapStateToProps, {obtenerCitas})(ListaCitas);