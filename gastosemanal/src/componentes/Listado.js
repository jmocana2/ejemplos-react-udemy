import React, { Component } from 'react';
import Gasto from './Gato';

class Listado extends Component {
  render() {
    return (
      <div>
        <h2>Listado</h2>
        {Object.keys(this.props.gastos).map(key => (
          <Gasto key={key} />
        ))} 
        {console.log(this.props.gastos)}
      </div>
    );
  }
}

export default Listado;