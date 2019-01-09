import React, { Component } from 'react';
import Gasto from './Gasto';

class Listado extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        <ul>
          {Object.keys(this.props.gastos).map(key => (
            <Gasto key={key} gasto={this.props.gastos[key]} />
          ))}       
        </ul> 
      </div>
    );
  }
}

export default Listado;