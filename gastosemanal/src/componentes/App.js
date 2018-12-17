import React, { Component } from 'react';
import Header from './Header';
import FormularioGasto from './Formulario' 

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto />
            </div>
            <div className="one-half column">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
