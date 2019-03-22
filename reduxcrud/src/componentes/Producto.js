import React, { Component } from 'react';

class Producto extends Component {
  render() {

    const { nombre, precio } = this.props

    return (
      <div>
        <h1>{nombre}</h1>
        <p>Este producto cuesta: {precio}&euro;</p>
      </div>
    );
  }
}

export default Producto;