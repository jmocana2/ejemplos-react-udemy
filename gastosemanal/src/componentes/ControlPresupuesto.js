import React, { Component } from 'react';
import Presupesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends Component {
  render() {
    return (
      <React.Fragment>
        <Presupesto />
        <Restante />
      </React.Fragment>
    );
  }
}

export default ControlPresupuesto;