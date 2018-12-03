import React, { Component, Fragment } from 'react';
import Header from './Header';
import Formulario  from './Formulario';

class App extends Component {

  cotizarSeguro = (datos) => {
    console.log(datos);
  }

  render() {
    return (
    <div className="contenedor">  
      <div className="contenido">
        <Header />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
