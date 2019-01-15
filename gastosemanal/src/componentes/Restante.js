import React, { Component } from 'react';
import { revisarPresupuesto } from '../helpers';

class Restante extends Component {
  render() {
    const {presupuesto, restante} = this.props
    return (
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    );
  }
}

export default Restante;