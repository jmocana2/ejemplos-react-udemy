import React, { Component } from 'react';

class Listado extends Component {
  render() {
    return (
      <div>
        <h1>Listado</h1>
        {console.log(this.props.gastos)}
      </div>
    );
  }
}

export default Listado;