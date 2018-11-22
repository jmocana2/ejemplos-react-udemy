import React, { Component, Fragment } from 'react';
import Header from './Header';
import Formulario  from './Formulario';

class App extends Component {
  render() {
    return (
    <div className="contenedor">  
      <div className="contenido">
        <Header />
        <Formulario />
      </div>
    </div>  
    );
  }
}

export default App;
