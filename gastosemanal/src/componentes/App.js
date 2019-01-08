import React, { Component } from 'react';
import Header from './Header';
import FormularioGasto from './Formulario' 

import '../css/App.css';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gasto: {},
  }  

  agregarGasto = (gasto) => {
    const gastos = {...this.state.gastos};

    console.log("Nuevo gasto" + gasto)
    console.log("Gastos: " + gastos)
  }

  render() {
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto agregarGasto={this.agregarGasto} />
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
